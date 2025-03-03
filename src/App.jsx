import { Footer } from "./layouts/Footer/Footer"
import { Header } from "./layouts/Header/Header"
import { Home } from "./layouts/Home/Home"
import { Main } from "./layouts/Main/Main"
import { Routes, Route } from "react-router-dom"
import { NotFound } from "./pages/NotFound/NotFound"
import { Class1 } from "./pages/NotFound/Class1/Class1"


// import { Navbar } from "./layouts/Navbar/Navbar"
export const App = () =>{
  return(

    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/class1" element={<Class1 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    
    
    </>
  )

}