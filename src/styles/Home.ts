import styled from 'styled-components';

export const CarList = styled.div`
  max-width: 900px;
  margin:0 auto;

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
      margin-top: 2rem;
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

export const WrapperBanner = styled.div`
  display: flex;
  margin-top: 1rem;

  h1{
    font-size: 2rem;
  }

  .img{
    margin-left: 21.5rem;
  }

  div{
    position: absolute;
    width: 370px;
    height: 450px;
    z-index: 999;
    background: #333333;
    display: block;
    margin-right: 2rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;

    h1{
      width: 400px;
      color: white;
      font-size: 3.5rem;
      margin-left: 10rem;
      position: absolute;
      font-family: 'Lato', sans-serif;
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
      justify-content:space-between;
      margin-top:1rem;
      
      span{
        display: flex;
      }

      svg{
        color: #B21E1E;
      }
    
      svg:hover{
        transition: 1s ease-in-out;
        filter: brightness(0.8);
        cursor: pointer;
      }
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
	height: 30rem;
	width: 100%;
  display: flex;
  justify-content: center;
  

  iframe{
    border: 3px solid #333333;
    margin: 1.5rem auto;
    height: 432px;
    width: 47.5rem;
  }
`;

export const CardBoard = styled.div`
  padding: 30px 100px;
  position: absolute;
  top: 1rem;
  display: flex;
  flex-direction: column;
  /* background-color: red; */

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