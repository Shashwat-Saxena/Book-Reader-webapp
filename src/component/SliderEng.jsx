import React from 'react'

const SliderEng = () => {
  return (
    <>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://tse4.mm.bing.net/th?id=OIP.CMOiMxYYbjrGAN5bY1v7HQHaDl&pid=Api&P=0&h=180" class="d-block w-100" alt="..." style={{objectFit:'cover', backgroundRepeat:'no-repeat'}}/>
    </div>
    <div class="carousel-item">
      <img src="https://1.bp.blogspot.com/-nznZHbHbOG0/YPflafLdq9I/AAAAAAAASyQ/fMCyGs_mVd0Q2LAksovitjip_mt-SUkrgCLcBGAsYHQ/w1600/Best%2BNovels%2BTo%2BRead%2BFor%2BBeginners.png" class="d-block w-100" alt="..." style={{objectFit:'cover', backgroundRepeat:'no-repeat'}}/>
    </div>
    <div class="carousel-item">
      <img src="https://i.ytimg.com/vi/tzOmWz_RrUo/maxresdefault.jpg" class="d-block w-100" alt="..." style={{objectFit:'cover', backgroundRepeat:'no-repeat'}}/>
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

export default SliderEng