var listStudentApi = 'http://localhost:3000/listStudent';
//get API
function getListStudent(callback) {
    fetch(listStudentApi)
        .then(function(reponsive) {
            return reponsive.json()
        })
        .then(callback)
};
//start
function start() {
    getListStudent(renderListStudent)
}
start()

//render

function renderListStudent(listStudent) {
    var getElement = document.querySelector('#list-student')
    var htmls = listStudent.map(function(student) {
        return `<li>
            <h4>${student.name}</h4>
            <p>Tuổi: ${student.age}</p>
            <p>Số điện thoại: ${student.phone}</p>
            <p>Email: ${student.email}</p>
        </li>`
    })
    getElement.innerHTML = htmls.join(' ')
}