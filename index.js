// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  
  const timeArray = time.split(':');

  const timeMap = {
    '1':'one',
    '2':'two',
    '3':'three',
    '4':'four',
    '5':'five',
    '6':'six',
    '7':'seven',
    '8':'eight',
    '9':'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen'
  }

  if (timeArray[0] === '0' && timeArray[1] === '00') {
    return 'midnight';
  }

  if (timeArray[1] === '30') {
    return `half past ${timeMap[timeArray[0]]}`
  }

  if (timeArray[1] === '45') {
    return `quarter to ${timeMap[timeArray[0]]}`
  }

  if (Number(timeArray[1]) < 30) {
    return `${timeMap[time[0]]} past ${timeArray}`
  }

}

module.exports = { convertTimeToWords };