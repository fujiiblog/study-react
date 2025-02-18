import Head from 'next/head';
import {Footer} from "../components/Footer"
import Links from '../components/Links';
import HeadLine from '../components/Headline';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Index page</title>
      </Head>
      <HeadLine title="index.js" page="index"/>
      <Links />
      <Footer />
    </div>
  );
}
