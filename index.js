import util from 'util';
import child_process from 'child_process';

/**
 * Get process ID from process name on Windows.
 * @param {string} name The name of the process including the `.exe` extension.
 * @param {boolean} wait Whether to keep trying until the process shows or not.
 */
export default async function (name, wait = true) {
  let pid;
  do {
    const { stdout, stderr } = await util.promisify(child_process.exec)(`tasklist /FI "ImageName eq ${name}" /FO CSV`);

    if (stderr) {
      throw new Error(stderr);
    }

    const match = stdout.match(/"(?<pid>\d+)"/);
    if (match) {
      pid = Number(match.groups.pid);
    }
    else if (!wait) {
      throw new Error('PID not found.');
    }
  } while (!pid);

  return pid;
}
