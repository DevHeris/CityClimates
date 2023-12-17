// Mock function for fetching city suggestions
function fetchCitySuggestions(partialCityName) {
  // Replace this with your logic to fetch suggestions from an API or data source
  const mockSuggestions = ["Istanbul", "Ibiza", "Ibaraki", "Ibadan", "Ibague"];
  const filteredSuggestions = mockSuggestions.filter((city) =>
    city.toLowerCase().includes(partialCityName.toLowerCase())
  );

  // Display suggestions in the autocomplete list
  displaySuggestions(filteredSuggestions);
}

// Function to display city suggestions in the autocomplete list
function displaySuggestions(suggestions) {
  autocompleteList.innerHTML = ""; // Clear previous suggestions

  suggestions.forEach((city) => {
    const listItem = document.createElement("li");
    listItem.textContent = city;

    // Add click event listener to populate input field with selected suggestion
    listItem.addEventListener("click", function () {
      cityInput.value = city;
      autocompleteList.innerHTML = ""; // Clear autocomplete list after selection
    });

    autocompleteList.appendChild(listItem);
  });
}
