import {BiLogoGmail} from 'react-icons/bi'
import {BsFillTelephoneFill, BsFacebook, BsLinkedin, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="w-full h-40 bg-slate-700 mt-32 flex items-center">
        <div className="container mx-auto flex justify-between">
            <div className='text-white flex flex-col gap-4'>
                <div>
                    <h4 className="text-xl uppercase">Get in touch</h4>
                </div>
                <div>
                <div className="flex gap-2 items-center">
                    <BiLogoGmail />
                    <span>mohamed_arab@gamil.com</span>
                </div>
                <div className="flex gap-2 items-center">
                    <BsFillTelephoneFill />
                    <span>+201099444563</span>
                </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 text-white'>
                <div className='text-2xl flex gap-6'>
                    <BsFacebook />
                    <BsLinkedin />
                    <BsTwitter />
                </div>
                <div>
                    <span>Copyright &copy; 2023</span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer