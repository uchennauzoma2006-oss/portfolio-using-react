import React from 'react'
import projects from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-2xl font-semibold">Selected Projects</h2>
      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.id} className="bg-grey p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{p.description}</p>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <div>{p.technologies.join(' • ')}</div>
              <a href={p.url} target="_blank" rel="noreferrer" className="text-teal-600 hover:underline">View</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
