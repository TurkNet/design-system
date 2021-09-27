import React, { ChangeEvent, FC, DragEvent, useState } from 'react'
import { FileUploadStyled, IconStyled } from './styled'
import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
import { noop } from '../../utility'

export interface FileUploadProps {
  onlyButton?: boolean
  multiple?: boolean
  maxSize?: number
  accept?: string[]
  onUpload?(fileList: Array<File>): void
}

type IVariant = 'success' | 'danger' | 'sky'

const FileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']
const MaxSize = 10

export const FileUpload: FC<FileUploadProps> = ({
  onUpload = noop,
  multiple = false,
  maxSize = MaxSize,
  accept = FileTypes,
  onlyButton,
}) => {
  const inputRef = React.createRef<HTMLInputElement>()

  const [files, setFiles] = useState<Array<File>>([])
  const [variant, setVariant] = useState<IVariant>('sky')
  const [dragCounter, setdragCounter] = useState(0)

  const checkUpload = (fileList: FileList, items?: DataTransferItemList) => {
    const list = [...fileList, ...files, ...(items || [])]
    const totalSize = [...fileList, ...files].reduce((t, f) => t + f.size, 0)

    let isValitType = true
    list.forEach(file => {
      if (accept.indexOf(file.type) === -1) {
        isValitType = false
      }
    })

    const accessSize = totalSize < maxSize * 1024 * 1024
    const accessMultiple = multiple && list.length > 0
    const accessSingle = !multiple && list.length === 1

    if (isValitType && accessSize && (accessMultiple || accessSingle)) {
      return true
    }

    return false
  }

  const onlyUnique = (file: File, index: number, self: File[]) => {
    const item = self.find(item => item.name === file.name) as File
    return self.indexOf(item) === index
  }

  const handleDrag = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDragIn = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setdragCounter(dragCounter + 1)

    const { files, items } = e.dataTransfer

    let variant: IVariant = 'danger'

    if (checkUpload(files, items)) {
      variant = 'success'
    }
    setVariant(variant)
  }

  const handleDragOut = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setdragCounter(dragCounter - 1)
    if (dragCounter - 1 === 0) {
      setVariant('sky')
    }
  }

  const handleDrop = (evt: DragEvent) => {
    evt.preventDefault()
    evt.stopPropagation()
    const transferFiles = evt.dataTransfer.files

    if (checkUpload(transferFiles)) {
      const list = [...files, ...transferFiles].filter(onlyUnique)
      onUpload(list)
      setFiles(list)
      evt.dataTransfer.clearData()
      setdragCounter(0)
    }

    setVariant('sky')
  }

  const handleChooseUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const chooseFiles = event.target.files as FileList

    if (checkUpload(chooseFiles)) {
      const list = [...files, ...chooseFiles].filter(onlyUnique)
      onUpload(list)
      setFiles(list)
    }
  }

  const deleteFile = (file: File) => () => {
    const list = files.filter(item => item.name !== file.name)
    onUpload(list)
    setFiles(list)
  }

  return (
    <>
      <FileUploadStyled
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        variant={variant}
      >
        {!onlyButton && <span>Resmi tutup, sürükleyin veya</span>}
        <input
          ref={inputRef}
          onChange={handleChooseUpload}
          multiple={multiple}
          accept={accept.join(',')}
          type="file"
        />
        <button type="button" onClick={() => inputRef.current?.click()}>
          Yükleyin
        </button>
      </FileUploadStyled>
      {files.map((file: File) => (
        <Flex
          key={file.lastModified}
          alignItems="center"
          justifyContent="space-between"
          mt={16}
        >
          <Flex alignItems="center">
            <Icon name="check_circle" color="success.normal" size={20} />
            <Typography ml={10}>{file.name}</Typography>
          </Flex>
          <IconStyled onClick={deleteFile(file)}>
            <Icon name="close" color="sky.dark" size={20} />
          </IconStyled>
        </Flex>
      ))}
    </>
  )
}
