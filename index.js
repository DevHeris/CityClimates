const searchSuggestionConfig = {
  renderOption: (city) => {
    return `
    <i class="fa-solid fa-location-dot"></i>
         ${city.name}

    `;
  },
  inputValue: (city) => {
    return city.name;
  },
  fetchData: async (searchTerm) => {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/find",
      {
        params: {
          appid: "c8eb31824ad47f79a6a694d6682cf9d3",
          mode: "json",
          type: "like",
          q: searchTerm,
        },
      }
    );
    return data.list;
  },
};

// Initialize autocomplete for both sides
createCitySearchSuggestion({
  ...searchSuggestionConfig,
  root: document.querySelector("#city1-suggestion"),
  onOptionSelect: (city) => {
    oncitySelect(city, document.getElementById("city2-summary"), "right");
  },
});
