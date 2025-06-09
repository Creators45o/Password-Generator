import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const url = "https://images.pexels.com/photos/29213973/pexels-photo-29213973/free-photo-of-picturesque-village-with-foggy-morning-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

  return (
    <div
      className="min-h-screen w-screen bg-center bg-no-repeat bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="h-96 w-9/12 border-4 border-black bg-white bg-opacity-35" >
      <div>
                 {/*  add */ }
      </div>
      <button>
        swap
      </button>
       <div>
               {/* add */}
       </div>

      <button>
        {/* Add some values inside it  */}
      </button>

      </div>
    </div>
  )
}

export default App
