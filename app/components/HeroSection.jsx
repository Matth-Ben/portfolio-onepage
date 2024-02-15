'use client'

import React, { useState, useEffect } from 'react'
import variables from '../variables.module.scss'

const HeroSection = () => {
  const [classActive, classText] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      classText(`${variables.visible}`)
    }, 300)
  }, [])

  return (
    <section className={`${variables.title} h-screen`}>
      <div className={`${variables.popin} ${classActive}`}>
        <div className={`${variables.popin_animA}`}>
          <div className={`${variables.popin_animB}`}>
            <h1 className='title'>toto</h1>
          </div>
        </div>  
      </div>
    </section>
  )
}

export default HeroSection;