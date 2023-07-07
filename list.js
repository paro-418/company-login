// Sample candidate data
const candidatesData = [
  { name: 'Candidate 1', location: 'delhi', jobRole: 'frontend developer' },
  { name: 'Candidate 1', location: 'delhi', jobRole: 'frontend developer' },
  { name: 'Candidate 1', location: 'delhi', jobRole: 'frontend developer' },
  { name: 'Candidate 1', location: 'delhi', jobRole: 'frontend developer' },
  { name: 'Candidate 1', location: 'delhi', jobRole: 'frontend developer' },
  { name: 'Candidate 2', location: 'ranchi', jobRole: 'backend developer' },
  { name: 'Candidate 2', location: 'ranchi', jobRole: 'backend developer' },
  { name: 'Candidate 2', location: 'ranchi', jobRole: 'backend developer' },
  { name: 'Candidate 2', location: 'ranchi', jobRole: 'backend developer' },
  { name: 'Candidate 3', location: 'jamshedpur', jobRole: 'python developer' },
  { name: 'Candidate 4', location: 'giridih', jobRole: 'java developer' },
  { name: 'Candidate 3', location: 'jamshedpur', jobRole: 'python developer' },
  { name: 'Candidate 4', location: 'giridih', jobRole: 'java developer' },
  { name: 'Candidate 3', location: 'jamshedpur', jobRole: 'python developer' },
  { name: 'Candidate 4', location: 'giridih', jobRole: 'java developer' },
];

// function to create
// <li class="candidate">
//       <div class="name-container">
//         <h3 class="name" id="name">name</h3>
//         <span class="location" id="location">location</span>
//       </div>
//       <span class="role" id="role">role</span>
//     </li>

function createListElement(name, role, location) {
  // Create the <li> element
  const listItem = document.createElement('li');
  listItem.classList.add('candidate');

  // Create the <div> element with class "name-container"
  const nameContainer = document.createElement('div');
  nameContainer.classList.add('name-container');

  // Create the <h3> element with class "name" and id "name"
  const nameHeading = document.createElement('h3');
  nameHeading.classList.add('name');
  nameHeading.setAttribute('id', 'name');
  nameHeading.textContent = name; // Set the text content

  // Create the <span> element with class "location" and id "location"
  const locationSpan = document.createElement('span');
  locationSpan.classList.add('location');
  locationSpan.setAttribute('id', 'location');
  locationSpan.textContent = `from: ${location}`; // Set the text content

  // Append the <h3> and <span> elements to the <div>
  nameContainer.appendChild(nameHeading);
  nameContainer.appendChild(locationSpan);

  // Create the <span> element with class "role" and id "role"
  const roleSpan = document.createElement('span');
  roleSpan.classList.add('role');
  roleSpan.setAttribute('id', 'role');
  roleSpan.textContent = role; // Set the text content

  // Append the <div> and <span> elements to the <li>
  listItem.appendChild(nameContainer);
  listItem.appendChild(roleSpan);

  return listItem;
}

// Function to filter and display candidates based on search criteria
function searchCandidates(location, jobRole) {
  // Clear previous search results
  const candidatesList = document.getElementById('candidates');
  candidatesList.innerHTML = '';

  // Filter candidates based on location and job role
  const filteredCandidates = candidatesData.filter((candidate) => {
    const isLocationMatch =
      location === '' ||
      candidate.location.toLowerCase().includes(location.toLowerCase());
    const isJobRoleMatch =
      jobRole === '' ||
      candidate.jobRole.toLowerCase().includes(jobRole.toLowerCase());
    return isLocationMatch && isJobRoleMatch;
  });

  // Display filtered candidates
  if (filteredCandidates.length > 0) {
    filteredCandidates.forEach((candidate) => {
      const listItem = createListElement(
        candidate.name,
        candidate.jobRole,
        candidate.location
      );
      candidatesList.appendChild(listItem);
    });
  } else {
    const message = document.createElement('li');
    message.textContent = 'No candidates found.';
    candidatesList.appendChild(message);
  }
}

// Event listener for search form submission
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  const locationInput = document.getElementById('location').value;
  const jobRoleInput = document.getElementById('job-role').value;
  searchCandidates(locationInput, jobRoleInput);
});
