import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiTwotoneStar } from "react-icons/ai"

const API = "e71920ce9c37b642f9bab2e0ae6df363"
const imagePath = "https://image.tmdb.org/t/p/w500"

const TvId = ({lang, url}) => {
  const [movie, setMovie] = useState({})

  const {id1} = useParams();

    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/tv/${id1}`,{
        params: {
          api_key: API,
          language: lang,
        }
      }
      ).then((res, rej) => {
        if(rej){
          console.log(rej)
        }else{
          console.log(res.data , "from id");
          setMovie(res.data)
        }
      })
    }, [id1, lang])
  return (
    <div className='full min-h-screen flex justify-center items-center my-5 '>
      <div className='w-2/3 min-h-3/4 border-2 border-slate-800 rounded '>
        <div className='w-full h-2/3'>
          <img className='w-full h-full' src={`${imagePath}${movie.backdrop_path}`} alt="" />
        </div>
        <div className='flex justify-center items-center gap-8 '>
          <h2 className='text-3xl font-bold hover:text-blue-400'>{movie.title}</h2>
          <div className='flex gap-1 items-center'>
            <span className='font-bold text-lg'>
                {movie.vote_average}
            </span>
            <AiTwotoneStar className=' text-yellow-300 text-2xl' />
          </div>
        </div>
        <div>
          <p className='text-lg text-center px-5 mt-3 text-gray-500 leading-5'>
            {movie.overview}
          </p>
        </div>
        <div className='flex justify-evenly items-center mt-4'>
          <span>{movie.release_date}</span>
          <span>vote : {movie.vote_count}</span>
        </div>
      </div>
    </div>
  )
}

export default TvId