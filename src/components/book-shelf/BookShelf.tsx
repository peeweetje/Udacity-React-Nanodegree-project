import React, { useState } from 'react';
import Book, { BookType } from '../book/Book';
import {
  BookShelfs,
  BookShelfTitle,
  BookShelfBooks,
  BooksGrid,
} from './BookShelf.styles';
import ReactStars from 'react-stars';

interface IbookShelfProps {
  bookshelfTitle: string;
  bookshelfBooks: BookType[];
  onShelfChange: (book: BookType, shelf: string) => void;
}

const BookShelf = ({
  bookshelfTitle,
  bookshelfBooks,
  onShelfChange,
}: IbookShelfProps) => {
  const [newRating, setNewRating] = useState([]);

  const starConfig = {
    size: 20,
    value: 0,
    count: 5,
    a11y: true,
    isHalf: true,
    color2: '#ffd700',
    edit: true,
  };

  const ratingStarsChanged = () => {
    return setNewRating(newRating);
  };

  return (
    <BookShelfs>
      <BookShelfTitle>{bookshelfTitle}</BookShelfTitle>
      <BookShelfBooks>
        <BooksGrid>
          {bookshelfBooks.map((book: BookType) => {
            return (
              <li key={book.id}>
                <Book book={book} onShelfChange={onShelfChange} />
                <ReactStars onChange={ratingStarsChanged} {...starConfig} />
              </li>
            );
          })}
        </BooksGrid>
      </BookShelfBooks>
    </BookShelfs>
  );
};

export default BookShelf;
