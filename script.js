const hideMessage = () => {
  document.querySelector(".message-box").style.display = "none"
};

document
  .querySelector(".message-box .fa-xmark")
  .addEventListener("click", hideMessage);

function mainFun() {
  const infoBox = document.querySelector(".info-box");
  const errorMsg = document.querySelector(".error-box");
  const infoHead = document.querySelector(".poster");
  const getName = document.querySelector(".input-box");
  const movieName = getName.value;
  getName.value = "";


  function displayFun(data){
    if (data != null) {
      infoBox.style.display = "flex";
      errorMsg.style.display = "none";
    } else {
      infoBox.style.display = "none";
      errorMsg.style.display = "flex";
    }
  };

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
      displayFun(data);
      const temp = document.querySelector(".error-box p");
      temp.innerHTML = `"${movieName}" Not Found!`;
    } else {
      displayFun(data);
      infoHead.style.background = `url('${data["Poster"]})`;

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

      const finalData = [];
      topics.forEach((element) => {
        finalData.push(data[element]);
      });

      let j = 0;
      Object.keys(getTarget).forEach((key) => {
        const elements = getTarget[key];
        for (let i = 0; i < elements.length; i++) {
          if (j < 4) {
            elements[i].innerHTML = `${finalData[j]}`;
            j++;
          } else {
            elements[i].innerHTML = `${topics[j]}: ${finalData[j]}`;
            j++;
          }
        }
      });
    }
  }

  displaying(movieName);
}

document.querySelector('label i').addEventListener('click' , function(){
  hideMessage()
  mainFun()
});

 document
   .getElementById("in-box")
   .addEventListener("keydown", function (event) {
     if (event.key === "Enter") {
       event.preventDefault();
     }
   });

