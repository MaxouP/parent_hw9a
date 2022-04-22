import moment from 'moment';

const now = moment();

console.log(now.format('LLLL'));

console.log(now.year() - 1976, 'years ago');