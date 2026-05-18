import { Button } from 'antd'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <div className='flex flex-col items-center text-center  gap-6 h-[80vh] px-10 mt-20'>
        <h1 className='logo-text text-5xl text-main font-medium leading-tight'>
          Exceptional Care, Personalised.
        </h1>
        <p className='text-lg text-muted-foreground leading-relaxed max-w-125'>
          Asclepieia delivers private medical care built around you. Our clinicians
          combine expertise, compassion, and modern technology to provide clear answers and
          tailored treatment at every stage of your health journey. Whether you need rapid
          diagnostics, ongoing support, or specialist guidance, we ensure your experience is
          seamless, respectful, and centred on your wellbeing.
        </p>
        <div className='flex gap-5 mt-2 mb-10'>
          <Button className='text-sm transitioning'>
            <Link
              href='/services'
              className='font-medium'
            >
              View Services
            </Link>
          </Button>
          <Button className='text-sm transitioning'>
            <Link
              href='/book-appointment'
              className='font-medium'
            >
              Book Appointment
            </Link>
          </Button>
        </div>
      </div>        
 
    </div>
  )
}