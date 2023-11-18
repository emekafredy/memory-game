import { FC } from "react";
import { useSelector } from "react-redux";
import { getStatsState } from "../store/slices/stats.slice";
import { ICardGrid } from "../interface/card-grid.interface";
import { useFetchStats } from "../hooks/use-fetch-stats.hook";
import { MovesCount } from "./MovesCount";
import { ScoreStats } from "./ScoreStats";
import { Card } from "./Card";
import { useGamePlay } from "../hooks/use-game-play.hook";

export const CardGrid: FC<ICardGrid> = ({
  step,
  setStep,
  theme,
  gridSize,
  playSound,
}) => {
  useFetchStats();
  const { stats } = useSelector(getStatsState);
  const { gridData, moves, isSelected, setSelectedItem, loading } = useGamePlay(
    {
      step,
      setStep,
      theme,
      gridSize,
      playSound,
    }
  );

  const getGridCols = () => {
    return gridSize === "4" ? "grid-cols-4" : "grid-cols-6";
  };

  return (
    <div className=" w-[100%] sm:w-[95%] md:w-[700px] m-auto mb-24">
      <MovesCount moves={moves} setStep={setStep} />

      <div className="sm:rounded-lg text-center bg-white-400 p-2 sm:p-2 md:p-10 mt-8 bg-[url('assets/icons/background-stars.svg')]">
        <div className={`grid ${getGridCols()} gap-2`}>
          {gridData?.map((data, i) => {
            return (
              <Card
                key={i}
                theme={theme}
                index={String(i)}
                data={String(data)}
                setSelectedItem={setSelectedItem}
                isSelected={isSelected}
                loading={loading}
              />
            );
          })}
        </div>
      </div>

      <ScoreStats stats={stats} />
    </div>
  );
};
