import Card from './component/Card.jsx'
import Navigation from './component/Navigation.jsx'
import Footer from './component/Footer.jsx'
import Header from './component/Header.jsx'
import Article from './component/Article.jsx'
function App() {
  return(
    <>
      <Navigation webname="Your Web" nav1="Test" nav2="Test" nav3="Test"/>
      <Header headtitle="Header Title" headsubtitle="Header SubTitle"/>
      <Card cardtitle="Card Title" content="This is Card Content"/>
      <Card cardtitle="Card Title" content="This is Card Content"/>
      <Card cardtitle="Card Title" content="This is Card Content"/>
      <Article />
      <Footer />
    </>
  )  
}

export default App
