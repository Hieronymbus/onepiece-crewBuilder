import express from "express";

import { createPirate, readPirates, updatePirate, deletePirate} from "../controllers/pirate.controller.js"

const router = express.Router();

////create a new pirate
router.post("/", createPirate)

//// retreive a list of all pirates 
router.get("/", readPirates);

//// update a pirates info
router.put("/:pirateId", updatePirate);

////delete a pirate
router.delete("/:pirateId", deletePirate);


export default router
