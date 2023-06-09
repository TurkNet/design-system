import React, { FC } from 'react'
import { Flex } from '../Flex'
import { Box } from '../Box'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
import { noop } from '../../utility'
import { FlexStyled } from './styled'

export interface FileNameProps {
  file: File
  deleteFile: (value: File) => any
}

export const FileName: FC<FileNameProps> = ({ file, deleteFile = noop }) => {
  return (
    <FlexStyled>
      <Flex alignItems="center">
        <Icon name="check_circle" color="success.normal" size={20} />
        <Box flex="1 1 100%">
          <Typography ml={10}>{file.name}</Typography>
        </Box>
      </Flex>
      <Icon
        name="close"
        color="sky.dark"
        size={20}
        cursor="pointer"
        onClick={deleteFile(file)}
      />
    </FlexStyled>
  )
}
