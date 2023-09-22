import { Link, useLocation } from 'react-router-dom'
import { AiTwotoneStar, AiOutlineStar } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import addToFavorite from '../store/action'

const imagePath = "https://image.tmdb.org/t/p/w500"
const Card = ({movie}) => {

  const location = useLocation()
  const [url, setUrl] = useState("");
  const myFavorite = useSelector((state) => state.favorites)

  useEffect(() => {

    setUrl(location.pathname);
  }, [location])


  const myDispatcher = useDispatch()

  const addMovie = (movie) => {


    if(myFavorite.length !== 0){

      const findId = myFavorite.find(mov => mov.id === movie.id);

      if(findId) {

         const myFilter = myFavorite.filter(mov => mov.id !== movie.id)
         myDispatcher(addToFavorite([...myFilter]))

      } else {

        myFavorite.push(movie)
        myDispatcher(addToFavorite([...myFavorite]))

      }

    } else {

      myFavorite.push(movie)
      myDispatcher(addToFavorite([...myFavorite]))

    }

  }

const isFavorite = (movie) => {
  movie.isFavorite = true
}
const notFavorite = (movie) => {
  movie.isFavorite = false
}


  return (
    <div className=' h-96 border rounded mx-5' key={movie.id}>
        <img className='h-4/5  w-full rounded-tl rounded-tr' src={`${imagePath}${movie.poster_path}`} alt="" />
        <div className='flex justify-between'>
            <Link to={`/${url.includes('/favorite') ? "favorite/" : ''}${movie.id}`} className='text-lg font-bold hover:text-blue-400'>{movie.title}{movie.name}</Link>
          <div className='flex gap-1 items-center'>
            <span>
                {movie.vote_average}
            </span>
            {
              movie.isFavorite 
              ?       
              <AiTwotoneStar
                className=' text-yellow-300 cursor-pointer text-xl' 
                onClick={
                () =>{ 
                  addMovie(movie)
                  notFavorite(movie)
                }
              } 
             /> 
             : 
              <AiOutlineStar
                className=' text-yellow-300 cursor-pointer text-xl' 
                onClick={
                  () =>{ 
                    addMovie(movie)
                    isFavorite(movie)
                  }
                } 
              />
            }
          </div>
        </div>
    </div>
  )
}

export default Card