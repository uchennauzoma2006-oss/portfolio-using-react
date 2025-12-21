import React from 'react'

export default function Hero() {
  return (
    <section className="pt-12 pb-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">Hi, I’m Uzoma Uchenna — a Front and Back-End Developer</h1>
        <p className="mt-4 text-lg text-gray-600">I build accessible, responsive web apps with React and Tailwind CSS. I love clean UI and pragmatic code.</p>
        <div className="mt-6">
          <a href="#projects" className="inline-block bg-teal-500 text-white px-5 py-2 rounded-md shadow hover:bg-teal-600">See Projects</a>
        </div>
      </div>
    </section>
  )
}
