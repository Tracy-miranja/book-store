import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import BookList from './Books';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    id: '', title: '', author: '', category: '',
  });
  const [addedBooks, setAddedBooks] = useState([]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    setAddedBooks([...addedBooks, book]);
    setBook({
      id: '', title: '', author: '', category: '',
    });
  };

  const handleRemove = (id) => {
    dispatch(removeBook(id));
    setAddedBooks(addedBooks.filter((book) => book.id !== id));
  };

  return (
    <>
      <BookList />
      <div>
        <div>
          <ul>
            {addedBooks.map((addedBook) => (
              <li key={addedBook.id}>
                <p>
                  Title:
                  {' '}
                  {addedBook.title}
                </p>
                <p>
                  Author:
                  {' '}
                  {addedBook.author}
                </p>
                <p>
                  category:
                  {' '}
                  {addedBook.category}
                </p>
                <button type="button" onClick={() => handleRemove(addedBook.id)}>remove</button>
                <button type="submit">comment</button>
                <button type="submit">comment</button>
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" value={book.title} onChange={handleChange} />
          <input type="text" name="author" placeholder="Author" value={book.author} onChange={handleChange} />
          <input type="text" name="category" placeholder="Category" value={book.category} onChange={handleChange} />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </>
  );
};

export default AddBookForm;
