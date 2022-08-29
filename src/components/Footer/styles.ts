import styled from 'styled-components';

interface FooterContainerProps {
  position: string;
  direction: string;
  marginTop: string;
}

export const FooterContainer = styled.section<FooterContainerProps>`
  width: 100vw;
  height: 9rem;
  padding: 0.3rem 2rem;
  background: var(--gray-dark);
  display: flex;
  flex-direction: column;
  text-align: center;
  position: ${props => props.position};
  bottom: ${props => props.direction};
  margin-top: ${props => props.marginTop}rem;

  p{
    color: white;
    font-size: 1.2rem;
    line-height:2rem;
  } 
  
  p:nth-child(1){
    margin-top: 2rem;
  }

  span{
    color: #4298f5;
  }
`;