import { FC } from "react";
import { ICard } from "../interface/card-grid.interface";
import HelpIcon from "../assets/icons/icon-help.svg";

export const Card: FC<ICard> = ({
  theme,
  index,
  data,
  setSelectedItem,
  isSelected,
}) => {
  return (
    <>
      {theme === "numbers" ? (
        <div
          id={index}
          data-value={data}
          className="text-md sm:text-lg bg-white-200 h-24 p-2 md:p-8 font-bold flex justify-center items-center text-orange-200 cursor-pointer rounded-md"
          onClick={(e) => setSelectedItem(e)}
        >
          {isSelected(data, index) ? data : "?"}
        </div>
      ) : (
        <div
          id={index}
          data-value={data}
          className="bg-white-100 p-2 sm:p-4 cursor-pointer rounded-md flex justify-center items-center
                  transition-all duration-500"
          onClick={(e) => setSelectedItem(e)}
        >
          {isSelected(data, index) ? (
            <img src={data} alt={data} />
          ) : (
            <img src={HelpIcon} alt="hidden-object-icon" />
          )}
        </div>
      )}
    </>
  );
};
