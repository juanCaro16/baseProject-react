import { ItemNavbar } from "../../components/ItemNavbar/ItemNavbar"
export const Navbar = ({children}) => {

    // const styles = {
    //     li:"hover:text-sky-600",
    //     ul: "flex flex-row font-bold text-xl text-white gap-5"
    // }

    // const { li, ul,} = styles

    return (
        <nav className="">
            { children } 
        </nav>
    )
}


