import styled from 'styled-components';

export const ListBooksTitle = styled.div`
  padding: 2rem 0;
  background: var(--surface-color);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-weight: 700;
    margin: 0;
    color: var(--primary-color);
    font-size: 2.5rem;
    letter-spacing: 1px;
  }
`;

export const LoadingStyle = styled.div`
  display: flex;
  justify-content: center;
`;
