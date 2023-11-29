const router = require('express').Router();
const { Issue } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const issueData = await Issue.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const issues = issueData.map((issue) => issue.get({ plain: true }));

    res.render('all-issues-admin', {
      layout: 'dashboard',
      issues,
    });
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/new', withAuth, (req, res) => {
  res.render('new-issue', {
    layout: 'dashboard',
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const issueData = await Issue.findByPk(req.params.id);

    if (issueData) {
      const issue = issueData.get({ plain: true });

      res.render('edit-issue', {
        layout: 'dashboard',
        issue,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;