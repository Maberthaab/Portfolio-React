import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skills I Have </h5>
      <h2> My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Frontend Development </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4> HTML </h4>
              <small className='text-light'> Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4> CSS </h4>
              <small className='text-light'> Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4> JavaScript </h4>
              <small className='text-light'> Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4> Bootstrap </h4>
              <small className='text-light'> Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4> Tailwind </h4>
              <small className='text-light'> Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4> React JS </h4>
              <small className='text-light'> Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4> Next JS </h4>
              <small className='text-light'> Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4> Figma </h4>
              <small className='text-light'> Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4> Responsive Web </h4>
              <small className='text-light'> Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4> GitHub </h4>
              <small className='text-light'> Basic</small>
              </div>
            </article>
          </div>
        </div>



      {/*======== BackEnd =======*/}

        <div className="experience__backend">
        <h3> Backend Development </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4> Node JS </h4>
              <small className='text-light'> Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4> PHP </h4>
              <small className='text-light'> Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4> Laravel </h4>
              <small className='text-light'> Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4> Express JS</h4>
              <small className='text-light'> Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4> SQL </h4>
              <small className='text-light'> Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4> PostgreSQL </h4>
              <small className='text-light'> Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4> MYSQL </h4>
              <small className='text-light'> Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4> Postman </h4>
              <small className='text-light'> Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4> REST API </h4>
              <small className='text-light'> Experience</small>
              </div>
            </article>

 
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience