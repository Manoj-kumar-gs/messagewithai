'use client'
import React from 'react'
import Link from 'next/link'
import { Github, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white w-full flex justify-around items-center md:h-[10vh] relative bottom-0 py-3">
      <div className="container md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="https://github.com/Manoj-kumar-gs" target="_blank">
            <Github className="hover:text-indigo-400 transition" />
          </Link>
          <Link href="https://x.com/manoj_gs_7" target="_blank">
            <Twitter className="hover:text-indigo-400 transition" />
          </Link>
          <Link href="manojappu315@gmail.com" target='_blank'>
            <Mail className="hover:text-indigo-400 transition" />
          </Link>
        </div>
        <Link href="/" className="flex md:flex-row items-center gap-2">
          <span className="text-xl font-bold">MsgGenie</span>
          {/* <p className="text-sm text-gray-400">Enhance your conversations with AI.</p> */}
        </Link>
        <div className="text-sm text-gray-400 text-center md:text-right">
          &copy; {currentYear} MsgGenie. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
