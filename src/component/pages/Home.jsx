import React from 'react'
import home from '../HomeData.js'
import Card from '../Card'
import Slider from '../Slider.jsx'
import BrandSlider from '../Brand.jsx'
import Other from '../Other.jsx'
// import Reader from '../pages/Reader.jsx'

const Home = ({searchquery}) => {
  const filteredBooks = home.filter(
    (book) =>
      (book.name && book.name.toLowerCase().includes(searchquery.toLowerCase())) ||
      (book.description && book.description.toLowerCase().includes(searchquery.toLowerCase()))
  );
  return (
    <>
    <Slider/>
    <div className="bookshelf"></div>
    <h1 style={{margin:'10px', marginLeft:'28rem', fontFamily:'cursive'}}> ✴ Books Shelf ✴  </h1>
    <div className="container"  >
      <div className="row">
      {filteredBooks.map((product, index)=>(
      <Card product={product} key={index} style={{fontFamily:'cursive'}}/>
    ))}
      </div>
      <Other/>
    </div>
    <BrandSlider/>
    
    </>
  )
}

export default Home;