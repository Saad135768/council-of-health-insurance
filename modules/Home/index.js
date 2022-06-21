import React, { useEffect, useState } from 'react'
import { MdOutlineSort } from 'react-icons/md'
import Image from 'next/image'
import img from '../../public/assets/images/bg-img.bmp'
import axios from 'axios'
import { propOr } from 'ramda'

const Home = () => {
    const API_LINK = 'https://62b06de0e460b79df04599f2.mockapi.io/News'

    const [loading, setLoading] = useState()
    const [News, setNews] = useState()

    const fetchData = async () => {
        try {
            setLoading(true)
            const { data } = await axios(API_LINK)
            console.log(data)
            
            // This is to select a single article randaomly on each refresh
            const randomIndex = Math.ceil(Math.random() * data.length)
            setNews(data[randomIndex])
            setLoading(false)
        }
        catch(error) {
            setLoading(false)
            console.error(error)
        }
      }

  useEffect(() => {
    fetchData()
  }, [])
console.log(loading)
  return (
    <section id="home-container">
      {!loading &&
      <>
      <span id="span-title-container">
        <MdOutlineSort />
        <h1>
          {propOr('', ['title'], News)}
        </h1>
      </span>

      <p>
        Date of publication{' '}
        <span>
          {propOr(new Date(), ['date_of_publication'], News).toLocaleString('en-us', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
        })}
        </span>
      </p>

      <img
        height={300}
        width={1100}
        src={propOr(img, ['img'], News)}
        id="news-main-img"
        />

      <p> {propOr('', ['content'], News)} </p>
        </>
    }

    {loading && <h2>Loading....</h2>}

      <input placeholder="Add a comment" />
      <button>Save</button>
    </section>
  )
}

export default Home
