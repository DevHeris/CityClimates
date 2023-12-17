// Function to debounce the execution of "onInput" function
const debounce = (func, delay = 1000) => {
  let timeoutId;

  return (...args) => {
    // If there is a timeout already set, clear it
    if (timeoutId) clearTimeout(timeoutId);

    // Set a new timeout
    timeoutId = setTimeout(() => {
      // Execute the provided function after the delay
      func.apply(null, args);
    }, delay);
  };
};
