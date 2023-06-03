



const faqContainer=document.querySelector(".faq-container");
const faqTitle = document.querySelector(".faq-title");
const faqContent = document.querySelector(".faq-content");
const faqIcon = document.querySelector(".faq-icon");

// for mobile
const burger=document.querySelector(".burger");
const dropDown=document.querySelector(".drop-down");
const nav=document.querySelector('nav');
// faqTitle.onclick=()=>
//    {
//        faqContent.classList.toggle('show');
//        faqIcon.classList.toggle('rotate-45');
       
//    }


burger.addEventListener("click",()=>{

    if(dropDown.classList.contains('h-0')){
        dropDown.classList.remove('h-0');
        dropDown.style.height='300px';
        nav.style.backgroundColor='white';
    }else{
        dropDown.classList.add('h-0');
        dropDown.style.height='0px';
        nav.style.backgroundColor='#fbbf27';
    }
})
faqContainer.addEventListener('click', (event)=>{
    const clickedArticle = event.target.closest("article");
    const  clickedFaqContent=clickedArticle.querySelector('.faq-content');
    const clickedFaqIcon=clickedArticle.querySelector('.faq-icon');
    clickedFaqContent.classList.toggle('show');
    clickedFaqIcon.classList.toggle('rotate-45');
    
});
    

