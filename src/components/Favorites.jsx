import React from 'react';
import { useAppContext } from './context/appContext';
import '../app.css';

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const isFavorite = favorites.some((book) => book.id === id);
    return isFavorite;
  };

  return favorites.length > 0 ? (
    <div className='favorites'>
      {favorites.map((book) => {
        return (
          <div className='book' key={book.id}>
            <div>
              <h4 className='book-title'>{book.title}</h4>
            </div>
            <div>
              <img src={book.image_url} alt='#' />
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
      ;
    </div>
  ) : (
    <h2 className='favorites-title'>You don't have any favorites books yet</h2>
  );
};

export default Favorites;
