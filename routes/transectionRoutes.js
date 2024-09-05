const express = require("express");
const { addTransection, getAllTransection,editTransection ,deleteTransection} = require("../controllers/transectionCtrl");

//router object
const router = express.Router();

//routers
//add transection
router.post('/add-transection',addTransection)

//get transection

router.post('/get-transection',getAllTransection)

//edit transection
router.post('/edit-transection',editTransection);

//delete transection

router.post('/delete-transection', deleteTransection);

module.exports = router;
