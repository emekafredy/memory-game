import { useSelector } from "react-redux";
import { getStatsState } from "../store/slices/stats.slice";
import ConfettiGIF from "../assets/icons/confetti.gif";
import { Button } from "./Button";
import { FC } from "react";
import { useFetchStats } from "../hooks/use-fetch-stats.hook";

export const WinningMessage: FC<{
  setStep: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setStep }) => {
  useFetchStats();
  const { stats } = useSelector(getStatsState);

  return (
    <div className=" w-[100%] sm:w-[95%] md:w-[700px] m-auto mb-48">
      <div className="sm:rounded-lg text-center bg-white-100 p-2 sm:p-2 md:p-10 mt-8 bg-[url('assets/icons/background-stars.svg')]">
        <img
          src={ConfettiGIF}
          className="w-32 h-32 m-auto"
          alt="nice-game-gif"
        />
        <h2 className="text-xl text-purple-100">Nice Game!!! </h2>
        <div className="flex flex-col w-[60%] m-auto p-8 my-6">
          <p className="text-xl font-bold italic">
            {stats?.previousScore?.moves} Moves to Complete
          </p>
        </div>

        <Button
          primary
          large
          rounded
          buttonType="button"
          title="Start New Game"
          handleClick={() => setStep(1)}
          classExt="w-[100%] md:w-[50%] mb-8"
          testId="select-numbers-option"
        />
      </div>
    </div>
  );
};
