/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
 axios.get('https://api.github.com/users/loremenius')
  .then(function (response) {
   // handle success
    console.log(response);
    const cards = document.querySelector('.cards');
    console.log(cards);
    cards.appendChild(createComponent(response.data));
  })
  .catch(function (error) {
   // handle error
    console.log(error);
  });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan','dustinmyers','justsml','luishrd,bigknell'];

followersArray.forEach((item)=>{
  axios.get(`https://api.github.com/users/${item}`)
  .then(function (response) {
   // handle success
    console.log(response);
    const cards = document.querySelector('.cards');
    console.log(cards);
    cards.appendChild(createComponent(response.data));
  })
  .catch(function (error) {
   // handle error
    console.log(error);
  });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createComponent(object){
  const newDiv = document.createElement('div');
  const newImg = document.createElement('img');
  const newDiv2 = document.createElement('div');
  const newH3 = document.createElement('h3');
  const newP1 = document.createElement('p');
  const newP2 = document.createElement('p');
  const newP3 = document.createElement('p');
  const newA = document.createElement('a');
  const newP4 = document.createElement('p');
  const newP5 = document.createElement('p');
  const newP6 = document.createElement('p');

  newDiv.classList.add('card');
  newDiv2.classList.add('card-info');
  newH3.classList.add('name');
  newP1.classList.add('username');

  newImg.src = object.avatar_url;
  newH3.textContent = object.name;
  newP1.textContent = object.login;
  newP2.textContent = `Location: ${object.location}`;
  newP3.textContent = `Profile:`;
  newA.href = object.html_url;
  newA.textContent = object.html_url;
  newP4.textContent = `Followers: ${object.followers}`;
  newP5.textContent = `Following: ${object.following}`;
  newP6.textContent= `Bio: ${object.bio}`;

  newP3.appendChild(newA);
  newDiv2.appendChild(newH3);
  newDiv2.appendChild(newP1);
  newDiv2.appendChild(newP2);
  newDiv2.appendChild(newP3);
  newDiv2.appendChild(newP4);
  newDiv2.appendChild(newP5);
  newDiv2.appendChild(newP6);
  newDiv.appendChild(newDiv2);

return newDiv;
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
