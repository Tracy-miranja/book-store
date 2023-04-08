import React from 'react';

function Books() {
  const bookLists = [
    {
      id: 1,
      categories: 'Action',
      Title: 'The Hunger Games',
      Author: 'Suzanne-Collins',
    },
    {
      id: 2,
      categories: 'Horror',
      Title: 'The Hunger Games',
      Author: 'Suzanne-Collins',
    },
  ];
  return (
    <div>
      <ul>
        {bookLists.map((bookList) => (
          <li key={bookList.id}>
            <div>
              <div>
                <h1>{bookList.categories}</h1>
                <h2>{bookList.Title}</h2>
                <h4>{bookList.Author}</h4>
                <div>
                  <button type="submit">comments</button>
                  <button type="submit">Remove</button>
                  <button type="submit">Edit</button>
                </div>
                <div>
                  <div>
                    <span className="sr-only" />
                    <h1>64% completed</h1>
                  </div>
                  <div>
                    <h3>CURRENT CHAPTER</h3>
                    <h2>CHAPTER 17</h2>
                    <button type="submit">UPDATE PROGRESS</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Books;
