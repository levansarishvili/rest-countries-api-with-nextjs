import { Input } from "./ui/input";

export default function SearchCountry() {
  return (
    <div className="max-w-[480px] w-full">
      <Input
        type="search"
        placeholder="Search for a country..."
        className="bg-card text-foreground text-sm border-none placeholder:text-muted-foreground w-full p-6"
      />
    </div>
  );
}
