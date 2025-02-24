import bgMain from '../../assets/images/imagen.jpg'

export const Main = () => {
  return (
    <div className='w-screen  flex justify-center items-center flex-col mt-15'>

      <h1 className="text-amber-300 text-3xl font-bold">La idea es que aca construiremos nuestro curso de cada tema</h1>

      <img className='w-2xl h-120 rounded-xl mt-3' src={bgMain} alt="img"/>
   
    </div>

    
  )
}


