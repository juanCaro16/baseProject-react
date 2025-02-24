import { Navbar } from "../Navbar/Navbar";
import './Header.css'
export const Header = () => {
    return (
        <header className="w-400 h-15 bg-blue-950 flex justify-around flex-row items-center gap-150 mt-2 rounded-2xl">
            <h1 className="text-sky-400 text-xl font-extrabold">Introduccion a React 2025</h1>
           
           <Navbar />
        </header>
    )
}

