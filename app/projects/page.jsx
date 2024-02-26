import { client } from '../lib/sanity';
import CardProject from '../components/CardProject';

async function getData() {
    const query=`*[_type == "projets"] | order(_createdAt desc) {
      title,
      image,
      slug,
      pageBuilder
    }`;
  
    const data = await client.fetch(query);
  
    return data;
}
  
export default async function ProjectSingle({params}) {
    const data = await getData();

    return (
        <section className="py-24">
            <h1 className='title'>List Projects</h1>
            {data.map((post, idx) => (
                <CardProject data={post} key={idx} />
            ))}
        </section>
    );
} 