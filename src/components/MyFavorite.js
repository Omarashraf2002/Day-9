import  {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import addToFavorite from '../store/action';

const imagePath = "https://image.tmdb.org/t/p/w500"
function MyFavorite() {

    const myFavorite = useSelector((state) => state.favorites);
    const myDispatcher = useDispatch();

    const removeMovie = (movie) => {
      const removeItem = myFavorite.filter(mov => mov.id !== movie.id)
      myDispatcher(addToFavorite([...removeItem]))
    }

    useEffect(() => {
      console.log(myFavorite)
    }, [myFavorite])
  return (
    <main className=' w-full p-8'>
      <div className='grid grid-cols-4 gap-6'>
        {
            myFavorite.map(movie => (
              <div className=' h-96 border rounded mx-5' key={movie.id}>
                <img className='h-4/5  w-full rounded-tl rounded-tr' src={`${imagePath}${movie.poster_path}`} alt="" />
                <div className='flex justify-between items-center mt-3'>
                  <h2  className='text-lg font-bold hover:text-blue-400'>{movie.title}{movie.name}</h2>
                  <div className='flex items-center'>

                    <button 
                      className='px-3 py-2 outline-none border-none rounded bg-red-500 text-white'
                      onClick={() => removeMovie(movie)}
                    >
                      Remove
                    </button>
                  </div>
              </div>
            </div>
            ))
        }
      </div>
    </main>
  )
}

export default MyFavorite