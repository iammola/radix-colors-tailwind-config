import { Fragment } from "react";

import Section from "./Section";
import { BrightColors, Colors, Grays, Metals, Overlays } from "./data";

const App: React.FC = () => {
  return (
    <main className="bg-mauve-1 py-10 px-40 font-medium">
      <h1 className="text-4xl text-slate-12">The Scales</h1>
      <p className="text-slate-11">
        An overview of all 30 Radix Colors scales.
      </p>
      <Section
        title="Colors"
        colors={Colors}
        description={
          <Fragment>
            Radix Colors provides 15 color scales, designed for white foreground
            text at step{" "}
            <code className="bg-violet-3 px-[3px] pb-[2px] text-[max(12px,_85%)] text-violet-11">
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
            <code className="bg-violet-3 px-[3px] pb-[2px] text-[max(12px,_85%)] text-violet-11">
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
        title="Overlays"
        colors={{ "": Overlays }}
        description="The black and white scales are designed for overlays. These scales don’t change across themes."
      />
    </main>
  );
};

export default App;
