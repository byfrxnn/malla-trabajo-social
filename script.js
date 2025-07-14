// Lógica para aprobar los ramos y desbloquear los dependientes
function toggleCourse(courseId, prerequisites) {
  const course = document.getElementById(courseId);

  // Si el curso tiene requisitos previos, comprobar si están aprobados
  if (prerequisites.every(req => document.getElementById(req).classList.contains('approved'))) {
    course.classList.toggle('approved');
  } else {
    alert('No puedes aprobar este ramo aún. Asegúrate de haber aprobado los ramos previos.');
  }
}

