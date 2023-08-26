import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import BookList from './component/BookList';
import BookDetail from './component/BookDetail';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
        const data = await response.json();
        setBooks(data.items || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div className="App">
      <Navbar onSearch={(query) => setSearchQuery(query)} />
      {selectedBook ? (
        <BookDetail book={selectedBook} />
      ) : (
        <BookList books={books} onBookClick={(book) => setSelectedBook(book)} />
      )}
    </div>
  );
}

export default App;
