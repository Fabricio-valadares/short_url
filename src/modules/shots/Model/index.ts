import { Typegoose, prop } from "@hasezoey/typegoose";

class ModelTypeGoose extends Typegoose {
  @prop({ required: true })
  hash: string;

  @prop({ required: true })
  origin_url: string;

  @prop({ required: true })
  url_shot_final: string;

  constructor(hash: string, origin_url: string, url_shot_final: string) {
    super();
    this.hash = hash;
    this.origin_url = origin_url;
    this.url_shot_final = url_shot_final;
  }
}

export const modelTypeGoose = new ModelTypeGoose("", "", "").getModelForClass(
  ModelTypeGoose
);
