import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Census Cat Mystery',
  description: 'Official documentation of the Census Cat incident. Multiple sightings. Unanswered questions. One elusive feline.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}
