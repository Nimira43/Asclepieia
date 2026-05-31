import { useAuth } from '@clerk/nextjs'
import { Button, Drawer, message } from 'antd'
import { usePathname, useRouter } from 'next/navigation'
import { TbCheckupList, TbDatabaseSearch, TbLayoutDashboard, TbReportMedical, TbUsers, TbUsersGroup } from 'react-icons/tb'

interface MenuItemsProps {
  showMenuItems: boolean
  setShowMenuItems: (showMenuItems: boolean) => void
}

function MenuItems({
  showMenuItems,
  setShowMenuItems
}: MenuItemsProps) {
  const iconSize = 16
  const pathname = usePathname()
  const router = useRouter()
  const {signOut} = useAuth()

  const menuItems = [
    {
      name: 'Dashboard',
      icon: <TbLayoutDashboard size={iconSize} />,
      path: '/admin/dashboard'
    },
    {
      name: 'Doctors',
      icon: <TbReportMedical size={iconSize} />,
      path: '/admin/doctors'
    },
    {
      name: 'Appointments',
      icon: <TbCheckupList size={iconSize} />,
      path: '/admin/appointments'
    },
    {
      name: 'Patients',
      icon: <TbUsersGroup size={iconSize} />,
      path: '/admin/patients'
    },
    {
      name: 'Reports',
      icon: <TbDatabaseSearch size={iconSize} />,
      path: '/admin/reports'
    },
    {
      name: 'Staff / Users',
      icon: <TbUsers size={iconSize} />,
      path: '/admin/staff'
    },
  ]

  const handleSignOut = async () => {
    try {
      await signOut()
      message.success('Signed out successfully.')
    } catch (error: any) {
      message.error(error.message)
    }
  }

  return (
    <Drawer
      open={showMenuItems}
      onClose={() => setShowMenuItems(false)}    
      title='Admin Menu'
    >
      <div className='flex flex-col gap-10 '>
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              router.push(item.path)
              setShowMenuItems(false)
            }}
            className={
              `flex item-center gap-5 hover:text-main transitioning cursor-pointer ${
                pathname === item.path
                  ? 'text-main'
                  : 'text-grey-1'
              }`
            }
          >
            <span className='pt-0.5'>
              {item.icon}
            </span>
            <span className='font-medium'>
              {item.name}
            </span>
          </div>
        ))}
        <Button
          onClick={handleSignOut}
          className='text-sm transitioning font-medium'
        >
          <span className='font-medium'>
            Logout
          </span>
        </Button>
      </div>
    </Drawer>
  )
}

export default MenuItems
