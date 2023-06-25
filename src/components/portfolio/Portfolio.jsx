import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Project </h5>
      <h2> Portfolio </h2>

      <div className='container portfolio__container'>
        
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src = {IMG1} alt=""/>
              </div>
            <h3> This is a Portfolio Item</h3>
            <a href ="https://" className='btn' target='_blank'> Github</a>
            <a href ="" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

      </div>
    </section>
  )
}

export default Portfolio