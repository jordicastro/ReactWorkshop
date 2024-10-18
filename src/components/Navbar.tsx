
import Button from './Button';
import reactSvg from '/public/react-svg.svg';



const Navbar = () => {
  return (
    <div
      className="flex justify-between items-center h-16 bg-indigo-500  text-white rounded-b-xl p-4"
    >
      <div
        className="flex gap-x-2 items-center"
      >
        <img
          src={reactSvg}
          alt="React Logo"
          className="w-8 h-8"
        />
        <h1>
          NAME
        </h1>
      </div>

      <div
        className='flex gap-x-2'
      >
        <Button title="home" />
        <Button title="projects" />
        <Button title="about" />
      </div>
    </div>
  )
}

export default Navbar