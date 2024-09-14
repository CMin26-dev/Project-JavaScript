const data = [
    {
        id: '1',
        question: "What is your name?",
        answer: "My name is John Doe"
    },
    {
        id: '2',
        question: "What is your age?",
        answer: "I am 25 years old"
    },
    {
        id: '3',
        question: "What is the weather today?",
        answer: "It is sunny today"
    },
    {
        id: '4',
        question: "What do you think about the weather today?",
        answer: "It is good for a picnic"
    },


];
const accordionWrapper = document.querySelector('.accordion');

function createAccordionData() {
    accordionWrapper.innerHTML = data.map( 
        (dataItem) => `
        <div class="accordion_item">
    <div class="accordion_title">
    <h3>${dataItem.question}</h3>
    <i class="fa-solid fa-arrow-down"></i>
    </div>
    <div class="accordion_content">
    <p>${dataItem.answer}</p>
    </div>
    </div>

     `
    ).join(" ");
}
createAccordionData();


const getAccordionTitles = document.querySelectorAll('.accordion_title');
 console.log('==========================');
    console.log(getAccordionTitles);
    console.log('==========================');

getAccordionTitles.forEach(currentItem=>{
    currentItem.addEventListener('click',(event)=>{
        if(currentItem.classList.contains('activve')){
            currentItem.classList.remove('active')
        }else{
            let getAlreadyAddedAciveClasses = document.querySelectorAll('.active')

            getAlreadyAddedAciveClasses.forEach((currentActiveItem)=>{
                currentActiveItem.classList.remove('active')
            })

            currentItem.classList.add('active');
        }
    })
} )