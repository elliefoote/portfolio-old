import * as React from "react"
import Navbar from '../components/Navbar';
import App from '../components/App';
import './styles.css';
import Footer from '../components/Footer';
import Helmet from 'react-helmet'

// markup
const IndexPage = () => {
  return (  
    <main>
      <Helmet>
          <meta charSet="utf-8" />
          <html lang="en" />
          <meta name="description" content="I'm a software engineer based in Barcelona, building responsive, user-friendly web sites and apps." />
          <meta name="image" property="og:image" content={"/social-share.png"} />
          <title>Ellie Foote | Software Engineer</title>
          <link rel="canonical" href="https://www.elliefoote.com" />
        </Helmet>
      <Navbar />
      <App />
      <Footer />
    </main>
  )
}

export default IndexPage
