import Link from 'next/link'
import { usePathname } from 'next/navigation'

function PublicLayout({
  children
}: {
  children: React.ReactNode
  }) {
  const pathname = usePathname()
  const isAuthRoute = pathname.includes('/sign')
  
  return (
    <div>
      {!isAuthRoute && (
        <div className='flex justify-between items-center p-5 border-b border-grey-4 shadow-sm'>
          <Link
            className='text-2xl logo-text transitioning'
            href='/'>
            Asclepieia
          </Link>
          <div className='flex gap-4'>
            <Link
              className='uppercase transitioning'
              href='/sign-in'
            >
              Login
            </Link>
            <Link
              className='uppercase transitioning'
              href='/sign-up'
            >
              Register
            </Link>
          </div>        
        </div>        
      )}
      {children}
    </div>
  )
}

export default PublicLayout
