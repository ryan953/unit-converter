
function printHelp() {
  return [
    "Usage: npm start -- <value> <unit-from> <unit-to>",
    "       npm start -- <command> [<args>]",
    "",
    "npm start -- help",
    "    Print this help and exit",
    "npm start -- <value> <unit-from> <unit-to>",
    "    Convert some value from one unit to another",
    "    Example: `npm start -- 1.6 km mi` converts 1.6 Kilometers to Miles",
    "npm start -- reverse <value> <unit-from> <unit-to>",
    "    Test transitive nature of the conversion functions by converting into",
    "    then back from <unit-to>",
    "    Prints true if the transitive property holds",
  ].join("\n");
}

module.exports = {
  printHelp,
};
