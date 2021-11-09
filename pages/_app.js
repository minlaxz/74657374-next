import '../styles/global.css'
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}