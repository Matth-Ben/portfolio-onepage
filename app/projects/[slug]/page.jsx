import { client } from '../../lib/sanity';
import Image from 'next/image';
import { urlFor } from '../../lib/sanity';

async function getData(slug) {
    const query=`*[_type == "projets"&& slug.current == '${slug}'] {
        title,
        image,
        slug,
        pageBuilder
    }[0]`;
  
    const data = await client.fetch(query);
  
    return data;
}
  
export default async function ProjectSingle({params}) {
    const data = await getData(params.slug);
    
    console.log(data);

    return (
        <div>
            <h1>{data.title}</h1>
            <Image src={urlFor(data.image).url()} width={1200} height={600} alt={data.image.alt} />
        </div>
    )
} 