localStorage.clear()

// export {cursoValue, descValue, instrutorValue}

let mainData = []
let codeCourse = []
let CoachersName = []

window.onload = async () => {
  await getAllInstructors()
  createSelectCourseOptions()
  createCoachOptions()

  document.querySelector('.pubOFF').style.display = 'none'

  const favicon = document.createElement('link')
  favicon.setAttribute('rel','shortcut icon')
  favicon.setAttribute('href','../src/assets/img/latam.svg')
  document.head.appendChild(favicon)
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
  var descSub = descValue.split(' - ')[1]

  descValue = descValue.split(' - ')[0]

  if (descSub == undefined) {
    descSub = '' 
  }

  var instrutorValue = document.getElementById('instrutor').value


  var startValue = new Date(document.getElementById('start').value).toLocaleString('pt-BR', { timeZone: 'UTC'}).substring(0,10)
  var endValue = new Date(document.getElementById('end').value).toLocaleString('pt-BR', { timeZone: 'UTC'}).substring(0,10)
  
  var dataAtual = null

  if (endValue == 'Invalid Da') {
    endValue = startValue
  } 

  if 
    (endValue == startValue) {
  dataAtual = startValue
  }

  if (startValue != endValue) {
    dataAtual = `${startValue} à ${endValue}`
  }

  
  var classValue = `T${document.getElementById('class').value}-${new Date().getUTCFullYear().toString().substring(2)}`
  
  //criar local storage para todos os valores
  localStorage.setItem('cursoValue', cursoValue)
  localStorage.setItem('descValue', descValue)
  localStorage.setItem('descSub', descSub)
  localStorage.setItem('instrutor', instrutorValue)
  localStorage.setItem('dataAtual', dataAtual)
  localStorage.setItem('classValue', classValue)
  localStorage.setItem('publico','MRO')
  
  // console.log(`Curso: ${cursoValue},\nDescr: ${descValue}, \nDesc Sub: ${descSub}, \nInst: ${instrutorValue}, \nData: ${dataAtual}, \nTurma: ${classValue}`);
}

//event listener para o checkbox

const escutar = () => {

  var publico = null
  var pub = document.querySelector('.pubON')
  
  if (!pub.checked){ 
    document.querySelector('.pubON').style.display = 'none'
    document.querySelector('.pubOFF').style.display = 'block'
    localStorage.setItem('publico',document.querySelector('#pubInp').value)
  }
}

