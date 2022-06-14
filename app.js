const exercises = {
  benchPress: {
    name: 'bench press',
    reps: '12',
    sets: '3',
    image: './images/bench-press.jpg',
  },
};
const exercisesDOM = document.querySelector('.exercises-center');
const { name, reps, sets, image } = exercises.benchPress;
console.log(name, reps);

const img = (document.querySelector('.img').src = image);

function product(name, reps, sets, img) {
  return `<article>
  <img src="${img}" alt="" />
  <h3>${name}</h3>
  <span>${sets}</span>
  <span>${reps}</span>
</article>`;
}

exercisesDOM.innerHTML = product(name, reps, sets, image);
