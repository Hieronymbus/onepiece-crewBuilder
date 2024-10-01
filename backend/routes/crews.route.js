import express from "express"

import { createCrew, readCrews, addPirateToCrew, removePirateFromCrew, updateCrew, deleteCrew } from "../controllers/crew.controller.js";

const router = express.Router()

////create a crew
router.post("/", createCrew);

//// retreive list of crews
router.get("/", readCrews);

//// add a pirate to crew
router.post("/:crewId/pirates", addPirateToCrew );

////remove pirate from crew
router.delete("/:crewId/pirates/:pirateId", removePirateFromCrew);

////update a crews info
router.put("/:crewId", updateCrew );

////delete a crew
router.delete("/:crewId", deleteCrew);


export default router