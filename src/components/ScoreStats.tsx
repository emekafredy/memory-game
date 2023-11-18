import { FC } from "react";
import { IScoreStats } from "../interface/card-grid.interface";

export const ScoreStats: FC<IScoreStats> = ({ stats }) => {
  return (
    <>
      {(stats?.bestScore || stats?.previousScore) && (
        <div className="flex flex-col md:flex-row md:items-center gap-4 mt-8">
          <div className="flex items-center justify-between bg-white-500 w-[100%] md:w-[50%] rounded-lg p-4">
            <span className="text-purple-100 font-bold">Previous Score:</span>
            <span className="text-black-100 font-bold opacity-75">
              {stats?.previousScore?.moves} moves
            </span>
          </div>

          <div className="flex items-center justify-between bg-white-500 w-[100%] md:w-[50%] rounded-lg p-4">
            <span className="text-purple-100 font-bold">Best Score:</span>
            <span className="text-black-100 font-bold opacity-75">
              {stats?.bestScore?.moves} moves
            </span>
          </div>
        </div>
      )}
    </>
  );
};
