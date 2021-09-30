import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './component/News/News';



function App() {
  const [news, setNews] = useState([])
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=e6946d588f4e461a9c46c43c105c0dd3')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  }, [])
  return (
    <div className="App">
      {news.length ===0 ? <Spinner animation="border" />:  <Row xs={1} md={2} className="g-4">
              {
                news.map(nw => <News news={nw}></News>)
              }
      </Row>}
    
    
    </div>
  );
}

export default App;
