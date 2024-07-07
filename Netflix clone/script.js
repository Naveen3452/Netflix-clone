
 const qes=document.querySelectorAll(".qes");
 const ans=document.querySelectorAll(".ans");

 for(let i=0;i<qes.length;i++){
    const ans=document.querySelectorAll(".ans");
    qes[i].addEventListener("click",()=>{
        ans[i].classList.toggle("hide");
       
    })
}