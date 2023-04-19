import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  padding: 10px;
  max-width: 100%;
  width: 500px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 100%;
  width: 500px;
  color: #302403;
  text-shadow: rgb(0 0 0 / 24%) 10px 10px 5px 0px;
`;

export const StyledInput = styled.input`
  max-width: 100%;
  border: 0;
  outline: 0;
  border-radius: 8px;
  box-shadow: inset 1px 1px 3px #8ba793, inset -1px -1px 5px #fff;
  font-style: italic;
  font-size: 24px;
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
export const StyledButton = styled.button`
  background-color: #ebeb7b;
  border: dotted 5px white;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
`;
