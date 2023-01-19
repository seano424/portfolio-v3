'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

export default function BackButton() {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="group mb-5 w-max transform rounded-3xl bg-dark px-4 py-3 transition-all duration-200 ease-linear hover:scale-105 dark:bg-light"
      aria-label="Go back button"
    >
      <ArrowLeftIcon className="h-4 w-4 transform text-light transition-all duration-200 ease-linear group-hover:scale-105 dark:text-dark" />
    </button>
  )
}
