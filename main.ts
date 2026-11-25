import { mkdirSync, writeFileSync } from "node:fs";

// Make the AI Judge Laugh: the Office Joke Open — one line of office comedy.
const entry =
  "My calendar invited me to a meeting about a meeting to plan the meeting. I declined, and now HR wants a meeting about my attitude.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(entry);
