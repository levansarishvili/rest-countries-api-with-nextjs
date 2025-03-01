import Image from "next/image";

interface CountryDetailsProps {
  flag_img: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  currencies: string[];
  languages: string[];
  border_countries: string[];
}

export default function CountryDetails({
  flag_img,
  name,
  population,
  region,
  capital,
  currencies,
  languages,
  border_countries,
}: CountryDetailsProps) {
  return (
    <div className="grid grid-cols-2 gap-16">
      <div className="overflow-hidden w-full">
        <Image
          src={flag_img}
          alt={name}
          width={800}
          height={600}
          className="object-cover"
          quality={100}
        />
      </div>

      <div className="">
        <h2>{name}</h2>
        <p>
          <span>Population: </span>
          <span>{population}</span>
        </p>
        <p>
          <span>Region: </span>
          <span>{region}</span>
        </p>
        <p>
          <span>Capital: </span>
          <span>{capital}</span>
        </p>
        <div>
          <span>Currencies: </span>
          <span>{}</span>
        </div>
      </div>
    </div>
  );
}
