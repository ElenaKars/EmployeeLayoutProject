export interface ButtonProps {
  id?: string;
  name?: string;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  imgSrc?: string;
  altImg?: string;
  disabled?: boolean;
}
