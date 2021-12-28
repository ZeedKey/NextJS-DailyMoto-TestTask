import styled from "styled-components";

const QuoteStyled = styled.div`
  margin-top: 15vmax;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
`;
const Content = styled.p`
  font-size: 3ch;
  text-align: center;
  padding: 0.5em;
  border-bottom: 1px solid black;
  margin-bottom: 0.5em;
`;
const Author = styled.p`
  text-align: right;
  font-style: italic;
`;

export default function Quote({ quote }) {
  return (
    <QuoteStyled>
      <Content>{quote.content}</Content>
      <Author>-{quote.author}</Author>
    </QuoteStyled>
  );
}
