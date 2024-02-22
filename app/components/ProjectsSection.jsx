import React from 'react'
import { client } from '../lib/sanity';
import CardProject from './CardProject';

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

export default async function ProjectsSection() {
  const data = await getData();

  return (
    <section className="">
      <h1 className='title'>List Projects</h1>
      {data.map((post, idx) => (
        <CardProject data={post} key={idx} />
      ))}
    </section>
  );
}