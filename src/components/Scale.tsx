import { Step } from "components/Step";

export const Scale: React.FC<ScaleProps> = ({ isOverlay, scale, steps }) => {
  const isDark = /darka?$/i.test(scale);
  const isAlpha = scale.endsWith("A") && !isOverlay;

  return (
    <div className="flex items-center justify-center gap-x-[2px]">
      <code className="min-w-[7.5rem] grow pr-4 text-[13px] text-slate-11 dark:text-slate-dark-11">
        {scale}
      </code>
      {steps.map((step, idx) => (
        <Step key={step} {...{ idx, step, isDark, isAlpha, isOverlay }} />
      ))}
    </div>
  );
};

interface ScaleProps {
  scale: string;
  steps: string[];
  isOverlay?: boolean;
}
