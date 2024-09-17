function calStartDay(startDate) {
  const curDate = new Date();
  const temp = curDate - new Date(startDate);
  const daysDiffernce = temp / (1000 * 60 * 60 * 24);
  return Math.floor(daysDiffernce);
}

let startDate = localStorage.getItem('projectStartDate');

if (!startDate) {
  startDate = new Date();
  localStorage.setItem('projectStartDate', startDate);
}

const dayPassed = calStartDay(startDate);

alert('토이 프로젝트 ' + (dayPassed + 1) + '일차');
console.log('test');
