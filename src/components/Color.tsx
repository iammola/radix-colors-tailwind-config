import { Scale } from "components/Scale";

export const Color: React.FC<ColorProps> = ({ color, isOverlay, scales }) => {
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

interface ColorProps {
  color: string;
  isOverlay?: boolean;
  scales: Record<string, string[]>;
}
