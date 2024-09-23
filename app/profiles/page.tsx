import { SubmitButton } from "@/components/form/Button";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import {
  fetchProfile,
  updateProfileAction,
  updateProfileImageAction,
} from "@/utils/actions";
import React from "react";

const ProfilesPage = async () => {
  const profile = await fetchProfile();
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">user profile</h1>
      <div className="border p-8 rounded-md">
        <ImageInputContainer
          image={profile.profileImage}
          name={profile.username}
          action={updateProfileImageAction}
          text="Update Profile Image"
        />
        <FormContainer action={updateProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              type="text"
              defaultValue={profile.firstName}
              name="firstName"
              label="First Name"
            />
            <FormInput
              type="text"
              defaultValue={profile.lastName}
              name="lastName"
              label="Last Name"
            />
            <FormInput
              type="text"
              defaultValue={profile.username}
              name="username"
              label="Username"
            />
          </div>
          <SubmitButton size="lg" text="Update Profile" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
};

export default ProfilesPage;
