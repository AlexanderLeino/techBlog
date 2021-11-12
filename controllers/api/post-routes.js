const router = require('express').Router();
const { User, blogPost } = require('../../models');
const withAuth = require('../../utils/auth');


//create new post 
router.post('/', withAuth, async (req, res) => {
  console.log('The Post route has been hit!!!!!')
  console.log(req.body.blogBody)
  console.log(req.body.blogTitle)
  console.log(req.session)
  
  try {
      const newPost = await blogPost.create({
        title: req.body.blogTitle,
        body: req.body.blogBody,
        post_creator: req.session.user_id,
      });
     
  
      res.status(200).json(newPost);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });

  

//delete posts //withAuth
router.delete('/:id', async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
         
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put(`/:id`, (req, res) => {
    console.log(req.params.id) 
    console.log('put route has been hit')
  try {
      res.render('editPost')
      }catch (err) {
    res.status(500).json(err);
  }
});
  module.exports = router;