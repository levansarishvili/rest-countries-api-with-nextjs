import Image from "next/image";
import { CountryCardProps } from "./interfaces/Interfaces";

export default function CountryCard({
  name,
  population,
  region,
  capital,
  flag_img,
}: CountryCardProps) {
  return (
    <div className="max-w-[267px] w-full flex flex-col gap-6 bg-card rounded-lg shadow-md overflow-hidden pb-10">
      <div className="w-full overflow-hidden h-[160px]">
        <Image
          src={flag_img}
          alt={name}
          width={400}
          height={400}
          className="w-full h-full object-cover"
          quality={100}
        />
      </div>

      <div className="px-6 flex flex-col gap-4">
        <h2 className="text-lg font-semibold">{name}</h2>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">
            <span>Population: </span>
            <span className="font-normal text-muted-foreground">
              {population.toLocaleString("en-US")}
            </span>
          </p>
          <p className="text-sm font-medium">
            <span>Region: </span>
            <span className="font-normal text-muted-foreground">{region}</span>
          </p>
          <p className="text-sm font-medium">
            <span>Capital: </span>
            <span className="font-normal text-muted-foreground">{capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
