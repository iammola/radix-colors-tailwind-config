import { classnames } from "utils";

export const Scale: React.FC<ScaleProps> = ({ isOverlay, scale, steps }) => {
  const isDark = /darka?$/i.test(scale);
  const isAlpha = scale.endsWith("A") && !isOverlay;

  return (
    <div className="flex items-center justify-center gap-x-[2px]">
      <code className="min-w-[7.5rem] grow pr-4 text-[13px] text-slate-11 dark:text-slate-dark-11">
        {scale}
      </code>
      {steps.map((step) => (
        <div
          key={step}
          className={classnames(
            "aspect-[0.85] w-[30px] sm:aspect-[1.5] sm:w-[50px]",
            {
              "bg-overlay-grid": isOverlay,
              "bg-white": isAlpha && !isDark,
              "bg-transparent": isAlpha && isDark,
            }
          )}
        >
          <div className={classnames("h-full w-full", step)} />
        </div>
      ))}
    </div>
  );
};

interface ScaleProps {
  scale: string;
  steps: string[];
  isOverlay?: boolean;
}
