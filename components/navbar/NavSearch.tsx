"use client";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

function NavSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get("search"?.toString()) || ""
  );
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) params.set("search", value);
    else params.delete("search");
    replace(`${pathname}?${params.toString()}`);
  });
  useEffect(() => {
    const searchTerm = searchParams.get("search");
    console.log(searchTerm);
    if (!searchTerm) setSearch("");
  }, [searchParams]);
  return (
    <Input
      type="text"
      placeholder="find a property ... "
      className="max-w-xs dark:bg-muted"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
    />
  );
}

export default NavSearch;
