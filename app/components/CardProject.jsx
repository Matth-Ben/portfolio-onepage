import React from 'react'
import Image from 'next/image';
import { urlFor } from '../lib/sanity';
import Link from 'next/link'

const CardProject = ({data}) => {
    console.log(data.slug.current);

    return (
        <Link href={`/projects/${data.slug.current}`} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
            <Image src={urlFor(data.image).url()} width={400} height={200} alt={data.image.alt} />
            <h4>{data.title}</h4>
        </Link>
    )
}
  
export default CardProject