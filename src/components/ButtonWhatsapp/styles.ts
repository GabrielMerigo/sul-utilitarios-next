import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;

  background-color: #34af23;
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 4px 10px 15px 5px rgba(0,0,0,0.24);
  cursor: pointer;

  &:hover{
    filter: brightness(0.8);
    transition: 500ms all;
  }
`;