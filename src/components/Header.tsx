// import { useState } from "react"

import { HeaderProps } from "../types"

const Header: React.FC<HeaderProps> = ({ isClickedMenu, updateIsClickedMenu }) => {
  const handleMenuClick = () => {
    updateIsClickedMenu()
  }
  return (
    <div className="mt-4 flex justify-between md:items-center text-white w-full">
      <div className="font-bold text-lg">
        <h1 className="logo">Terminal-Chat-App</h1>
      </div>
      <div className="flex flex-col gap-4">
        {isClickedMenu ? (<svg className="opacity-70 menuIcon md:hidden" onClick={handleMenuClick} xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="12" fill="#F5F5F5" />
          <path d="M10 10L30 30M10 30L30 10" stroke="black" strokeWidth="3" />
        </svg>
        ) : (<svg className="opacity-70 menuIcon md:hidden" onClick={handleMenuClick} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="12" fill="#F5F5F5" />
          <line x1="10" y1="17" x2="30" y2="17" stroke="black" strokeWidth="2" />
          <line x1="10" y1="23" x2="30" y2="23" stroke="black" strokeWidth="2" />
        </svg>)}

        {isClickedMenu && (
          <div className="menu-lists flex flex-col items-start gap-3 text-white text-opacity-70 md:hidden -mb-24">
            <a href="#features">Features</a>
            <a href="#usage">Usage</a>
            <a target="_blank" href="https://www.npmjs.com/package/tarminal-chat-app">NPM</a>
            <a target="_blank" href="https://github.com/HayatsCodes/terminal-chat-app">GitHub</a>
          </div>
        )}

        <div className="menu-lists-block flex items-start gap-3 text-white text-opacity-70">
          <a href="#features">Features</a>
          <a href="#usage">Usage</a>
          <a target="_blank" href="https://www.npmjs.com/package/tarminal-chat-app">NPM</a>
          <a target="_blank" href="https://github.com/HayatsCodes/terminal-chat-app">GitHub</a>
        </div>

      </div>
    </div>
  )
}

export default Header