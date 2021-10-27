const { Router } = require('express');
const router = Router();
const users = require('../controllers/user')

//registrarse
router.post('/signup', users.createUser)


//logearse
router.post('/login', async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
});

//todos los usuarios
router.get('/', users.findAllUser)
  

//obtener usuario
router.get('/:id', async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
});

//actualizar usuario
router.put('/:id', users.updateUser)
    

router.get('/user')

// Wish List
router.post("/addToWishList", users.addToWishList);
router.get("/wishlist/:id", users.getWishList);
router.delete('/wishlist/delete', users.deleteWishItem)

module.exports = router;