const BASE_URL = 'https://restcountries.com/v3.1';

function fetchCountries(countryName) {
  return fetch(`${BASE_URL}/name/${countryName}?fields=name,capital,population,flags,languages`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      } else {
        return response.json();
      }
    })
    .catch(error => Notify.failure('Oops, there is no country with that name'));
}

export default { fetchCountries };
