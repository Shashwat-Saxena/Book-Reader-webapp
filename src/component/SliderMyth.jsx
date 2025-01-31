import React from 'react'

const SliderMyth = () => {
  return (
   <>
   <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.pinimg.com/736x/f6/93/61/f69361f0980b174efd5ec91384b61d24.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="http://3.bp.blogspot.com/-PAEWnYVvYZE/VbkS5yTfS7I/AAAAAAAAAhM/oNRZaLkPNxg/s1600/Ram-Sita-Painting-Hd-Wallpapers-Free.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/originals/76/d3/0e/76d30e6c58632755325bdaff966d9285.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   </>
  )
}

export default SliderMyth