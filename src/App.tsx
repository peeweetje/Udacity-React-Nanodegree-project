import React, { useState, useEffect, FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchBooks from './components/search-books/SearchBooks';
import ListBooks from './components/list-books/ListBooks';
import * as BooksAPI from './utils/BooksAPI';
import { ListBooksTitle, LoadingStyle } from './appstyles';
import { BookType } from './components/book/Book';
import Loading from '../src/components/loading/loading';

const BooksApp: FC = () => {
  let [books, setBooks] = useState([]);
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
        .concat([book] as any);
    });
    BooksAPI.update(book, shelf);
  };

  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            {isLoading === false ? (
              <>
                <ListBooksTitle>
                  <h1>Book Shelfs</h1>
                </ListBooksTitle>
                <ListBooks books={books} onShelfChange={onShelfChange} />
              </>
            ) : (
              <LoadingStyle>
                <Loading />
              </LoadingStyle>
            )}
          </>
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
