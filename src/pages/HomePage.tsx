import { useEffect, useState } from "react"

const HomePage = () => {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect( ()=>{
    const logCount = () => {
      console.log(count)
    }
    
    logCount()
  }, [count])

  useEffect( ()=>{
   
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const data = await response.json()
      setIsLoading(false)
      console.log(data)
    }

    setTimeout(() => {
      fetchData()
    }, 2000)
  }, [])


  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 transition"
      >
        click me!
      </button>


      <div
        className="w-full h-16 bg-sky-500 rounded-full flex justify-center items-center"
      >
        {isLoading ? 'Loading...' : 'Loaded!'}
      </div>
    </div>
  )
}

export default HomePage