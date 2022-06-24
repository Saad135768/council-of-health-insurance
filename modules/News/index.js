import React from 'react'
import Router from 'next/router'
import { BsListUl } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Slider from 'react-slick'
import { MdOutlineSort, MdOutlineSportsKabaddi } from 'react-icons/md'
import { BiMapAlt } from 'react-icons/bi'
import { GiTronArrow } from 'react-icons/gi'
import { settings, Svg, articleImg0, articleImg1, articleImg2, articleImg3, articleImg4, articleImg5, articleImg6, articleImg7 } from '../../constants'

const News = () => {
  const mode = Router?.router?.query?.mode
  return (
    <div id='news-container' className={mode === 'dark' ? 'dark' : ''}>

      <section className={`flex justify-around p-8 container ${mode === 'dark' ? '' : 'mt-6'}`} id='headline-section-container'>
          {Svg(mode === 'dark')}

        <aside id="headline-container">
          <span className='relative'>
            <span id='span-extension' />
            <MdOutlineSort />
          </span>

          <h1>News</h1>
          <p>
            Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in.
          </p>
        </aside>

      </section>


      <section id='slider-section-container'>
<div className='container'>

        <div className='flex my-8 justify-between items-center'>
          <span className='span-title-container relative'>
            <span />
            <h2>Last News</h2>
            <p>June 20, 2022</p>
          </span>

          <div id='view-btns-container'>

            <button>
              <BsListUl /> List View
            </button>

            <button>Grid View</button>
          </div>
        </div>


        <Slider {...settings} id='slider' className='my-6 py-7 px-2'>
          <div className='relative'>
            <div className='overlay'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <img src={articleImg2} />
          </div>

          <div className='relative'>
            <div className='overlay'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <img src={articleImg0} />
          </div>

          <div className='relative'>
            <div className='overlay'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <img src={articleImg3} />
          </div>

          <div className='relative'>
            <div className='overlay'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <img src={articleImg4} />
          </div>

          <div className='relative'>
            <div className='overlay'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <img src={articleImg5} />
          </div>

          <div className='relative'>
            <div className='overlay'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <img src={articleImg1} />
          </div>

          <div className='relative'>
            <div className='overlay'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <img src={articleImg6} />
          </div>
        </Slider>
</div>

      </section>

      <section id='news-by-category-container' className='container'>
        <div className='flex my-8 justify-between'>
          <span className='span-title-container relative'>
            <span />
            <h2>News by cateogry</h2>
          </span>

            <button>
              <AiOutlineArrowRight /> View all filters
            </button>

        </div>

        <ul id='breadcrumbs' className='flex'>
          <li>
            <BiMapAlt />  Saudi Arabia
          </li>

          <li>
           <GiTronArrow /> Economy
          </li>
          <li>
            <MdOutlineSportsKabaddi />  Sports
          </li>
        </ul>

        <span className='flex justify-between'>

          <div className='relative' id='main-img'>
            <div className='overlay'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <img src={articleImg7} />
          </div>

          <div id='secondary-images'>

            <div className='relative'>
              <div className='overlay'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </div>
              <img src={articleImg4} />
            </div>

            <div className='relative'>
              <div className='overlay'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </div>
              <img src={articleImg5} />
            </div>

          </div>

        </span>
      </section>
    </div>
  )
}

export default News
