import { client } from '../../lib/sanity';
import { urlFor } from '../../lib/sanity';

// COMPONENTS NEXT
import Image from 'next/image';

// COMPONENTS
import hero from '../../components/hero'
import form from '../../components/form'
import gallery from '../../components/gallery'
import video from '../../components/video'
import textWithIllustration from '../../components/textWithIllustration'

const myComponents = {
  'hero': hero,
  'form': form,
  'gallery': gallery,
  'video': video,
  'textWithIllustration': textWithIllustration,
}

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
    
    return (
        <div className='py-24'>
            <h1>{data.title}</h1>
            <Image src={urlFor(data.image).url()} width={1200} height={600} alt={data.image.alt} />

            <div>
                {
                    data.pageBuilder ?
                        data.pageBuilder.map((block, idx) => {
                            const Component = myComponents[block._type];

                            return (
                                <Component data={block} key={idx} />
                            )
                        })
                    : ''
                }
            </div>
        </div>
    )
} 