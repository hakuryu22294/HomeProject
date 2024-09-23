/* eslint-disable @next/next/no-img-element */
import { fecthProfileImage } from "@/utils/actions";

import React from "react";
import { LuUser2 } from "react-icons/lu";

async function UserIcon() {
  const profileImage = await fecthProfileImage();
  if (profileImage)
    return (
      <img
        src={profileImage}
        alt="profile image"
        className="w-6 h-6 rounded-full"
      />
    );
  return <LuUser2 className="h-6 w-6 bg-primary text-white rounded-full" />;
}

export default UserIcon;
