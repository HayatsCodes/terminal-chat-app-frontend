import { useState } from "react"

const Header = () => {
  const [isClickedMenu, setIsClickedMenu] = useState(false);
  const handleMenuClick = () => {
    setIsClickedMenu(!isClickedMenu);
  }
  return (
    <div className="mt-4 flex justify-between text-white">
      <div className="font-bold text-lg">
        Terminal-Chat-App
      </div>
      <div className="flex items-center flex-col gap-4">
        {isClickedMenu ? (<svg onClick={handleMenuClick} xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="12" fill="#F5F5F5" />
          <path d="M10 10L30 30M10 30L30 10" stroke="black" strokeWidth="3" />
        </svg>
        ) : (<svg onClick={handleMenuClick} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="12" fill="#F5F5F5" />
          <line x1="10" y1="17" x2="30" y2="17" stroke="black" strokeWidth="2" />
          <line x1="10" y1="23" x2="30" y2="23" stroke="black" strokeWidth="2" />
        </svg>)}

        {isClickedMenu && (
          <div className="flex flex-col -mr-5 gap-2">
            <a href="#">Features</a>
            <a href="#">Demo</a>
            <a href="#">Installation</a>
            <a href="#">GitHub</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header