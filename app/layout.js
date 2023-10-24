import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PT. Nelvan Kontruksi',
  description: 'PT Nelvan Konstruksi - Ahli dalam Pembangunan dan Renovasi Bangunan. Kami menyediakan layanan konstruksi berkualitas tinggi untuk proyek komersial dan residensial. Hubungi kami untuk solusi konstruksi terbaik. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Unlock&display=swap" rel="stylesheet" />

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
