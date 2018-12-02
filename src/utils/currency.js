/**
 * Convert numbers to currency
 */
export function convertToCurrency(total) {
  let final = "";
  let reversed = total
    .toString()
    .split("")
    .reverse();
  for (let i = 0; i < reversed.length; i++) {
    if (i % 3 === 0) {
      final += ",";
    }
    final += reversed[i];
  }
  final = final
    .split("")
    .reverse("")
    .join("");
  if (final[final.length - 1] === ",") {
    final = final.slice(0, -1);
    return "$" + final;
  }
  return "$" + final.join();
}
