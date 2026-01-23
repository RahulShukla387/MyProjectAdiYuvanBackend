
import express from "express";
const router = express.Router();
import { uploadImage, upload } from "../cotrollers/uploadImageRoutes.js";
import { Upload } from "../models/Upload.js";

router.post("/uploadImage", upload.single("image"), uploadImage );
router.post("/getImage", async (req, res)=>{
     const allImage = await Upload.find({});
     res.send(allImage);
})


export default router;