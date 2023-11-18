import { FC } from "react";
import { ICard } from "../interface/card-grid.interface";
import HelpIcon from "../assets/icons/icon-help.svg";

export const Card: FC<ICard> = ({
  theme,
  index,
  data,
  setSelectedItem,
  isSelected,
  loading,
}) => {
  return (
    <>
      {theme === "numbers" ? (
        <button
          id={index}
          data-value={data}
          className={`text-md sm:text-lg ${
            isSelected(data, index)
              ? "bg-white-200 text-orange-100"
              : "bg-gray-100 text-white-500 "
          } h-24 p-2 md:p-8 font-bold flex
            justify-center items-center cursor-pointer rounded-md transition-all duration-500 rotate-btn`}
          onClick={(e) => setSelectedItem(e)}
          disabled={loading}
        >
          {isSelected(data, index) ? data : "?"}
        </button>
      ) : (
        <button
          id={index}
          data-value={data}
          className={`${
            isSelected(data, index) ? "bg-white-200" : "bg-gray-100"
          } p-2 sm:p-4 cursor-pointer rounded-md flex justify-center items-center
                  transition-all duration-500 rotate-btn`}
          onClick={(e) => setSelectedItem(e)}
          disabled={loading}
        >
          {isSelected(data, index) ? (
            <img src={data} alt={data} />
          ) : (
            <img src={HelpIcon} alt="hidden-object-icon" />
          )}
        </button>
      )}
    </>
  );
};
