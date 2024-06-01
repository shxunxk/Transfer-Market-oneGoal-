// eslint-disable-next-line no-unused-vars
import { Fragment, useState } from 'react'
import {
  PopoverGroup,
} from '@headlessui/react'

export default function Header() {

  return (
    <header className="bg-slate-100">
      <nav className="mx-auto flex max-w-7xl p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src="vite.svg" alt="" />
          </a>
        </div>
        <PopoverGroup className="flex gap-12">
          <a href="/match" className="text-sm font-semibold leading-6 text-gray-900">
            Match Scores
          </a>
          <a href="/streams" className="text-sm font-semibold leading-6 text-gray-900">
            Free Match Streams
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </a>
        </PopoverGroup>
      </nav>
    </header>
  )
}