import * as React from "react"
import Navbar from '../components/Navbar';
import App from '../components/App';
import './styles.css';
import Footer from '../components/Footer';

// markup
const IndexPage = () => {
  return (  
    <main>
      <title>Ellie Foote</title>
      <Navbar />
      <App />
      <Footer />
    </main>
  )
}

export default IndexPage
