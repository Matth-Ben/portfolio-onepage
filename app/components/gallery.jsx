import React from 'react'
import Image from 'next/image';
import { urlFor } from '../lib/sanity';
import Link from 'next/link'

const gallery = ({data}) => {
    return (
        <div className='gallery'>
            <h2>Gallery</h2>
            <div>
                {
                    data.images.map((image, idx) => {
                        return (
                            <Image key={idx} src={urlFor(image).url()} width={400} height={200} />
                        )
                    })
                }
            </div>
        </div>
    )
}
  
export default gallery