import { Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Nav from './components/Navbar';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
      <form />
    </>
  );
}

export default App;
