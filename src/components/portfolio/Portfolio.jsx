import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio1.jpg'
import IMG3 from '../../assets/portfolio1.jpg'
import IMG4 from '../../assets/portfolio1.jpg'
import IMG5 from '../../assets/portfolio1.jpg'

//DO NOT USE THE IMAGES IN PRODUCTION

const data =[
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio Tailwind CSS',
    github: 'https://maberthaab.github.com',
    demo: 'https://maberthaab.github.io/myportfolio.github.io/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Portfolio Tailwind CSS',
    github: '',
    demo: 'https://spacework.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio Tailwind CSS',
    github: '',
    demo: 'https://websitekami.wixsite.com/cookzone'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio Tailwind CSS',
    github: '',
    demo: 'https://websitekami.wixsite.com/portofolioo'
  },
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Project </h5>
      <h2> Portfolio </h2>

      <div className='container portfolio__container'>

      {
        data.map(({id, image, title, github, demo})=> {
          return (
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src = {image} alt={title}/>
              </div>
            <h3> {title} </h3>
            <div className="portfolio__item-cta">
            <a href = {github} className='btn' target='_blank'> Github</a>
            <a href ={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio