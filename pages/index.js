import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'


export default function Home({ allPostsData }) {
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


            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                {/* 2020-01-02 => January 2, 2020 */}
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    // [{ id, date, title }, { id, date, title }]
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}