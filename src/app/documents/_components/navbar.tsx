import Image from "next/image";
import Link from "next/link";

import DocumentId from "./document-id";
import MenuBar from "./menu-bar";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="logo" width={56} height={56} />
        </Link>
        <div className="flex flex-col ">
          <DocumentId />
          <MenuBar />
        </div>
      </div>
      <div className="flex gap-3">
        <OrganizationSwitcher />
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
