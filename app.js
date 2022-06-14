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
  const exerciseList = list.map((exercise) => {
    const { id } = exercise;
    const { name, reps, set, imgae } = exercise.fields;
    console.log(name);
  });
};

// fetchExercises(url);

const start = async () => {
  const data = await fetchExercises();
  displayExercises(data);
};

start();
