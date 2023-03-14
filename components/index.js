//resgatar variavel de url via get
const urlParams = new URLSearchParams(window.location.search);
const curso = urlParams.get('curso');
const desc = urlParams.get('desc');
const instrutor = urlParams.get('instrutor');
const start = urlParams.get('start ');
const end = urlParams.get('end');
const turma = urlParams.get('class');

// console.log(curso, desc, instrutor, start, end, turma);

//setar valores nos inputs
//document.getElementById('cod').value = curso;
//document.getElementById('desc').value = desc;
// document.getElementById('coach').value = instrutor;
// document.getElementById('data').value = start;
// document.getElementById('end').value = end;
// document.getElementById('class').value = turma;
