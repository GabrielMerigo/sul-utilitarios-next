import styled from "styled-components";

export const LineTitleContainer = styled.div`
  max-width: 900px;
	margin: 5px auto;
	position: relative;
	text-align: center;

  div {
    margin-top: 1.4rem;
    position: absolute;
    border: 1px solid black;
    background-color: black;
    width: 100%;
  }

  h2 {
    font-size: 32px;
    background: white;
    position: relative;
    display: inline-block;
    text-align: center;
    padding: 0 1rem;
    text-transform: uppercase;
    font-style: italic;
  }
`;