import ModelsGrid from "@/app/components/ModelsGrid";
import { getAllModels } from "../lib/models";

const page = async () => {
  const models = await getAllModels();
  return <ModelsGrid title="3D Models" models={models} />;
};

export default page;
