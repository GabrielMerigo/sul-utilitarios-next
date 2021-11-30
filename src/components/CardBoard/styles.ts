import styled from "styled-components";

export const Img = styled.img`
	background-size: 100% 100%;
	width: 100%;
	height: 29rem;
	background-repeat: no-repeat;
	border-bottom: solid 5px var(--gray-light);
  margin-top: 2rem;
`;

interface CardBoardProps {
  width: number;
  top: number;
  content: string;
}

export const CardBoardContainer = styled.div<CardBoardProps>`
  padding: 30px 100px;
  position: absolute;
  top: ${props => props.top}rem;
  display: flex;
  flex-direction: column;

  .single {
    margin-top: 20px;
    width: ${props => props.width}rem;
    font-style: italic;
    border: 0;
    height: 4rem;
    padding: 0px 30px;
    text-transform: uppercase;
    color: white;
  }

  h1{
    color: white;
    margin: 0rem auto;
  }
`;