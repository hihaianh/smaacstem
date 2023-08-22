// toggle function for hidden notes container
// const notesIcon = document.getElementById('notes-icon');
// const notesContainer = document.getElementById('notes-container');
// notesIcon.addEventListener('click', toggleNotes);

// function toggleNotes() {
//     notesContainer.classList.toggle('peekaboo');
// }

// let closeNotes = document.getElementById('closeIcon');
// closeNotes.addEventListener('click', toggleNotes);

// close button- notes container prompt- are you sure you don't want to save your notes?
//must be able to detect unsaved changes to notes


//filter by bar / shows filtered section
const checkboxes = document.querySelectorAll('input[name="type"]')
// const filterBy = document.getElementById('type');
const sections = document.querySelectorAll(".junior-resources > div");

function applyFilters() {
    const selectedTypes = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
  
    sections.forEach(section => {
      const sectionType = section.getAttribute("data-type");
      const shouldShow = selectedTypes.length === 0 || selectedTypes.includes(sectionType);
  
      section.style.display = shouldShow ? "block" : "none";
    });
  }
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", applyFilters);
  });

//toggle filters
const filterDropdown = document.querySelector('.filter-dropdown')
const customFilters = document.querySelector('.custom-filter');

customFilters.addEventListener('click', function () {
    filterDropdown.classList.toggle('active')
})

//chosen filters displayed in junior-filter bar
//need filterDropdown

// const showChosenFilters = document.querySelector('.chosen-filters')
// const chosenCheckboxes = document.querySelector('.filter-dropdown input[type="checkbox"]');

// filterCheckboxes.forEach(checkbox => {
//     checkbox.addEventListener('change', () => {
//         updateFilters
//     })
// })

// function updateFilters() {
//     const chosenFilters = Array.from(filterCheckboxes)
//     chosenFilters.filter(checkbox => checkbox.checked);
//     .map(checkbox => checkbox.nextElementSibling.textContent)

//     showChosenFilters.innerHTML = 
// }


//favourite count
// const favouriteIcon = document.getElementById('heart');
const favouriteIcon = document.querySelectorAll('.fa-heart');
const counter = document.querySelectorAll('.favourite-count');

let total = 0;

favouriteIcon.forEach((favouriteIcon) => {
    favouriteIcon.addEventListener("click", () => {
        if (favouriteIcon.style.color === "0e65fb") {
            total++
            favouriteIcon.style.color = "red";
        } else {
            total--
            favouriteIcon.style.color = "#0e65fb";
        }
})
})

localStorage.setItem(total)
//unlike it
