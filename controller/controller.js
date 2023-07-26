const express = require("express");
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

const app = express();

// Middleware for basic authentication 
const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');

  
  if (token !== 'S@mpl3S3cr3tT0k3n!') {
    return res.status(401).json({ error: 'Authentication failed.' });
  }

  next();
};

app.use(express.json());

// Create a new post
app.post('/posts', authenticateUser, async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Please provide title and content.' });
    }

    const post = await Post.create({ title, content });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: 'Could not create the post.' });
  }
});

// Create a new comment for a post
app.post('/posts/:postId/comments', authenticateUser, async (req, res) => {
  try {
    const postId = req.params.postId;
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ error: 'Please provide comment content.' });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found.' });
    }

    const comment = new Comment({ content });
    post.comments.push(comment);
    await post.save();

    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: 'Could not create the comment.' });
  }
});

// Edit a post
app.put("/posts/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const { title, content } = req.body;

    const post = await Post.findByIdAndUpdate(
      postId,
      { title, content },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ error: "Post not found." });
    }

    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Could not update the post." });
  }
});

// Edit a comment
app.put("/comments/:commentId", async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const { content } = req.body;

    const comment = await Comment.findByIdAndUpdate(
      commentId,
      { content },
      { new: true }
    );

    if (!comment) {
      return res.status(404).json({ error: "Comment not found." });
    }

    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: "Could not update the comment." });
  }
});

// Delete a post
app.delete("/posts/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found." });
    }

    res.json(deletedPost);
  } catch (err) {
    res.status(500).json({ error: "Could not delete the post." });
  }
});

// Delete a comment
app.delete("/comments/:commentId", async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found." });
    }

    res.json(deletedComment);
  } catch (err) {
    res.status(500).json({ error: "Could not delete the comment." });
  }
});


module.exports = app;