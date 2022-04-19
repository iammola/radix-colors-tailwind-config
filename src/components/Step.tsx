import { useState } from "react";
import {
  CheckIcon,
  CopyIcon,
  Cross2Icon,
  UpdateIcon,
} from "@radix-ui/react-icons";

import { classnames } from "utils";

export const Step: React.FC<StepProps> = ({ isAlpha, isDark, ...props }) => {
  const [copyState, setCopyState] = useState<"COPYING" | "ERROR" | "COPIED">();

  async function copyColor({ target }: React.MouseEvent<HTMLElement>) {
    setCopyState("COPYING");
    const { firstElementChild } = target as HTMLElement;

    if (!firstElementChild) return;
    const { backgroundColor } = getComputedStyle(firstElementChild);

    try {
      await navigator.clipboard.writeText(backgroundColor);
      setCopyState("COPIED");
    } catch (error) {
      setCopyState("ERROR");
      console.error(error);
    }

    setTimeout(setCopyState, 1e3, undefined);
  }

  return (
    <div
      onClick={copyColor}
      className={classnames(
        "group aspect-[0.85] w-[30px] cursor-pointer sm:aspect-[1.5] sm:w-[50px]",
        {
          "bg-overlay-grid": props.isOverlay,
          "bg-white": isAlpha && !isDark,
          "bg-transparent": isAlpha && isDark,
        }
      )}
    >
      <div
        className={classnames(
          "pointer-events-none flex h-full w-full items-center justify-center",
          props.step,
          [
            (!isDark && props.idx > 8) ||
              (!isDark && props.idx > 6) ||
              (isDark && props.idx <= 8) ||
              (isDark && props.idx <= 6),
            "text-white-a-12",
            "text-black-a-12",
          ]
        )}
      >
        {copyState === "COPYING" && (
          <UpdateIcon aria-label="copying" className="animate-spin" />
        )}
        {copyState === "COPIED" && <CheckIcon aria-label="copied" />}
        {copyState === "ERROR" && <Cross2Icon aria-label="error" />}
        {!copyState && (
          <CopyIcon
            aria-label="copy color code"
            className="opacity-0 group-hover:opacity-100"
          />
        )}
      </div>
    </div>
  );
};

interface StepProps {
  idx: number;
  step: string;
  isDark: boolean;
  isAlpha: boolean;
  isOverlay?: boolean;
}
