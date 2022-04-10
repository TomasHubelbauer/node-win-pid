import winPid from './index.js';

console.log('Start notepad.exe to see its PID here!');
const pid = await winPid('notepad.exe');
console.log('PID', pid);
