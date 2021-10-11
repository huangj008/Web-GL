import dateAndTime from 'date-and-time';
import date from 'date-and-time';

const pattern = date.compile('ddd, MMM DD YYYY');
const now = new Date();
console.log(date.format(now, pattern));