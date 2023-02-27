import Link from 'next/link'

export default function FourOhFour() {
    return (
        <div className="mitz-notfound">
            <Link href="/">
                <img
                alt="Mitz IT logo"
                src="https://mitz-it.github.io/landing-page-mitz-it//playground_assets/mitzitbege1551-ij3l-200h.png"
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