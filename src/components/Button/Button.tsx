import { ButtonProps } from "./types";
import { MainButton, ButtonImage } from "./styles";

function Button({
  id,
  name,
  type = "button",
  onClick,
  imgSrc = "",
  altImg = "",
  disabled = false
}: ButtonProps) {

  return (
    <MainButton id={id} type={type} onClick={onClick} disabled={disabled}>
      {name}
      {imgSrc && <ButtonImage src={imgSrc} alt={altImg} />}
    </MainButton>
  );
}

//default export must be only one in the file
export default Button;

