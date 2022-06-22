import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Image from 'next/image'
import visionImg from '../../../public/assets/images/1610107750384.jpg'
import { FaSortDown } from 'react-icons/fa'
import { RiFoldersFill } from 'react-icons/ri'
import { MdOutlineDarkMode } from 'react-icons/md'
import { FiSun } from 'react-icons/fi'

const Navbar = () => {
  const mode = Router?.router?.query?.mode
  return (
    <nav className={`flex justify-between p-6 ${mode === 'dark' ? 'dark' : ''}`}>
      
      <ul id='ul-blog'>
        <li className='flex justify-around items-center'>
          <RiFoldersFill />
          <span>Blog</span>
        </li>
      </ul>

      <ul>

        
      <li className='flex justify-around'>
        <Link href={`/?mode=${mode}`}>
          <a>Home <FaSortDown /> </a>
        </Link>
      </li>

      <li className='flex justify-around'>
        <Link href={`/news?mode=${mode}`}>
          <a>News <FaSortDown /> </a>
        </Link>
      </li>

      <li>
        <a>
          More
        </a>
      </li>


      </ul>
    
    <ul>
    <li className='mx-4 cursor-pointer'>
      {
        mode === 'dark' ?
        <FiSun onClick={() => Router.push({ query: { mode: 'light' } })}/>
        :
        <MdOutlineDarkMode onClick={() => Router.push({ query: { mode: 'dark' } })} />
      }
    </li>

    <li className='mx-4'>
      العربية
    </li>

    <li className='mx-4'>
      <Image width={50} height={50} src={visionImg} alt='2030 vision img' />
    </li>
    </ul>
    </nav>
    
  )
}

export default Navbar