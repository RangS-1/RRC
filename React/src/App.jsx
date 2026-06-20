import Card from './component/Card.jsx'
import Navigation from './component/Navigation.jsx'
import Footer from './component/Footer.jsx'
import Header from './component/Header.jsx'
import Article from './component/Article.jsx'
import Articlebody from './component/Articlebody.jsx'
import Tag from './component/Tag.jsx'

function App() {
  return(
    <>
      <Navigation webname="Your Web" nav1="Test" nav2="Test" nav3="Test"/>
      <Header headtitle="Header Title" headsubtitle="Header SubTitle"/>
      <Card cardtitle="Card Title" content="This is Card Content"/>
      <Card cardtitle="Card Title" content="This is Card Content"/>
      <Card cardtitle="Card Title" content="This is Card Content"/>
      <Article 
        realtag="your tag"
        date="2026-01-01"
        read="20 min reading"
        headline="Your Headline"
        summary="Your article summary"
        head="header number 1"
        head="header number 2"
      />
      <Tag 
        tag1="Tag1"
        tag2="Tag2"
        tag3="Tag3"
        tag4="Tag4"
        tag5="Tag5"
      />
      <Footer />
    </>
  )  
}

export default App
