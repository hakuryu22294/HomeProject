"use client";

import { LuShare2 } from "react-icons/lu";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

function ShareButton({
  propertyId,
  name,
}: {
  propertyId: string;
  name: string;
}) {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL + `/properties/${propertyId}`;
  const shareLink = `${url}/properties/${propertyId}`;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="p-2" variant={"outline"} size={"icon"} type="button">
          <LuShare2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        sideOffset={10}
        className="flex items-center gap-x-2 justify-center w-full"
      >
        <TwitterShareButton url={shareLink} title={name}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <FacebookShareButton url={shareLink} title={name}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <EmailShareButton url={shareLink} title={name}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </PopoverContent>
    </Popover>
  );
}
export default ShareButton;
