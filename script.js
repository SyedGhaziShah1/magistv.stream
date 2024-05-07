let accordian=document.querySelectorAll('.accordian');
accordian.forEach(accordian => {
    let icon=accordian.querySelector('.icon');
    let answer=accordian.querySelector('.answer');
    accordian.addEventListener('click', ()=>{
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    })
})

function Showsidebar(){
    let sidebar =document.querySelector('.sidebar');
    sidebar.style.display='flex';
}
function closeSidebar(){
    let sidebar =document.querySelector('.sidebar');
    sidebar.style.display='none';
}