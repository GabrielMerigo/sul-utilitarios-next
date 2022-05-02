import styled from 'styled-components';

export const LineTitle = styled.div`
  max-width: 900px;
	margin: 5px auto;
	position: relative;
	text-align: center;
  margin-top: 3rem;
  
  .ln1 {
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

export const ContainerButton = styled.div`
	margin: 6em auto;
  width: 100%;
  display: flex;
  justify-content:center;

  button{
    padding: 2rem;
    width: 25%;
    font-size: 1.3rem;
    display: flex;
    text-align: center;
    justify-content: center;
    line-height:2rem;
    border-radius: 1rem;
    border: 1px solid var(--gray-dark);
    background-color: var(--gray-light);
    color: white;
    transition: all 400ms;
    svg {
      width: 35px;
      height: 35px;
      margin-left: 0.5rem;
    }
    &:hover{
      filter: brightness(0.7);
    }

    @media(max-width: 900px) {
      width: 350px;
      padding: 1.5rem;
    }
  }

  button:nth-child(2){
    margin-left: 1rem;
    background-color: var(--gray-dark)
  }
`;