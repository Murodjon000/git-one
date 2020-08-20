const btns=document.querySelectorAll('.btn-tab');
const articles=document.querySelectorAll('.content');
const about=document.querySelector('.about');

about.addEventListener("click",function(e){
    const id=e.target.dataset.id;
    
    if(id){
//remove actives from buttons
btns.forEach(function(btn){
    btn.classList.remove("active");
    e.target.classList.add("active");
});
//hide othres 
articles.forEach(function(article){
    article.classList.remove("active")

});
const element=document.getElementById(id)
element.classList.add("active");

}
})