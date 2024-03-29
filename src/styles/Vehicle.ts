import styled from 'styled-components';

export const WrapperInfo = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 100%;
`;

export const InfoVehicle = styled.div`
  display: inline-block;
  width: 39.6rem;
  padding: 0 2%;
  align-items: middle;
  margin-top: 1rem;

  svg:hover{
    filter: brightness(0.8);
    transition: all 400ms;
  }
    
  @media(max-width: 900px) {
    width: 87vw;
    text-align: left;

    & > div{

      & > img{
        width: 100%;
      }
    }
  }
`;

export const DescriptionVehicle = styled.div`
 	vertical-align: top;
	display: inline-block;
  padding: 20px;
  text-align: left !important;

  @media(max-width: 900px) {
    display: block;
    margin-left: 3rem;
  }

  h2 {
    font-size: 22px;
  }

  p {
    margin-top: 5px;
    font-size: 19px;
    text-align: left !important;
    max-width: 300px;
  }
  
  button {
    text-align: center;
    display: block;
    line-height: 40px;
    background-color: #eb2d2d;
    text-decoration: none;
    border-bottom: 5px solid #b21e1e;
    color: white;
    font-size: 16px;
    font-style: italic;
    width: 150px;
    margin-top: 1rem;

    &:hover{
      background-color: #c22323;
    }
  }
`;

export const ParentImage = styled.div`
  border: 1px solid black;
`