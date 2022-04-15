import { classnames } from "./utils";

const Color: React.FC<ColorProps> = ({ color, isOverlay, scales }) => {
  return (
    <div className="mt-[45px] space-y-[2px]">
      {color && (
        <h3 className="pb-[3px] text-[17px] capitalize text-slate-12 dark:text-slate-dark-12">
          {color}
        </h3>
      )}
      <div className="flex items-center justify-center gap-x-[2px]">
        <div className="min-w-[7.5rem] grow pr-4" />
        {Array.from({ length: 12 }, (_, i) => (
          <span
            key={i}
            className="inline-block w-[30px] text-center text-slate-11 dark:text-slate-dark-11 sm:w-[50px]"
          >
            {i + 1}
          </span>
        ))}
      </div>
      {Object.entries(scales).map(([scale, steps]) => (
        <Scale key={scale} {...{ isOverlay, scale, steps }} />
      ))}
    </div>
  );
};

const Scale: React.FC<ScaleProps> = ({ isOverlay, scale, steps }) => {
  const isDarkAlpha = scale.endsWith("DarkA");
  const isLightAlpha = !isDarkAlpha && !isOverlay && scale.endsWith("A");

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
              "bg-white": isLightAlpha,
              "bg-transparent": isDarkAlpha,
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

interface ColorProps {
  color: string;
  isOverlay?: boolean;
  scales: Record<string, string[]>;
}

export default Color;
