const colors = require("@radix-ui/colors");

/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  darkMode: "class",
  content: ["src/**.tsx", "src/data.ts"],
  theme: { colors: radixToTailwindConfig() },
};

/**
 * @param {string} step
 * @param {string} value
 */
function getColor(step, value) {
  return `var(--${step}, ${value})`;
}

/**
 * @param {string} step
 * @param {string} color
 */
function getStep(step, color) {
  return step.replace(new RegExp(`${color}a?`, "i"), "");
}

function radixToTailwindConfig() {
  const initial = { current: "currentColor", transparent: "transparent" };

  return Object.entries(colors).reduce((acc, [color, colorSteps]) => {
    const arr = color.split(/(?=[A-Z])/);
    const steps = Object.entries(colorSteps).reduce(
      (acc, [step, value]) => ({
        ...acc,
        [getStep(step, arr[0])]: getColor(step, value),
      }),
      {}
    );

    return {
      ...acc,
      [arr.join("-").toLowerCase()]: steps,
    };
  }, initial);
}
