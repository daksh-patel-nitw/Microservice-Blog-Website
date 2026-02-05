const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const contentId = req.params.id;
    const { content } = req.body;

    const comments = commentsByPostId[contentId] || [];
    comments.push({ id: commentId, content });
    commentsByPostId[contentId] = comments;
    
    await axios.post('http://localhost:4005/events', {
        type: 'CommentCreated',
        data: {
           postId:contentId, 
           id:commentId, 
           content
        }
    });

    res.status(201).send(comments);

});

app.post('/events',async(req,res)=>{
    console.log()

    res.send({});
})

app.listen(4001, () => {
    console.log('Listening on 4001');
})