import type { NextPage } from 'next'
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className={utilStyles.title}>
        Read{' '}
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>
        {' '}by{' '}
        <Link href="/authors/joop-gevaar">
          <a>Joop Gevaar</a>
        </Link>
      </h1>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}

export default Home
