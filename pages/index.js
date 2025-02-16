import Head from 'next/head';
import {Footer} from "../components/Footer"
import Links from '../components/Links';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Index page</title>
      </Head>
      <h1>index.jsだよ</h1>
      <Links />
      <Footer />
    </div>
  );
}
