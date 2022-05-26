const express =require('express');
const ProductsController =require('../controller/ProductsController');
const router =express.Router();

// Create  // When use request body need post method
router.post("/CreateProduct",ProductsController.CreateProduct);

// Read
router.get("/ReadProduct",ProductsController.ReadProduct);

// Update
router.post("/UpdateProduct/:id",ProductsController.UpdateProduct);


// Delete
router.get("/DeleteProduct/:id",ProductsController.DeleteProduct);


module.exports=router;