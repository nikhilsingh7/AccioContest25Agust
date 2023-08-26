import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, onBookClick }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem key={book.id} book={book} onClick={() => onBookClick(book)} />
      ))}
    </div>
  );
};

export default BookList;
