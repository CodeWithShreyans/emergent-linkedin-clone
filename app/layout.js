import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'LinkedIn Clone',
  description: 'Professional networking platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F3F2EF]">
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
