import CountryDetails from "./CountryDetails";

interface ParamsType {
  params: {
    code: string;
  };
}

export default async function page({ params }: ParamsType) {
  const code = params.code;
  let countryDetails;

  try {
    // Fetch country details data
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    countryDetails = await response.json();
  } catch (error) {
    console.log(error);
  }

  return (
    <main>
      <CountryDetails
        key={countryDetails[0].name.common}
        flag_img={countryDetails[0].flags?.png}
        name={countryDetails[0].name.common}
        population={countryDetails[0].population}
        region={countryDetails[0].region}
        capital={
          countryDetails[0].capital ? countryDetails[0].capital[0] : "N/A"
        }
        currencies={countryDetails[0].currencies}
        languages={countryDetails[0].languages}
        border_countries={countryDetails[0].borders}
      />
    </main>
  );
}

// flag_img: string;
// name: string;
// population: number;
// region: string;
// capital: string;
// currencies: string[];
// languages: string[];
// border_countries: string[];
