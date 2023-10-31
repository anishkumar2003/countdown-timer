const enddate="30 october 2023 08:00:00 PM";
document.querySelector('.enddate').innerText=enddate;
const inputs=document.querySelectorAll('input');
function clock()
{
    const currentdate=new Date();
    const end=new Date(enddate);

    const diff=(end-currentdate)/1000;
    
    if(diff<0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;

}
clock();
setInterval(clock,1000);