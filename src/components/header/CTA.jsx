import React from 'react'
import cvtha from '../../assets/cvtha.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={cvtha} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'> Let's Talk</a>
    </div>
  )
}

export default CTA