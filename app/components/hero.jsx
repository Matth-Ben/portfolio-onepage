import React from 'react'
import Image from 'next/image';
import { urlFor } from '../lib/sanity';
import Link from 'next/link'

const hero = ({data}) => {
    return (
        <div>
            <Image src={urlFor(data.image).url()} width={400} height={200} alt={data.image.alt} />
            <h4>{data.heading}</h4>
        </div>
    )
}
  
export default hero