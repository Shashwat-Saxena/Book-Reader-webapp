import React from 'react'
import mytho from  '../MythData'
import Card from '../Card'
import Slider from '../Slider'
import SliderMyth from '../SliderMyth'
import Other from '../Other'
// import Reader from '../pages/Reader.jsx'

const Mythology = ({searchquery}) => {
  const filteredBooks = mytho.filter(
    (book) =>
      (book.name && book.name.toLowerCase().includes(searchquery.toLowerCase())) ||
      (book.description && book.description.toLowerCase().includes(searchquery.toLowerCase()))
  );
  return (
    <>
    {/* <Slider/> */}
    {/* <SliderMyth/> */}
    <h1 style={{margin:'10px', marginLeft:'28rem', fontFamily:'cursive'}}> ✴ Mythology Books ✴ </h1> 
    <div className="container">
      <div className="row">
        {filteredBooks.map((product,index)=>(
          <Card product={product} key={index}/>
        ))}
      </div>
      <Other/>
    </div>
    </>
  )
}

export default Mythology