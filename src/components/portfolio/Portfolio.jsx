import React from 'react'
import './portfolio.css'
import IMG0 from '../../assets/portfolio0.png'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

//DO NOT USE THE IMAGES IN PRODUCTION

const data =[
  {
    id: 0,
    image: IMG0,
    title: 'Website Car Rental Menggunakan ReactJS',
    github: 'https://github.com/Maberthaab/Car-Rental-React',
    demo: 'https://rental-car-react.netlify.app/'
  },
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
    title: 'SpaceWork (Website Loker)',
    github: '',
    demo: 'https://spacework.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Landing Page',
    github: 'https://github.com/Maberthaab/Challenge1-BCR',
    demo: 'https://bcarental.netlify.app/'
  },
  {
  id: 4,
  image: IMG4,
  title: 'Fresh Fruits',
  github: '',
  demo: 'https://freshtha.netlify.app/'
},
  {
    id: 5,
    image: IMG5,
    title: 'Portfolio',
    github: '',
    demo: 'https://websitekami.wixsite.com/portofolioo'
  },
  {
    id: 6,
    image: IMG6,
    title: 'CookZone (Website Resep Makanan dan Minuman',
    github: '',
    demo: 'https://websitekami.wixsite.com/cookzone'
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