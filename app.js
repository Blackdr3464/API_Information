var informationStudent = 'http://localhost:3000/listStudent';

//getStudent
function getListStudent(callback) {
    fetch(informationStudent)
        .then(function(reponsive) {
            return reponsive.json()
        })
        .then(callback)
}

//Start
function start() {
    getListStudent(renderListStudent)
}
start();

//renderListStudent ra trình duyệt

function renderListStudent(listStudent) {
    var listStudentBlock = document.querySelector('#list-student');
    var htmls = listStudent.map(function(student) {
        return `
        <li>
            <h4>${student.name}</h4>
            <p>Tuổi: ${student.age}</p>
            <p>Số điện thoại: ${student.phone}</p>
            <p>Email: ${student.email}</p>
        </li>`;
    })
    listStudentBlock.innerHTML = htmls.join(' ');
}