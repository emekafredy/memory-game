export interface ICardGrid {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  theme: string;
  gridSize: string;
  playSound: boolean;
}

export interface IItem {
  item: string;
  id: string;
}

export interface IMovesCount {
  moves: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export interface IScoreStats {
  stats: {
    previousScore: {
      moves: number;
    };
    bestScore: {
      moves: number;
    };
  };
}

export interface ICard {
  theme: string;
  index: string;
  data: string;
  setSelectedItem: (e: any) => void;
  isSelected: (data: string, index: string) => boolean;
  loading: boolean;
}
