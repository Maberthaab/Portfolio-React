import React from 'react'
import './about.css'
import ME from '../../assets/meto.JPG'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'> 
    <h5> Get To Know </h5>
    <h2> About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="Image" />
        </div>
      </div>

      <div className="about__content">
      <div className="about__cards">
      <article className='about__card'>
          <VscFolderLibrary className='about__icon' />
          <h5> Education </h5>
            <small> Universitas Negeri Surabaya </small>
            
        </article>
      
        <article className='about__card'>
          <FaAward className='about__icon' />
          <h5> Experience </h5>
          <small> Junior Fullstack Web</small>
        </article>


        <article className='about__card'>
          <VscFolderLibrary className='about__icon' />
          <h5> Project </h5>
          <small> My Project Completed</small>
        </article>
      </div>

      <p> 
      I am an Informatics engineering student who is very interested in the world of it and has a high interest in 
      website development and ui/ux design. Studying in the Informatics Engineering major made me focus on the field 
      of Software Engineering to support my interests and talents as a fullstack web developer. I am capable of 
      developing websites in several programming languages, creating virtual reality, as well as creating comprehensive 
      technical descriptions and steps of software development. I can work both individually and in a team,
       able to work under pressure, willing to learn something new, and keep improving my hard and soft skills.
      </p>

      <a href="#contact" className='btn btn-primary'> Let's Talk</a>
      </div>
    </div>

    </section>
  )
}

export default About