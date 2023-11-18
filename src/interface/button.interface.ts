export interface IButtonProps {
  title: string | React.ReactNode;
  fullwidth?: boolean;
  rounded?: boolean;
  roundedBG?: boolean;
  primary?: boolean;
  secondary?: boolean;
  selected?: boolean;
  transparent?: boolean;
  success?: boolean;
  buttonType: "button" | "submit" | "reset";
  handleClick?: () => void;
  disabled?: boolean;
  large?: boolean;
  small?: boolean;
  classExt?: string;
  testId: string;
}
