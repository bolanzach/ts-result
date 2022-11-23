import { ERR, OK, Result } from "../src/index.ts";

function getNumberResult(): Result<number, string> {
  return Result.Ok(42);
}

const res = getNumberResult();

// Get the result value
console.log(res.value);

// Conditionals
if (res.isOk) {
  // do okay stuff
}
if (res.isErr) {
  // do error stuff
}

// Pattern matching!
const sayStuffPattern = {
  [OK]: () => "do ok stuff",
  [ERR]: () => "do err stuff",
}[res.match]();
console.log(sayStuffPattern);
