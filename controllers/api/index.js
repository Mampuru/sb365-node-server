const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const issueRoutes = require('./issue-routes');
const commentRoutes = require('./comment-routes');

router.use('/user', userRoutes);
router.use('/issue', issueRoutes);
router.use('/comment', commentRoutes);

module.exports = router;