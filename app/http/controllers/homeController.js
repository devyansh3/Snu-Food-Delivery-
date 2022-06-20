const Menu = require('../../models/menu')
const User = require('../../models/user')
function homeController() {
    return {
        async index(req, res) {
            const pizzas = await Menu.find()
            return res.render('home', { pizzas: pizzas })
        },

       
    }
}

module.exports = homeController