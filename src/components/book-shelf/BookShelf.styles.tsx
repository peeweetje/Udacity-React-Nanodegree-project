import styled from 'styled-components'


export const BookShelfs = styled.div`
 padding: 0 0.625rem 1.25rem;
 margin-bottom: 2rem;

 @media (min-width: 37.5rem) {
    padding: 0 1.25rem 2.5rem;
}
`
export const BookShelfTitle = styled.h2`
  border-bottom: 1px solid var(--secondary-text-color);
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`
export const BookShelfBooks = styled.div`
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: -20px;
    right: -20px;
    height: 20px;
    background: var(--shelf-wood);
    box-shadow: 0 5px 10px var(--shelf-shadow);
    border-radius: 2px;
    z-index: 0;
  }
`
export const BooksGrid = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;

  li {
    padding: 0.625rem 1.5rem;
    text-align: left;
    position: relative;
  }
`