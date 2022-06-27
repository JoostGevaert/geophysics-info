import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Joop Gevaar';
export const siteTitle = 'Applied Geophysics Overview';

export default function Layout({ 
  children,
  home 
}: {
  children: React.ReactNode,
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Overview and explanation of applied geophysics" />
        
      </Head>
      {children}
    </div>
  );
}
