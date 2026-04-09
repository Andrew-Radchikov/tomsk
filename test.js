const finish_button=document.querySelector(".final");
const control_buttons=document.querySelectorAll(".result_button");


let result1forText="";


function isEverythingMarked(){


const identityQuestion = document.querySelectorAll(".identity_question");

    let checked = true;

    identityQuestion.forEach((questionBlock) => {
        
        const checkedRadio = questionBlock.querySelector('input[type="radio"]:checked');
        
        if(checkedRadio == null){
            questionBlock.classList.add("error");
            checked = false;
        }
        else{
            questionBlock.classList.remove("error");
        }
    });

    return checked;
}



function identityResults(){

if(isEverythingMarked()){
    const answers_identity=[];

    for (let i=1; i<= 16; i++){
        const val = document.querySelector(`input[name="identity${i}"]:checked`).value;
        answers_identity.push(Number(val));
    }


    result1forText += "<br> Опросник Индекс устойчивости идентичности";
    result1forText += `<br> Шкала самооценки: ${answers_identity[0]+(6-answers_identity[1])+(6-answers_identity[2])+(6-answers_identity[3])}`;
    result1forText += `<br> Шкала самоэффективности: ${answers_identity[4]+answers_identity[5]+answers_identity[6]+answers_identity[7]}`;
    result1forText += `<br> Шкала целостности: ${answers_identity[8]+answers_identity[9]+answers_identity[10]+answers_identity[11]}`;
    result1forText += `<br> Шкала уникальности: ${answers_identity[12]+(6-answers_identity[13])+answers_identity[14]+answers_identity[15]}`;


return answers_identity;



}


}










finish_button.addEventListener("click", ()=>{
if(isEverythingMarked()){
 const overlay = document.getElementById('result-screen');
    const container = document.getElementById('results-data');
    
    // Блокируем скролл основной страницы
    document.body.classList.add('no-scroll');
    identityResults();
    // Генерируем много текста для проверки прокрутки
    let content = "";
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
    const container = document.getElementById('results-data');
    container.style.display = 'block';
let data = result1forText.replaceAll(`<br>`, `\n`);


const blob = new Blob([data], {type: "text/plain"});
const url=window.URL.createObjectURL(blob);

const a =document.createElement("a");
a.style.display="none";
a.href = url;
a.download = "results.txt";

document.body.appendChild(a);
a.click();

window.URL.revokeObjectURL(url);
document.body. removeChild(a);



})
