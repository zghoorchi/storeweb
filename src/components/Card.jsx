
import React from 'react'

function Card({data}) {
   const {id , title , image , price} = data
  return (
    <div>Card
        <p>{title}</p>
    </div>
  )
}

export default Card