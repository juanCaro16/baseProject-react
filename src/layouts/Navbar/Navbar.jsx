export const Navbar = () => {

    const styles = {
        li:"hover:text-sky-600",
        ul: "flex flex-row font-bold text-xl text-white gap-5"
    }

    const { li, ul,} = styles

    return (
        <nav className="">
            <ul className={ul}>
                <li>
                    <a className={li} href="">Clase 1</a>
                </li>
                <li>
                    <a className={li} href="">Clase 2</a>
                </li>
                <li>
                    <a className={li} href="">Clase 3</a>
                </li>
            </ul>
        </nav>
    )
}


