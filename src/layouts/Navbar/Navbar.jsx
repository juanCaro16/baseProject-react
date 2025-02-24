import { ItemNavbar } from "../../components/ItemNavbar/ItemNavbar"
export const Navbar = () => {

    const styles = {
        li:"hover:text-sky-600",
        ul: "flex flex-row font-bold text-xl text-white gap-5"
    }

    const { li, ul,} = styles

    return (
        <nav className="">
            <ul className={ul}>
             <ItemNavbar 
             content="Home"
             myStyles={li}
             />
             <ItemNavbar 
             content="Class 1"
             myStyles={li}
             />
             <ItemNavbar 
             content="Class 2"
             myStyles={li}
             />
            </ul>
        </nav>
    )
}


