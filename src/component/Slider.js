import React from 'react'

export default function Slider() {
  return (
    <div>
     <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button className='btn_slid active' type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
          <button className='btn_slid' type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button className='btn_slid' type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button className='btn_slid' type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={"./Icons/Mobile-firsts.jpg"} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={"./Icons/Mobile-firsts.jpg"} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={"./Icons/Mobile-firsts.jpg"} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={"./Icons/Mobile-firsts.jpg"} class="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>
    </div>
  )
}
