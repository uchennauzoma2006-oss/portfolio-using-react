import React, { useState, useEffect } from 'react'

export default function Header() {
  const fullText = 'Dev-Stacks👾'
  const chars = Array.from(fullText)
  const [display, setDisplay] = useState('')

  useEffect(() => {
    let mounted = true
    setDisplay('')

    const type = (i = 0) => {
      if (!mounted) return
      if (i < chars.length) {
        // build substring up to current index to avoid missing chars
        setDisplay(chars.slice(0, i + 1).join(''))
        setTimeout(() => type(i + 1), 100)
      }
    }

    type(0)
    return () => {
      mounted = false
    }
  }, [fullText])

  return (
    <header className="bg-grey shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
         <div className="text-xl font-bold">
           <span>{display}</span>
           <span className="ml-1 inline-block w-1 h-6 align-middle border-r-2 border-current animate-pulse" />
         </div>
        
        <nav className="space-x-6 text-sm text-gray-600 hidden md:block">
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  )
}
