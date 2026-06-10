'use client'

import { IUser } from '@/interfaces'
import { Table, Switch } from 'antd'
import dayjs from 'dayjs'

function UsersTable({
  users
}: {
  users: IUser[]
}) {
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
      title: 'User Id',
      dataIndex: '_id',
      key: '_id',
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
      title: 'Is Approved',
      dataIndex: 'isApproved',
      key: 'isApproved',
      render: (isApproved: boolean) => 
        <Switch 
          checked={isApproved}
        />
    },
    {
      title: 'Is Super Admin',
      dataIndex: 'isSuperAdmin',
      key: 'isSuperAdmin',
      render: (isSuperAdmin: boolean) => 
        <Switch 
          checked={isSuperAdmin}
        />
    },
  ]

  return (
    <Table
      dataSource={users}
      columns={columns}
      rowKey='clerkUserId'
    >

    </Table>
  )
}

export default UsersTable
