// Import stylesheets
import './style.css';
//Variables globales
let token = "";

// Write Javascript code!

/**
 * Obtien un usuario del repositorio publico de usuarios de github
 * @returns {Promise}
 */
function getUser(url, options) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(error => reject(error));
  });
}

function onInit() {
  let url = "https://api.github.com/users/octocat";
  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  }
  getUser(url, options)
  .then(data => console.log(data));
}

onInit();