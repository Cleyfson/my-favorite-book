import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { BOOK_DETAILS_URL } from '../API';
import '../app.css';

const BookDetails = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getBook();
  }, []);

  const getBook = async () => {
    const book = await axios.get(`${BOOK_DETAILS_URL}${id}`);
    setBook(book.data);
    console.log(book.data);
  };

  return (
    <div className='book-details'>
      <div>
        <h2>{book.title}</h2>
        <img src={book?.image_url} alt='#' />
      </div>
      <div className='description'>
        <div>
          <h2>Description</h2>
          <p>{book?.description}</p>
        </div>
        <div>
          <h2>Authors</h2>
          <p>{book?.authors}</p>
        </div>
        <div>
          <h2>Genres</h2>
          <p>{book?.genres}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
