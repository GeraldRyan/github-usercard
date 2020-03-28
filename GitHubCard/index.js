/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


let peeps = ["webbuildermn", "LeesahMasko", "northdacoder", "vtopham", "onelonecoder", "sampattuzzi", "josiebigler", "3b1b", "BenTristem", "sid2015980", "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"]

// console.log(axios.get(`https://api.github.com/users/webbuildermn`))

// GOOD WORKING ORIGINAL CODE
// peeps.forEach(function cb(element){
//   axios.get(`https://api.github.com/users/${element}`)
//   .then( function (response) {
//     // console.log(response.data)
//     document.querySelector('.cards').appendChild(createCard(response.data))
//   })
// })
// GOOD WORKING ORIGINAL CODE



// TEST CODE FOR STRETCH
peeps.forEach(function cb(element) {
        axios.get(`https://api.github.com/users/${element}`)
            .then(function(response) {
                // console.log(response.data)
                // const arrayOfFollowing = []


                document.querySelector('.cards').appendChild(createCard(response.data))
                document.querySelector(`.${response.data.login}`).addEventListener('dblclick',
                    function() {
                        console.log(`U double clicked on ${response.data.login}`)
                        this.style.backgroundColor = 'green'
                        document.querySelector('.cards').innerHTML = "" //Not successful
                            //THE STRETCH PAYLOAD GOETH HERE
                        const followingAPIUrl = response.data.following_url.replace("{/other_user}", "")
                            // console.log(followingAPIUrl)
                        const following = axios.get(followingAPIUrl)
                            .then(function(response) {
                                const arrayOfFollowing = makeFollowingArray(response.data)

                                console.log(arrayOfFollowing)
                                console.log("\n\n\n\n")

                                if (arrayOfFollowing.length === 0) {
                                    document.querySelector('.cards').appendChild(lonely())
                                }
                                arrayOfFollowing.forEach(function(element) {
                                    axios.get(`https://api.github.com/users/${element}`)
                                        .then(function cb(response) {
                                            document.querySelector('.cards').appendChild(createCard(response.data))
                                            console.log('yippee')

                                        })

                                })

                            })


                        // this.parentNode.removeChild(this)




                        // //pseudo coding it up, 2 things we need.
                        // when they double click we refresh the page, or if not technically, 
                        // we destroy the other objects, all other cards.
                        // then we redeploy with the new cards who are their followers. We have to make a new call from the array
                        // console.log(arrayOfFollowing)
                        // document.getElementsByClassName('card').style.display = 'none'
                        // document.querySelectorAll('.card').style.display = 'none'
                        // this.style.display= "none"
                        // axios.get(`https://api.github.com/users/${element}`)

                        // GRANT SANDERSON 3B1B DOESN'T THINK I'M CLICKING ON HIM!!!!! ANOTHER ANOMALY
                        // It says '3b1b is not a valid selector at the top
                        // Well I failed to remove element. Let's see if I can append at least

                    })
            })
    })
    // TEST CODE FOR STRETCH




function makeFollowingArray(data) {
    const returnValue = []
    for (const prop in data) {
        returnValue.push(data[prop].login)
            // console.log(data[prop].login)
    }
    // console.log("\n\n\n\n\n")
    return returnValue
}

function lonely() {
    cardDiv = crEl('div', 'card', "Wow, it sure is lonely in here")
    cardDiv.style.fontSize = "4rem"
    return cardDiv
}



// axios.get("https://api.github.com/users/webbuildermn")
// .then( function (response) {
//   console.log(response.data)
//   document.querySelector('.cards').appendChild(createCard(response.data))

// })



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





function createCard(obj) {
    cardDiv = crEl('div', 'card')
    cardDiv.classList.add(obj.login)
    img = crEl('img')
    img.setAttribute('src', obj.avatar_url)
    cardInfo = crEl('div', 'card-info')
    nameElement = crEl('h3', 'name')
    nameElement.textContent = obj.name
    username = crEl('p', 'username')
    username.textContent = obj.login
    locationElement = crEl('p', "", "Location: ")
    locationElement.textContent += obj.location
    profile = crEl('p', "", "Profile: ")
    aTag = crEl('a', "", obj.html_url)
    aTag.setAttribute('href', obj.html_url)
    followers = crEl('p', "", "Followers: ")
    followers.textContent += obj.followers
    following = crEl('p', "", "Following: ")
    following.textContent += obj.following
    bio = crEl('p', "", "Bio: ")
    bio.textContent += obj.bio

    cardDiv.appendChild(img), cardDiv.appendChild(cardInfo)
    cardInfo.appendChild(nameElement), cardInfo.appendChild(username), cardInfo.appendChild(locationElement)
    cardInfo.appendChild(profile), cardInfo.appendChild(followers), cardInfo.appendChild(following), cardInfo.appendChild(bio)
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
function crEl(tag, cl = "", txt = "") {
    el = document.createElement(tag)
    if (cl != "") { el.classList.add(cl) }
    el.textContent = txt
    return el

}