
const subject = JSON.parse(localStorage.getItem('selectedSubject'));
document.getElementById('subjectName').textContent = subject.name;
document.getElementById('subjectDescription').textContent = subject.description;

const topics = [
  "Topic 1: Introduction",
  "Topic 2: Advanced Concepts",
  "Topic 3: Applications",
  "Topic 4: Best Practices",
  "Topic 5: Case Studies"
];

function displayTopics() {
  const topicsList = document.getElementById('topicsList');
  topicsList.innerHTML = '';
  topics.forEach(topic => {
    const li = document.createElement('li');
    li.textContent = topic;
    topicsList.appendChild(li);
  });
}

function showTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  const links = document.querySelectorAll('.tab-link');
  tabs.forEach(tab => tab.classList.remove('active'));
  links.forEach(link => link.classList.remove('active'));

  if (tabName === 'topics') {
    displayTopics();
  }

  document.querySelector(`.${tabName}`).classList.add('active');
  document.querySelector(`.tab-link[onclick="showTab('${tabName}')"]`).classList.add('active');
}

let currentMonthShown = null;

function showDays(month) {
  const dayButtonsContainer = document.getElementById('dayButtons');
  if (currentMonthShown === month) {
    dayButtonsContainer.innerHTML = '';
    currentMonthShown = null;
    return;
  }

  dayButtonsContainer.innerHTML = '';
  currentMonthShown = month;

  const daysInMonth = new Date(2025, month, 0).getDate();
  for (let day = 1; day <= daysInMonth; day++) {
    const button = document.createElement('button');
    const date = `${day}/${month}/2025`;
    button.textContent = date;
    button.onclick = function () {
      document.getElementById('selectionDiv').style.display = 'block';
      selectedButton = button;
      positionSelectionDiv(button);
    };
    dayButtonsContainer.appendChild(button);
  }
}

function positionSelectionDiv(button) {
  const selectionDiv = document.getElementById('selectionDiv');
  const rect = button.getBoundingClientRect();
  selectionDiv.style.top = `${rect.top + window.scrollY - selectionDiv.offsetHeight}px`;
  selectionDiv.style.left = `${rect.left + window.scrollX}px`;
}

let selectedButton = null;

function setSelection(selection) {
  if (selectedButton) {
    selectedButton.style.backgroundColor = selection === 'IE' ? '#3498db' : '#e74c3c';
  }
  document.getElementById('selectionDiv').style.display = 'none';
}

function setupScoreButtons(scoreSelectorId, scoreButtonId) {
  const scoreButton = document.getElementById(scoreButtonId);
  const scoreSelector = document.getElementById(scoreSelectorId);

  scoreButton.addEventListener('click', () => {
    scoreSelector.innerHTML = '';

    for (let i = 1; i <= 20; i++) {
      const btn = document.createElement('button');
      btn.textContent = i.toFixed(1);
      btn.style.padding = '10px';
      btn.style.border = 'none';
      btn.style.color = 'white';
      btn.style.cursor = 'pointer';
      btn.style.fontSize = '14px';
      btn.style.borderRadius = '5px';
      btn.style.backgroundColor = getGradientColor(i);

      btn.onclick = () => {
        scoreButton.textContent = i.toFixed(1);
        scoreButton.style.backgroundColor = getGradientColor(i);
        scoreSelector.style.display = 'none';
      };

      scoreSelector.appendChild(btn);
    }

    scoreSelector.style.display = 'flex';
  });
}

setupScoreButtons('scoreSelector', 'quizScoreButton');
setupScoreButtons('midtermScoreSelector', 'midtermScoreButton');
setupScoreButtons('presentationScoreSelector', 'presentationScoreButton');

function getGradientColor(score) {
  const red = Math.round(255 - (score - 1) * (255 / 19));
  const blue = Math.round((score - 1) * (255 / 19));
  return `rgb(${red}, 0, ${blue})`;
}
