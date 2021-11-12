const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');


//create new post 
router.post('/', withAuth, async (req, res) => {
  console.log('The Post route has been hit!!!!!')
    console.log(req.body.title)
    console.log(req.body.body)
    console.log(req.session.user_id)

  try {
      const newPost = await Post.create({
        title: req.body.title,
        body: req.body.body,
        post_creator: req.session.user_id
      });
     
  
      res.status(200).json(newPost);
    } catch (err) {
      
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

  router.put(`/:id`,  async (req, res) => { 
  try {
    const updatedRoot = await Post.increment('roots', {by: 1},
      
      {
        where: {
          id: req.params.id
        },
        attributes: ['body', 'roots', 'id'],
        include: [{
          model: User,
          attributes: ['userName']
        }]
      });
      res.json(updatedRoot)
      }catch (err) {
    res.status(500).json(err);
  }
});
  module.exports = router;