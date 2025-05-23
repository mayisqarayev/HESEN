const data = {
    "qis": {
      "1": [
        { name: "Riyaziyyat I", teacher: "Dr. Oruc", credit: 6, mid: 42, exam: 40 },
        { name: "Fizika I", teacher: "Dr. Nigar", credit: 5, mid: 38, exam: 35 },
        { name: "İngilis dili", teacher: "M. Elçin", credit: 4, mid: 45, exam: 40 },
        { name: "İnformatika", teacher: "M. Günel", credit: 4, mid: 48, exam: 45 },
        { name: "Azərbaycan tarixi", teacher: "Dr. Xəyalə", credit: 3, mid: 40, exam: 30 },
        { name: "Kimya", teacher: "Dr. Rəna", credit: 4, mid: 35, exam: 32 }
      ],
      "2": [
        { name: "Riyaziyyat II", teacher: "Dr. Orxan", credit: 6, mid: 46, exam: 44 },
        { name: "Fizika II", teacher: "Dr. Leyla", credit: 5, mid: 40, exam: 38 },
        { name: "İngilis dili II", teacher: "M. Aysel", credit: 4, mid: 44, exam: 41 },
        { name: "OOP", teacher: "M. Rəşad", credit: 5, mid: 50, exam: 47 },
        { name: "Fəlsəfə", teacher: "Dr. Kamil", credit: 3, mid: 36, exam: 30 }
      ],
      "3": [
        { name: "Verilənlər bazası", teacher: "M. Zaur", credit: 5, mid: 45, exam: 42 },
        { name: "Əməliyyat sistemləri", teacher: "Dr. Sevil", credit: 6, mid: 43, exam: 40 },
        { name: "Şəbəkələr", teacher: "M. Elnur", credit: 5, mid: 39, exam: 37 },
        { name: "Web proqramlaşdırma", teacher: "M. Turan", credit: 4, mid: 49, exam: 48 },
        { name: "Təhlükəsizlik", teacher: "Dr. Rövşən", credit: 3, mid: 41, exam: 40 }
      ],
      "4": [
        { name: "Məlumatların analizi", teacher: "Dr. Zaur", credit: 5, mid: 47, exam: 45 },
        { name: "Maşın öyrənməsi", teacher: "Dr. Aygün", credit: 6, mid: 44, exam: 43 },
        { name: "Mobil proqramlaşdırma", teacher: "M. Səid", credit: 5, mid: 42, exam: 40 },
        { name: "Layihə idarəetməsi", teacher: "Dr. Şahin", credit: 3, mid: 39, exam: 36 }
      ]
    },
    "yay": {
      "1": [
        { name: "Riyaziyyat II", teacher: "Dr. Oruc", credit: 6, mid: 43, exam: 41 },
        { name: "Fizika II", teacher: "Dr. Nigar", credit: 5, mid: 39, exam: 36 },
        { name: "İngilis dili II", teacher: "M. Elçin", credit: 4, mid: 46, exam: 42 },
        { name: "İnformatika II", teacher: "M. Günel", credit: 4, mid: 47, exam: 46 }
      ],
      "2": [
        { name: "Diskret riyaziyyat", teacher: "Dr. Vüsal", credit: 5, mid: 42, exam: 40 },
        { name: "C++", teacher: "M. Fərid", credit: 5, mid: 45, exam: 43 },
        { name: "Ədəbiyyat", teacher: "Dr. Mehriban", credit: 3, mid: 38, exam: 35 }
      ],
      "3": [
        { name: "Verilənlər bazası II", teacher: "M. Zaur", credit: 5, mid: 48, exam: 46 },
        { name: "Web təhlükəsizlik", teacher: "Dr. Rövşən", credit: 4, mid: 42, exam: 39 },
        { name: "Frontend", teacher: "M. Elmir", credit: 4, mid: 45, exam: 43 }
      ],
      "4": [
        { name: "AI əsasları", teacher: "Dr. Aygün", credit: 6, mid: 47, exam: 45 },
        { name: "Big Data", teacher: "Dr. Zaur", credit: 5, mid: 44, exam: 42 },
        { name: "Startup layihəsi", teacher: "M. Səid", credit: 4, mid: 40, exam: 38 }
      ]
    }
  };
  
function calculateGPA(subjects) {
  let totalCredits = 0;
  let totalScore = 0;

  subjects.forEach(sub => {
    const final = sub.mid + sub.exam;
    totalCredits += sub.credit;
    totalScore += final * sub.credit;
  });

  return totalCredits > 0 ? (totalScore / totalCredits).toFixed(2) : "0.00";
}

function getAllSubjectsForCourse(course) {
  const qisSubjects = data.qis[course] || [];
  const yaySubjects = data.yay[course] || [];
  return [...qisSubjects, ...yaySubjects];
}

function getAllSubjectsAllCourses() {
  let subjects = [];
  for (let k = 1; k <= 4; k++) {
    subjects = subjects.concat(getAllSubjectsForCourse(String(k)));
  }
  return subjects;
}

function loadGrades() {
  const sem = document.getElementById("semestr").value;
  const kurs = document.getElementById("kurs").value;
  const subjects = (data[sem] && data[sem][kurs]) ? data[sem][kurs] : [];

  const tbody = document.getElementById("gradesTable").querySelector("tbody");
  tbody.innerHTML = "";

  if (subjects.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6">Bu kurs və semestr üçün məlumat yoxdur.</td></tr>`;
    document.getElementById("gpaValue").textContent = "0.00";
    document.getElementById("courseGpaValue").textContent = "0.00";
    document.getElementById("finalGpaValue").textContent = "0.00";
    return;
  }

  subjects.forEach(sub => {
    const finalScore = sub.mid + sub.exam;
    const row = `
      <tr>
        <td>${sub.name}</td>
        <td>${sub.teacher}</td>
        <td>${sub.credit}</td>
        <td>${sub.mid}</td>
        <td>${sub.exam}</td>
        <td>${finalScore}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });

  const courseSubjects = getAllSubjectsForCourse(kurs);
  const finalSubjects = getAllSubjectsAllCourses();

  document.getElementById("gpaValue").textContent = calculateGPA(subjects);
  document.getElementById("courseGpaValue").textContent = calculateGPA(courseSubjects);
  document.getElementById("finalGpaValue").textContent = calculateGPA(finalSubjects);
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "login.html";
}

window.onload = loadGrades;
