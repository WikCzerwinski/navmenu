
const output = document.querySelector('.output');
const output1 = document.createElement('div');
const ul = document.createElement('ul');
output.append(output1);
output.append(ul);
const url = 'list.json';
window.addEventListener('DOMContentLoaded',()=>{
   loadData();
})
 
function loadData(){
   fetch(url).then(rep=>rep.json())
   .then((data)=>{
       addtoPage(data);
   })
}
 
function addtoPage(arr){
   arr.forEach((el)=>{
       console.log(el);
       const li = document.createElement('li');
       li.textContent = el.title;
       ul.append(li);
   });
}