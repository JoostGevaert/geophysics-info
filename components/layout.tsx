import Head from "next/head";
import Link from "next/link";

export const siteTitle = "Applied Geophysics Overview";

const Layout = ({ children, pageTitle, home }: { children: React.ReactNode; pageTitle: string; home?: boolean }) => {
	return (
		<div>
			<Head>
				<title>{pageTitle}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Overview and explanation of applied geophysics" />
				<meta name="og:title" content={pageTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header></header>
			<main>{children}</main>
			{!home && (
				<footer>
					<div>
						<Link href="/">
							<a>← Back to home 🏡</a>
						</Link>
					</div>
				</footer>
			)}
		</div>
	);
};

export default Layout;
