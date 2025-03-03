import { ItemNavbar } from "../../components/ItemNavbar/ItemNavbar";
import { Navbar } from "../Navbar/Navbar";

import './Header.css'
export const Header = () => {
    return (
        <header className="w-400 h-15 bg-blue-950 flex justify-around flex-row items-center gap-150 mt-2 rounded-2xl">
            <h1 className="text-sky-400 text-xl font-extrabold">Introduccion a React 2025</h1>
           
           <Navbar>
            <ul className="flex flex-row font-bold text-xl text-white gap-5">

                
                <ItemNavbar route='/' myStyles={'hover:text-sky-600'} content='Inicio' />
                <ItemNavbar route='/class1' myStyles={"hover:text-sky-600"} content='Clase 1' />
                <ItemNavbar route='/class2' myStyles={'hover:text-sky-600'} content='Clase 2' />
                <ItemNavbar route='/class3' myStyles={'hover:text-sky-600'} content='Clase 3' />
            </ul>
           </Navbar>    
        </header>
    )
}

