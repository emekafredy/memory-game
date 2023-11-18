import { FC } from "react";
import className from "classnames";
import { IButtonProps } from "../interface/button.interface";

export const Button: FC<IButtonProps> = ({
  title,
  fullwidth,
  rounded,
  roundedBG,
  primary,
  secondary,
  transparent,
  success,
  selected,
  buttonType,
  handleClick,
  disabled = false,
  large,
  small,
  classExt,
  testId,
}) => {
  const classes = className(
    `sm-mobile:text-s desktop:text-m font-bold transition-all
    duration-500 disabled:opacity-50 disabled:cursor-not-allowed ${classExt}`,
    {
      "w-full": fullwidth,
      rounded: rounded,
      "rounded-full": roundedBG,
      "py-3": large,
      "py-2": small,
      "bg-purple-100 text-white-100 opacity-[0.85]": selected,
      "bg-purple-100 text-white-100 opacity-[0.85] hover:bg-purple-200":
        primary,
      "bg-silver-300 text-purple-100 hover:bg-silver-100": secondary,
      "bg-transparent text-purple-100 hover:text-purple-200": transparent,
      "bg-green-100 text-white-100 hover:bg-green-200": success,
    }
  );

  return (
    <button
      className={classes}
      type={buttonType}
      onClick={handleClick}
      disabled={disabled}
      data-testid={testId}
    >
      {title}
    </button>
  );
};
