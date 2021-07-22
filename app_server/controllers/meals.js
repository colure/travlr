const fs = require('fs');
const menu = JSON.parse(fs.readFileSync('./data/menu.json'));


/*GET view*/
const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Meals';
    res.render('meals', {title: pageTitle, menu});
};

module.exports = {
    meals
} 