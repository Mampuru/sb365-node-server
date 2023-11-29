const router = require('express').Router();
const { Issue, Comment, User } = require('../models/');

// get all issues for homepage
router.get('/', async (req, res) => {
  try {
    const issueData = await Issue.findAll({
      include: [User],
    });

    const issues = issueData.map((issue) => issue.get({ plain: true }));

    res.render('all-issues', { issues });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single issue
router.get('/issue/:id', async (req, res) => {
  try {
    const issueData = await Issue.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (issueData) {
      const issue = issueData.get({ plain: true });

      res.render('single-issue', { issue });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
