const pd = require('node-pandas');
const df = pd.readCsv('./data.csv');

const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

// df.show();

// console.log(df.show());

const estimatedAgeArray = df['estimatedAge'];

console.log(average(estimatedAgeArray));
