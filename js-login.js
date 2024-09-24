// function calStartDay(startDate) {
//   const curDate = new Date();
//   const temp = curDate - new Date(startDate);
//   const daysDiffernce = temp / (1000 * 60 * 60 * 24);
//   return Math.floor(daysDiffernce);
// }

// let startDate = localStorage.getItem('projectStartDate');

// if (!startDate) {
//   startDate = new Date();
//   localStorage.setItem('projectStartDate', startDate);
// }

// const dayPassed = calStartDay(startDate);

// alert('토이 프로젝트 ' + (dayPassed + 1) + '일차');

function changeColor(buttonId) {
  const signWithDiv = document.querySelector('.sign-with');
  switch (buttonId) {
    case 'kakao':
      signWithDiv.style.backgroundColor = '#ffe812'; // 카카오 색상
      break;
    case 'google':
      signWithDiv.style.backgroundColor = '#FFFFFF'; // 구글 색상
      break;
    case 'github':
      signWithDiv.style.backgroundColor = '#040404'; // 깃허브 색상
      break;
    default:
      signWithDiv.style.backgroundColor = '';
  }
}

function resetColor() {
  const signWithDiv = document.querySelector('.sign-with');
  signWithDiv.style.backgroundColor = '';
}
