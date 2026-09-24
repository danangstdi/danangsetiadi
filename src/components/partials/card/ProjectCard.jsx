import React from 'react'

export default function ProjectCard({ title, type, year, desc, url, image }) {
  return (
    <div className="group flex h-full flex-col max-w-sm overflow-hidden rounded-sm text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <figure className="overflow-hidden rounded-xs">
              <img
                className="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                src={ image }
                alt="Saytix.id"
              />
            </figure>

            <div className="px-2 pb-2 pt-5">

              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-gray-200/60 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-slate-800 dark:text-slate-300">
                  { type }
                </span>

                <span className="text-xs text-gray-400">
                  { year }
                </span>
              </div>

              <a
                href={ url }
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 transition-colors duration-200 group-hover:text-gray-600 dark:text-white dark:group-hover:text-slate-300">
                  { title }
                </h5>
              </a>

              <p className="mb-6 max-w-md text-sm leading-6 text-gray-500 dark:text-slate-400">
                { desc }
              </p>

              <a
                href={ url }
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 rounded-sm border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white dark:border-slate-700 dark:text-slate-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-gray-900"
              >
                Visit Website

                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>

            </div>
          </div>
  )
}
