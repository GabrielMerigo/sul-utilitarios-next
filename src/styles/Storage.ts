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

  @media(max-width: 900px) {
    & > div{
      margin: 0.5rem;
    }
    
    img{
      width: 100%;
    }
  }
`;