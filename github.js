const axios = require("axios");



function getGithubInfo(queryUrl){
    const queryUrl = `https://api.github.com/users/${username}`;
    axios
    .get(queryUrl)
    .then((response) => {
      // handle success
      const avatar_url = response.data.avatar_url;
      const email = response.data.email;
      console.log(avatar_url);
    })
    .catch((error) => {
      // handle error
      console.log(error); 
    });
    return avatar_url
}

console.log(getGithubInfo(queryUrl));