import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../API';
import { useAppContext } from './context/appContext';
import { useNavigate } from 'react-router';
import '../app.css';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  const navigate = useNavigate();

  const favoritesChecker = (id) => {
    const isFavorite = favorites.some((book) => book.id === id);
    return isFavorite;
  };
  useEffect(() => {
    console.log('my favorites are: ', favorites);
    getBooks();
  }, [favorites]);

  const getBooks = async () => {
    const booksList = await axios.get(API_URL);
    setBooks(booksList.data);
  };

  return (
    <div className='book-list'>
      {books.map((book) => {
        return (
          <div className='book' key={book.id}>
            <div>
              <h4 className='book-title'>{book.title}</h4>
            </div>
            <div>
              <img
                src={book.image_url}
                alt='#'
                onClick={() => navigate(`/books/${book.id}`)}
              />
            </div>
            <div>
              {favoritesChecker(book.id) ? (
                <button onClick={() => removeFromFavorites(book.id)}>
                  Remove from favorites
                </button>
              ) : (
                <button onClick={() => addToFavorites(book)}>
                  Add to favorites
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
