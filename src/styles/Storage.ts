import styled from "styled-components";

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  
  .loader{
    width: 20rem;
    height: 20rem;
    margin: 2rem 0;
    color: var(--gray-dark);
    animation: spin 1s linear infinite;
  }
  @keyframes spin{
    to { transform: rotate(360deg) }
  }
`;

export const CarList = styled.div`
  max-width: 900px;
  margin:0 auto;

  .warning{
    width: 900px;
  }

  & > .boxCars{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
  }

  @media(max-width: 900px) {
    & > .boxCars{
      grid-template-columns: 1fr;
    }

    & > .boxCars > div{
      width: 95%;
      margin: 0 auto;
    }
    
    img{
      width: 100%;
    }

    .warning{
      width: 100%;
    }
  }
`;