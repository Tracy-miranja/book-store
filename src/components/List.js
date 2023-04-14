import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/booksSlice';

function MyComponent() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.isLoading);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {Array.isArray(books) && books.map((book) => (
        <li key={book.item_id} className="Lesson-Panel">
          <div>
            <p className="School-of Text-Style-5">
              {' '}
              {book.category}
            </p>
            <p className="Title Text-Style-6">
              {' '}
              {book.title}
            </p>
            <p className="Suzanne-Collins Text-Style-8">
              {' '}
              {book.author}
            </p>
            <button type="submit" className="Comments Text-Style-8">comment</button>
            <button type="button" className="Remove Text-Style-8">
              remove
            </button>
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
            </h2>
            <div className="Rectangle-2">
              <h1 className="Update-progress">
                UPDATE PROGRESS
              </h1>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}

export default MyComponent;
