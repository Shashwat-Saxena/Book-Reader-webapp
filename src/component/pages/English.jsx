import React from 'react'
import lituare from '../EnglishData'
import Card from '../Card'
import Slider from '../Slider'
import SliderEng from '../SliderEng'
import Other from '../Other'
// import Reader from '../pages/Reader.jsx'

const English = ({searchquery}) => {
  const filteredBooks = lituare.filter(
    (book) =>
      (book.name && book.name.toLowerCase().includes(searchquery.toLowerCase())) ||
      (book.description && book.description.toLowerCase().includes(searchquery.toLowerCase()))
  );
  return (
    <>
    {/* <Slider/> */}
    {/* <SliderEng/> */}

    <h1 style={{margin:'10px', marginLeft:'28rem', fontFamily:'cursive'}}> ✴ English  Books ✴  </h1> 
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

export default English