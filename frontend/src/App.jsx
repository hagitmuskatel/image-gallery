import React, {useState} from 'react';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from './components/Welcome';

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5050"


function App() {
  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState([]);
  // const API_URL = "https://api.unsplash.com"

  function updateSearchText(e) {
    setSearchText(e.target.value);
  }


  function handleSubmitSearch(e) {
    e.preventDefault();
    console.log(searchText);
    // fetch(`${API_URL}/photos/random/?query=${searchText}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`)
    fetch(`${API_URL}/new-image?query=${searchText}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setImages([{...data, title: searchText}, ...images]);
      
    })
    .catch((err) => {
      console.log(err);
    })
    setSearchText("");
  }

  function deleteImage(id){
    setImages(images.filter(image => {
      return (image.id !== id);
    }));
  }

  return (
    <div className="App">
      <Header title="Images Gallery"/>
      <Search  searchText={searchText} setSearchText={updateSearchText} onSubmitSearch={handleSubmitSearch}/>
      <Container className='mt-4'>
      {images.length ? (       
        <Row xs={1} md={2} lg={3}>
          {images.map((image, i) => {
            return ( 
            <Col key={i} className='pb-3'>
              <ImageCard
              id={image.id}             
              title={image.title} 
              description={image.description}
              url={image.urls.small}
              handleDelete={deleteImage}/>
            </Col>
          )})}    
          
        </Row>
      ) : (<Welcome/>)}
      </Container>
       
    </div>
  );
}

export default App;
