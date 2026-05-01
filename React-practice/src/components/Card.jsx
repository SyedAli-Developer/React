import React from 'react'

const Card = (props) => {
  return (
    <div className='Card'>
        <img src={props.imgUrl} alt="" />

      <h1>{props.Product}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, corrupti alias exercitationem voluptatibus eligendi delectus aspernatur assumenda possimus architecto, neque aliquid laborum ex perspiciatis vitae rem repellat quasi id eius? Magnam, ut id? Ut.</p>
        <button>Buy Now</button>
    </div>
  )
}

export default Card
