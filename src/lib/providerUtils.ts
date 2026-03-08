/**
 * Masks a provider name to show only the first name with partial masking.
 * e.g. "Sankalp Pratap Singh" → "Sa***p"
 *       "Jane" → "Ja**"
 */
export function maskName(name: string): string {
  const firstName = name.split(" ")[0];
  if (firstName.length <= 2) return firstName;
  if (firstName.length <= 4) return firstName.slice(0, 2) + "**";
  return firstName.slice(0, 2) + "***" + firstName.slice(-1);
}
