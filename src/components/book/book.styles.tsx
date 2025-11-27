import styled from 'styled-components'


export const BookContainer = styled.div`
  width: 140px;
  margin-top: 1rem;
  perspective: 1000px;
`
export const BookTop = styled.div`
  position: relative;
  height: 200px;
  display: flex;
  align-items: flex-end;
  transition: transform 0.4s ease;
  transform-style: preserve-3d;
  cursor: pointer;

  &:hover {
    transform: rotateY(-10deg) translateY(-5px);
    
    & > div:first-child {
      box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
    }
  }
`
export const BookCover = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: #eee;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.3);
  transition: box-shadow 0.3s ease;
`
export const BookShelfChanger = styled.div`
  position: absolute;
  right: -10px;
  bottom: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--primary-color);
  background-image: url('/src/icons/arrow-drop-down.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: transform 0.2s ease, background-color 0.2s;
  z-index: 10;

  &:hover {
    transform: scale(1.1);
    background-color: #9b59b6;
  }

  select {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;
export const BookTitle = styled.div`
 margin-top: 0.8rem;
 font-size: 0.9rem;
 font-weight: 600;
 color: var(--text-color);
 line-height: 1.2;
`
export const BookAuthors = styled.div`
 color: var(--secondary-text-color);
 font-size: 0.8rem;
 margin-top: 0.2rem;
`
