const colors = require("@radix-ui/colors");

/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["index.html"],
  theme: { colors: radixToTailwindConfig() },
};

function radixToTailwindConfig() {
  const initial = { current: "currentColor", transparent: "transparent" };

  return Object.entries(colors).reduce((acc, [color, colorSteps]) => {
    const arr = color.split(/(?=[A-Z])/);
    const steps = Object.entries(colorSteps).reduce(
      (acc, [step, value]) => ({
        ...acc,
        [step.replace(new RegExp(`${arr[0]}a?`, "i"), "")]: value,
      }),
      {}
    );

    return {
      ...acc,
      [arr.join("-").toLowerCase()]: steps,
    };
  }, initial);
}
