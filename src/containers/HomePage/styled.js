import styled from 'styled-components';

export const TabsWrapper = styled.div`
  @import url(\`https://fonts.googleapis.com/css?family=Montserrat|Roboto\`);

  min-width: 320px;
  width: 100%;
  font-family: Roboto, sans-serif;
`;

export const TabsContainer = styled.div`
  border: 1px solid #999;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

export const TabsTitles = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  height: 50px;
`;

export const SingleTitle = styled.div`
  flex: 1 0 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid
    ${props => (props.activeTab ? 'transparent' : '#999')};

  &:not(:last-of-type) {
    border-right: 1px solid #999;
  }

  a {
    color: ${props => props.activeTab && '#5658db'};
  }
`;

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;

export const TagContent = styled.div`
  height: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const FiltredText = styled.p`
  margin-right: 5px;
`;

export const ClearTagsBtn = styled.button`
  font-weight: 600;
  cursor: pointer;
`;
