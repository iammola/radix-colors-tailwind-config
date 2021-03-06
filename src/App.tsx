import { Fragment } from "react";

import "./App.css";

import { Section } from "components/Section";
import { BrightColors, Colors, Grays, Metals, Overlays } from "data";

const App: React.FC = () => {
  return (
    <main className="bg-mauve-1 py-10 px-5 font-medium dark:bg-mauve-dark-1 sm:px-10 md:px-16 lg:px-40">
      <div className="flex items-center justify-start gap-x-2">
        <h1 className="text-4xl text-slate-12 dark:text-slate-dark-12">
          The Scales
        </h1>
        <span className="text-violet-11 dark:text-violet-dark-11">
          &middot;
        </span>
        <a
          href="https://www.radix-ui.com/docs/colors/getting-started/installation"
          className="flex items-center justify-center gap-x-2 text-violet-11 dark:text-violet-dark-11"
        >
          Original Website
        </a>
        <span className="text-violet-11 dark:text-violet-dark-11">
          &middot;
        </span>
        <a
          href="https://github.com/iammola/radix-colors-tailwind-config"
          className="flex items-center justify-center gap-x-2 text-violet-11 dark:text-violet-dark-11"
        >
          Github Repository
        </a>
      </div>
      <p className="text-slate-11 dark:text-slate-dark-11">
        An overview of all 30 Radix Colors scales.
      </p>
      <Section
        title="Colors"
        colors={Colors}
        description={
          <Fragment>
            Radix Colors provides 15 color scales, designed for white foreground
            text at step{" "}
            <code className="bg-violet-3 px-[3px] pb-[2px] text-[max(12px,_85%)] text-violet-11 dark:bg-violet-dark-3 dark:text-violet-dark-11">
              9
            </code>
            .
          </Fragment>
        }
      />
      <Section
        title="Bright Colors"
        colors={BrightColors}
        description={
          <Fragment>
            Radix Colors provides 5 bright scales, designed for black foreground
            text at step{" "}
            <code className="bg-violet-3 px-[3px] pb-[2px] text-[max(12px,_85%)] text-violet-11 dark:bg-violet-dark-3 dark:text-violet-dark-11">
              9
            </code>
            .
          </Fragment>
        }
      />
      <Section
        title="Grays"
        colors={Grays}
        description="Radix Colors provides 6 gray scales."
      />
      <Section
        title="Metals"
        colors={Metals}
        description="Radix Colors provides 2 metal scales."
      />
      <Section
        isOverlay
        title="Overlays"
        colors={{ "": Overlays }}
        description="The black and white scales are designed for overlays. These scales don???t change across themes."
      />
    </main>
  );
};

export default App;
