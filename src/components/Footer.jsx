import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-16 bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500">© {new Date().getFullYear()}  Built with React + Tailwind.</div>
    </footer>
  )
}
