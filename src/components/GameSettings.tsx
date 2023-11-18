import { FC, useEffect } from "react";
import { Button } from "./Button";
import { IGameSettings } from "../interface/game-settings.interface";

export const GameSettings: FC<IGameSettings> = ({
  theme,
  selectTheme,
  gridSize,
  setGridSize,
  step,
  setStep,
  checked,
  setChecked,
}) => {
  function handleChange(e: any) {
    setChecked(e.target.checked);
  }

  useEffect(() => {
    selectTheme("");
    setGridSize("");
    setChecked(true);
  }, []);
  return (
    <div
      className="bg-white-300 p-10 rounded-lg mt-8
      w-[90%] sm:w-[75%] md:w-[500px] m-auto bg-[url('assets/icons/background-stars.svg')] mb-44"
    >
      <span className="text-sm text-black-100 tracking-widest opacity-75 italic">
        Game starts with all cards face down and player turns over two cards per
        attempt. Player scores 5 points when both cards picked match.
      </span>

      <div className="mt-6">
        <p className="text-md font-bold mb-2">Select Theme:</p>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <Button
            selected={theme === "numbers"}
            secondary={theme !== "numbers"}
            large
            rounded
            buttonType="button"
            title="Numbers"
            handleClick={() => selectTheme("numbers")}
            classExt="w-[100%] md:w-[50%]"
            testId="select-numbers-option"
          />

          <Button
            selected={theme === "objects"}
            secondary={theme !== "objects"}
            large
            rounded
            buttonType="button"
            title="Objects"
            handleClick={() => selectTheme("objects")}
            classExt="w-[100%] md:w-[50%]"
            testId="select-objects-option"
          />
        </div>
      </div>

      <div className="mt-6">
        <p className="text-md font-bold mb-2">Grid Size:</p>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <Button
            selected={gridSize === "4"}
            secondary={gridSize !== "4"}
            large
            rounded
            buttonType="button"
            title="4x4"
            handleClick={() => setGridSize("4")}
            classExt="w-[100%] md:w-[50%]"
            testId="select-4x4-option"
          />

          <Button
            selected={gridSize === "6"}
            secondary={gridSize !== "6"}
            large
            rounded
            buttonType="button"
            title="6x6"
            handleClick={() => setGridSize("6")}
            classExt="w-[100%] md:w-[50%]"
            testId="select-6x6-option"
          />
        </div>
      </div>

      <div className="mt-12">
        <div className="flex items-center justify-between">
          <p className="text-md font-bold mb-2">Game Sound</p>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={checked}
              className="sr-only peer"
              onChange={handleChange}
            />
            <div
              className="w-11 h-6 bg-silver-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white-300
              rounded-full peer peer-checked:after:translate-x-full
              rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white-100 after:content-['']
              after:absolute after:top-[2px] after:start-[2px] after:bg-white-100 after:border-silver-200
              after:border after:rounded-full after:h-5 after:w-5 after:transition-all
              peer-checked:bg-purple-100"
            ></div>
            <span className="ms-3 text-sm font-medium text-gray-900">
              {checked ? "On" : "Off"}
            </span>
          </label>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <Button
            success
            large
            rounded
            buttonType="button"
            title="Start Game"
            handleClick={() => setStep(step + 1)}
            classExt="w-[100%]"
            testId="step-2-proceed"
            disabled={theme === "" || gridSize === ""}
          />
        </div>
      </div>
    </div>
  );
};
