import React, { useState } from 'react';

const BookList = () => {
  const [books, setBooks] = useState([
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ]);

  const handleRemove = (id) => {
    setBooks(books.filter((book) => book.item_id !== id));
  };

  return (
    <div>
      <h3>Book List:</h3>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <p>
              Title:
              {' '}
              {book.title}
            </p>
            <p>
              Author:
              {' '}
              {book.author}
            </p>
            <p>
              Category:
              {' '}
              {book.category}
            </p>
            <button type="button" onClick={() => handleRemove(book.item_id)}>
              remove
            </button>
            <button type="submit">comment</button>
            <button type="submit">Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
