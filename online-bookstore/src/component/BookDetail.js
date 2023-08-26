import React from 'react';

const BookDetail = ({ book }) => {
  return (
    <div className="book-detail">
      {/* Display detailed information about the book */}
      <button onClick={() => window.open(book.volumeInfo.previewLink, '_blank')}>Read Now</button>
      <button onClick={() => window.open(book.volumeInfo.infoLink, '_blank')}>More Info</button>
    </div>
  );
};

export default BookDetail;
