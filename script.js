const searchBtn = document.querySelector(".search-btn");
function mainFun() {
  const getName = document.querySelector(".get-name");
  const movieName = getName.value;
  getName.value = "";

  async function fetchMovieData(movieTitle) {
    const apiKey = "6dbe9c8e";
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(
      movieTitle
    )}`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.Response === "False") {
        throw new Error(data.Error);
      }

      return data;
    } catch (error) {
      console.error("Error fetching the movie data:", error.message);
      return null;
    }
  }

  async function displaying(movieName) {
    const data = await fetchMovieData(movieName);
    const infoBox = document.querySelector(".info-box");
    const error = document.querySelector(".error");
    const errorp = document.querySelector(".error p");
    const posterChange = document.querySelector('.poster');

    const targetName = [
      "title",
      "year",
      "imdb",
      "rated",
      "director",
      "released",
      "runtime",
      "country",
      "box-office",
      "awards",
    ];

    const getTarget = {};
    targetName.forEach((fildClass) => {
      getTarget[fildClass] = document.getElementsByClassName(fildClass);
    });

    

    if (data == null) {
      error.style.visibility = "visible";
      infoBox.style.visibility = "hidden";
      errorp.innerHTML = `"${movieName}"  Not Found 😞`;
    } else {
      infoBox.style.visibility = "visible";
      error.style.visibility = "hidden";
      posterChange.style.background = `url('${data["Poster"]})`;

      const topics = [
        "Title",
        "Year",
        "imdbRating",
        "Rated",
        "Director",
        "Released",
        "Runtime",
        "Country",
        "BoxOffice",
        "Awards",
      ];
      const finalData = []
      topics.forEach(element => {
        finalData.push(data[element])
      });
      
      let j = 0

      Object.keys(getTarget).forEach((key) => {
        const elements = getTarget[key];
        for (let i = 0; i < elements.length; i++) {
          if (j<4) {
             elements[i].innerHTML = `${finalData[j]}`;
             j++;
          }
          else{
            elements[i].innerHTML = `${topics[j]}: ${finalData[j]}`;
            j++;
          }
        }
      });
    }
  }

  displaying(movieName);
}
searchBtn.addEventListener("click", mainFun);


