import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchBooks from './components/search-books/SearchBooks';
import * as BooksAPI from './utils/BooksAPI';
import { BookType } from './components/book/Book';
import Home from './Home';

const BooksApp = () => {
  let [books, setBooks] = useState<BookType[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    BooksAPI.getAll().then((results) => {
      setBooks(results);
      setLoading(false);
    });
  }, []);

  const onShelfChange = (book: BookType, shelf: string) => {
    book.shelf = shelf;
    setBooks((books) => {
      return books
        .filter((b: BookType) => b.id !== book.id)
        .concat([book]);
    });
    BooksAPI.update(book, shelf);
  };

  return (
    <Routes>
      <Route
        path='/'
        element={
          <Home books={books} onShelfChange={onShelfChange} isLoading={isLoading} />
        }
      />
      <Route
        path='/search'
        element={
          <SearchBooks
            onShelfChange={onShelfChange}
            books={books}
          />
        }
      />
    </Routes>
  );
};

export default BooksApp;
