
/* Элементы управления  */
const finish_button=document.querySelector(".final");
const control_buttons=document.querySelectorAll(".result_button");



/* Результаты, которые мы собираем  */
let student_id;
let student_sex;
let student_age;
let student_class;
let test1ball = [];
let intense_check = false;
let intense;





let resultPersonalforText = "<br> <b>Персональные данные </b>";
let result1forText="";

/* Константы для выдачи интерпритации  */
let identitySelfesteem = ["Недостаточная удовлетворенность собой и своими достижениями, переживания бесполезности, склонность считать себя неудачником.",
    "Умеренно выраженная удовлетворенность собой и своими достижениями.",
    "Удовлетворенность собой и гордость за свои достижения, ощущение успешности."];
let identitySelfefficacy = ["Недостаточная уверенность в том, что можно решить сложные проблемы и справиться с неожиданными и непредвиденными событиями самостоятельно и достаточно эффективно.",
    "Умеренно выраженная уверенность в том, что сложные проблемы можно эффективно решить при достаточном приложении усилий, уверенность в своей находчивости при столкновении с непредвиденными ситуациями.",
    "Уверенность в решении сложных проблем при приложении достаточных усилий, настойчивость в использовании любых средств для достижения результата, эффективность в противостоянии неожиданным событиям, находчивость и изобретательность при преодолении непредвиденных ситуаций."];
let identityIntegrity = ["Недостаточное ощущение неразрывности, связности, непрерывности прошлого, настоящего и будущего.",
    "Умеренно выраженное ощущение неразрывности, связности, непрерывности прошлого, настоящего и будущего.",
    "Ярко выраженное ощущение неразрывности, связности, непрерывности прошлого, настоящего и будущего."];
let identityUniqueness = ["Недостаточное переживание своей уникальности и отличительности от других.",
    "Умеренно выраженное осознание своей уникальности, особенности и неповторимости, отличности от других.",
    "Ярко выраженные переживания своей уникальности, неповторимости и особенности."];



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

function checkViabilityFields() {
    const viabilityQuestion = document.querySelectorAll(".viability_question");
    let checked = true;

    viabilityQuestion.forEach((questionBlock) => {
        const checkedRadio = questionBlock.querySelector('input[type="radio"]:checked');
        if(checkedRadio == null) {
            questionBlock.classList.add("error");// Подсвечиваем неотвеченные вопросы
            checked = false;
        }
        else {
            questionBlock.classList.remove("error"); // Убираем подсветку, если поля заполнили
        }
    });

    const fields = document.querySelectorAll('.viability_text');
    
    fields.forEach(field => {
        if (field.value === "") {
            field.style.border = "2px solid red"; // Подсвечиваем пустые поля
            checked = false;
        } 
        else {
            field.style.border = ""; // Убираем рамку, если поля заполнили
        }
    });

    if(! intense_check){
        container.style.border = "2px solid red";
        checked = false;
    }
    else{
        container.style.border = "";
    }

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
        let text_sex = "Мужской";
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

        let scale1 = test1ball[0] + (6 - test1ball[1]) + (6 - test1ball[2]) + (6 - test1ball[3]);
        let scale2 = test1ball[4] + test1ball[5] + test1ball[6] + test1ball[7];
        let scale3 = test1ball[8] + test1ball[9] + test1ball[10] + test1ball[11];
        let scale4 = test1ball[12] + (6 - test1ball[13]) + test1ball[14] + test1ball[15];
        result1forText += "<br> Опросник Индекс устойчивости идентичности <br>";
        result1forText += `<br> <b> Шкала самооценки: ${scale1} </b><br>`;
        if(scale1 <=10){
            result1forText += identitySelfesteem[0];
        }
        if(scale1 > 10 && scale1 < 17){
            result1forText += identitySelfesteem[1];
        }
        if(scale1 >= 17){
            result1forText += identitySelfesteem[2];
        }
        result1forText += `<br> <b> Шкала самоэффективности: ${scale2} </b> <br>`;
        if(scale2 <=13){
            result1forText += identitySelfefficacy[0];
        }
        if(scale2 > 13 && scale2 < 17){
            result1forText += identitySelfefficacy[1];
        }
        if(scale2 >= 17){
            result1forText += identitySelfefficacy[2];
        }
        result1forText += `<br> <b> Шкала целостности: ${scale3} </b> <br>`;
        if(scale3 <=9){
            result1forText += identityIntegrity[0];
        }
        if(scale3 > 9 && scale3 < 15){
            result1forText += identityIntegrity[1];
        }
        if(scale3 >= 15){
            result1forText += identityIntegrity[2];
        }
        result1forText += `<br> <b> Шкала уникальности: ${scale4} </b> <br>`;
          if(scale4 <=10){
            result1forText += identityUniqueness[0];
        }
        if(scale4 > 10 && scale3 < 16){
            result1forText += identityUniqueness[1];
        }
        if(scale4 >= 16){
            result1forText += identityUniqueness[2];
        }
    }
}



/* Выбор от 1 до 10 */


const container = document.getElementById('ratingScale');

for (let i = 1; i <= 10; i++) {
    const btn = document.createElement('button');
    btn.classList.add('rating-btn');
    btn.textContent = i;

    btn.onclick = () => {
    intense_check = true;
    // 1. Убираем класс active у всех кнопок
    document.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
    
    // 2. Добавляем класс active нажатой кнопке
    btn.classList.add('active');
    
    // 3. Добавляем класс контейнеру, чтобы остальные стали тусклыми
    container.classList.add('has-selection');
    
    // 4. Сохраняем значение в переменную
    intense = i;
    };

    container.appendChild(btn);

}
















finish_button.addEventListener("click", ()=>{
    //Помечаем красным невыполненные задания
    const isPersonal = checkPersonalFields();
    const isIdentity = checkIdentityFields();
    const isViability = checkViabilityFields();
 
    // Проверяем все ли блоки заполнены
    if(isIdentity && isPersonal && isViability){
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
    data += resultPersonalforText
    .replaceAll('<br>', '\n')
    .replaceAll('<b>', '')
    .replaceAll('</b>', '');
    data += result1forText
    .replaceAll('<br>', '\n')
    .replaceAll('<b>', '')
    .replaceAll('</b>', '');

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
