export function classnames(...classes: C[]) {
  const result = classes
    .reduce<string[]>((acc, b) => {
      const res = [...acc];

      if (!b) return res;

      if (typeof b === "string") res.push(b);
      if (Array.isArray(b)) res.push(b[0] ? b[1] : b[2] ?? "");
      else if (typeof b === "object")
        res.push(...Object.entries(b).map(([val, bool]) => (bool ? val : "")));

      return res;
    }, [])
    .filter(Boolean);

  return [...new Set(result)]
    .join(" ")
    .replace(/\s{2,}/, " ")
    .trim();
}

type C =
  | string
  | boolean
  | null
  | undefined
  | Record<string, unknown>
  | [unknown, string, string?];
