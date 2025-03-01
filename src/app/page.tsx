import CountryCard from "@/components/CountryCard";
import FilterCountry from "@/components/FilterCountry";
import SearchCountry from "@/components/SearchCountry";

import type { CountryType } from "@/components/interfaces/Interfaces";

export default async function Home() {
  // Fetch all countries data
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries: CountryType[] = await response.json();

  return (
    <main className="flex flex-col gap-6 sm:gap-12 items-center justify-center mt-6 sm:mt-12">
      <div className="flex max-sm:flex-col gap-10 justify-between w-full items-start sm:items-center">
        <SearchCountry />
        <FilterCountry />
      </div>

      <div className="w-full flex flex-wrap justify-center gap-16">
        {/* Country cards */}
        {countries.map((country) => (
          <CountryCard
            key={country.name}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital ? country.capital[0] : "N/A"}
            flag_img={country.flags.png}
            code={country.ccn3}
          />
        ))}
      </div>
    </main>
  );
}
