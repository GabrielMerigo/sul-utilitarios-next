import styled from 'styled-components';

export const CarList = styled.div`
  max-width: 900px;
  margin:0 auto;

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
  }
`;

export const WrapperBanner = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;

  h1{
    font-size: 2rem;
  }

  .img{
    margin-left: 3rem;
  }

  div{
    width: 100%;
    height: 450px;
    background: #333333;
    display: flex;
    flex-direction: row;
    margin-right: 2rem;
    margin-bottom: 2rem;
    padding: 20px;

    h1{
      width: 450px;
      color: white;
      font-size: 3.8rem;
      margin-left: 10rem;
      position: absolute;
      font-style: italic;
      z-index: 0;
    }

    img {
      border-radius: 0.5rem;
    }
  }

  @media(max-width: 900px) {
    .img{
      margin-left: -60px;
    }

    div{
      width: 100%;
      height: 280px;
      position: relative;
      height: 420px;
      background: #333333;
      display: flex;
      flex-direction: column;

      h1{
        width: 280px;
        height: 250px;
        font-size: 3rem;
        margin-top: 3rem;
        margin-left: 2rem;
      }
    }
  }
`;

export const Description = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  
  div:nth-child(1){
    width: 50%;
    background: var(--gray-dark);
    padding: 2.6rem 0;
    display: flex;
    justify-content: center;
    color: white;
    
    div{
      display: flex;
      flex-direction: column;

      h2{
        color: white;
        font-size: 2rem;
        font-style: italic;
        font-weight: normal;
      }
    }

    button{
      text-align: center;
      background-color: #EB2D2D;
      border: 0;
      border-bottom: 0.3rem solid #B21E1E;
      color: white;
      font-size: 1rem;
      font-style: italic;
      width: 9rem;
      margin-left: -7rem;
      height: 3rem;
      margin-top: 9.8rem;
      transition: all 300ms;

      &:hover{
        filter: brightness(0.9);
      }
    }

    @media(max-width: 900px) {
      flex-direction: column;

      div{
        padding-left: 3rem;
        ul li{
          margin-top: 10px;
        }
      }

      button{
        margin: 0 3rem;
      }
    }
  }

  div:nth-child(2){
    width: 50%;
    padding: 5rem 3rem;
    background: var(--gray-light);
    text-align: left;

    h2{
      color: white;
      font-size: 2rem;
      font-style: italic;
      font-weight: normal;
      margin-bottom: 0.5rem;
    }

    h3{
      font-size: 1.7rem;
      color: var(--gray-dark);
    }

    p{
      color: white;
      font-size: 1rem;
    }

    div{
      display: flex;
      justify-content: flex-end;
      margin-top:1rem;
    }

    @media(max-width: 900px) {
      div{
        flex-direction: column-reverse;
        h3{
          font-size: 1.5rem;
        }
      }
    }
  }

  @media(max-width: 900px) {
    display: flex;
    flex-direction: column;
    
    div:nth-child(1) {
      width: 100%;
      margin-left: 0;
    }

    div:nth-child(2) {
      width: 100%;
    }
  }
`;

export const Local = styled.div`
   .line-title{
    max-width: 900px;
    margin: 0.4rem auto;
    position: relative;
    text-align: center;

    div{
      margin-top: 1.4rem;
      position: absolute;
      border: 1px solid black;
      background-color: black;
      width: 100%;
    }

    h2 {
      font-size: 2rem;
      background: white;
      position: relative;
      display: inline-block;
      text-align: center;
      padding: 0 1rem;
      text-transform: uppercase;
      font-style: italic;
    }
  }
`;


export const Map = styled.section`
	border-top: 2px solid var(--gray-dark);
	background: var(--gray-light);
	height: fit-content;
  display: flex;
  justify-content: center;
  width: 100vw;

  iframe{
    border: 3px solid #333333;
    margin: 2rem 1rem;
    height: 432px;
    width: 100%;
  }
`;

export const CardBoard = styled.div`
  padding: 30px 100px;
  position: absolute;
  top: 1rem;
  display: flex;
  flex-direction: column;

  .single {
    margin-top: 20px;
    width: 20rem;
    font-style: italic;
    border: 0;
    height: 4rem;
    padding: 0px 30px;
    text-transform: uppercase;
    color: white;
  }
`;
