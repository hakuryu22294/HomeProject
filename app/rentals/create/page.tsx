import React from "react";
import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { createPropertyAction } from "@/utils/actions";
import { SubmitButton } from "@/components/form/Button";
import PriceInput from "@/components/form/PriceInput";
import CategoriesInput from "@/components/form/CategoriesInput";
import TextAreaInput from "@/components/form/TextAreaInput";

function CreatePropertyPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        create property
      </h1>
      <div className="border p-8 rounded-md">
        <h3 className="text-lg mb-4 font-medium">General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue="Cabin in Latvia"
            />
            <FormInput
              name="tagline"
              type="text"
              label="Tagline (30 limit)"
              defaultValue="Dream Getaway Awaits You Here"
            />
            <PriceInput defaultValue={100} />
            <CategoriesInput defaultValue="" />
          </div>
          <TextAreaInput
            name="description"
            labelText="Description (1000 limit)"
          />
          <SubmitButton className="mt-12" text="create rental" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreatePropertyPage;
