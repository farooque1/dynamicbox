  const colors = ["red", "green", "blue"];
  const sizes = ["small", "medium", "large"];

  const populateDropdownOptions = (dropdownId, options) => {
    const dropdown = document.getElementById(dropdownId);
    dropdown.innerHTML = options.map(option => `<option value="${option}">${option}</option>`).join('');
  };

  const toggleBox = (event, boxNumber) => {
    const box = event.currentTarget;
    const dropdown = document.getElementById(`dropdown${boxNumber}`);
    const isOpen = dropdown.style.display === 'block';
    const allDropdowns = document.querySelectorAll('.dropdown');
    const allBoxes = document.querySelectorAll('.box');

    allDropdowns.forEach(item => (item.style.display = 'none'));
    allBoxes.forEach(box => (box.style.backgroundColor = '#fff')); // Reset all box colors to white

    dropdown.style.display = isOpen ? 'none' : 'block';

    if (!isOpen) {
      populateDropdownOptions(`color${boxNumber}`, colors);
      populateDropdownOptions(`size${boxNumber}`, sizes);
    }

    // Change background color of the clicked box to green
    box.style.backgroundColor = isOpen ? '#fff' : '#e8fbe8';
  };

  const stopPropagation = event => {
    event.stopPropagation();
  };
