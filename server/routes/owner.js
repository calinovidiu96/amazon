const router = require('express').Router();
const Owner = require('../models/owner');
const upload = require('../middlewares/upload-photo');

// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './uploads/owners');
//     },
//     filename: function(req, file, cb) {
//         cb(null, new Date().toISOString() + file.originalname);
//     }  
// });
// const upload = multer({storage: storage});

//POST request
router.post('/owners', upload.single('photo'), async(req, res) => {
    console.log(req.file);
    try {
        let owner = new Owner();
        owner.name = req.body.name;
        owner.about = req.body.about;
        owner.photo = req.file.location;

        await owner.save();

        res.json({
            status: true,
            message:'Successfully created a new owner.'
        });
    } catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

// GET request
router.get('/owners', async(req, res) =>{
    try {
        let owners = await Owner.find();

        res.json({
            status: true,
            owners: owners
        });
    } catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});


module.exports = router;