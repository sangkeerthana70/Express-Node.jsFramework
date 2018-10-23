const express = require('express');
const router = express.Router();
const posts = [
    {
    id: "12345",
    content: "this is a post"
    }
];
router.get('/', (req, res) => res.json({status: "Post route"}));

//prefixed by /api/posts
router.get('/:id', (req, res) => {
    console.log('find post', req.params.id)
    const index = posts.findIndex(element => {
        console.log('checking element', element)
        return element.id == req.params.id
    })
    console.log('index is', index)
    
    if (index !== -1) {
        res.status(200).json(posts[index]);
    } else {
        res.status(404).json({message: `Post ${req.params.id} not found`})
    }
    
});

module.exports = router;//export the router from here
