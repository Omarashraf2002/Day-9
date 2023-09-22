import axios from 'axios';
import { useState, useEffect } from 'react'
import Card from './Card';

const Movies = ({text, location, lang}) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const API = "e71920ce9c37b642f9bab2e0ae6df363"
  let totalPages;

  const showPrev = () => {
    console.log("prev clicked");
    let currentPAge = page;
    if (!currentPAge <= 1) {
      currentPAge--;
      setPage(currentPAge);
    }
  };
  const showNext = () => {
    console.log("next clicked");
    let currentPAge = page;
    currentPAge++;
    setPage(currentPAge);
  };

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/${text ? "search/movie" : 'discover/tv'}`, {
      params: {
        query: text,
        api_key: API,
        page,
        language: lang,
      }
    }).then((res,rej) => {
      if(rej){
        console.log(rej)
      }else{
        // console.log(res)
        console.log(res.data.results)
        setMovies(res.data.results)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        totalPages = res.data.total_pages;
      }
    })
  }, [text, page, lang])

  return (
    <main className=' w-full p-8'>
      <div className='grid grid-cols-4 gap-6'>
        {
          movies.map(movie => (
            <Card movie={movie} text={text} key={movie.id} location={location} />
          ))
        }
      </div>
      <div className='w-full mt-4 pt-4 px-4 flex justify-between items-end'>
        <button 
          className={`w-20 h-10 bg-blue-500 text-white rounded ${page === 1 ? "opacity-50" : "opacity-100"}`} 
          onClick={showPrev}
          disabled={page === 1 ? true : false}
        >
          Prev
        </button>
        <button 
        className={`w-20 h-10 bg-blue-500 text-white rounded ${page === totalPages ? "opacity-50" : "opacity-100"}`}
          onClick={showNext}
          disabled={page === totalPages ? true : false}
        >
          Next
        </button>
      </div>
    </main>
  )
}

export default Movies