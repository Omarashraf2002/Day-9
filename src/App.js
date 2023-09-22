import { useState } from 'react'
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Favorite from "./components/Favorite";
import { Route, Routes, } from 'react-router-dom';
import MovieId from './components/MovieId';
import Footer from './components/Footer';
import TvId from './components/TvId';
import MyFavorite from './components/MyFavorite';




function App() {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("en-US");



  return (
    <div className="App">
      <Navbar text={text} setText={setText} lang={lang} setLang={setLang}  />
      <Routes>
        <Route path='/' element={<Movies text={text}  lang={lang} />} />
        <Route path='/favorite' element={<Favorite text={text}  lang={lang}  />} />
        <Route path='myfavorite' element={<MyFavorite />} />
        <Route path={`/:id1`} element={<TvId lang={lang} />} />
        <Route path={`/favorite/:id2`} element={<MovieId />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
