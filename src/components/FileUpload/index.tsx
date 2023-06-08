import React, { ChangeEvent, FC, DragEvent, useState } from 'react'
import { FileUploadStyled, FileUploadStyledProps } from './styled'
import { noop } from '../../utility'
import { FileName } from './FileName'

type IVariant = 'success' | 'danger' | 'sky'
export interface FileUploadProps extends FileUploadStyledProps {
  onlyButton?: boolean
  multiple?: boolean
  maxSize?: number
  accept?: string[]
  onUpload?(fileList: Array<File>): void
  label?: string
  inner?: boolean
  uploadedButtonLabel?: string
}

const FileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']
const MaxSize = 10

export const FileUpload: FC<FileUploadProps> = ({
  onUpload = noop,
  multiple = false,
  maxSize = MaxSize,
  accept = FileTypes,
  onlyButton,
  label = 'Resmi tutup, sürükleyin veya',
  inner = false,
  uploadedButtonLabel,
  ...props
}) => {
  const inputRef = React.createRef<HTMLInputElement>()

  const [files, setFiles] = useState<Array<File>>([])
  const [variant, setVariant] = useState<IVariant>('sky')
  const [dragCounter, setDragCounter] = useState(0)

  const onlyUnique = (file: File, index: number, self: File[]) => {
    const item = self.find(item => item.name === file.name) as File
    return self.indexOf(item) === index
  }

  const getValidFiles = (fileList: FileList, items?: DataTransferItemList) => {
    const allFiles = [...fileList, ...(multiple ? files : [])]
    const totalSize = allFiles.reduce((t, f) => t + f.size, 0)

    let isValitType = true
    const list = [...allFiles, ...(items || [])]
    list.forEach(file => {
      if (accept.indexOf(file.type) === -1) {
        isValitType = false
      }
    })

    const accessSize = totalSize < maxSize * 1024 * 1024
    const accessMultiple = multiple && allFiles.length > 0
    const accessSingle = !multiple && list.length === 1

    if (isValitType && accessSize && (accessMultiple || accessSingle)) {
      return items?.length
        ? [new File([], 'empty')]
        : allFiles.filter(onlyUnique)
    }

    return null
  }

  const handleDrag = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDragIn = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragCounter(dragCounter + 1)

    const { files, items } = e.dataTransfer
    const validFiles = getValidFiles(files, items)

    let variant: IVariant = 'danger'
    if (validFiles?.length) {
      variant = 'success'
    }
    setVariant(variant)
  }

  const handleDragOut = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragCounter(dragCounter - 1)
    if (dragCounter - 1 === 0) {
      setVariant('sky')
    }
  }

  const handleDrop = (evt: DragEvent) => {
    evt.preventDefault()
    evt.stopPropagation()
    const transferFiles = evt.dataTransfer.files

    const validFiles = getValidFiles(transferFiles)

    if (validFiles?.length) {
      onUpload(validFiles)
      setFiles(validFiles)
      evt.dataTransfer.clearData()
      setDragCounter(0)
    }

    setVariant('sky')
  }

  const handleChooseUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const chooseFiles = e.target.files as FileList
    const validFiles = getValidFiles(chooseFiles)
    if (validFiles?.length) {
      onUpload(validFiles)
      setFiles(validFiles)
    }
    e.target.value = ''
  }

  const deleteFile = (file: File) => () => {
    const list = files.filter(item => item.name !== file.name)
    onUpload(list)
    setFiles(list)
  }

  const buttonLabel = (files.length && uploadedButtonLabel) || 'Yükleyin'
  const showLabel = !onlyButton && !(inner && files.length)
  return (
    <>
      <FileUploadStyled
        {...props}
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        variant={variant}
        inner={inner}
        showLabel={showLabel}
      >
        {showLabel && <span>{label}</span>}
        {inner &&
          files.map((file: File) => (
            <FileName
              key={file.lastModified}
              file={file}
              deleteFile={deleteFile}
            />
          ))}
        <input
          ref={inputRef}
          onChange={handleChooseUpload}
          multiple={multiple}
          accept={accept.join(',')}
          type="file"
        />
        <button type="button" onClick={() => inputRef.current?.click()}>
          {buttonLabel}
        </button>
      </FileUploadStyled>
      {!inner &&
        files.map((file: File) => (
          <FileName
            key={file.lastModified}
            file={file}
            deleteFile={deleteFile}
          />
        ))}
    </>
  )
}
