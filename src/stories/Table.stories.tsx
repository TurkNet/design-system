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

const sortedAsc = [
  {
    id: 'a9cff2a0-d8a9-4690-6384-08d963d1f2d0',
    teamName: 'dondu-batman',
    isActive: true,
    locationName: 'Batman',
  },
  {
    id: 'ebdbdadd-b63a-4443-6383-08d963d1f2d0',
    teamName: 'Dondu-Oucema-Test',
    isActive: true,
    locationName: 'Aktivasyon',
  },
  {
    id: '920eebf6-f0ef-4087-0aab-08d966f69fe4',
    teamName: 'Izmir-Baris-update',
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
    id: '6d73b199-dba8-4a8f-41eb-08d960b9b081',
    teamName: 'Updated-Team',
    isActive: true,
    locationName: 'İzmir',
  },
]

const sortedDesc = [
  {
    id: '6d73b199-dba8-4a8f-41eb-08d960b9b081',
    teamName: 'Updated-Team',
    isActive: true,
    locationName: 'İzmir',
  },
  {
    id: '920eebf6-f0ef-4087-0aab-08d966f69fe4',
    teamName: 'Izmir-Baris-update',
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
    id: 'a9cff2a0-d8a9-4690-6384-08d963d1f2d0',
    teamName: 'dondu-batman',
    isActive: true,
    locationName: 'Batman',
  },
  {
    id: 'ebdbdadd-b63a-4443-6383-08d963d1f2d0',
    teamName: 'Dondu-Oucema-Test',
    isActive: true,
    locationName: 'Aktivasyon',
  },
]

const Template: Story<TableProps> = ({ ...props }) => {
  const [state, setstate] = useState(rows)
  const columnSort = (data: any) => {
    const { teamName } = data

    return teamName === 'asc' ? setstate(sortedAsc) : setstate(sortedDesc)
  }

  const buttonAction = () => {
    const newRow = {
      id: '9a00b199-dcc8-4a8f-41eb-08d960b9b001',
      teamName: 'Alfa-Adana',
      isActive: true,
      locationName: 'Adana',
    }

    setstate([...state, newRow])
  }

  return (
    <Box height="1000px">
      <Table
        {...props}
        rows={state}
        columns={columns}
        onSort={columnSort}
        onCheck={console.log}
        enableAdd
        selectable
        buttonText="Yeni Takım Oluştur"
        onAddClick={buttonAction}
        isActive={({ column, row }: any) => (
          <Icon name={row.isActive ? 'check' : 'close'} />
        )}
        locationName={({ column, row }: any) => (
          <Button size="small" onClick={() => console.log(row)}>
            Sil
          </Button>
        )}
      />
    </Box>
  )
}

export const Standart = Template.bind({})
