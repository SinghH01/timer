// Slice first two elements from process.argv
const alarms = process.argv.splice(2);

for (const item in alarms) {
  // Convert item from string to number
  let time = Number(alarms[item]);

  // Check if input is not a negative number or NaN
  if ((time > 0) && !isNaN(time)) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`Beep at ${time} seconds`);
    }, 1000 * time);
  }
}
