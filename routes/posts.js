module.exports = {
    getPosts(req, res) {
        res.status(200).send(req.store.posts)
    },
    addPost(req, res) {
        let newpost = {
            id:         req.store.posts.length,
            name:       req.body.name,
            url:        req.body.url,
            text:       req.body.text,
            comments:   [{
                id: 0,
                text: ''
            }]
        }
        req.store.posts.push(newpost)
        res.status(201).send({id: newpost.id})
    },
    updatePost(req, res) {
        req.store.posts[req.params.pid].name = req.body.name
        req.store.posts[req.params.pid].url = req.body.url
        req.store.posts[req.params.pid].text = req.body.text

        res.status(200).send(req.store.posts[req.params.pid])
    },
    removePost(req, res) {
        req.store.posts.splice(req.params.pid, 1)
        res.status(204).send()
    }
  }