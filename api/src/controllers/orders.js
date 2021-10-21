const Order = require('../models/order');


const createOrder = async (req, res) => {
    //creamos el objeto producto
    let { user, items, quantity, totalPrice, status } = req.body;
        let newOrder = new Order({
             user: user,
             items: items,
             quantity: quantity,
             totalprice: totalPrice,
             status: status           
         });   
   
    try {
        const user = await newOrder.save();
        res.status(200).json({
            message: "Added Succefully",   //agregado exitosamente
            user
        });
    } catch (error) {
        console.log('EEEEEEEEEEEERRRRRRRRROR', error)
        res.status(400).json({
            message: "Couldn't create please try again"
        });
    }
};


const getAllOrders = async (req, res) => {
    try {
        const ordersAll = await Order.find();
        res.status(200).json(ordersAll);
    } catch (error) {
        res.status(400).json({ 
            message: "Cannot get the order"
        });
    }
};

const getOrder = async (req, res) => { 
    const {user} = req.params;
    try {
        const orderUser = await Order.find(user);
        res.status(200).json(orderUser);
    } catch (error) {
        res.status(404).json({ 
            message: "Cannot get the user orders"
        });
    }
};




module.exports = {
    createOrder,
    getAllOrders,
    getOrder
}