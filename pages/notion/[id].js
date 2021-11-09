import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { NotionRenderer } from "react-notion";
import Link from 'next/link'

export async function getStaticProps({ params }) {
    const data = await fetch(`https://notion-api.octocat.tk/v1/page/${params.id}`)
        .then(res => res.status === 200 ? res.json() : null)

    return {
        props: {
            blockMap: data,
            indexPage: params.id === 'd010556c-092e-44cd-a685-5430bdc61ea2',
        },
        revalidate: 1, // revalidate after 1 second
    };
}

export async function getStaticPaths() {
    const paths = [
        // {
        //     params: {
        //         id: 'd010556c-092e-44cd-a685-5430bdc61ea2'
        //     }
        // },
        // {
        //     params: {
        //         id: 'a4a2156b-cadc-4ed0-af3c-914c95f884c6'
        //     }
        // }
    ]
    return {
        paths,
        fallback: `blocking`
    }
}

const isEmpty = (obj) => {
    for (var key in obj) { return false }
    return true
}

export default function Notion({ blockMap, indexPage }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',

            margin: "0 auto",
            maxWidth: "960px",
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0
        }}>
            {
                blockMap
                    ?
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: "0 auto",
                        maxWidth: "960px",
                        padding: "0px 1.0875rem 1.45rem",
                        paddingTop: 0,
                        fontFamily: '"Roboto", sans-serif',
                    }}>
                        <NotionRenderer
                            blockMap={blockMap}
                            mapPageUrl={pageId => `/notion/${pageId}`}
                        />
                        {!indexPage && <Link href="/notion/d010556c-092e-44cd-a685-5430bdc61ea2"><a>&#8592;</a></Link>}
                        {indexPage && <Link href="/"><a>Back to Home</a></Link>}
                    </div>
                    :
                    <>
                        <code> This is not allowed 😎 but you can go back </code>
                        <Link href="/notion/d010556c-092e-44cd-a685-5430bdc61ea2"><a>&#8592;</a></Link>
                    </>

            }

        </div>
    )
}