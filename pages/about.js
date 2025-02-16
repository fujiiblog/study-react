import Head from 'next/head';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>About page</title>
      </Head>
      <h1>about.jsだよ</h1>
      <Links />
      <Footer />
    </div>
  );
}
