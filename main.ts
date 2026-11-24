import fs from 'node:fs';
const ENTRY = "Our daily standup is the only meeting where everyone stands, says nothing, and sits back down to do the work they were already doing.";
fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', ENTRY, 'utf8');
