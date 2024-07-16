const currentYear = document.getElementById('currentyear');
currentYear.textContent = new Date().getFullYear();

const lastModified = document.getElementById('lastModified');
lastModified.textContent = (document.lastModified);

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const selectElement = document.querySelector("#productName");
const form = document.querySelector("form");

products.forEach(option => {
    let newOption = document.createElement("option");
    newOption.value = option.id;
    newOption.text = option.name;

    selectElement.appendChild(newOption);
});

let counter = getCount() || 0;

form.addEventListener("submit", () => {
    counter = counter + 1;
    setCount(counter)
})

function setCount(counter) {
    localStorage.setItem("reviewCount", counter)
}
function getCount() {
    return JSON.parse(localStorage.getItem('reviewCount'))
}