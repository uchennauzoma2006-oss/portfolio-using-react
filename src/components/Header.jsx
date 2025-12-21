import React from 'react'

export default function Header() {
  return (
    <header className="bg-grey shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
         <div className="text-xl font-bold"> Dev-Stacks+👾</div> 
        
        <nav className="space-x-6 text-sm text-gray-600 hidden md:block">
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  )
}
