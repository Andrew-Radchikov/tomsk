
/* Элементы управления  */
const finish_button=document.querySelector(".final");
const control_buttons=document.querySelectorAll(".result_button");

/* Результаты, которые мы собираем  */
let student_id;
let student_sex;
let student_age;
let student_class;
let test1ball = [];

let resultPersonalforText = "";
let result1forText="";

/* Константы для выдачи интерпритации  */



/* Функции проверяющие заполнение и подсвечивающие незаполненные вопросы */

function checkPersonalFields() {
    const fields = document.querySelectorAll('.personal_select');
    let checked = true;

    fields.forEach(field => {
    if (field.value === "") {
        field.style.border = "2px solid red"; // Подсвечиваем пустые поля
        checked = false;
    } 
    else {
        field.style.border = ""; // Убираем рамку, если поля заполнили
    }
    });

    return checked
}

function checkIdentityFields(){
    const identityQuestion = document.querySelectorAll(".identity_question");
    let checked = true;

    identityQuestion.forEach((questionBlock) => {
        const checkedRadio = questionBlock.querySelector('input[type="radio"]:checked');
        if(checkedRadio == null) {
            questionBlock.classList.add("error");// Подсвечиваем неотвеченные вопросы
            checked = false;
        }
        else {
            questionBlock.classList.remove("error"); // Убираем подсветку, если поля заполнили
        }
    });

    return checked;
}




















/* Функции сбора и обработки информации */


function personalResults(){

    if(checkPersonalFields()){
        const fields = document.querySelectorAll('.personal_select');
        student_id = fields[0].value;
        student_sex = fields[1].value;
        student_age = Number(fields[2].value);
        student_class = Number(fields[3].value);
        const text_sex = "Мужской";
        if(student_sex == "female"){
            text_sex = "Женский";
        }
        resultPersonalforText += `<br> Участник с id: ${student_id}`;
        resultPersonalforText += `<br> Пол участника: ${text_sex}`;
        resultPersonalforText += `<br> Возраст, лет: ${student_age}`;
        resultPersonalforText += `<br> Класс обучения: ${student_class}`;
    }
}



function identityResults(){

    if(checkIdentityFields()){
        for (let i=1; i<= 16; i++){
            const val = document.querySelector(`input[name="identity${i}"]:checked`).value;
            test1ball.push(Number(val));
        }
        result1forText += "<br> Опросник Индекс устойчивости идентичности";
        result1forText += `<br> Шкала самооценки: ${test1ball[0] + (6 - test1ball[1]) + (6 - test1ball[2]) + (6 - test1ball[3])}`;
        result1forText += `<br> Шкала самоэффективности: ${test1ball[4] + test1ball[5] + test1ball[6] + test1ball[7]}`;
        result1forText += `<br> Шкала целостности: ${test1ball[8] + test1ball[9] + test1ball[10] + test1ball[11]}`;
        result1forText += `<br> Шкала уникальности: ${test1ball[12] + (6 - test1ball[13]) + test1ball[14] + test1ball[15]}`;
    }
}










finish_button.addEventListener("click", ()=>{
    //Помечаем красным невыполненные задания
    const isPersonal = checkPersonalFields();
    const isIdentity = checkIdentityFields();
 
    // Проверяем все ли блоки заполнены
    if(isIdentity && isPersonal){
        const overlay = document.getElementById('result-screen');
        const container = document.getElementById('results-data');
        // Блокируем скролл основной страницы
        document.body.classList.add('no-scroll');
        // Вычисляем результаты и пишем интерпретацию
        personalResults()
        identityResults();
        // Готовим результат на странице, но скрываем его
        let content = "";
        content += resultPersonalforText;
        content += "<br><br> Результаты <br>"
        content += result1forText;
        container.innerHTML = content;
        container.style.display = 'none';
        overlay.style.display = 'flex';
    }
})


control_buttons[0].addEventListener("click", ()=>{
    window.location.href = "index.html";
})

control_buttons[1].addEventListener("click", ()=>{
    //Показываем результат на странице
    const container = document.getElementById('results-data');
    container.style.display = 'block';
    //И готовим файл с результатами для скачивания
    let data = "РЕЗУЛЬТАТЫ: \n";
    data += resultPersonalforText.replaceAll(`<br>`, `\n`);
    data += result1forText.replaceAll(`<br>`, `\n`);

    const blob = new Blob([data], {type: "text/plain"});
    const url=window.URL.createObjectURL(blob);
    const a =document.createElement("a");
    a.style.display="none";
    a.href = url;
    a.download = `results_${student_id}.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body. removeChild(a);
})
