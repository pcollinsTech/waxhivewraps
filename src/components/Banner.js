import React from 'react'

const Banner = ({ img, title }) => (
  <section id="blog_banner" className="blog_major">
    <img src={img} alt="" />
    <div className="inner">
      <header>
        <h1>{title}</h1>
      </header>
    </div>
  </section>
)

export default Banner
