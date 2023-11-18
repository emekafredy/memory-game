import { FC } from "react";
import { IScoreStats } from "../interface/card-grid.interface";

export const ScoreStats: FC<IScoreStats> = ({ stats }) => {
  return (
    <>
      {(stats?.bestScore || stats?.previousScore) && (
        <div className="flex flex-col md:flex-row md:items-center gap-4 mt-8">
          <div className="bg-white-500 w-[100%] md:w-[50%] rounded-lg">
            <p className="font-bold py-3 px-6 uppercase text-purple-100">
              Previous Score:
            </p>
            <p
              className="rounded-lg text-center text-md font-bold
                text-black-100 flex justify-between items-center py-3 px-6"
            >
              <span className="opacity-50">Moves:</span>
              <span className="opacity-75">{stats?.previousScore?.moves}</span>
            </p>
          </div>

          <div className="bg-white-500 w-[100%] md:w-[50%] rounded-lg">
            <p className="font-bold py-3 px-6 uppercase text-purple-100">
              Best Score:
            </p>
            <p
              className="rounded-lg text-center text-md font-bold
                text-black-100 flex justify-between items-center py-3 px-6"
            >
              <span className="opacity-50">Moves:</span>
              <span className="opacity-75">{stats?.bestScore?.moves}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
