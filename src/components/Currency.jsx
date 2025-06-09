import React from 'react'



function Currency({label,currOne,setCurrOne, val,setVal}) {
  
  return (
    <div className="grid grid-rows-2 grid-cols-2 bg-cyan-100 bg-opacity-50">
      <h3>{label }:</h3>
      <div>
        <h3>currency Type:</h3>
      </div>
      <div>
      <p> price </p>
      <input type="number" value={val} onChange={(e)=>setVal(e.target.value)}/>
      </div>
      <div>
      <select value={currOne} onChange={(e)=> setCurrOne && setCurrOne(e.target.value)}>
          <option value="">{currOne}</option>
      </select>

      </div>
</div>

  )
}

export default Currency
