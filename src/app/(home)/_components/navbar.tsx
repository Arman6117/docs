import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import Link from "next/link";
import Image from "next/image";

import SearchInput from "./search-input";

const Navbar = ({ query }: { query: string }) => {
  return (
    <nav className="flex items-center gap-3   justify-between h-full w-full">
      <div className="flex gap-3 items-center  shrink-0 pr-6">
        <Link href={"/"}>
          <Image src={"/logo.svg"} width={36} height={36} alt="logo" />
        </Link>
        <h3 className="text-xl">Docs</h3>
      </div>
      <SearchInput query={query} />
      <div className="flex gap-3 items-center">
        <OrganizationSwitcher
          afterLeaveOrganizationUrl="/"
          afterCreateOrganizationUrl={"/"}
          afterSelectOrganizationUrl={'/'}
          afterSelectPersonalUrl={'/'}
        />
        <UserButton />
      </div>
      <div />
    </nav>
  );
};

export default Navbar;
