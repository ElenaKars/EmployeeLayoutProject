import styled from "@emotion/styled";

interface MainButtonStyledProps {
  disabled: boolean;
}

export const MainButton = styled.button<MainButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 70px;
  padding: 20px 0;
  background-color: ${({ disabled }) => (disabled ? "#bebec7" : "#1f27f5")};
  border: none;
  border-radius: 4px;
  font-size: 20px;
  color: white;

  ${({ id }) =>
    id === "reset-button" &&
    `
    background-color: grey;
    cursor: pointer;

    &:hover {
      background-color: rgb(93, 92, 92);
    }
  `}
`;
export const ButtonImage = styled.img`
  width: 23px;
  height: 23px;
  filter: invert(100%);
`;
