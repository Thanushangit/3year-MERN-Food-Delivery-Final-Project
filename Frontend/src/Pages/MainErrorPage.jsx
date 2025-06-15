import { useNavigate } from 'react-router-dom';

const MainErrorPage = () => {
  const navigate=useNavigate()
  return (
    <section className='mycontainer flex flex-col space-y-5 w-full min-h-screen bg-[#f9fafb] justify-center items-center'>
      <h1 className='text-7xl md:text-9xl text-gray-400 font-bold md:mb-8'>404</h1>
      <h4 className='text-xl md:text-5xl font-semibold text-gray-800 md:mb-5 text-center'>😕 Oops! We couldn't find this page.</h4>
      <p className='text-lg md:text-2xl text-gray-500 text-center'>But don't worry, you can find plenty of things on our <br /> Menupage</p>
      <button onClick={()=>navigate("/")} title='Back to Homepage' className='py-4 px-8 border-0 duration-300 transition-all cursor-pointer bg-primary hover:bg-yellow-600 rounded text-gray-700 text-lg md:text-2xl font-semibold'>Back to homepage</button>
    </section>
  )
}

export default MainErrorPage