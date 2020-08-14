const router = require('express').Router();
const Product = require('../models/product');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }  
});
const upload = multer({storage: storage});

// POST request - create new product
router.post('/products', upload.single('photo'), async (req, res) => {
    console.log(req.file);
    try{
        let product = new Product();

        product.title = req.body.title;
        product.description = req.body.description;
        product.photo = req.file.path;
        product.price = req.body.price;
        product.stockQuantity = req.body.stockQuantity;

        await product.save();
        
        res.json({
            status: true,
            message:'Product saved successfully.'
        });
    } catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

// GET request - get all products


// GET request - get a single product



// PUT request - update a single product



//DELETE request - delete a single product

module.exports = router;