'use client'

import { getDateTimeFormat } from '@/helpers/date-time-formats'
import { IDoctor } from '@/interfaces'
import { Table, Button } from 'antd'
import dayjs from 'dayjs'
import { VscEdit } from 'react-icons/vsc'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useRouter } from 'next/navigation'

function DoctorsTable({
  doctors
}: {
  doctors: IDoctor[]
}) {
  const router = useRouter()
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Specialisation',
      dataIndex: 'specialisation',
      key: 'specialisation',
      render: (specialisation: string[]) => specialisation.join(', ')
    },
    {
      title: 'Fee',
      dataIndex: 'fee',
      key: 'fee',
    },
    {
      title: 'Added On',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => getDateTimeFormat(date)
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt: string) => (
        <>
          {dayjs(createdAt).format('DD/MM/YYYY, HH:mm')}
        </>
      )
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_: any, row: IDoctor) => (
        <div className='flex gap-3'>
          <Button
            size='small'
            className='transitioning'
            onClick={() => {
              router.push(`/admin/doctors/edit/${row._id}`)
            }}
          >
            <VscEdit size={14} />
          </Button>
          <Button
            size='small'
            className='transitioning'

          >
            <RiDeleteBin6Line size={14} />
          </Button>
        </div>
      )
    }
  ]

  return (
    <div>
      <Table
        dataSource={doctors}
        columns={columns}
        rowKey='_id'
        pagination={false}
      />
    </div>
  )
}

export default DoctorsTable
