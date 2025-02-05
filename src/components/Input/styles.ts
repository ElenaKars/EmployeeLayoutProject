import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  color: #6f6f6f;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
`;

export const InputStyled = styled.input`
  font-family: "Lato", sans-serif;
  font-size: 16px;
  /* opacity: 40%; */
  height: 50px;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #000000;

  &::placeholder {
    color: #a19f9f;
  }
`;

export const Label = styled.label``;

export const ErrorMessage = styled.div`
  height: 18px;
  color: red;
  font-size: 14px;
`;
