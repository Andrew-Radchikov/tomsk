
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
let viability_text_results = [];
let test2ball = [];



let resultPersonalforText = "<br> <b>Персональные данные </b>";
let result1forText="";
let result2forText="";

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

let viabilityCommunication = ["Недостаточное участие в принятии важных семейных решений, непонимание друг друга, отстранение об обсуждения общих для семьи проблем и трудностей, нежелание обратиться к членам семьи для разъяснения спорных вопросов, отстраненность от принятия важных решений в семье, осторожность в выражении своего мнения, страх быть непонятым, некоторая конфликтность во взаимодействии в семье, закрытость в общении с членами семьи.",
    "Участие в принятии важных семейных решений, обсуждение общих для семьи проблем и трудностей от случая к случаю, избирательное обращение к членам семьи для разъяснения спорных вопросов и при принятии важных решений, выражение своего мнения тем членам семьи, с которыми выстроены доверительные отношения.",
    "Высокая связность членов семьи друг с другом, участие всех членов семьи в принятии важных решений, атмосфера понимания, открытости и искренности, свободное выражение своего мнения, чувство ответственности, любви и привязанности ко всем членам семьи, открытое выражение своих мнений и чувств в семье и их обсуждение."];
let viabilityForecast = ["Неуверенность в конструктивном решении основных проблем в семье, неуверенность, что семья справится с трудностями, отказ от поиска новых способов решения проблем, недоверчивое отношение к членам своей семьи.",
    "Некоторые колебания относительно оптимального решения основных проблем в семье, не достаточная уверенность в устойчивости семьи перед трудностями, поиск новых способов решения проблем, вера в членов своей семьи.",
    "Оптимистичный взгляд на решение основных проблем в семье, уверенность в устойчивости семьи перед трудностями, активный поиск новых способов решения проблем, твердая вера в членов своей семьи."];
let viabilityAcceptance = ["Ригидное реагирование семьи на непредвиденные обстоятельства, непринятие стрессовых событий как части жизни, растерянность перед возникновением неожиданных проблем, неуверенность в преодолении страданий, закрытость и отгороженность от трудностей.",
    "Устойчивое реагирование семьи на непредвиденные обстоятельства на фоне недостатка гибкости, принятие не всех стрессовых событий как части жизни, а только тех, с которыми у семьи есть опыт преодоления, признание того, что проблемы могут быть неожиданными, уверенность в преодолении страданий.",
    "Весьма гибкое реагирование семьи на непредвиденные обстоятельства, принятие всех стрессовых событий как части жизни, признание того, что проблемы могут возникать неожиданно, твердая уверенность в преодолении страданий, взаимопонимание и открытость."];
let viabilitySociality = ["Неуверенность в ценности своей семьи для ближайшего окружения, отсутствие потребности обратиться за поддержкой к другим людям в трудных для семьи ситуациях, недоверие друзьям и социальному окружению своей семьи, закрытость семьи от социального окружения.",
    "Признание ценности своей семьи для ближайшего окружения, уверенность в поддержке других людей, но в зависимости от трудности ситуации, ощущение безопасности в социальном окружении.",
    "Твердая убежденность в ценности своей семьи для ближайшего окружения, уверенность в поддержке других людей в трудных и чрезвычайных для семьи ситуациях, стойкое ощущение безопасности в социальном окружении."];
let viabilitySpirituality = ["Недостаточная ориентация семьи на общие семейные ценности, традиции, неуверенность в способности семьи быть ориентиром для других и создавать новые традиции.",
    "Поддержание общих для всех членов семьи нравственных принципов, ценностей, смыслов, некоторых семейных традиций, ориентация на открытость и выражение сострадания другим.",
    "Хорошо сформированные общие для всех членов семьи нравственные принципы, ценности, смыслы, поддержание и создание новых семейных традиций, ориентация на пережитый опыт, который позволяет быть открытыми и выражать сочувствие другим на основе общих для семьи духовных ценностей."];
let viabilityTotal = ["Недостаточное участие в принятии важных семейных решений, непонимание друг друга, отстранение об обсуждения общих для семьи проблем и трудностей, некоторая конфликтность во взаимодействии в семье. Неуверенность в конструктивном решении основных проблем в семье, отказ от поиска новых способов решения проблем. Ригидное реагирование семьи на непредвиденные обстоятельства, непринятие стрессовых событий как части жизни, растерянность перед возникновением неожиданных проблем. Неуверенность в ценности своей семьи для ближайшего окружения, отсутствие потребности обратиться за поддержкой к другим людям в трудных для семьи ситуациях, недоверие друзьям и социальному окружению своей семьи. Недостаточная ориентация семьи на общие семейные ценности, традиции.",
    "Обсуждение общих для семьи проблем и трудностей от случая к случаю, избирательное обращение к членам семьи для разъяснения спорных вопросов и при принятии важных решений, выражение своего мнения тем членам семьи, с которыми выстроены доверительные отношения. Некоторые колебания относительно оптимального решения основных проблем в семье. Устойчивое реагирование семьи на непредвиденные обстоятельства на фоне недостатка гибкости, принятие не всех стрессовых событий как части жизни, а только тех, с которыми у семьи есть опыт преодоления. Признание ценности своей семьи для ближайшего окружения, уверенность в поддержке других людей, но в зависимости от трудности ситуации, ощущение безопасности в социальном окружении. Поддержание общих для всех членов семьи нравственных принципов, ценностей, смыслов, некоторых семейных традиций.",
    "Высокая связность членов семьи друг с другом, атмосфера понимания, открытости и искренности, открытое выражение своих мнений и чувств в семье и их обсуждение. Оптимистичный взгляд на решение основных проблем в семье, уверенность в устойчивости семьи перед трудностями, активный поиск новых способов решения проблем, твердая вера в членов своей семьи. Гибкое реагирование семьи на непредвиденные обстоятельства, принятие всех стрессовых событий как части жизни, твердая уверенность в преодолении трудностей. Уверенность в поддержке других людей в трудных и чрезвычайных для семьи ситуациях, стойкое ощущение безопасности в социальном окружении. Хорошо сформированные общие для всех членов семьи нравственные принципы, ценности, смыслы, поддержание и создание новых семейных традиций, ориентация на пережитый опыт, который позволяет быть открытыми и выражать сочувствие другим на основе общих для семьи духовных ценностей."];





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
        result1forText += "<br> <br> Опросник Индекс устойчивости идентичности <br>";
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



function viabilityResults(){
    
    if(checkViabilityFields()){
        const feelings = document.querySelector(`input[name="viability0"]:checked`).value;
        viability_text_results.push(feelings);
        for (let i=1; i<= 20; i++){
            const val = document.querySelector(`input[name="viability${i}"]:checked`).value;
            test2ball.push(Number(val));
        }

        const text = document.querySelectorAll(".viability_text");
    
        for (let i=0; i<= 2; i++){
            viability_text_results.push(text[i].value);
        }

    }

    let scale1 = test2ball[0] + test2ball[5] + test2ball[10] + test2ball[15];
    let scale2 = test2ball[1] + test2ball[6] + test2ball[11] + test2ball[16];
    let scale3 = test2ball[2] + test2ball[7] + test2ball[12] + test2ball[17];
    let scale4 = test2ball[3] + test2ball[8] + test2ball[13] + test2ball[18];
    let scale5 = test2ball[4] + test2ball[9] + test2ball[14] + test2ball[19];
    let total =scale1 + scale2 + scale3 + scale4 + scale5;



    result2forText += "<br> <br> Шкала оценки жизнеспособности семьи <br>";
    result2forText += `<br> <b> Члены семьи:</b> ${viability_text_results[1]} <br>`;
    result2forText += `<br> <b> С кем живет:</b> ${viability_text_results[2]} <br>`;
    result2forText += `<br> <b> Неблагоприятное событие в семье:</b> ${viability_text_results[3]} <br>`;
    result2forText += `<br> <b> Уровень интенсивности неблагоприятного события:</b> ${intense} <br>`;
    result2forText += `<br> <b> Изменения в семье:</b> ${viability_text_results[0]}<br>`;
  

    result2forText += `<br> <b> Семейная коммуникация и связность: ${scale1} </b><br>`;
        if(scale1 <=11){
            result2forText += viabilityCommunication[0];
        }
        if(scale1 > 11 && scale1 < 18){
            result2forText += viabilityCommunication[1];
        }
        if(scale1 >= 18){
            result2forText += viabilityCommunication[2];
        }

    result2forText += `<br> <b> Позитивный прогноз и решение проблем: ${scale2} </b><br>`;
        if(scale2 <=13){
            result2forText += viabilityForecast[0];
        }
        if(scale2 > 13 && scale2 < 19){
            result2forText += viabilityForecast[1];
        }
        if(scale2 >= 19){
            result2forText += viabilityForecast[2];
        }

    result2forText += `<br> <b> Принятие и гибкость: ${scale3} </b><br>`;
        if(scale3 <=12){
            result2forText += viabilityAcceptance[0];
        }
        if(scale3 > 12 && scale3 < 18){
            result2forText += viabilityAcceptance[1];
        }
        if(scale3 >= 18){
            result2forText += viabilityAcceptance[2];
        }

    result2forText += `<br> <b> Социальные ресурсы: ${scale4} </b><br>`;
        if(scale4 <=11){
            result2forText += viabilitySociality[0];
        }
        if(scale4 > 11 && scale4 < 18){
            result2forText += viabilitySociality[1];
        }
        if(scale4 >= 18){
            result2forText += viabilitySociality[2];
        }

    result2forText += `<br> <b> Духовность семьи: ${scale5} </b><br>`;
        if(scale5 <=11){
            result2forText += viabilitySpirituality[0];
        }
        if(scale5 > 11 && scale5 < 19){
            result2forText += viabilitySpirituality[1];
        }
        if(scale5 >= 19){
            result2forText += viabilitySpirituality[2];
        }

    result2forText += `<br> <b> Общий уровень жизнеспособности семьи: ${total} </b><br>`;
        if(total <=61){
            result2forText += viabilityTotal[0];
        }
        if(total > 61 && total < 88){
            result2forText += viabilityTotal[1];
        }
        if(total >= 88){
            result2forText += viabilityTotal[2];
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
        personalResults();
        identityResults();
        viabilityResults();
        // Готовим результат на странице, но скрываем его
        let content = "";
        content += resultPersonalforText;
        content += "<br><br> Результаты <br>";
        content += result1forText;
        content += result2forText;
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
    data += result2forText
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
