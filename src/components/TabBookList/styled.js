import styled from 'styled-components';

export const SingleBook = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 5px 10px;
`;

export const AuthorName = styled.div``;

export const BookTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    margin: 0;
  }

  button {
    font-weight: 600;
    cursor: pointer;
  }
`;

export const DescriptionContent = styled.div`
  p {
    margin: 0;
  }
`;
