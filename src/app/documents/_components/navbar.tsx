import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";

import { Doc } from "../../../../convex/_generated/dataModel";

import DocumentId from "./document-id";
import MenuBar from "./menu-bar";
import { Avatars } from "./avatars";
import { Inbox } from "./inbox";

const Navbar = ({ data }: { data: Doc<"documents"> }) => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="logo" width={56} height={56} />
        </Link>
        <div className="flex flex-col ">
          <DocumentId title={data.title} id={data._id} />
          <MenuBar data={data} />
        </div>
      </div>
      <div className="flex gap-3">
        <Inbox />
        <Avatars />
        <OrganizationSwitcher />
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
