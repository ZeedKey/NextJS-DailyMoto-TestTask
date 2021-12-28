import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import GenButton from "../components/GenButton";
import Quote from "../components/Quote";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    await fetch("https://api.quotable.io/random?maxLength=50")
      .then((response) => response.json())
      .then((quote) => setQuote(quote));
  };

  const handleClick = () => {
    fetchQuote();
  };

  useEffect(async () => {
    await fetchQuote();
  }, []);

  return (
    <Container>
      <Quote quote={quote} />
      <GenButton handleClick={handleClick} />
      <Footer />
    </Container>
  );
}
