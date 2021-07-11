var listStudentApi = 'http://localhost:3000/listStudent';

//getAPI
function getListStudent(callback) {
    fetch(listStudentApi)
        .then(function(reponsive) {
            return reponsive.json()
        })
        .then(callback)
}
//start
function start() {
    getListStudent(renderListStudent)
}
start();
//render ra trình duyệt
function renderListStudent(liststudent) {
    var getElementdiv = document.querySelector('#list-student');
    var htmls = liststudent.map(function(student) {
        return `
        <li>
            <h4>${student.name}</h4>
            <p>Tuổi: ${student.age}</p>
            <p>Số điện thoại: ${student.phone}</p>
            <p>Email: ${student.email}</p>
        </li>
        `;
    })
    getElementdiv.innerHTML = htmls.join(' ')
}