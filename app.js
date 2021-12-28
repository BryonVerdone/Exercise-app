//Select dropdown

const dropdown = document.getElementById('dropdown');

//select btn

const btn = document.getElementById('btn');

// select img

const img = document.getElementById('img');

btn.addEventListener('click', function () {
  if (dropdown.value === 'chest') {
    console.log(dropdown.value);
    img.src = 'bench press.jpg';
  }
});
btn.addEventListener('click', function () {
  if (dropdown.value === 'legs') {
    console.log(dropdown.value);
    img.src = 'squat.jpg';
  }
});
btn.addEventListener('click', function () {
  if (dropdown.value === 'back') {
    console.log(dropdown.value);
    img.src = 'pullup.jpg';
  }
});
btn.addEventListener('click', function () {
  if (dropdown.value === 'arms') {
    console.log(dropdown.value);
    img.src = 'curl.jpg';
  }
});
btn.addEventListener('click', function () {
  if (dropdown.value === 'abs') {
    console.log(dropdown.value);
    img.src = 'situp.jpg';
  }
});
