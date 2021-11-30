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
  h2{
    font-size: 2.5rem;
    font-style:italic;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0 auto;
    li {
      margin:0.5rem;
      width:31.5%;
      background: var(--gray-light);
      border-radius: 0.5rem;
      margin-top: 1rem;
      transition: all 400ms;
      div {
        background: var(--gray-dark);
        height: 40%;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius:10px;
        padding-left: 0.7rem;
        svg{
          margin-right:0.2rem;
          color: #fa5d41;
        }
        h4, p{
          color: #ccc;
        }
      }
    }
    li:hover{
      filter: brightness(0.8);
      cursor: pointer;
      box-shadow: 6px 2px 21px 5px rgba(0,0,0,0.46);
    }
    
    img{
      width:90%;
    }
  }
`;