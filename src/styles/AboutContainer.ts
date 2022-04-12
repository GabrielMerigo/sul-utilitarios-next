import styled from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  flex-direction:column;

  .imgCompany{
    background-color: rgb(200, 200, 500);
    width: 60rem;
    margin: 0 auto;
    padding-top: 25rem;
    border: 1px solid black;

    @media(max-width: 900px) {
      width: 30rem;
    }
  }

  .aboutCompany{
    margin: 1rem auto;
    max-width: 950px;
    h2{
      text-align: left;
      font-size: 1.5rem;
    }

    @media(max-width: 900px) {
      margin-left: 0.8rem;

      h2{
        text-align: left;
        font-size: 1.3rem;
      }
    }
  }

  .aboutOwner{
    margin: 1rem auto;
    max-width: 950px;
    display: flex;
    justify-content: row;

    .imgOwner{
      width:150rem;
      border: 1px solid black;
      height: 22rem;
      margin-right: 1rem;
    }

    @media(max-width: 900px) {
      flex-direction: column;
      
      .imgOwner{
        width:29rem;
        margin: 1rem;
      }

      p{
        padding: 1rem;
      }
    }
  }
`;