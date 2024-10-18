import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div
      className='mr-[10%] ml-[10%]'
    >
        <Navbar />
        <Outlet />
    </div>
  )
}

export default MainLayout