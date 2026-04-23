
/* Элементы управления  */
const finish_button=document.querySelector(".final");
const control_buttons=document.querySelectorAll(".result_button");

const gallery = document.querySelector('.gallery');
const items = document.querySelectorAll('.gallery-item');


 let startData = new Date().toLocaleString();
 let endData;



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

let test3ball = [];

let intense_check2 = false;
let intense2;
let cope_text_results = [];
let test4ball = [];

let test5ball = [];

let picture_check = false;
let picture;
let tree_text_results = [];
let story = "";

let resultPersonalforText = "<br> <b>Персональные данные </b>";
let result1forText="";
let result2forText="";
let result3forText="";
let result4forText="";
let result5forText="";
let result6forText="";

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

let activationIndependence = ["Некоторый конформизм, в силу недостаточной уверенности в собственных силах при решении проблем, частое обращение за помощью к другим; угнетенное состояние при необходимости делать выбор самостоятельно, ощущение зависимости от других людей и ощущение невозможности изменений в своей жизни.",
    "Самостоятельное решение проблем, редкое обращение за помощью к другим.",
    "Решительное отстаивание своего мнения, самостоятельное решение проблем, независимая организация своей жизни."];
let activationPhysical = ["Переживания проблем со здоровьем, ощущение слабости и недомоганий, что способствует невозможности добиться в жизни большего.",
    "Ощущение бодрости большую часть времени, проблемы со здоровьем иногда возникают, но это не мешает осуществлению планов.",
    "Бодрость, низкая утомляемость, хорошая работоспособность"];
let activationPsychological = ["Сниженный уровень вовлеченности в деятельность, ощущение тупика при возникновении новых проблем, что мешает довести задуманное до конца, переживание трудностей, связанных с новыми начинаниями.",
    "Умеренное проявление инициативности, вовлеченности в деятельность.",
    "Жажда деятельности, инициативность, вовлеченность в деятельность, уверенное решение возникающих проблем."];
let activationTotal = ["Некоторый конформизм, в силу недостаточной уверенности в собственных силах при решении проблем, частое обращение за помощью к другим; угнетенное состояние при необходимости делать выбор самостоятельно, ощущение зависимости от других людей и ощущение невозможности изменений в своей жизни. Переживания проблем со здоровьем, ощущение слабости и недомоганий, что способствует невозможности добиться в жизни большего. Сниженный уровень вовлеченности в деятельность, ощущение тупика при возникновении новых проблем, что мешает довести задуманное до конца, переживание трудностей, связанных с новыми начинаниями.",
    "Самостоятельное решение проблем, редкое обращение за помощью к другим. Ощущение бодрости большую часть времени, проблемы со здоровьем иногда возникают, но это не мешает осуществлению планов. Умеренное проявление инициативности, вовлеченности в деятельность.",
    "Решительное отстаивание своего мнения, самостоятельное решение проблем, независимая организация своей жизни. Бодрость, низкая утомляемость, хорошая работоспособность. Жажда деятельности, инициативность, вовлеченность в деятельность, уверенное решение возникающих проблем."];

let copeS1=["Переосмысление стрессовой ситуации в негативном ключе, некоторый пессимизм.",
    "Переосмысление стрессовой ситуации то в позитивном, то в негативном ключе.",
    "Переосмысление стрессовой ситуации исключительно в позитивном ключе, оптимизм относительно происходящего."];
let copeS2=["Редкое использование отвлечения от неприятных мыслей, сосредоточение на них.",
    "Умеренное использование отвлечения от неприятных мыслей.",
    "Ярко выраженное использование отвлечения от неприятных мыслей."];
let copeS3=["Редкое сосредоточение на неприятных переживаниях, неприятностях и закрытость своих чувств.",
    "Умеренное сосредоточение на неприятных переживаниях, неприятностях и выражение своих чувств.",
    "Сосредоточение исключительно на неприятных переживаниях, неприятностях и яркое выражение своих чувств."];
let copeS4=["Недостаточно выраженное стремление получить совет, помощь или информацию.",
    "Желание получить совет, помощь или информацию.",
    "Выраженное стремление получить совет, помощь или информацию."];
let copeS5=["Сниженный уровень активности или прямых действий, направленных на преодоление стрессовой ситуации.",
    "Достаточный уровень активности или прямых действий, направленных на преодоление стрессовой ситуации.",
    "Очень высокий уровень активности или прямых действий, направленных на преодоление стрессовой ситуации."];
let copeS6=["Согласие с реальностью происходящего.",
    "Умеренные попытки отрицания реальности происходящего.",
    "Ярко выраженные попытки отрицания реальности происходящего."];
let copeS7=["Вера в себя, а не в сверхъестественные силы.",
    "От случая к случаю обращение к религии, вере, Богу.",
    "Сосредоточение на религии, вере."];
let copeS8=["Серьезное восприятие ситуации.",
    "Частично юмористическое восприятие ситуации.",
    "Юмористическое восприятие ситуации, использование шуток, юмора."];
let copeS9=["Упорство в достижении цели, регулирование усилий, направленных на взаимодействие со стрессором.",
    "Частичный отказ от достижения цели, регулирование усилий, направленных на взаимодействие со стрессором.",
    "Категорический отказ от достижения цели."];
let copeS10=["Использование слишком поспешных, импульсивных действий",
    "Умеренное сдерживание себя от слишком поспешных, импульсивных действий.",
    "Сдерживание себя от слишком поспешных, импульсивных действий."];
let copeS11=["Надежда на себя и свои силы, отказ от поиска эмоциональной, моральной поддержки, сочувствия и понимания.",
    "Поиск эмоциональной, моральной поддержки.",
    "Выраженный поиск эмоциональной, моральной поддержки, сочувствия и понимания."];
let copeS12=["Отказ от использования лекарственных средств как способа избегания проблемы и улучшения самочувствия.",
    "От случая к случаю употребление лекарственных средств как способа избегания проблемы и улучшения самочувствия.",
    "Употребление лекарственных средств как способа избегания проблемы и улучшения самочувствия."];
let copeS13=["Непринятие реальности произошедшего, стрессовой ситуации.",
    "Принятие реальности произошедшего, стрессовой ситуации.",
    "Полное смирение с реальностью произошедшего, со стрессовой ситуацией."];
let copeS14=["Отвлечение на другие дела, для того чтобы не сосредотачиваться на решении проблемы.",
    "Частичное сосредоточение на решении проблемы и отвлечение от других дел.",
    "Полное сосредоточение на решении проблемы и отвлечение от других дел."];
let copeS15=["Отказ от планирования и обдумывания своих дальнейших действий по решению проблемы.",
    "Планирование и обдумывание своих дальнейших действий по решению проблемы.",
    "Планирование и обдумывание своих дальнейших действий по решению проблемы, разработка стратегий поведения."];

let knowledgeOther = ["Не очень нравится рассказывать о своих интересах и способностях, не недоверие к психологии, так как нет видения пользы для себя, мало опыта для понимания людей и их поступков, некоторая отстраненность от других, их жизненных историй.",
    "Не очень нравится отвечать на вопросы о своих интересах и способностях, недостаточно опыта для понимания людей и их поступков, но доверие к психологии, потому что она помогает разобраться в себе, открытость новому опыту.",
    "Может подшутить над собой, нравится отвечать на вопросы о своих интересах и способностях, любит слушать истории из жизни других людей и соотносить с собственным опытом, нравится психология, так как она помогает разобраться в себе."];
let knowledgeChange = ["Не считает важным изменить что-то в себе, недостаточная направленность на лучшее понимание своего характера, обижается на критику других.",
    "Старается не допускать ошибок в учебе, стремится что-то изменить в себе, направлен на понимание своего характера, стремится к хорошим отношениям с другими.",
    "Старается не допускать ошибок в учебе, постоянно стремится что-то изменить в себе, считает это необходимым, направлен на лучшее понимание своего характера, стремится к хорошим отношениям с другими, не смотря на их критику."];
let knowledgeReflection = ["Не очень любит обдумывать свои ошибки и делать выводы на будущее, недостаточно интересуют фильмы и книги, в которых можно анализировать чувства героев, не нравятся разговоры на исторические, фантастические темы, темы общечеловеческих ценностей.",
    "Обдумывает свои ошибки и делает выводы на будущее, но недостаточно прикладывает волевые усилия для преодоления проблем, не всегда привлекают фильмы и книги, в которых можно анализировать чувства героев, но нравятся разговоры на тему общечеловеческих ценностей.",
    "Обдумывает свои ошибки и делает выводы на будущее, прикладывает волевые усилия для преодоления проблем, любит фильмы и книги, в которых можно анализировать чувства героев, нравятся разговоры на тему общечеловеческих ценностей, любит размышлять на исторические, фантастические и современные темы."];
let knowledgeTotal = ["Не очень нравится рассказывать о своих интересах и способностях, недоверие к психологии, так как нет видения пользы для себя, мало опыта для понимания людей и их поступков, некоторая отстраненность от других, их жизненных историй. Не считает важным изменить что-то в себе, недостаточная направленность на лучшее понимание своего характера, обижается на критику других. Не очень любит обдумывать свои ошибки и делать выводы на будущее, недостаточно интересуют фильмы и книги, в которых можно анализировать чувства героев, не нравятся разговоры на исторические, фантастические темы, темы общечеловеческих ценностей.",
    "Не очень нравится отвечать на вопросы о своих интересах и способностях, недостаточно опыта для понимания людей и их поступков, но доверие к психологии, потому что она помогает разобраться в себе, открытость новому опыту. Старается не допускать ошибок в учебе, стремится что-то изменить в себе, направлен на понимание своего характера, стремится к хорошим отношениям с другими. Обдумывает свои ошибки и делает выводы на будущее, но недостаточно прикладывает волевые усилия для преодоления проблем, не всегда привлекают фильмы и книги, в которых можно анализировать чувства героев, но нравятся разговоры на тему общечеловеческих ценностей",
    "Может подшутить над собой, нравится отвечать на вопросы о своих интересах и способностях, любит слушать истории из жизни других людей и соотносить с собственным опытом, нравится психология, так как она помогает разобраться в себе. Старается не допускать ошибок в учебе, постоянно стремится что-то изменить в себе, считает это необходимым, направлен на лучшее понимание своего характера, стремится к хорошим отношениям с другими, не смотря на их критику. Обдумывает свои ошибки и делает выводы на будущее, прикладывает волевые усилия для преодоления проблем, любит фильмы и книги, в которых можно анализировать чувства героев, нравятся разговоры на тему общечеловеческих ценностей, любит размышлять на исторические, фантастические и современные темы."];
let knowledgeLies = "Ваши результаты показали высокий уровень социальной желательности. Это часто случается, когда человек подсознательно стремится представить себя в максимально выгодном свете или предъявляет к себе очень высокие требования. Из-за этого основные показатели теста могут быть менее точными.";

let treeInterpritation = ["«Живое пространство», изображен ребенок, сидящий около величественного дерева, корни которого уходят глубоко в землю, а большая крона служит защитой. Это самое яркое из пространств, символизирующее прочную основу и защиту.",
    "«Мерцающее пространство» изображен темный густой лес, дорога, по которой идет ребенок, поддерживаемый взрослым и свет, который пробивается сквозь деревья, освещая путникам дорогу. По мнению К. Адамс, это пространство символизирует стремление к пониманию своей культуры и традиций при поддержке взрослого.",
    "«Непрозрачное пространство» изображены сумерки, солнце уходит за горизонт, практически не видно дерева, но хорошо различим темный силуэт ребенка. Картина символизирует одиночество, тревогу, беспокойство и страх. Традиции еще присутствуют, но есть разрывы, противоречия и нет ощущения поддержки.",
    "«Невидимое пространство» с деревьями в тумане, на картине нет ребенка. Иллюстрация символизирует сомнения, неприятие других, отдаленность от традиций и культуры, «утрату корней»."];

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


function checkActivationFields(){
    const activationQuestion = document.querySelectorAll(".activation_question");
    let checked = true;

    activationQuestion.forEach((questionBlock) => {
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



function checkCopeFields() {
    const copeQuestion = document.querySelectorAll(".cope_question");
    let checked = true;

    copeQuestion.forEach((questionBlock) => {
        const checkedRadio = questionBlock.querySelector('input[type="radio"]:checked');
        if(checkedRadio == null) {
            questionBlock.classList.add("error");// Подсвечиваем неотвеченные вопросы
            checked = false;
        }
        else {
            questionBlock.classList.remove("error"); // Убираем подсветку, если поля заполнили
        }
    });

    const fields = document.querySelectorAll('.cope_text');
    
    fields.forEach(field => {
        if (field.value === "") {
            field.style.border = "2px solid red"; // Подсвечиваем пустые поля
            checked = false;
        } 
        else {
            field.style.border = ""; // Убираем рамку, если поля заполнили
        }
    });

    if(! intense_check2){
        container2.style.border = "2px solid red";
        checked = false;
    }
    else{
        container2.style.border = "";
    }

    return checked;
}

function checkKnowledgeFields(){
    const activationQuestion = document.querySelectorAll(".knowledge_question");
    let checked = true;

    activationQuestion.forEach((questionBlock) => {
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



function checkTreeFields(){
    let checked = true;

    const fields = document.querySelectorAll('.tree_text');
    const bigtext = document.querySelector('.tree_text_large');
    const pictureArea = document.querySelector('.gallery');
    
    fields.forEach(field => {
        if (field.value === "") {
            field.style.border = "2px solid red"; // Подсвечиваем пустые поля
            checked = false;
        } 
        else {
            field.style.border = ""; // Убираем рамку, если поля заполнили
        }
    });

    if(! picture_check){
        pictureArea.style.border = "2px solid red";
        checked = false;
    }
    else{
        pictureArea.style.border = "";
    }

      
    if(bigtext.value === ""){
        bigtext.style.border = "2px solid red";
        checked = false;
    }
    else{
        bigtext.style.border = "";
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
        resultPersonalforText += `<br> Участник с id: ${student_id}`;
        resultPersonalforText += `<br> Пол участника: ${student_sex}`;
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





function activationResults(){

    if(checkActivationFields()){
        for (let i=1; i<= 9; i++){
            const val = document.querySelector(`input[name="activation${i}"]:checked`).value;
            test3ball.push(Number(val));
        }

        let scale1 = test3ball[0] + (4 - test3ball[5]) + test3ball[6];
        let scale2 = test3ball[2] + test3ball[3] + test3ball[7];
        let scale3 = test3ball[1] + test3ball[4] + test3ball[8];
        let total = scale1 + scale2 + scale3;

        result3forText += "<br> <br> Методика самоактивации личности <br>";
        result3forText += `<br> <b> Самостоятельность: ${scale1} </b><br>`;
        if(scale1 <= 5){
            result3forText += activationIndependence[0];
        }
        if(scale1 > 5 && scale1 < 10){
            result3forText += activationIndependence[1];
        }
        if(scale1 >= 10){
            result3forText += activationIndependence[2];
        }
        result3forText += `<br> <b> Физическая активация: ${scale2} </b><br>`;
        if(scale2 <= 7){
            result3forText += activationPhysical[0];
        }
        if(scale2 > 7 && scale2 < 11){
            result3forText += activationPhysical[1];
        }
        if(scale2 >= 11){
            result3forText += activationPhysical[2];
        }
        result3forText += `<br> <b> Психологическая активация: ${scale3} </b><br>`;
        if(scale3 <= 4){
            result3forText += activationPsychological[0];
        }
        if(scale3 > 4 && scale3 < 10){
            result3forText += activationPsychological[1];
        }
        if(scale3 >= 10){
            result3forText += activationPsychological[2];
        }
        result3forText += `<br> <b> Самоактивация (итог): ${total} </b><br>`;
        if(total <= 19){
            result3forText += activationTotal[0];
        }
        if(total > 19 && total < 29){
            result3forText += activationTotal[1];
        }
        if(total >= 29){
            result3forText += activationTotal[2];
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





function copeResults(){

        if(checkCopeFields()){
        const text = document.querySelectorAll(".cope_text");
    
        
        cope_text_results.push(text[0].value);
        cope_text_results.push(text[1].value);
        
        result4forText += "<br> <br> COPE-30A <br>";
        result4forText += `<br> <b> Трудная жизненная ситуация:</b> ${cope_text_results[0]} <br>`;
        result4forText += `<br> <b> Когда она произошла:</b> ${cope_text_results[1]} <br>`;
        result4forText += `<br> <b> Уровень трудности ситуации:</b> ${intense2} <br>`;
      
        for (let i=1; i<= 30; i++){
            const val = document.querySelector(`input[name="cope${i}"]:checked`).value;
            test4ball.push(Number(val));
        }

        let scale1 = test4ball[10] + test4ball[16];
        let scale2 = test4ball[3] + test4ball[19];
        let scale3 = test4ball[9] + test4ball[21];
        let scale4 = test4ball[2] + test4ball[11];
        let scale5 = test4ball[8] + test4ball[22];
        let scale6 = test4ball[17] + test4ball[29];
        let scale7 = test4ball[0] + test4ball[4];
        let scale8 = test4ball[6] + test4ball[14];
        let scale9 = test4ball[15] + test4ball[23];
        let scale10 = test4ball[1] + test4ball[18];
        let scale11 = test4ball[7] + test4ball[24];
        let scale12 = test4ball[13] + test4ball[25];
        let scale13 = test4ball[20] + test4ball[26];
        let scale14 = test4ball[12] + test4ball[27];
        let scale15 = test4ball[5] + test4ball[28];
        

        result4forText += `<br> <b> Позитивное переформулирование: ${scale1} </b><br>`;
        if(scale1 <=3){
            result4forText += copeS1[0];
        }
        if(scale1 > 3 && scale1 < 8){
            result4forText += copeS1[1];
        }
        if(scale1 >= 8){
            result4forText += copeS1[2];
        }

        result4forText += `<br> <b> Мысленный уход от проблемы: ${scale2} </b><br>`;
        if(scale2 <=2){
            result4forText += copeS2[0];
        }
        if(scale2 > 2 && scale2 < 8){
            result4forText += copeS2[1];
        }
        if(scale2 >= 8){
            result4forText += copeS2[2];
        }

        result4forText += `<br> <b> Концентрация на эмоциях и их активное выражение: ${scale3} </b><br>`;
        if(scale3 <=3){
            result4forText += copeS3[0];
        }
        if(scale3 > 3 && scale3 < 7){
            result4forText += copeS3[1];
        }
        if(scale3 >= 7){
            result4forText += copeS3[2];
        }

        result4forText += `<br> <b> Использование инструментальной социальной поддержки: ${scale4} </b><br>`;
        if(scale4 <=3){
            result4forText += copeS4[0];
        }
        if(scale4 > 3 && scale4 < 8){
            result4forText += copeS4[1];
        }
        if(scale4 >= 8){
            result4forText += copeS4[2];
        }

        result4forText += `<br> <b> Активное совладание: ${scale5} </b><br>`;
        if(scale5 <=3){
            result4forText += copeS5[0];
        }
        if(scale5 > 3 && scale5 < 8){
            result4forText += copeS5[1];
        }
        if(scale5 >= 8){
            result4forText += copeS5[2];
        }
        
        result4forText += `<br> <b> Отрицание: ${scale6} </b><br>`;
        if(scale6 <=2){
            result4forText += copeS6[0];
        }
        if(scale6 > 2 && scale6 < 7){
            result4forText += copeS6[1];
        }
        if(scale6 >= 7){
            result4forText += copeS6[2];
        }

        result4forText += `<br> <b> Обращение к религии: ${scale7} </b><br>`;
        if(scale7 <=2){
            result4forText += copeS7[0];
        }
        if(scale7 > 2 && scale7 < 7){
            result4forText += copeS7[1];
        }
        if(scale7 >= 7){
            result4forText += copeS7[2];
        }

        result4forText += `<br> <b> Юмор: ${scale8} </b><br>`;
        if(scale8 <=2){
            result4forText += copeS8[0];
        }
        if(scale8 > 2 && scale8 < 7){
            result4forText += copeS8[1];
        }
        if(scale8 >= 7){
            result4forText += copeS8[2];
        }
        
        result4forText += `<br> <b> Поведенческий уход от проблемы: ${scale9} </b><br>`;
        if(scale9 <=2){
            result4forText += copeS9[0];
        }
        if(scale9 > 2 && scale9 < 6){
            result4forText += copeS9[1];
        }
        if(scale9 >= 6){
            result4forText += copeS9[2];
        }

        result4forText += `<br> <b> Сдерживание: ${scale10} </b><br>`;
        if(scale10 <=3){
            result4forText += copeS10[0];
        }
        if(scale10 > 3 && scale10 < 8){
            result4forText += copeS10[1];
        }
        if(scale10 >= 8){
            result4forText += copeS10[2];
        }

        result4forText += `<br> <b> Использование эмоциональной социальной поддержки: ${scale11} </b><br>`;
        if(scale11 <=3){
            result4forText += copeS11[0];
        }
        if(scale11 > 3 && scale11 < 8){
            result4forText += copeS11[1];
        }
        if(scale11 >= 8){
            result4forText += copeS11[2];
        }

        result4forText += `<br> <b> Использование «успокоительных»: ${scale12} </b><br>`;
        if(scale12 <=2){
            result4forText += copeS12[0];
        }
        if(scale12 > 2 && scale12 < 6){
            result4forText += copeS12[1];
        }
        if(scale12 >= 6){
            result4forText += copeS12[2];
        }

        result4forText += `<br> <b> Принятие: ${scale13} </b><br>`;
        if(scale13 <=3){
            result4forText += copeS13[0];
        }
        if(scale13 > 3 && scale13 < 8){
            result4forText += copeS13[1];
        }
        if(scale13 >= 8){
            result4forText += copeS13[2];
        }

        result4forText += `<br> <b> Подавление конкурирующей деятельности: ${scale14} </b><br>`;
        if(scale14 <=2){
            result4forText += copeS14[0];
        }
        if(scale14 > 2 && scale14 < 7){
            result4forText += copeS14[1];
        }
        if(scale14 >= 7){
            result4forText += copeS14[2];
        }

        result4forText += `<br> <b> Планирование: ${scale15} </b><br>`;
        if(scale15 <=3){
            result4forText += copeS15[0];
        }
        if(scale15 > 3 && scale15 < 8){
            result4forText += copeS15[1];
        }
        if(scale15 >= 8){
            result4forText += copeS15[2];
        }


    }

}




function knowledgeResults(){

    if(checkKnowledgeFields()){
        for (let i=1; i<= 20; i++){
            const val = document.querySelector(`input[name="knowledge${i}"]:checked`).value;
            test5ball.push(Number(val));
        }

        let scale1 = test5ball[0] + test5ball[3] + test5ball[6] + test5ball[9] + test5ball[12];
        let scale2 = test5ball[1] + test5ball[4] + test5ball[7] + test5ball[10] + test5ball[13];
        let scale3 = test5ball[2] + test5ball[5] + test5ball[8] + test5ball[11] + test5ball[14];
        let total = scale1 + scale2 + scale3;
        let lie = 25-(test5ball[15] + test5ball[16] + test5ball[17] + test5ball[18] + test5ball[19]);
        console.log(lie);

        result5forText += "<br> <br> Уровень выраженности потребности в самопознании  <br>";
        if(lie > 14) {
            result1forText += `<br> <b> !!${knowledgeLies} </b><br>`;
        }
        result5forText += `<br> <b> Потребность в познании себя через других: ${scale1} </b><br>`;
        if(scale1 <= 14){
            result5forText += knowledgeOther[0];
        }
        if(scale1 > 14 && scale1 < 19){
            result5forText += knowledgeOther[1];
        }
        if(scale1 >= 19){
            result5forText += knowledgeOther[2];
        }
        
        result5forText += `<br> <b> Потребность в самоизменении: ${scale2} </b><br>`;
        if(scale2 <= 14){
            result5forText += knowledgeChange[0];
        }
        if(scale2 > 14 && scale2 < 19){
            result5forText += knowledgeChange[1];
        }
        if(scale2 >= 19){
            result5forText += knowledgeChange[2];
        }

        result5forText += `<br> <b> Потребность в саморефлексии: ${scale3} </b><br>`;
        if(scale3 <= 13){
            result5forText += knowledgeReflection[0];
        }
        if(scale3 > 13 && scale3 < 18){
            result5forText += knowledgeReflection[1];
        }
        if(scale3 >= 18){
            result5forText += knowledgeReflection[2];
        }

        result5forText += `<br> <b> Общий балл "Уровень выраженности потребности в самопознании" : ${total} </b><br>`;
        if(total <= 43){
            result5forText += knowledgeReflection[0];
        }
        if(total > 43 && total < 54){
            result5forText += knowledgeReflection[1];
        }
        if(total >= 54){
            result5forText += knowledgeReflection[2];
        }

    }
}




function treeResults(){

    if(checkTreeFields()){
        const fields = document.querySelectorAll('.tree_text');
        const bigtext = document.querySelector('.tree_text_large');
       
    fields.forEach(field => {
        tree_text_results.push(field.value);
    });

    story = bigtext.value;

        result6forText += "<br> <br> Методика «Пространство Дерева и Света»  <br>";
        result6forText += `<br> <b> Выбран рисунок: ${picture}</b><br>`;
        result6forText += `<br> <b> Интерпретация: </b> ${treeInterpritation[picture-1]} <br>`;
        result6forText += `<br> <b>Что чувствует ребенок на картинке, которую Вы выбрали?: </b> ${tree_text_results[0]} <br>`;
        result6forText += `<br> <b>О чем думает ребенок на картинке, которую Вы выбрали?: </b> ${tree_text_results[1]} <br>`;
        result6forText += `<br> <b>Что делает ребенок на картинке, которую Вы выбрали?: </b> ${tree_text_results[2]} <br>`;
        result6forText += `<br> <b>История: </b> ${story} <br>`;
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


const container2 = document.getElementById('ratingScale2');

for (let i = 1; i <= 10; i++) {
    const btn = document.createElement('button');
    btn.classList.add('rating-btn2');
    btn.textContent = i;

    btn.onclick = () => {
    intense_check2 = true;
    // 1. Убираем класс active у всех кнопок
    document.querySelectorAll('.rating-btn2').forEach(b => b.classList.remove('active'));
    
    // 2. Добавляем класс active нажатой кнопке
    btn.classList.add('active');
    
    // 3. Добавляем класс контейнеру, чтобы остальные стали тусклыми
    container2.classList.add('has-selection');
    
    // 4. Сохраняем значение в переменную
    intense2 = i;
    };

    container2.appendChild(btn);

}

// Картинки


items.forEach((item, index) => {
    item.addEventListener('click', () => {

        picture = index+1;      // Берем текст из атрибута alt
        picture_check = true;
        // 1. Убираем класс active у всех картинок
        items.forEach(el => el.classList.remove('active'));
        
        // 2. Добавляем класс active только той, на которую нажали
        item.classList.add('active');
        
        // 3. Включаем режим затемнения остальных (если еще не включен)
        gallery.classList.add('has-focus');

    });
});


// Отправка данных

function sendData(){
        
    endData = new Date().toLocaleString();
    let data = new FormData();
    data.append("startData", startData);
    data.append("endData", endData);
    data.append("id", student_id);
    data.append("sex", student_sex);
    data.append("age", student_age);
    data.append("klass", student_class);
// Индекс устойчивости идентичности
    data.append("i1", test1ball[0]);
    data.append("i2", test1ball[1]);
    data.append("i3", test1ball[2]);
    data.append("i4", test1ball[3]);
    data.append("i5", test1ball[4]);
    data.append("i6", test1ball[5]);
    data.append("i7", test1ball[6]);
    data.append("i8", test1ball[7]);
    data.append("i9", test1ball[8]);
    data.append("i10", test1ball[9]);
    data.append("i11", test1ball[10]);
    data.append("i12", test1ball[11]);
    data.append("i13", test1ball[12]);
    data.append("i14", test1ball[13]);
    data.append("i15", test1ball[14]);
    data.append("i16", test1ball[15]);   

// Шкала оценки жизнеспособности семьи 
    data.append("vq1", viability_text_results[1]);
    data.append("vq2", viability_text_results[2]);
    data.append("vq3", viability_text_results[3]);
    data.append("intense", intense); 
    data.append("vq4", viability_text_results[0]);

    data.append("v1", test2ball[0]);
    data.append("v2", test2ball[1]);
    data.append("v3", test2ball[2]);
    data.append("v4", test2ball[3]);
    data.append("v5", test2ball[4]);
    data.append("v6", test2ball[5]);
    data.append("v7", test2ball[6]);
    data.append("v8", test2ball[7]);
    data.append("v9", test2ball[8]);
    data.append("v10", test2ball[9]);
    data.append("v11", test2ball[10]);
    data.append("v12", test2ball[11]);
    data.append("v13", test2ball[12]);
    data.append("v14", test2ball[13]);
    data.append("v15", test2ball[14]);
    data.append("v16", test2ball[15]);
    data.append("v17", test2ball[16]);
    data.append("v18", test2ball[17]);
    data.append("v19", test2ball[18]);
    data.append("v20", test2ball[19]);

// Методика самоактивации личности

    data.append("a1", test3ball[0]);
    data.append("a2", test3ball[1]);
    data.append("a3", test3ball[2]);
    data.append("a4", test3ball[3]);
    data.append("a5", test3ball[4]);
    data.append("a6", test3ball[5]);
    data.append("a7", test3ball[6]);
    data.append("a8", test3ball[7]);
    data.append("a9", test3ball[8]);

// COPE30

    data.append("cq1", cope_text_results[0]);
    data.append("cq2", cope_text_results[1]);
    data.append("intense2", intense2); 

    data.append("c1", test4ball[0]);
    data.append("c2", test4ball[1]);
    data.append("c3", test4ball[2]);
    data.append("c4", test4ball[3]);
    data.append("c5", test4ball[4]);
    data.append("c6", test4ball[5]);
    data.append("c7", test4ball[6]);
    data.append("c8", test4ball[7]);
    data.append("c9", test4ball[8]);
    data.append("c10", test4ball[9]);
    data.append("c11", test4ball[10]);
    data.append("c12", test4ball[11]);
    data.append("c13", test4ball[12]);
    data.append("c14", test4ball[13]);
    data.append("c15", test4ball[14]);
    data.append("c16", test4ball[15]);
    data.append("c17", test4ball[16]);
    data.append("c18", test4ball[17]);
    data.append("c19", test4ball[18]);
    data.append("c20", test4ball[19]);
    data.append("c21", test4ball[20]);
    data.append("c22", test4ball[21]);
    data.append("c23", test4ball[22]);
    data.append("c24", test4ball[23]);
    data.append("c25", test4ball[24]);
    data.append("c26", test4ball[25]);
    data.append("c27", test4ball[26]);
    data.append("c28", test4ball[27]);
    data.append("c29", test4ball[28]);
    data.append("c30", test4ball[29]);

// Уровень выраженности потребности в самопознании

    data.append("k1", test5ball[0]);
    data.append("k2", test5ball[1]);
    data.append("k3", test5ball[2]);
    data.append("k4", test5ball[3]);
    data.append("k5", test5ball[4]);
    data.append("k6", test5ball[5]);
    data.append("k7", test5ball[6]);
    data.append("k8", test5ball[7]);
    data.append("k9", test5ball[8]);
    data.append("k10", test5ball[9]);
    data.append("k11", test5ball[10]);
    data.append("k12", test5ball[11]);
    data.append("k13", test5ball[12]);
    data.append("k14", test5ball[13]);
    data.append("k15", test5ball[14]);
    data.append("k16", test5ball[15]);
    data.append("k17", test5ball[16]);
    data.append("k18", test5ball[17]);
    data.append("k19", test5ball[18]);
    data.append("k20", test5ball[19]);
    
// Tree

    data.append("pic", picture);
    data.append("tq1", tree_text_results[0]);
    data.append("tq2", tree_text_results[1]);
    data.append("tq3", tree_text_results[2]);
    data.append("story", story);





    fetch(`https://script.google.com/macros/s/AKfycbyamshsf5Dt17Y-dAF5w65D-UaBP4A60Xh8Gv2BulGbj4xHsGCD1zZcO0F3an7s5FqnpQ/exec`, {method: "POST", mode: 'no-cors', body: data})
}



window.addEventListener('beforeunload', function (e) {
    // Отменяем стандартное поведение (нужно для работы события)
    e.preventDefault();
    // В современных браузерах текст ниже может не показаться (будет системный), 
    // но эта строка нужна для активации окна.
    e.returnValue = '';
});



finish_button.addEventListener("click", ()=>{
    //Помечаем красным невыполненные задания
    const isPersonal = checkPersonalFields();
    const isIdentity = checkIdentityFields();
    const isViability = checkViabilityFields();
    const isActivation = checkActivationFields();
    const isCope = checkCopeFields();
    const isKnowledge = checkKnowledgeFields();
    const isTree = checkTreeFields();
 
    // Проверяем все ли блоки заполнены
    if(isIdentity && isPersonal && isViability && isActivation && isCope && isKnowledge && isTree){
        
        const overlay = document.getElementById('result-screen');
        const container = document.getElementById('results-data');
        // Блокируем скролл основной страницы
        document.body.classList.add('no-scroll');
        // Вычисляем результаты и пишем интерпретацию
        knowledgeResults();
        personalResults();
        identityResults();
        viabilityResults();
        activationResults();
        copeResults();
        treeResults();
        sendData();
        // Готовим результат на странице, но скрываем его
        let content = "";
        content += resultPersonalforText;
        content += "<br><br> Результаты <br>";
        content += result1forText;
        content += result2forText;
        content += result3forText;
        content += result4forText;
        content += result5forText;
        content += result6forText;
        container.innerHTML = content;
        container.style.display = 'none';
        overlay.style.display = 'flex';
    }
    else{
        alert("Вы не ответили на все вопросы. Вернитесь, пожалуйста, и ответьте на выделенные вопросы");
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
    data += result3forText
    .replaceAll('<br>', '\n')
    .replaceAll('<b>', '')
    .replaceAll('</b>', '');
    data += result4forText
    .replaceAll('<br>', '\n')
    .replaceAll('<b>', '')
    .replaceAll('</b>', '');
    data += result5forText
    .replaceAll('<br>', '\n')
    .replaceAll('<b>', '')
    .replaceAll('</b>', '');
     data += result6forText
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
