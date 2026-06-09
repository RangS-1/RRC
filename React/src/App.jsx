import Card from './component/Card.jsx'
import Navigation from './component/Navigation.jsx'
import Footer from './component/Footer.jsx'
import Header from './component/Header.jsx'

function App() {
  return(
    <>
      <Navigation webname="Your Web" nav1="Test" nav2="Test" nav3="Test"/>
      <Header headtitle="Header Title" headsubtitle="Header SubTitle"/>
      <Card />
      <Footer />
    </>
  )  
}

export default App
