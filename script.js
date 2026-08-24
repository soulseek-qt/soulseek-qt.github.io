const button=document.querySelector("#demoSearch");
const results=document.querySelector("#demoResults");
if(button&&results){
  button.addEventListener("click",()=>{
    results.animate([{opacity:.35,transform:"translateY(4px)"},{opacity:1,transform:"translateY(0)"}],{duration:240,easing:"ease-out"});
    const rows=[...results.children];
    rows.reverse().forEach((row,index)=>{
      setTimeout(()=>results.appendChild(row),index*45);
    });
  });
}
