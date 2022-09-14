import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const UNSPLAS_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const  App = () =>{
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
     console.log(word);
     fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLAS_KEY}`)
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
     })
     .catch((err) => {
       console.log(err);
     })
  }
  
  return (
    <div className="App">
      <Header title="Image Gallery"/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
