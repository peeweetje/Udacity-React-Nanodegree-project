import styled from 'styled-components';

export const ListBooksContents = styled.div`
  padding: 2rem 0 5rem;
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
`;

export const OpenSearch = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 100;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--primary-color);
    background-image: url('/src/icons/add.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 28px;
    box-shadow: 0 4px 10px rgba(187, 134, 252, 0.4);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    font-size: 0;
    
    &:hover {
      transform: scale(1.1) rotate(90deg);
      box-shadow: 0 6px 15px rgba(187, 134, 252, 0.6);
    }
  }
`;
