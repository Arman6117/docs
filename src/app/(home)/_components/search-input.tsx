import { Input } from "@/components/ui/input";
import Form from "next/form";
import SearchFormReset from "./search-form-reset";
import { Search } from "lucide-react";
const SearchInput = ({ query }: { query: string }) => {
  return (
    <div className="flex-1  flex items-center justify-center">
      <Form
        action={"/"}
        className="relative  search-form max-w-[720px] w-full "
      >
        <Input
          name="query"
          placeholder="Search.."
          className="md:text-base  placeholder:text-neutral-800  w-full border-none focus-visible:shadow-[0_1px_1px_0_rgba(65,69,73,.3),0_1px_3px_1px_rgba(65,69,73)], bg-[#F0F4F8] rounded-full h-[48px] focus-visible:ring-0"
          defaultValue={query}
        />
        <div className="flex gap-2 ">
          {query ? (
            <SearchFormReset />
          ) : (
            <button className="absolute right-0 top-3 mr-5" type="submit">
              <Search className="size-6 text-black" />
            </button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default SearchInput;
