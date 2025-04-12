'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Johnny Pillacela
        </Link>
        <h1>
            Software Engineer
        </h1>
      </div>
    </header>
  )
}