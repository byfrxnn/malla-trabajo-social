// Lógica para aprobar los ramos y desbloquear los dependientes
function toggleCourse(courseId, prerequisites = []) {
  const course = document.getElementById(courseId);

  // Comprobar si todos los requisitos previos están aprobados
  if (prerequisites.every(req => document.getElementById(req).classList.contains('approved'))) {
    course.classList.toggle('approved');
  } else {
    alert('Este curso tiene requisitos previos. Asegúrate de aprobar los cursos anteriores.');
  }
}
