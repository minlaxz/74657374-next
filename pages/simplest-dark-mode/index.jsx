
import Link from 'next/link'

export default () => (
    <div className={`container`}>
    <h3>Hello, world! from `implest-dark-mode`</h3>
        <Link href={`/`}>
            <a>return home</a>
        </Link>
        <style jsx>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                height: 100vh;
                width: 100vw;
            }
        `}</style>
    </div>

)