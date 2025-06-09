import { useState } from 'react'
import Currency from './components/Currency'
import useCurrencyGen from './hooks/currencyGen'


function App() {
  const [from , setFrom ] =useState("usd");
  const [to,setTo] =useState("inr");
  const [value , setValue ] = useState (0)
  const [finalval , setFinalVal] =useState(0) 
  const data = useCurrencyGen(from);
  console.log(data);
  function handleChange(){
     if ( Number(value) >0 || Number(val))
     {
      
       setFinalVal(Number(value)*Number(data[to]))

     }
    console.log(Number(value)*Number(data[to]))
  }

  const options = Object.keys(data)


  function swap (){
    setFrom(to);
    setTo(from);
    setFinalVal(value);
    setValue(finalval)
  }

  const url = "https://images.pexels.com/photos/29213973/pexels-photo-29213973/free-photo-of-picturesque-village-with-foggy-morning-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

  return (

    <div
      className="min-h-screen w-screen bg-center bg-no-repeat bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${url})` }}
    >
      
      
      <div className="h-96 w-9/12 border-4 border-black bg-white bg-opacity-35 grid grid-flow-row grid-rows-4 rounded-lg" >
      <Currency label ="From" currOne={from} setCurrOne= {setFrom}  val ={value} setVal={setValue}   currencyOptions={options} disable={false}/>
      <div className='flex justify-center items-center '>
      <button className='bg-blue-800 rounded-md w-32 h-12  hover:bg-blue-600 active:bg-blue-700'  onClick={()=>swap()}>
        swap : {from } to {to}
      </button>
      </div>
         <Currency label="To" currOne={to} setCurrOne= {setTo} val ={finalval} setVal={setFinalVal}   currencyOptions={options} disable={true}/>

       <div className='flex justify-center items-center '>
      <button className='bg-blue-800 rounded-md w-32 h-12  hover:bg-blue-600 active:bg-blue-700' onClick= {()=>{handleChange()}}>
       Convert {from}  to  {to} 
      </button>
      </div>

      </div>
    </div>
  )
}

export default App
