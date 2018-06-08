const express = require('express');
const bodyParser = require('body-parser');
const {posts, comments} = require('./routes')

let store = {
    posts: [
      {
      id: 0,
      name: '',
      url: '',
      text: '',
      comments: [
        {id:0, text: ''}]
    }
  ]
  }

  let app = express()
  app.use(bodyParser.json())
  
  app.use((req, res, next) => {
    req.store = store;
    next()
  })  

app.get('/posts', posts.getPosts)
app.post('/posts', posts.addPost)
app.put('/posts/:pid', posts.updatePost)
app.delete('/posts/:pid', posts.removePost)

app.get('/posts/:pid/comments', comments.getComments)
app.post('/posts/:pid/comments', comments.addComment)
app.put('/posts/:pid/comments/:cid', comments.updateComment)
app.delete('/posts/:pid/comments/:cid', comments.removeComment)

app.listen(3000)