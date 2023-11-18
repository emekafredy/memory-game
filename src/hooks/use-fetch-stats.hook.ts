import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setStats } from "../store/slices/stats.slice";
import { getScoreStats } from "../helpers/stats.helper";
import { IStatsResponse } from "../interface/response.interface";

export const useFetchStats = () => {
  const dispatch = useDispatch();

  const getStats = async () => {
    const data = getScoreStats();
    await dispatch(setStats(data as IStatsResponse));
  };

  useEffect(() => {
    getStats();
  }, []);
};
