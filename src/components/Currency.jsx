import React from 'react'



function Currency({label,currOne,setCurrOne, val,setVal ,currencyOptions , disable}) {
  
  return (
    <div className="grid grid-rows-2 grid-cols-2 bg-cyan-100 bg-opacity-50">
      <h1 className='m-2 mx-8' >{label }:</h1>
      <div className='m-2 mx-8'>
        <h1 >currency Type:</h1>
      </div>
      <div className='mx-8'>
      <p className=''> price :</p>
      <input className='bg-slate-100 overflow-hidden w-full' type="number" value={val} onChange={(e)=>setVal(e.target.value)} disabled={disable} />
      </div>
      <div className='mx-8 my-5'>
      <select value={currOne} onChange={(e)=> setCurrOne && setCurrOne(e.target.value)}>
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
      </select>

      </div>
</div>

  )
}

export default Currency
