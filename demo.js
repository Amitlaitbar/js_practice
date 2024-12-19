const DMY = 'dd-mm-yyyy';
const YMD = 'yyyy-mm-dd';
const MDY = 'mm-dd-yyyy';

function isDivisible(year, divisor) {
  return year % divisor === 0;
}

function isLeapYear(year) {
  if (isDivisible(year, 400)) {
    return true;
  }

  return !isDivisible(year, 100) && isDivisible(year, 4);
}

function isFormatDMY(format) {
  return format === DMY;
}

function isFormatYMD(format) {
  return format === YMD;
}

function isFormatMDY(format) {
  return format === MDY;
}

function slice(date, start, end) {
  let slicedString = '';

  for (let index = start; index <= end; index++) {
    slicedString += date[index];
  }

  return +(slicedString);
}

function getDay(format, date) {
  if (isFormatDMY(format)) {
    return slice(date, 0, 1);
  }

  if (isFormatYMD(format)) {
    return slice(date, 8, 9);
  }

  if (isFormatMDY(format)) {
    return slice(date, 3, 4);
  }
}

function getMonth(format, date) {
  if (isFormatDMY(format)) {
    return slice(date, 3, 4);
  }

  if (isFormatYMD(format)) {
    return slice(date, 5, 6);
  }

  if (isFormatMDY(format)) {
    return slice(date, 0, 1);
  }
}

function getYear(format, date) {
  if (isFormatYMD(format)) {
    return slice(date, 0, 3);
  }

  return slice(date, 6, 9);
}

function numberOfDaysInMonth(month, year) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }

  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  }

  return 31;
}

// Write isInRange function

function isValidYear(year) {
  return year >= 1 && year <= 9999;
}

function isValidDay(day, month, year) {
  return day >= 1 && day <= numberOfDaysInMonth(month, year);
}

function isValidMonth(month) {
  return month >= 1 && month <= 12;
}

function performDateValidation(format, date) {
  const year = getYear(format, date);
  const month = getMonth(format, date);
  const day = getDay(format, date);

  if (!isValidYear(year)) {
    return 'invalid year';
  }

  if (!isValidMonth(month)) {
    return 'invalid month';
  }

  if (!isValidDay(day, month, year)) {
    return 'invalid day';
  }

  return 'valid';
}

function isHyphensOnRightPlace(date, hyphen1Index) {
  return date[hyphen1Index] === '-' && date[hyphen1Index + 3] === '-';
}

function isDateAsFormat(format, date) {
  if (isFormatYMD(format)) {
    return isHyphensOnRightPlace(date, 4);
  }

  return isHyphensOnRightPlace(date, 2);
}

function isValidFormat(format) {
  return isFormatDMY(format) || isFormatYMD(format) || isFormatMDY(format);
}

function validate(format, date) {
  if (!isValidFormat(format)) {
    return 'invalid format';
  }

  if (date.length !== 10 || !isDateAsFormat(format, date)) {
    return 'date not according to format';
  }

  return performDateValidation(format, date);
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function testAll() {
  testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');
  testValidate('mm-dd-yyyy', '01 01 2020', 'date not according to format');
  testValidate('mm-dd-yyyy', '01-01-0000', 'invalid year');
  testValidate('yyyy-mm-dd', '0000-01-01', 'invalid year');
  testValidate('mm-dd-yyyy', '13-01-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '01-60-0000', 'invalid year');
  testValidate('dd-mm-yyyy', '01-01-2020', 'valid');
  testValidate('dd-mm-yyyy', '31-04-2020', 'invalid day');
  testValidate('dd-mm-yyyy', '28-02-2020', 'valid');
  testValidate('dd-mm-yyyy', '29-02-2020', 'valid');
  testValidate('dd-mm-yyyy', '30-02-2020', 'invalid day');

  testValidate('dd-mm-yyyy', '00-02-2020', 'invalid day');
  testValidate('dd-mm-yyyy', '28-02-2020000', 'date not according to format');
  testValidate('mm-dd-yyyy', '13-20-0001', 'invalid month');
  testValidate('mm-dd-yyyy', '01-6-0000', 'date not according to format');
  testValidate('mm-dd-yyyy', '01-06-0000', 'invalid year');
  testValidate('dd-mm-yyyy', 'a0-02-2020', 'invalid day');
  testValidate('mm-dd-yyyy', '01-06-0000', 'invalid year');

  // testValidate('dd-mm-yyyy', '0a-02-2020', 'date not according to format');
  // testValidate('dd-mm-yyyy', 'a0-02-2020', 'date not according to format');
  // testValidate('mm-dd-yyyy', '01/06/0001', 'date not according to format');
  // testValidate('mm-dd-yyyy', '01 06 0001', 'date not according to format');
  // testValidate('mm-dd-yyyy', 'aa-06-0001', 'date not according to format');

}

testAll();