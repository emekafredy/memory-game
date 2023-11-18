import { useState, useEffect } from "react";
import { ICardGrid, IItem } from "../interface/card-grid.interface";
import { generateNumbers, generateIcons } from "../helpers";
import { saveScore } from "../helpers/stats.helper";
import ClickSound from "../assets/audios/click.wav";
import CorrectSound from "../assets/audios/correct.wav";
import WrongSound from "../assets/audios/wrong.wav";
import WinSound from "../assets/audios/win.wav";

export const useGamePlay = ({
  step,
  setStep,
  theme,
  gridSize,
  playSound,
}: ICardGrid) => {
  const emptyItemsState = { item: "", id: "" };
  const [loading, setLoading] = useState<boolean>(false);
  const [gridData, setGridData] = useState<any[]>([]);
  const [score, setScore] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [itemsWon, setItemsWon] = useState<any[]>([]);
  const [pairsWon, setPairsWon] = useState<number>(0);
  const [size] = useState<number>(gridSize === "4" ? 8 : 18);
  const [firstItem, setFirstItem] = useState<IItem>(emptyItemsState);
  const [secondItem, setSecondItem] = useState<IItem>(emptyItemsState);

  const [selectCardAudio] = useState(new Audio(ClickSound));
  const [correctPairAudio] = useState(new Audio(CorrectSound));
  const [wrongPairAudio] = useState(new Audio(WrongSound));
  const [gameWonAudio] = useState(new Audio(WinSound));

  const isSelected = (item: string, id: string) => {
    return (
      (firstItem.item === item && firstItem.id === id) ||
      (secondItem.item === item && secondItem.id === id) ||
      itemsWon.includes(item)
    );
  };

  const setSelectedItem = (e: any) => {
    if (playSound) selectCardAudio.play();
    const target = e.currentTarget;
    const id = target.id;
    const item = target.getAttribute("data-value");

    if (firstItem.item === "") {
      setFirstItem({ item, id });
    } else if (secondItem.item === "") {
      if (firstItem.item === item && firstItem.id === id) {
        return;
      } else {
        setSecondItem({ item, id });
      }
    } else {
      return;
    }
  };

  const getGridData = () => {
    if (theme === "numbers") {
      const data = generateNumbers(size);
      setGridData(data);
    } else {
      const data = generateIcons(size);
      setGridData(data);
    }
  };

  useEffect(() => {
    getGridData();
  }, []);

  useEffect(() => {
    const handleCardsSelect = async () => {
      if (firstItem.item !== "" && secondItem.item !== "") {
        await setLoading(true);
        if (firstItem.item === secondItem.item) {
          if (playSound) await correctPairAudio.play();
          await setScore(score + 5);
          await setItemsWon([...itemsWon, firstItem.item]);
          await setPairsWon(pairsWon + 1);
        } else {
          if (playSound) await wrongPairAudio.play();
        }

        await setMoves(moves + 1);
        await setTimeout(function () {
          setFirstItem({ item: "", id: "" });
          setSecondItem({ item: "", id: "" });
        }, 1000);
        setLoading(false);
      }
    };

    if (pairsWon === size) {
      saveScore(moves);
      setStep(step + 1);
      if (playSound) gameWonAudio.play();
    }

    handleCardsSelect().catch((err) => alert(`ERROR: ${err.message}`));
  }, [firstItem, secondItem]);

  return {
    gridData,
    moves,
    isSelected,
    setSelectedItem,
    loading,
  };
};
