import { Router } from "express";
import { ShotCreate } from "../../modules/shots/Controller/createShotController";

const short = Router();

const shotCreate = new ShotCreate();

short.post("/short", shotCreate.execute);

export { short };
