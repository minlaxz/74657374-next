import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>I am a Software Developer ...</p>
                <code style={{ fontSize: "16px" }}> Use to create stuffs 🚀  by reading documentations 🗒️ and fixed bugs 🐛 by following discussions 💭 </code>
                <p>Here is my OpenPGP ID:
                    <a
                        href='https://keys.openpgp.org/search?q=minminlaxz%40gmail.com'
                        target={`_blank`}
                        rel="noopener noreferrer">
                        {' '}D047EEF6CCB71C5D&#8599;
                    </a>
                </p>
            </section>
            <Link href="posts/first-post">
                <a>Read this{''}&rarr;</a>
            </Link> blog post.
        </Layout>
    )
}