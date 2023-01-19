import clsx from 'clsx'
import React from 'react'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const devMode = process.env.ENVIRONMENT === 'dev'

  return (
    <html lang="en">
      <body className={clsx(devMode && 'debug-screens')}>{children}</body>
    </html>
  )
}
