import React from 'react'
import Image from 'next/image';
import { urlFor } from '../lib/sanity';
import Link from 'next/link'
import {PortableText} from '@portabletext/react'

const textWithIllustration = ({data}) => {
    return (
        <div>
            <h2>{data.tagline}</h2>
            {/* <div>{data.excerpt}</div> */}
            <div>
                <PortableText value={data.excerpt} onMissingComponent={false} />
            </div>
            <Image src={urlFor(data.image).url()} width={400} height={200} alt={data.image.alt} />
        </div>
    )
}
  
export default textWithIllustration