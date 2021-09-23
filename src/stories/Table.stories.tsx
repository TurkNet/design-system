import React, { useState } from 'react'
import { Story } from '@storybook/react'
import { Table, TableProps, Box, Icon, Button, Checkbox } from '../components'

export default {
  title: 'Design System/Table',
  component: Table,
}

const columns = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Takım Adı',
    accessor: 'teamName',
    sortable: true,
  },
  {
    Header: 'Statü',
    accessor: 'isActive',
    custom: true,
  },
  {
    Header: 'Lokasyon',
    accessor: 'locationName',
    sortable: true,
    custom: true,
  },
]

const rows = [
  {
    id: '6d73b199-dba8-4a8f-41eb-08d960b9b081',
    teamName: 'Updated-Team',
    isActive: true,
    locationName: 'İzmir',
  },
  {
    id: 'd836cfe3-0222-4e71-6c93-08d962defdc7',
    teamName: 'Izmir-Oucema',
    isActive: false,
    locationName: 'İzmir',
  },
  {
    id: 'ebdbdadd-b63a-4443-6383-08d963d1f2d0',
    teamName: 'Dondu-Oucema-Test',
    isActive: true,
    locationName: 'Aktivasyon',
  },
  {
    id: 'a9cff2a0-d8a9-4690-6384-08d963d1f2d0',
    teamName: 'dondu-batman',
    isActive: true,
    locationName: 'Batman',
  },
  {
    id: '920eebf6-f0ef-4087-0aab-08d966f69fe4',
    teamName: 'Izmir-Baris-update',
    isActive: true,
    locationName: 'İzmir',
  },
]

const Template: Story<TableProps> = ({ ...props }) => {
  return (
    <Box height="1000px">
      <Table
        {...props}
        rows={rows}
        columns={columns}
        onSort={console.log}
        onCheck={console.log}
        enableAdd
        selectable
        onAddClick={console.log}
        isActive={({ column, row }: any) => (
          <Icon name={row.isActive ? 'check' : 'close'} />
        )}
        locationName={({ column, row }: any) => (
          <Button onClick={() => console.log(row)}>Sil</Button>
        )}
      />
    </Box>
  )
}

export const Standart = Template.bind({})
