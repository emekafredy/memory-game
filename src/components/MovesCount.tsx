import { FC } from "react";
import { IMovesCount } from "../interface/card-grid.interface";
import { Button } from "./Button";

export const MovesCount: FC<IMovesCount> = ({ moves, setStep }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4">
      <p
        className="rounded-lg text-center bg-white-500 text-md font-bold
          py-3 w-[100%] md:w-[50%] text-black-100 flex justify-between px-6"
      >
        <span className="opacity-50">Moves:</span>
        <span className="opacity-75">{moves}</span>
      </p>

      <Button
        primary
        large
        rounded
        buttonType="button"
        title="Restart"
        handleClick={() => setStep(1)}
        classExt="w-[100%] md:w-[50%]"
        testId="select-numbers-option"
      />
    </div>
  );
};
