const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// Handle incorrect routes
router.use((req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

module.exports = router;
