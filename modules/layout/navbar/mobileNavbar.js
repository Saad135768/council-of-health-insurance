import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { darkVisionIcon, lightVisionIcon } from '../../../constants'
import { FaSortDown } from 'react-icons/fa'
import { RiFoldersFill } from 'react-icons/ri'
import { MdOutlineDarkMode } from 'react-icons/md'
import { FiSun } from 'react-icons/fi'

const SideNavbar = () => {
  const route = Router?.router
  const mode = route?.query?.mode

  const [openSideMenu, setOpenSideMenu] = useState(false)

  // This function simply closes the side menu whenever we navigate into a new route.
  const CheckRouteToCloseSideBarMenu = (pathname) => {
    if(route.pathname !== pathname) setOpenSideMenu(false)
  }

  return (
    <nav
      className={`flex justify-between p-6 mobile-nav ${mode === 'dark' ? 'dark' : ''}`}
    >
      <button
        onClick={() => setOpenSideMenu(!openSideMenu)}
        id="burger-btn"
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <svg
          className="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          className="hidden h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        className={`burger-menu mobile-navbar-container ${openSideMenu ? 'open' : ''}`}
      >
        <ul id="ul-blog">
          <li className="flex justify-around items-center">
            <RiFoldersFill />
            <span>Blog</span>
          </li>
        </ul>

        <ul>
          <li className="flex justify-around" onClick={() =>CheckRouteToCloseSideBarMenu('/')}>
            <Link href={`/?mode=${mode}`}>
              <a>
                Home <FaSortDown />{' '}
              </a>
            </Link>
          </li>

          <li className="flex justify-around" onClick={() =>CheckRouteToCloseSideBarMenu('/news')}>
            <Link href={`/news?mode=${mode}`}>
              <a>
                News <FaSortDown />{' '}
              </a>
            </Link>
          </li>

          <li>
            <a>More</a>
          </li>
        </ul>

        <ul>
          <li className="mx-4 cursor-pointer">
            {mode === 'dark' ? (
              <FiSun
                onClick={() => Router.push({ query: { mode: 'light' } })}
              />
            ) : (
              <MdOutlineDarkMode
                onClick={() => Router.push({ query: { mode: 'dark' } })}
              />
            )}
          </li>

          <li className="mx-4">العربية</li>

          <li className="mx-4">
            {!mode === 'dark' ? (
              <img
                width={50}
                height={50}
                src={darkVisionIcon}
                alt="2030 vision img"
              />
            ) : (
              <img
                width={50}
                height={50}
                src={lightVisionIcon}
                alt="2030 vision img"
              />
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default SideNavbar
