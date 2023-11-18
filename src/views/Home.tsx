import { useState } from "react";
import { GameSettings } from "../components/GameSettings";
import { CardGrid } from "../components/CardGrid";
import { WinningMessage } from "../components/WinningMessage";

export const Home = () => {
  const [theme, setTheme] = useState<string>("");
  const [gridSize, setGridSize] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <div>
      {step === 1 && (
        <GameSettings
          theme={theme}
          selectTheme={setTheme}
          gridSize={gridSize}
          setGridSize={setGridSize}
          step={step}
          setStep={setStep}
          checked={checked}
          setChecked={setChecked}
        />
      )}

      {step === 2 && (
        <CardGrid
          step={step}
          setStep={setStep}
          theme={theme}
          gridSize={gridSize}
          playSound={checked}
        />
      )}

      {step === 3 && <WinningMessage setStep={setStep} />}
    </div>
  );
};
