// Sample candidate data
const candidatesData = [
  { name: 'Candidate 1', location: 'A', jobRole: 'A' },
  { name: 'Candidate 2', location: 'B', jobRole: 'B' },
  { name: 'Candidate 3', location: 'C', jobRole: 'A' },
  { name: 'Candidate 4', location: 'B', jobRole: 'C' },
];

// Function to filter and display candidates based on search criteria
function searchCandidates(location, jobRole) {
  console.log(location);
  console.log(jobRole);
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
      const listItem = document.createElement('li');
      listItem.textContent = candidate.name;
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
  console.log('hello');
  event.preventDefault();
  const locationInput = document.getElementById('location').value;
  const jobRoleInput = document.getElementById('job-role').value;
  searchCandidates(locationInput, jobRoleInput);
});
