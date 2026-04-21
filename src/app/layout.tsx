import { Poppins } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/theme';
import { ClerkProvider } from '@clerk/nextjs';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Asclepieia',
  description: 'Doctors appointment booking application using Next and MongoDB',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
