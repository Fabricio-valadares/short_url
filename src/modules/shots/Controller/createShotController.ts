import { Request, Response } from "express";
import { CreateShot } from "../Services/createShotServices";

class ShotCreate {
  public async execute(request: Request, response: Response) {
    const { url_short } = request.body;

    const createShot = new CreateShot();

    const result = await createShot.create(url_short);

    return response.status(200).json(result);
  }
}

export { ShotCreate };
