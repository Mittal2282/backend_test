require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubdata={
    "login": "Mittal2282",
    "id": 108392982,
    "node_id": "U_kgDOBnXyFg",
    "avatar_url": "https://avatars.githubusercontent.com/u/108392982?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Mittal2282",
    "html_url": "https://github.com/Mittal2282",
    "followers_url": "https://api.github.com/users/Mittal2282/followers",
    "following_url": "https://api.github.com/users/Mittal2282/following{/other_user}",
    "gists_url": "https://api.github.com/users/Mittal2282/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Mittal2282/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Mittal2282/subscriptions",
    "organizations_url": "https://api.github.com/users/Mittal2282/orgs",
    "repos_url": "https://api.github.com/users/Mittal2282/repos",
    "events_url": "https://api.github.com/users/Mittal2282/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Mittal2282/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 23,
    "public_gists": 0,
    "followers": 2,
    "following": 3,
    "created_at": "2022-06-29T07:40:04Z",
    "updated_at": "2024-03-30T13:21:23Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Login to Twitter')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Hey There ,please login </h1>')
})

app.get('/github',(req,res)=>{
    res.json(githubdata)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})