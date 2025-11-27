import React, { FC } from 'react';
import ListBooks from './components/list-books/ListBooks';
import { ListBooksTitle, LoadingStyle } from './appstyles';
import { BookType } from './components/book/Book';
import Loading from '../src/components/loading/loading';

interface HomeProps {
  books: BookType[];
  isLoading: boolean;
}

const Home: FC<HomeProps> = ({ books, onShelfChange, isLoading }) => {
  return (
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
  );
};

export default Home;
