import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Project </h5>
      <h2> Portfolio </h2>

      <div className='container portfolio__container'>
        <article>
          <div className="portfolio__item">
            <div className="portfolio__item-image">
            <h3> This is a Portfolio Item</h3>
            <a href ="#" className='btn'> </a>

            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio