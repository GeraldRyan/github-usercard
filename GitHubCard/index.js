/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/




axios.get("https://api.github.com/users/webbuildermn")
.then( function (response) {
  // console.log(response.data)
  console.log(response.data)
  document.querySelector('.cards').appendChild(createCard(response.data))
  
})



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





function createCard(obj){
  cardDiv = crEl('div','card')
  img = crEl('img')
  img.setAttribute('src', obj.avatar_url)
  cardInfo = crEl('div','card-info')
  nameElement = crEl('h3','name')
  nameElement.textContent = obj.name
  username = crEl('p', 'username')
  username.textContent = obj.login
  locationElement = crEl('p')
  locationElement.textContent = obj.location
  profile = crEl('p')
  // profile.textContent = obj.public_repos
  aTag = crEl('a')
  aTag.setAttribute('href', obj.html_url)
  followers = crEl('p')
  followers.textContent = obj.followers
  following = crEl('p')
  following.textContent = obj.following
  bio = crEl('p')
  bio.textContent = obj.bio

cardDiv.appendChild(img), cardDiv.appendChild(cardInfo)
cardInfo.appendChild(nameElement),cardInfo.appendChild(username),cardInfo.appendChild(locationElement)
cardInfo.appendChild(profile),cardInfo.appendChild(followers),cardInfo.appendChild(following),cardInfo.appendChild(bio)
profile.appendChild(aTag)
  return cardDiv;
}

// Temp Test Code


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/



// Helper Function
function crEl(tag, cl="", txt="" ){
  el = document.createElement(tag)
  if (cl !=""){el.classList.add(cl)}
  el.textContent = txt
  return el

}

