import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../images/User-avatar.svg.png'
import { HiOutlineSearch } from 'react-icons/hi'


const Navbar = ({text, setText, setLang, lang}) => {
    const [showIcon, setShowIcons] = useState(true);

    const changeLang = () => {
        setLang(lang === "en-US" ? "ar-SA" : "en-US");
      };


  return (
    <nav className='w-full h-20 bg-slate-700 flex justify-between px-8 items-center'>
        <div className='flex gap-5'>
            <NavLink to='/' className='text-3xl text-white'>Movies </NavLink>
            <NavLink to='/favorite' className='text-3xl text-white'>Favorite </NavLink>
            <NavLink to='/myfavorite' className='text-3xl text-white'>My Favorite</NavLink>
        </div>
        <div className='flex flex-row-reverse gap-5 items-center'>
            <button className="w-16 h-8 bg-green-500 text-white rounded" onClick={changeLang}>
                {lang === "en-US" ? "English" : "Arabic"}
            </button>
            <img className='w-12 h-12 rounded-full' src={avatar} alt="avatar" />
            <div className='flex items-center justify-center relative'>
                <input
                    type="text" 
                    className='rounded outline-none px-3 py-1' 
                    placeholder='Search' 
                    onFocus={() => setShowIcons(false)} 
                    onBlur={() => setShowIcons(true)} 
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                {
                    showIcon &&
                     <HiOutlineSearch className=' absolute right-3 text-lg text-gray-400' />
                }
            </div>
        </div>
    </nav>
  )
}

export default Navbar