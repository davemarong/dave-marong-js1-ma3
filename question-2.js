const resultContainer = document.querySelector(".resultContainer");
const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=ea73e8df700f452cb63775b0c91142e9";

const fetchApi = async () => {
  try {
    const response = await fetch(url);
    const result = await response.json();

    const data = result.results;

    resultContainer.innerHTML = "";

    for (let i = 0; i < 8; i++) {
      if (i === 8) {
        break;
      }
      const { name, rating, tags } = data[i];
      resultContainer.innerHTML += `<ul>LIST NR: ${
        i + 1
      }<li>Name: <b>${name}</b></li><li>Rating: <b>${rating}</b></li><li>Tags nr: <b>${
        tags.length
      }</b></li> <br /> </ul>`;
    }
  } catch (error) {
    resultContainer.innerHTML = "<div>There was an error.</div>";
    console.log(error);
  }
};
fetchApi();
