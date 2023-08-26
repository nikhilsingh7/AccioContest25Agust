import React from 'react';

const BookItem = ({ book, onClick }) => {
  const { volumeInfo } = book;
  return (
    <div className="book-item" onClick={onClick}>
      {/* Render book information */}
    </div>
  );
};

export default BookItem;
