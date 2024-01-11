export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "oEkEF9x1ZRmsh2vI7AMZX8XmmX1Kp1ICnmvjsnjfbq97LgZqt9",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
