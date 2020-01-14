import styled from "styled-components";
import CustomButton from "components/custom-button/custom-button.component";

export const StyledCartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;


export const StyledCartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
  

export const StyledEmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const StyledCartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;