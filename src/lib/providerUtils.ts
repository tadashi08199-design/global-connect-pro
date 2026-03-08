/**
 * Masks a provider name so the user gets a gist but not the full name.
 * e.g. "Sankalp Pratap Singh" → "Sa***p Pr***p Si***"
 *       "Jane" → "Ja**"
 */
export function maskName(name: string): string {
  return name
    .split(" ")
    .map((word) => {
      if (word.length <= 2) return word;
      if (word.length <= 4) return word.slice(0, 2) + "**";
      return word.slice(0, 2) + "***" + word.slice(-1);
    })
    .join(" ");
}
