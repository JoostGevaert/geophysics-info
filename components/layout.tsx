import Head from 'next/head';
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
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Overview and explanation of applied geophysics" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
      </header>
      <main>{children}</main>
      {!home && (
        <footer>
          <div>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        </footer>
      )}
    </div>
  );
}
