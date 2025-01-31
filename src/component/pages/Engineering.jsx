import React from 'react'
import programming from'../Programming'
import Card from '../Card';
import Slider from '../Slider'
import SliderEngineering from '../SliderEngineering';
import Other from '../Other';
// import Reader from '../pages/Reader.jsx'

const Engineering = ({searchquery}) => {
  const filteredBooks = programming.filter(
    (book) =>
      (book.name && book.name.toLowerCase().includes(searchquery.toLowerCase())) ||
      (book.description && book.description.toLowerCase().includes(searchquery.toLowerCase()))
  );
  return (
    <>
    {/* <Slider/> */}
    {/* <SliderEngineering/> */}
    <h1 style={{margin:'10px', marginLeft:'28rem', fontFamily:'cursive'}}> ✴ Engineering Books ✴ </h1> 
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

export default Engineering;