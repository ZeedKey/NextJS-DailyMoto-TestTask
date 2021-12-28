import styled from "styled-components";
import Image from "next/image";

const Button = styled.button`
  margin-top: 3em;
  background-color: #004cbf;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: flex;
  cursor: pointer;
  color: white;
  font-size: 1.7ch;
  padding: 10px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
  transition-property: background-color;
  transition: 0.5s;

  & p {
    margin-left: 5px;
  }
  &:hover {
    background-color: #0066ff;
  }
`;
export default function GenButton(props) {
  return (
    <Button onClick={props.handleClick}>
      <Image src="/gen.svg" alt="gen btn" width={17} height={17} />
      <p>Get new quote</p>
    </Button>
  );
}
