import winPid from './index.js';

void async function () {
  console.log('Start notepad.exe to see its PID here!');
  const pid = await winPid('notepad.exe');
  console.log('PID', pid);
}()
