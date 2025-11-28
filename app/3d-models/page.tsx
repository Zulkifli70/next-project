import ModelsGrid from "@/app/components/ModelsGrid";
import { getAllModels } from "../lib/models";
import { ModelsPageProps } from "../types";
import Form from "next/form";

async function page({ searchParams }: ModelsPageProps) {
  const { q } = await searchParams;
  const models = await getAllModels();

  const filteredModel = q
    ? models.filter(
        (model) =>
          model.name.toLowerCase().includes(q.toLowerCase()) ||
          model.description.toLowerCase().includes(q.toLowerCase())
      )
    : models;
  return (
    <section>
      <div className="px-15 flex justify-end">
        <Form action={"/3d-models"}>
          <input
            type="text"
            name="q"
            placeholder="Search for a model"
            className="border px-5 py-2 rounded-3xl w-xs"
            autoComplete="off"
            defaultValue={q}
          />
        </Form>
      </div>
      <ModelsGrid title="3D Models" models={filteredModel} />
    </section>
  );
}

export default page;
