export interface IGameSettings {
  selectTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
  gridSize: string;
  setGridSize: React.Dispatch<React.SetStateAction<string>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}
