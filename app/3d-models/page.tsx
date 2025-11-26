import { getAllModels } from "../lib/models";
import { Model } from "../types";

const page = async () => {
  const models = await getAllModels();
  return models.map((model: Model) => <div key={model.id}> {model.name} </div>);
};

export default page;
