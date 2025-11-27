import React from 'react';
import ListBooks from './components/list-books/ListBooks';
import { ListBooksTitle, LoadingStyle } from './appstyles';
import { BookType } from './components/book/Book';
import Loading from '../src/components/loading/loading';

interface HomeProps {
  books: BookType[];
  isLoading: boolean;
  onShelfChange: (book: BookType, shelf: string) => void;
}

const Home = ({ books, onShelfChange, isLoading }: HomeProps) => {
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
