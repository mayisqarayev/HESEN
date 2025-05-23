const data = {
    "qis": {
      "1": [
        { name: "Riyaziyyat I", code: "MATH101", teacher: "Dr. Oruc", description: "Riyaziyyat dərsi, əsas anlayışlar və əməliyyatlar" },
        { name: "Fizika I", code: "PHYS101", teacher: "Dr. Nigar", description: "Fizikanın əsas prinsipləri, hərəkət və qüvvələr" },
        { name: "İngilis dili", code: "ENG101", teacher: "M. Elçin", description: "İngilis dilində əsas kommunikasiya bacarıqları" },
        { name: "İnformatika", code: "INF101", teacher: "M. Günel", description: "Kompyuter elmləri və proqramlaşdırma" },
        { name: "Azərbaycan tarixi", code: "HIST101", teacher: "Dr. Xəyalə", description: "Azərbaycanın qədim tarixindən günümüzə qədərki dövr" },
        { name: "Kimya", code: "CHEM101", teacher: "Dr. Rəna", description: "Kimyanın əsas prinsipləri və reaksiyalar" }
      ],
      "2": [
        { name: "Riyaziyyat II", code: "MATH201", teacher: "Dr. Elman", description: "İrəliləmiş riyaziyyat anlayışları və tətbiqləri" },
        { name: "Fizika II", code: "PHYS201", teacher: "Dr. Kamran", description: "Fizikanın daha dərindən öyrənilməsi" },
        { name: "İngilis dili II", code: "ENG201", teacher: "M. İlqar", description: "İngilis dilində daha inkişaf etmiş bacarıqlar" },
        { name: "Kimya II", code: "CHEM201", teacher: "Dr. Samir", description: "Kimyanın daha dərindən öyrənilməsi" },
        { name: "Biologiya", code: "BIO201", teacher: "Dr. Vüsal", description: "Biologiyanın əsas prinsipləri və həyatın yaranışı" },
        { name: "Ədəbiyyat", code: "LIT201", teacher: "M. Sevda", description: "Azərbaycan və dünya ədəbiyyatının əsas nümunələri" }
      ],
      "3": [
        { name: "Riyaziyyat III", code: "MATH301", teacher: "Dr. Nigar", description: "Riyaziyyatın daha inkişaf etmiş mövzuları" },
        { name: "Mexanika", code: "MECH301", teacher: "Dr. Orxan", description: "Hərəkət və mexanika qanunları" },
        { name: "İnformasiya Texnologiyaları", code: "IT301", teacher: "M. Günel", description: "Kompyuter şəbəkələri və məlumat bazaları" },
        { name: "Elektrik mühəndisliyi", code: "ELEC301", teacher: "Dr. Kamran", description: "Elektrik dövrələri və mühəndislik tətbiqləri" },
        { name: "İqtisadiyyat", code: "ECO301", teacher: "M. Vəli", description: "İqtisadiyyatın əsas anlayışları və modelləri" },
        { name: "Statistika", code: "STAT301", teacher: "Dr. Xəyalə", description: "Statistik metodlar və tətbiqləri" }
      ],
      "4": [
        { name: "Yüksək Riyaziyyat", code: "MATH401", teacher: "Dr. Elman", description: "Riyaziyyatın ən inkişaf etmiş sahələri" },
        { name: "Tətbiqi Fizika", code: "PHYS401", teacher: "Dr. Samir", description: "Fizikanın tətbiqi və laboratoriya işləri" },
        { name: "Sistemlərin Analizi", code: "SYS401", teacher: "Dr. Kamran", description: "Sistemlərin modelləşdirilməsi və analizi" },
        { name: "İnformasiya Sistemləri", code: "INFO401", teacher: "Dr. Elman", description: "İnformasiya sistemlərinin strukturu və tətbiqləri" },
        { name: "Yüksək Kimya", code: "CHEM401", teacher: "Dr. Aysel", description: "Kimyanın inkişaf etmiş anlayışları və reaksiyalar" },
        { name: "Təhlükəsizlik mühəndisliyi", code: "SEC401", teacher: "M. Həsən", description: "Təhlükəsizlik sistemləri və mühəndislik tətbiqləri" }
      ]
    },
    "yay": {
      "1": [
        { name: "Biologiya", code: "BIO101", teacher: "Dr. Vüsal", description: "Biologiyanın əsas prinsipləri və həyatın yaranışı" },
        { name: "Ədəbiyyat", code: "LIT101", teacher: "M. Sevda", description: "Azərbaycan və dünya ədəbiyyatının əsas nümunələri" },
        { name: "Məntiq", code: "LOG101", teacher: "Dr. Emin", description: "Məntiqin əsas qaydaları və tətbiqləri" },
        { name: "Cəmiyyət və dövlət", code: "SOC101", teacher: "Dr. Əli", description: "Cəmiyyətin və dövlətin əsas prinsipləri" },
        { name: "Kompüter şəbəkələri", code: "NET101", teacher: "Dr. Xədicə", description: "Kompüter şəbəkələrinin qurulması və idarə edilməsi" },
        { name: "Felsefə", code: "PHIL101", teacher: "M. Aydın", description: "Felsefənin əsas anlayışları və tarixçəsi" }
      ],
      "2": [
        { name: "Hesablama Riyaziyyatı", code: "MATH202", teacher: "Dr. Həsən", description: "Hesablama və analiz texnikaları" },
        { name: "İqtisadiyyat", code: "ECO202", teacher: "M. Vəli", description: "İqtisadiyyatın əsas anlayışları və modelləri" },
        { name: "Kimya II", code: "CHEM202", teacher: "Dr. Aysel", description: "Kimyanın daha dərindən öyrənilməsi" },
        { name: "Ətraf mühit", code: "ENV202", teacher: "M. Sevda", description: "Ətraf mühitin qorunması və ekologiya" },
        { name: "Sosial Media", code: "SOCMED202", teacher: "Dr. Elçin", description: "Sosial medianın təhlili və tətbiqləri" },
        { name: "Mühəndislik Riyaziyyatı", code: "ENGMATH202", teacher: "Dr. Nigar", description: "Mühəndislik tətbiqləri üçün riyaziyyat" }
      ],
      "3": [
        { name: "Mühəndislik Fizikası", code: "ENGPHYS301", teacher: "Dr. Hidayət", description: "Mühəndislik tətbiqləri üçün fizika" },
        { name: "Mühəndislik Kimyası", code: "ENGCHEM301", teacher: "M. Aysel", description: "Kimyanın mühəndislik sahələrindəki rolu" },
        { name: "Mühəndislik Mexanikası", code: "ENGMECH301", teacher: "Dr. Kamran", description: "Mexanikanın mühəndislik sahələrindəki tətbiqi" },
        { name: "Riyaziyyat III", code: "MATH301", teacher: "Dr. Xəyalə", description: "Riyaziyyatın daha inkişaf etmiş mövzuları" },
        { name: "İnformasiya Texnologiyaları", code: "IT301", teacher: "M. Günel", description: "Kompyuter şəbəkələri və məlumat bazaları" },
        { name: "Təhlükəsizlik və mühafizə", code: "SEC301", teacher: "Dr. Əli", description: "Təhlükəsizlik mühəndisliyi və prosedurlar" }
      ],
      "4": [
        { name: "Yüksək İnformatika", code: "COMP401", teacher: "Dr. Rəna", description: "İnformasiya sistemlərinin təhlili və inkişafı" },
        { name: "İntellektual Sistemlər", code: "AI401", teacher: "Dr. Məhəmməd", description: "Süni intellekt və maşın öyrənməsi" },
        { name: "Yüksək Riyaziyyat", code: "MATH401", teacher: "Dr. Elman", description: "Riyaziyyatın ən inkişaf etmiş sahələri" },
        { name: "Statistika", code: "STAT401", teacher: "M. Aysel", description: "Statistik metodlar və tətbiqləri" },
        { name: "Ətraf mühit mühəndisliyi", code: "ENV401", teacher: "Dr. Xədicə", description: "Ətraf mühitin mühəndislik tətbiqləri" },
        { name: "İşə qəbul və liderlik", code: "HR401", teacher: "Dr. Kamran", description: "İnsan resursları və liderlik bacarıqları" }
      ]
    }
  };

    function loadSubjects() {
      const semestr = document.getElementById('semestr').value;
      const kurs = document.getElementById('kurs').value;
      const subjectContainer = document.getElementById('subjectContainer');
      subjectContainer.innerHTML = '';
  
      const subjects = data[semestr][kurs];
      subjects.forEach(subject => {
        const subjectBox = document.createElement('div');
        subjectBox.classList.add('subject-box');
        subjectBox.innerHTML = `
          <h3>${subject.name}</h3>
          <p><strong>Kod:</strong> ${subject.code}</p>
          <p><strong>Müəllim:</strong> ${subject.teacher}</p>
          <button onclick='goToDetails(${JSON.stringify(subject)})'>Ətraflı</button>
        `;
        subjectContainer.appendChild(subjectBox);
      });
    }
  
    function goToDetails(subject) {
      localStorage.setItem('selectedSubject', JSON.stringify(subject));
      window.location.href = "fenn_details.html";
    }
  
    window.onload = loadSubjects;
  