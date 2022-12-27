import '../styles/globals.css'
import Layout from '../Components/Layout.js'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;