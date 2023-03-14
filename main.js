// export {cursoValue, descValue, instrutorValue}

let mainData = []
let codeCourse = []
let CoachersName = []

window.onload = async () => {
  await getAllInstructors()
  createSelectCourseOptions()
  createCoachOptions()

  
  // console.log(cursoValue, descValue, instrutorValue)
  //exportar variaveis
}

const getDescriptionCourseBasedOnCode = (code) => {
  let course;
  
  mainData.find(e => {
    if (e.cod == code) {
      course = e.name
    }
  })
  
  return course
}

const getAllInstructors = async () => {
  const response = await fetch('./db.json')
  const data = await response.json()
  
  for (let i = 0; i < data.length; i++) {
    mainData.push(data[i])
  }
  
  CoachersName = mainData.filter(element => element.type == 'coach')
}

const createSelectCourseOptions = () => {
  let select = document.getElementById('curso')
  
  mainData.find(e => {
    if (e.type == 'course') {
      codeCourse.push(e.cod)
    }
  })
  
  codeCourse.forEach(element => {
    let option = document.createElement('option')
    option.innerHTML = element
    select.appendChild(option)
  })
}

const createCoachOptions = () => {
  let selectCoach = document.getElementById('instrutor')
  
  CoachersName.forEach(element => {
    let option = document.createElement('option')
    option.innerHTML = element.name
    selectCoach.appendChild(option)
  })
}

const setDescriptionCourse = () => {
  let selectCourse = document.getElementById('curso')
  
  let courseSelected = selectCourse.options[selectCourse.selectedIndex].value
  let courseDescription = getDescriptionCourseBasedOnCode(courseSelected)
  
  let inputCourseDescription = document.getElementById('desc')
  
  inputCourseDescription.value = courseDescription

  var cursoValue = document.getElementById('curso').value
  var descValue = document.getElementById('desc').value
  var instrutorValue = document.getElementById('instrutor').value

  var startValue = new Date(document.getElementById('start').value).toLocaleString('pt-BR', { timeZone: 'UTC'}).substring(0,10)
  var endValue = new Date(document.getElementById('end').value).toLocaleString('pt-BR', { timeZone: 'UTC'}).substring(0,10)
  if (endValue == null) {
    cursovalue = 'SEM DATA DE FIM'
  }
  var classValue = `T${document.getElementById('class').value}-${new Date().getUTCFullYear().toString().substr(2)}`

  

  console.log(`Curso: ${cursoValue},\nDescr: ${descValue}, \nInst: ${instrutorValue}, \nInic: ${startValue}, \nFim: ${endValue}, \nTurma: ${classValue}`);
}