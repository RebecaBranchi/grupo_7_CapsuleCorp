const express = require ("express");
const router = express.Router();
const productController = require ("../controllers/productController");

router.get("/",productController.listProducts)

/*router.get("/create",productController.create)

router.post("/",productController.store)*/

router.get("/:id", productController.detailProduct);

/*router.get("/:id/edit",productController.editProduct)

router.put("/:id",productController.updateProduct)

router.delete("/:id",productController.deleteProduct)*/





module.exports = router

