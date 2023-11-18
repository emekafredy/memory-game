import { IStatsResponse } from "../interface/response.interface";

export const getScoreStats = (): IStatsResponse | [] => {
  const stats = localStorage.stats;
  if (stats) {
    const result = JSON.parse(stats);
    return result;
  }

  return [];
};

export const saveScore = (moves: number): IStatsResponse => {
  const stats = localStorage.stats;
  if (stats) {
    const parsed = JSON.parse(stats);
    const newPreviousScore = { moves };
    let updatedStats: IStatsResponse;

    if (parsed.previousScore) {
      if (moves < parsed.bestScore) {
        updatedStats = {
          previousScore: newPreviousScore,
          bestScore: { moves },
        };
      } else {
        updatedStats = {
          ...parsed,
          previousScore: newPreviousScore,
        };
      }
    } else {
      updatedStats = {
        ...parsed,
        previousScore: newPreviousScore,
        bestScore: { moves },
      };
    }

    localStorage.setItem("stats", JSON.stringify(updatedStats));
    return updatedStats;
  }

  const updatedStats = {
    previousScore: { moves },
    bestScore: { moves },
  };

  localStorage.setItem("stats", JSON.stringify(updatedStats));
  return updatedStats;
};
