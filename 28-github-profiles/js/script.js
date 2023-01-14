const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


// Get Github user
async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)
        createUserCard(data)
        getRepos(username)

    } catch(err) {
        if ( err.response.status == 404 ) {
            createErrorCard('No profile with this username')
        }
    }
}


// Get user Github repositories
async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')
        addReposToCard(data)

    } catch(err) {
        createErrorCard('Problem fetching user repos')
    }
}


// Add card with Github user information to the DOM
function createUserCard(user) {
    const userID = user.name || user.login
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    const cardHTML = `
        <div class="card">
            <div class="avatar-container">
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>
            <div class="user-info">
                <h2> ${userID} </h2>
                ${userBio}
                <ul>
                    <li> ${user.followers} <strong>Followers</strong></li>
                    <li> ${user.following} <strong>Following</strong></li>
                    <li> ${user.public_repos} <strong>Repos</strong></li>
                </ul>
                <div id="repos-container"></div>
            </div>
        </div>
    `
    main.innerHTML = cardHTML
}


// Add error card to the DOM in case something goes wrong
function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h3> ${msg} </h3>
        </div>
    `

    main.innerHTML = cardHTML
}


// Add user repositories to Card (max. 5 repositories)
function addReposToCard(repos) {
    const reposEl = document.getElementById('repos-container')

    repos
        .slice(0, 5)
        .forEach( repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}


// Listeners
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if ( user ) {
        getUser(user)
        search.value = ''  // clear input
    }
})