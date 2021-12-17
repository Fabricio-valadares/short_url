import shortid from "shortid";
import { modelTypeGoose } from "../Model";

class CreateShot {
  public async create(url_shot: string) {
    const url = await modelTypeGoose.findOne({ url_shot });

    if (url) {
      return { url_shot };
    }

    modelTypeGoose.findOne;

    const hash = shortid.generate();

    const origin_url = "https://localhost:5555/";

    const url_shot_final = `${url_shot}/${hash}`;

    const newUrl = await modelTypeGoose.create({
      hash,
      origin_url,
      url_shot_final,
    });

    return newUrl;
  }
}

export { CreateShot };
