import styled from 'styled-components';

export const TagWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 10px;
`;

export const SingleTag = styled.div`
  background: #ddd;
  padding: 5px;
  margin-right: 8px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  p {
    margin: 0;
  }
`;