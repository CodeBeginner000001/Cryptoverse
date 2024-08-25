import React from 'react'
import loading from "../images/loading.gif"
const Loading = () => {
  return (
    <div className='search-crypto' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <img className="my-3" src={loading} alt="Loading" height="100px" />
    </div>
  )
}

export default Loading
