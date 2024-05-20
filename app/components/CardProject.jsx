'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { urlFor } from '../lib/sanity';
import variables from '../variables.module.scss'

const CardProject = ({data}) => {
    const [classActive, classText] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
        classText(`${variables.visible}`)
        }, 300)
    }, [])

    return (
        <Link href={`/projects/${data.slug.current}`} className="">
            <section className={`${variables.title} h-screen`}>
                <div className={`${variables.popin} ${classActive}`}>
                    <div className={`${variables.popin_animA}`}>
                        <div className={`${variables.popin_animB}`}>
                            <Image src={urlFor(data.image).url()} width={400} height={200} alt={data.image.alt} />

                            <h1 className='title'>{data.title}</h1>
                        </div>
                    </div>  
                </div>
            </section>
        </Link>
    )
}
  
export default CardProject