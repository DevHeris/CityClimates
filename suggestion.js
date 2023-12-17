// Function to create a city search suggestion feature
const createCitySearchSuggestion = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData,
}) => {
  // Set up the HTML structure for city search suggestion
  root.innerHTML = `
        <label><b>Enter City</b><label>
        <input class="input" placeholder="Enter City 1"/>
        <div class="dropdown">
            <div class="dropdown-menu">
                <div class="dropdown-content results"></div>
            </div>
        </div>
  `;

  // Get references to key DOM elements
  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".results");

  // Function to handle input with debouncing
  const onInput = async (event) => {
    const items = await fetchData(event.target.value);
    console.log(items);

    // if (!items.length) {
    //   dropdown.classList.remove("is-active");
    //   return;
    // }

    resultsWrapper.innerHTML = "";
    dropdown.classList.add("is-active");
    for (let item of items) {
      const option = document.createElement("a");

      option.classList.add("dropdown-item");
      option.innerHTML = renderOption(item);

      option.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        input.value = inputValue(item);
        onOptionSelect(item);
      });

      resultsWrapper.appendChild(option);
    }
  };

  // Event listener for input with debouncing
  input.addEventListener("input", debounce(onInput, 500));

  // Event listener to close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) dropdown.classList.remove("is-active");
  });
};
