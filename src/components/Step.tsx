import { classnames } from "utils";

export const Step: React.FC<StepProps> = ({ isAlpha, isDark, ...props }) => {
  return (
    <div
      className={classnames(
        "aspect-[0.85] w-[30px] sm:aspect-[1.5] sm:w-[50px]",
        {
          "bg-overlay-grid": props.isOverlay,
          "bg-white": isAlpha && !isDark,
          "bg-transparent": isAlpha && isDark,
        }
      )}
    >
      <div className={classnames("h-full w-full", props.step)} />
    </div>
  );
};

interface StepProps {
  step: string;
  isDark: boolean;
  isAlpha: boolean;
  isOverlay?: boolean;
}
