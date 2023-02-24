import Gallery from 'components/Gallery';
import Head from 'next/head';
import Hero from 'components/Hero.jsx';
import { Wedding } from 'components/Photos.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>LJ Photography</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero heading='LJ Photography' message='Capturing precious moments one photo at a time.' />
      <Gallery slides={Wedding}/>
    </div>
  );
}