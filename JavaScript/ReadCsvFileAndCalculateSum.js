const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

/* Read the file "Numerot.csv" and calculate only
positive numbers from the file together and display
the sum on the screen. */
const filePath = path.join(__dirname, 'Numerot.csv');

let sum = 0;
fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', (row) => {
    for (const key in row) {
      const number = parseFloat(row[key]);
        if (!isNaN(number) && number > 0) {
            sum += number;
        }
    }
  })
  .on('end', () => {
    console.log(`Sum of positive numbers: ${sum}`);
  });
