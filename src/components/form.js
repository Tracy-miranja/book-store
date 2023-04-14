import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import MyComponent from './List';
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
      <MyComponent />
      <BookList />
      <div>
        <div>
          <ul>
            {addedBooks.map((addedBook) => (
              <li key={addedBook.id} className="Lesson-Panel">
                <div>
                  <p className="Title Text-Style-6">

                    {' '}
                    {addedBook.title}
                  </p>
                  <p className="Suzanne-Collins Text-Style-8">

                    {' '}
                    {addedBook.author}
                  </p>
                  <p className="School-of Text-Style-5">

                    {' '}
                    {addedBook.category}
                  </p>
                  <button type="submit" className="Comments Text-Style-8">comment</button>
                  <button type="button" className="Remove Text-Style-8" onClick={() => handleRemove(addedBook.id)}>remove</button>
                  <button type="submit" className="Edit Text-Style-8">Edit</button>
                </div>
                <div className="rating">
                  <div>
                    <div className="complited-loader flex">
                      <div className="complited-percentage">
                        <div className="progress blue">
                          <span className="progress-left">
                            <span className="progress-bar" />
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="vertical-divider-right separeter" />
                  <div className="col-1">
                    <p className="vertical-divider-right separeter" />
                  </div>
                  <div className="update col-3 flex" />
                  <div>
                    <h3 className="-Percent-Complete">64%</h3>
                    <h4 className="Completed Text-Style-2">completed</h4>
                  </div>
                </div>
                <div className="Line-2" />
                <div>
                  <h3 className="Current-Chapter Text-Style-7">CURRENT CHAPTER</h3>
                  <h2 className="Current-Lesson Text-Style-4">
                    {' '}
                    {book.chapter}
                    Chapter4:Human economics
                  </h2>
                  <div className="Rectangle-2">
                    <h1 className="Update-progress">
                      UPDATE PROGRESS
                    </h1>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="Line" />
        <form onSubmit={handleSubmit} className="form">
          <span className="Add Add-Style-10">
            ADD NEW BOOK
          </span>
          <div className="inputs">
            <input type="text" name="title" placeholder="BOOK TITLE" value={book.title} onChange={handleChange} className="Leson-Panel" />
            <input
              type="text"
              name="category"
              placeholder="Category                                                ▼"
              value={book.category}
              onChange={handleChange}
              className="Lesson-Panel2"
            />
            <button type="submit" className="Rectangle-3">Add Book</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBookForm;
