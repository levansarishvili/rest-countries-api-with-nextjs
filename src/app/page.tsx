import CountryCard from "@/components/CountryCard";
import FilterCountry from "@/components/FilterCountry";
import SearchCountry from "@/components/SearchCountry";

// import type { CountryType } from "@/components/interfaces/Interfaces";

export default async function Home() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();
  console.log(countries);

  return (
    <main className="flex flex-col gap-6 sm:gap-12 items-center justify-center mt-6 sm:mt-12">
      <div className="flex justify-between w-full items-center">
        <SearchCountry />
        <FilterCountry />
      </div>

      <div className="w-full flex flex-wrap justify-center gap-14">
        {/* Country cards */}
        {countries.map((country) => (
          <CountryCard
            key={country.name || ""}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag_img={country.flags.png}
          />
        ))}
      </div>
    </main>
  );
}
