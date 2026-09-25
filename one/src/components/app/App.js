import Article from '../article/Article';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Nav from '../nav/Nav';
import './App.css';

function App(props) {
  let {text, slogan, navigation, db, copy} = props;
  return (
    <div className="App">
      
      <Header title = {text} slogan = {slogan}/>
      <Nav navigation={navigation}/>
      <Article db={db} />
      <Footer text={copy}/>
      
    </div>
  );
}

export default App;