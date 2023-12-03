// first try 
// const apiKey = 'a6a94bb366742d9e679ecf8d';
// const url = `https://v6.exchangerate-api.com/v6/${apiKey}/codes`;

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         const selectElement = document.createElement('select');
//         data.forEach(currency => {
//             const optionElement = document.createElement('option');
//             optionElement.value = currency.code;
//             optionElement.textContent = currency.name;
//             selectElement.appendChild(optionElement);
//         });
//         console.log(selectElement);
//     })
//     .catch(error => {
//         console.error(error);
//     });

// vincent method 
// const API_KEY = "";
// const API_URL = "https://v6.exchangerate-api.com/v6/";

// async function fetchCurrencies() {
//   // Fetching the available/supported currencies
//   return await fetch(`${API_URL}${API_KEY}/codes`).then(async (resp) => {
//     const result = await resp.json();
//     return result.supported_codes;
//   });
// }

// async function convertMonies(from, to, amount) {
//   return await fetch(`${API_URL}${API_KEY}/pair/${from}/${to}/${amount}`).then(
//     async (resp) => {
//       const result = await resp.json();
//       return result.conversion_result;
//     }
//   );
// }

// // Self invoking arrow function <-- Advanced advanced JS
// (async () => {
//   const currencies = await fetchCurrencies();
//   console.log(currencies);

//   const selectFromEl = document.getElementById("select-from");
//   const selectToEl = document.getElementById("select-to");
//   const currencyAmountEl = document.getElementById("currency-amount");
//   const currencyConvertedEl = document.getElementById("currency-converted");

//   for (let i = 0; i < currencies.length; i++) {
//     // Create a new select option
//     const newSelectOption = document.createElement("option");
//     newSelectOption.value = currencies[i][0];
//     newSelectOption.text = currencies[i][1];

//     // Add the select option to the select
//     selectFromEl.appendChild(newSelectOption);
//   }

//   for (let i = 0; i < currencies.length; i++) {
//     // Create a new select option
//     const newSelectOption = document.createElement("option");
//     newSelectOption.value = currencies[i][0];
//     newSelectOption.text = currencies[i][1];

//     // Add the select option to the select
//     selectToEl.appendChild(newSelectOption);
//   }

//   const submitBtnEl = document.getElementById("submit-btn");
//   submitBtnEl.addEventListener("click", async (event) => {
//     // Stop form from being submitted
//     event.stopPropagation();
//     event.preventDefault();

//     const convertedAmount = await convertMonies(
//       selectFromEl.value,
//       selectToEl.value,
//       currencyAmountEl.value
//     );

//     console.log(convertedAmount);
//     currencyConvertedEl.value = `${convertedAmount} ${selectToEl.value}`;
//   });

//   const switchBtnEl = document.getElementById("switch-btn");
//   switchBtnEl.addEventListener("click", async (event) => {
//     // Stop form from being submitted
//     event.stopPropagation();
//     event.preventDefault();

//     // Switch the currencies with each other
//     const temporaryValue = selectFromEl.value;
//     selectFromEl.value = selectToEl.value;
//     selectToEl.value = temporaryValue;
//   });
// })();
  

// mine 
const API_KEY = "a6a94bb366742d9e679ecf8d";
const API_URL = "https://v6.exchangerate-api.com/v6/";


// uses the fetch API to make a request to the exchange rate API and returns the list of supported codes 
async function fetchCurrencies() {
  try {
    const resp = await fetch(`${API_URL}${API_KEY}/codes`);
    const result = await resp.json();
    return result.supported_codes;
  } catch (error) {
    console.error("Error fetching currencies:", error);
    return [];
  }
}


// It takes the source currency (from), target currency (to), and the amount to convert (amount) , return null if error
async function convertMonies(from, to, amount) {
  try {
    const resp = await fetch(`${API_URL}${API_KEY}/pair/${from}/${to}/${amount}`);
    const result = await resp.json();
    return result.conversion_result;
  } catch (error) {
    console.error("Error converting currencies:", error);
    return null;
  }
}

async function initCurrencyConverter() {
  const currencies = await fetchCurrencies();
  console.log(currencies);

  const selectFromEl = document.getElementById("select-from");
  const selectToEl = document.getElementById("select-to");
  const currencyAmountEl = document.getElementById("currency-amount");
  const currencyConvertedEl = document.getElementById("currency-converted");

  currencies.forEach((currency) => {
    // Create a new select option
    const newSelectOption = document.createElement("option");
    newSelectOption.value = currency[0];
    newSelectOption.text = currency[1];

    // Add the select option to the select
    selectFromEl.appendChild(newSelectOption.cloneNode(true));
    selectToEl.appendChild(newSelectOption);
  });

  const submitBtnEl = document.getElementById("submit-btn");
  submitBtnEl.addEventListener("click", async (event) => {
    event.preventDefault();

    const convertedAmount = await convertMonies(
      selectFromEl.value,
      selectToEl.value,
      currencyAmountEl.value
    );

    if (convertedAmount !== null) {
      console.log(convertedAmount);
      currencyConvertedEl.value = `${convertedAmount} ${selectToEl.value}`;
    }
  });

  const switchBtnEl = document.getElementById("switch-btn");
  switchBtnEl.addEventListener("click", (event) => {
    event.preventDefault();

    // Switch the currencies with each other
    [selectFromEl.value, selectToEl.value] = [selectToEl.value, selectFromEl.value];
  });
}

// Initialize the currency converter
initCurrencyConverter();
