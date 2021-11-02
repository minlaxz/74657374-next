import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <section>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum, quisquam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum, quisquam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum, quisquam.
                </p>
            </section>
        </Layout>
    )
}