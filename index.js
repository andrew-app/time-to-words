// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  
  const timeMap = {
    '0': 'twelve',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'one',
    '14': 'two',
    '15': 'three',
    '16': 'four',
    '17': 'five',
    '18': 'six',
    '19': 'seven',
    '20': 'eight',
    '21': 'nine',
    '22': 'ten',
    '23': 'eleven',
    '30': 'thirty',
    '45': 'quarter',
    '00': 'o\' clock'
  }

  const timeArray = time.split(':');

  if (timeArray[0] === '0' && timeArray[1] === '00') {
    return 'midnight';
  }

  switch(timeArray[1]) {
    case '30':
      return `half past ${timeMap[timeArray[0]]}`;

    case '45':
      return `quarter to ${timeMap[Number(timeArray[0]) + 1]}`;

    case '00':
      return `${timeMap[timeArray[0]]} ${timeMap[timeArray[1]]}`;
    
    case Number(timeArray[1]) < 30:
      return `${timeMap[timeArray[1]]} past ${timeMap[timeArray[0]]}`;
  }

  return `${timeMap[60 - Number(timeArray[1])]} to ${timeMap[Number(timeArray[0]) + 1]}`;

}

module.exports = { convertTimeToWords };