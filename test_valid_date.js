function isDivisibleBy(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  if (isDivisibleBy(year, 400)) {
    return true;
  }

  return !isDivisibleBy(year, 100) && isDivisibleBy(year, 4);
}

function validateYear(year) {
  return year < 1 || year > 9999;
}

function validateMonth(month) {
  return month < 1 || month > 12;
}

function validateDay(day, month, year) {
  if (month === 2) {
    if (isLeapYear(year)) {
      return day < 1 || day > 29;
    } else {
      return day < 1 || day > 28;
    }
  }

  if ((month < 7 && month % 2 !== 0) || (month > 7 && month % 2 === 0)) {
    return day < 1 || day > 31;
  }

  if ((month > 7 && month % 2 !== 0) || (month < 7 && month % 2 === 0)) {
    return day < 1 || day > 30;
  }

}

function validate(format, date) {
  switch (format) {
    case 'dd-mm-yyyy':

      if (date.length !== 10 || date[2] !== '-' || date[5] !== '-') {
        return 'date not according to format';
      }

      const day = +(date[0] + date[1]);
      const month = +(date[3] + date[4]);
      const year = +(date[6] + date[7] + date[8] + date[9]);

      if (validateYear(year)) {
        return 'invalid year';
      }

      if (validateMonth(month)) {
        return 'invalid month';
      }

      if (validateDay(day, month, year)) {
        return 'invalid day';
      }

      return 'valid';

    case 'mm-dd-yyyy':

      if (date.length !== 10 || date[2] !== '-' || date[5] !== '-') {
        return 'date not according to format';
      }

      const month1 = +(date[0] + date[1]);
      const day1 = +(date[3] + date[4]);
      const year1 = +(date[6] + date[7] + date[8] + date[9]);

      if (validateYear(year1)) {
        return 'invalid year';
      }

      if (validateMonth(month1)) {
        return 'invalid month';
      }

      if (validateDay(day1, month1, year1)) {
        return 'invalid day';
      }

      return 'valid';

    case 'yyyy-mm-dd':

      if (date.length !== 10 || date[4] !== '-' || date[7] !== '-') {
        return 'date not according to format';
      }

      const day2 = +(date[8] + date[9]);
      const month2 = +(date[5] + date[6]);
      const year2 = +(date[0] + date[1] + date[2] + date[3]);

      if (validateYear(year2)) {
        return 'invalid year';
      }

      if (validateMonth(month2)) {
        return 'invalid month';
      }

      if (validateDay(day2, month2, year2)) {
        return 'invalid day';
      }

      return 'valid';
    default: return 'invalid format';
  }
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function testAll() {
  // testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');
  // testValidate('mm-dd-yyyy', '01 01 2020', 'date not according to format');
  // testValidate('mm-dd-yyyy', '01-01-0000', 'invalid year');
  // testValidate('mm-dd-yyyy', '13-01-0000', 'invalid year');
  // testValidate('mm-dd-yyyy', '01-60-0000', 'invalid year');
  // testValidate('dd-mm-yyyy', '01-01-2020', 'valid');

  // testValidate('dd-mm-yyyy', '01 01-2020', 'date not according to format');
  // testValidate('dd-mm-yyyy', '01 01 2020', 'date not according to format');
  // testValidate('dd-mm-yyyy', '0101 2020', 'date not according to format');
  // testValidate('dd-mm-yyyy', '0a-20-2020', 'invalid month');
  // testValidate('dd-mm-yyyy', '19-12-2020', 'valid');

  // testValidate('dd-mm-yyyy', '00-02-2020', 'invalid day');
  // testValidate('dd-mm-yyyy', '28-02-2020000', 'date not according to format');
  // testValidate('mm-dd-yyyy', '13-20-0001', 'invalid month');
  // testValidate('mm-dd-yyyy', '01-6-0000', 'date not according to format');
  // testValidate('mm-dd-yyyy', '01-06-0000', 'invalid year');

  // testValidate('mm-dd-yyyy', '"01"-06-0001', 'invalid year');
  // testValidate('mm-dd-yyyy', '01-06-0000', 'invalid year');
  testValidate('dd-mm-yyyy', '0a-02-2020', 'invalid day');
  // testValidate('dd-mm-yyyy', '"00"-02-2020', 'invalid day');


}

testAll();