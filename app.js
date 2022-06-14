const exercisesDOM = document.querySelector('.exercises-center');

const url = 'exercises.json';
const fetchExercises = async () => {
  exercisesDOM.innerHTML = `<div class="loading">Loading...</div>`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    exercisesDOM.innerHTML = `<p class="error"> There was an error</p>`;
  }
};
const displayExercises = (list) => {
  const exerciseList = list
    .map((exercise) => {
      const { id } = exercise;
      const { name, reps, sets, image } = exercise.fields;
      console.log(name);
      return `<a href="exercise.html" class="single-exercise">
    <img class="img" src="${image}" alt="">
    <h5 class="exercise-name">${name}</h5>
    <p>${sets}</p>
    <p>${reps}</p>
  </a>`;
    })
    .join('');
  exercisesDOM.innerHTML = `<div class="exercises-container">
    ${exerciseList} 
      
</div>`;
};

// fetchExercises(url);

const start = async () => {
  const data = await fetchExercises();
  displayExercises(data);
};

start();
