import { Helmet } from 'react-helmet'
import '../style/fonts.css'
import '../style/style.css'
import '../style/landingpagemitzit.css'
import '../style/scrool-styles.css'
import '../style/notfound.css'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <title>Mitz IT</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="./favicon_io/favicon.ico" />
      </Helmet>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </>
    )
}

export default MyApp
