import React from 'react'
import { BsListUl } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Slider from 'react-slick'
import img from '../../public/assets/images/bg-img.bmp'
import Image from 'next/image'

const News = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div>
      <section>
        <Image height={200} width={200} layout='responsive' src={img} />
        <h3>News</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in .
        </p>
      </section>

      <section>
        <div>
          <span>
            |<h2>Last News</h2>
            <p>June 20, 2022</p>
          </span>

          <div>
            <button>
              <BsListUl /> List View
            </button>

            <button>Grid View</button>
          </div>
        </div>

        <Slider {...settings}>
          <div>
            <div>
              <Image height={50} width={50} layout='responsive' src={img} />
            </div>
            <div>
              <Image height={50} width={50} layout='responsive' src={img} />
            </div>
            <div>
              <Image height={50} width={50} layout='responsive' src={img} />
            </div>
            <div>
              <Image height={50} width={50} layout='responsive' src={img} />
            </div>
          </div>
        </Slider>
      </section>

      <section>
        <span>
          |<h2>News by category</h2>
        </span>

        <div>
          <button>
            <AiOutlineArrowRight /> View all filters
          </button>
        </div>
        <ul>
          <li>Saudi Arabia</li>
          <li>Economy</li>
          <li>Sports</li>
        </ul>
        <span>
          <div>
            <Image height={200} width={200} layout='responsive' src={img} />
          </div>

          <div>
            <Image height={200} width={200} layout='responsive' src={img} />
            <Image height={200} width={200} layout='responsive' src={img} />
          </div>
        </span>
      </section>
    </div>
  )
}

export default News
