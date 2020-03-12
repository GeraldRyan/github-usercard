/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


myGit = axios.get("https://api.github.com/users/webbuildermn")
console.log(myGit)




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

const followersArray = [];

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

el = document.createElement('div').set



function createComponent(obj){
  cardDiv = crEl('div','card')
  img = crEl('img')
  // img.setAttribute(src, obj.something)
  cardInfo = crEl('div','card-info')
  name = crEl('h3','name')
  // name.textContent = obj.something
  username = crEl('p', 'username')
  // username.textContent = obj.something
  location = crEl('p')
  // location.textContent = obj.something
  profile = crEl('p')
  // profile.textContent = obj.something
  followers = crEl('p')
  // followers.textContent = obj.something
  following = crEl('p')
  // following.textContent = obj.something
  bio = crEl('p')
  // bio.textContent = obj.something


  return;
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/




function crEl(tag, cl="", txt="" ){
  el = document.createElement(tag)
  if (cl !=""){el.classList.add(cl)}
  el.textContent = txt
  return el

}

