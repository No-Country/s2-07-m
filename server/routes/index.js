var express = require('express');
var router = express.Router();
const fs = require('fs')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const PATH_ROUTES = __dirname;
console.log(PATH_ROUTES);
const removeExtension = (fileName) => {
  return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file)
  console.log("name: ", name);
  console.log("file: ", file);
  if (name !== 'index') {
    const a = require(`./users`)
    console.log("a:",a);
    router.use(`/${name}`,a)
  }
})

module.exports = router;
