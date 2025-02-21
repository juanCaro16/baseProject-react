import { Navbar } from "../Navbar/Navbar";
import './Header.css'
export const Header = () => {
    return (
        <header className="w-screen h-15 bg-blue-300 flex justify-around flex-row items-center gap-150 mt-3 p-1 rounded-xl">
            <h1 className="text-sky-600 text-xl font-extrabold">Introduccion a React 2025</h1>
           
           <Navbar />
        </header>
    )
}

