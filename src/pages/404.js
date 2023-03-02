import Link from 'next/link'

export default function FourOhFour() {
    return (
        <div className="mitz-notfound">
            <Link href="/">
                <img
                alt="Mitz IT logo"
                src="/imgs/logo_header.png"
                className="mitz-logo-footer"
                />
            </Link>
            <br></br>
            <h3>404 - Página não encontrada</h3>
            <Link href="/">
                Ir para home
            </Link>
        </div>
    )
}