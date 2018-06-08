module.exports = {
    getComments(req, res) {
        res.status(200).send(req.store.posts[req.params.pid].comments)
    }, 
    addComment(req, res) {
        let newcomment = {
            id: req.store.posts[req.params.pid].comments.length,
            text: req.body.text
        }
        req.store.posts[req.params.pid].comments.push(newcomment)

        res.status(201).send({id: newcomment.id})
    },
    updateComment(req, res) {
        req.store.posts[req.params.pid].comments[req.params.cid].text = req.body.text
        res.status(200).send(req.store.posts[req.params.pid].comments[req.params.cid])
    },
    removeComment(req, res) {
        req.store.posts[req.params.pid].comments.splice(req.params.cid, 1)
        res.status(204).send(req.store.posts[req.params.pid].comments)
    }  
  }