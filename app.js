//Select dropdown

const dropdown = document.getElementById('dropdown');

//select btn

const btn = document.getElementById('btn');

// select img

const img = document.getElementById('img');

//select html elements

const exerciseName = document.getElementById('exercise-name');
const exerciseSets = document.getElementById('sets');
const exerciseReps = document.getElementById('reps');
const exerciseDescription = document.getElementById('desc');
//Exercise objects

const chest = {
  name: 'Bench Press',
  sets: '3 Sets',
  reps: '10-12 Reps',
  desc: 'The person performing the exercise lies on their back on a bench with a barbell grasped in both hands. They lower the barbell to chest level, then press the barbell upwards, extending the arms until the elbows are locked out. This is one repetition ',
  img: 'bench press.jpg',
};
const legs = {
  name: 'Squat',
  sets: '3 Sets',
  reps: '15-20 Reps',
  desc: 'The movement begins from a standing position. Weight is often added; typically in the form of a loaded barbell, but dumbbells and kettlebells may also be used. When a barbell is used, it may be braced across the upper trapezius muscle, which is termed a high bar squat, or held lower across the rear deltoids, termed a low bar squat.[3] The movement is initiated by moving the hips back and bending the knees and hips to lower the torso and accompanying weight, then returning to the upright position.',
};
const back = {
  name: 'Pull-up',
  sets: '3 Sets',
  reps: '10-12 Reps',
  desc: 'Standard dead-hang pull up is grasped with an overhand/underhand/alternative-hand grip. Then the body is pulled up until the chin clears the bar, and finished by lowering the body until arms and shoulders are fully extended. Stricter standards would only consider a full repetition to be one in which the elbows pass behind the coronal plane.',
};
const arms = {
  name: 'Bicep Curl',
  sets: '3 Sets',
  reps: '10-15 Reps',
  desc: 'A biceps curl usually starts with the arm in a fully extended position, holding a weight with a supinated (palms facing up) grip. A full repetition consists of bending or "curling" the elbow until it is fully flexed, then slowly lowering the weight to the starting position. The torso should remain upright instead of swinging back and forth, as doing so transfers the load away from the biceps and onto other muscles, reducing the effectiveness of the exercise. ',
};
const abs = {
  name: 'Sit-up',
  sets: '3 Sets',
  reps: '15-20 Reps',
  desc: 'It begins with lying with the back on the floor, typically with the arms across the chest or hands behind the head and the knees and toes bent in an attempt to reduce stress on the back muscles and spine, and then elevating both the upper and lower vertebrae from the floor until everything superior to the buttocks is not touching the ground. ',
  img: 'bench press.jpg',
};
//Event listeners

const runInput = function (muscleGroup) {
  btn.addEventListener('click', function () {
    if (dropdown.value === 'chest') {
      console.log(dropdown.value);
      img.src = muscleGroup.img;
      exerciseName.innerText = muscleGroup.name;
      exerciseSets.innerText = muscleGroup.sets;
      exerciseReps.innerText = muscleGroup.reps;

      exerciseDescription.innerText = `${muscleGroup.desc}`;
    }
  });
};

runInput(chest);

// btn.addEventListener('click', function () {
//   if (dropdown.value === 'legs') {
//     console.log(dropdown.value);
//     img.src = 'squat.jpg';
//     exerciseName.innerText = `${legs.name}`;
//     exerciseSets.innerText = `${legs.sets}`;
//     exerciseReps.innerText = `${legs.reps}`;
//     exerciseDescription.innerText = `${legs.desc}`;
//   }
// });
// btn.addEventListener('click', function () {
//   if (dropdown.value === 'back') {
//     console.log(dropdown.value);
//     img.src = 'pullup.jpg';
//     exerciseName.innerText = `${back.name}`;
//     exerciseSets.innerText = `${back.sets}`;
//     exerciseReps.innerText = `${back.reps}`;
//     exerciseDescription.innerText = `${back.desc}`;
//   }
// });
// btn.addEventListener('click', function () {
//   if (dropdown.value === 'arms') {
//     console.log(dropdown.value);
//     img.src = 'curl.jpg';
//     exerciseName.innerText = `${arms.name}`;
//     exerciseSets.innerText = `${arms.sets}`;
//     exerciseReps.innerText = `${arms.reps}`;
//     exerciseDescription.innerText = `${arms.desc}`;
//   }
// });
// btn.addEventListener('click', function () {
//   if (dropdown.value === 'abs') {
//     console.log(dropdown.value);
//     img.src = 'situp.jpg';
//     exerciseName.innerText = `${abs.name}`;
//     exerciseSets.innerText = `${abs.sets}`;
//     exerciseReps.innerText = `${abs.reps}`;
//     exerciseDescription.innerText = `${abs.desc}`;
//   }
// });
