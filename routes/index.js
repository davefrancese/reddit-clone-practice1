const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('index', {
    title: 'Reddit Clone'
  })
})

module.exports = router;
