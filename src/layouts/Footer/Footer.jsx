import { ItemNavbar } from "../../components/ItemNavbar/ItemNavbar";
import { Navbar } from "../Navbar/Navbar"
import { FaFacebook,FaInstagramSquare,FaWhatsapp } from "react-icons/fa";


export const Footer = () => {
  return (
    <div className="flex fixed top-215 justify-center items-center mt-4 w-400 h-15 rounded-2xl bg-blue-950">

    <Navbar>
      <ul className="flex flex-row font-bold text-xl text-white gap-5">
        <ItemNavbar route={'https://www.facebook.com/'} content={<FaFacebook />} />
        <ItemNavbar route={"https://web.whatsapp.com/"} content={<FaWhatsapp />} />
        <ItemNavbar route={"https://www.instagram.com/"} content={<FaInstagramSquare />} />
      </ul>
    </Navbar>
       
    </div>
    
  )
}

