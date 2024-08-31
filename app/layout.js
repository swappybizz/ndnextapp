import './globals.css'

export const metadata = {
  title: 'Digital Nordic',
  description: 'Din digitale Ai web partner',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
