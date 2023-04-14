import { Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Nav from './components/Navbar';
import AddBookForm from './components/form';

function App() {
  return (
    <section className="container">
      <Nav />
      <Routes>
        <Route path="/form" element={<AddBookForm />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </section>
  );
}

export default App;
