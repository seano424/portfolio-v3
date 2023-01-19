'use client'
import clsx from 'clsx'
import '../styles/globals.css'
import { useAtom } from 'jotai'
import { themeAtom } from 'store'
import { Inter } from '@next/font/google'
import { AnimatePresence, motion } from 'framer-motion'

import Header from '@/components/Header'
import Cursor from '@/components/Cursor'
import Footer from '@/components/Footer'
import SidebarMenu from '@/components/SidebarMenu'

const browser = typeof window !== 'undefined'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const devMode = process.env.ENVIRONMENT === 'dev'
  const [theme] = useAtom(themeAtom)
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  }

  return (
    <html lang="en" className={clsx(theme)}>
      <body className={clsx(devMode && 'debug-screens')}>
        <AnimatePresence initial={false}>
          {theme && (
            <motion.div
              transition={spring}
              animate={{
                backgroundColor:
                  theme === 'dark' ? 'var(--dark)' : 'var(--light)',
              }}
              className={clsx(
                'flex min-h-screen flex-col transition-all duration-100 ease-linear dark:bg-opacity-25',
                inter.className
              )}
            >
              {browser && <Cursor />}
              <Header />
              <SidebarMenu />
              <main className="flex-1 py-20">{children}</main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  )
}
