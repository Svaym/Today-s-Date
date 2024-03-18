let output = document.querySelector('#output');
let select = document.querySelector('#date-options');
let date = new Date();
let currentDate = date.getFullYear() + '-' + addZero(date.getMonth() + 1) + '-' + addZero(date.getDate())
output.textContent = currentDate
date.getFullYear() + '-' + addZero(date.getMonth() + 1) + '-' + addZero(date.getDate())
function addZero(n) {
  if (n >= 0 && n <= 9) {
    return '0' + n
  }
  return n
}
select.addEventListener('change', function(){
  if (select.value == "yyyy-mm-dd") {
    output.textContent = currentDate
  } else if (select.value == 'current') {
    output.textContent = currentDate + '-' + addZero(date.getHours()) + ':' + addZero(date.getMinutes())
  } else {
    output.textContent = currentDate.split('-').reverse().join('-')
  }
});
