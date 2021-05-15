// const ul = document.querySelector('.items');
// ul.remove(); //all gone

// const ul = document.querySelector('.items');
// ul.lastElementChild.remove();


const ul = document.querySelector('.items');
ul.firstElementChild.textContent="changed from item1";
ul.lastElementChild.textContent="changed from last";
ul.children[1].textContent="changed from item2";
ul.children[2].innerText="changed from item3"; // //we cant with tag <>
ul.children[3].innerHTML="<h2>changed from item4</h2>"; //we can with tag<>

// const btn = document.querySelector(".btn");
// btn.style.background ='red'  //btn is red
// btn.addEventListener('click',(e)=> {  //click,mouseout,mouseover
//     e.preventDefault();
//     console.log(e.target);
//     document.querySelector('#my-form').style.background='#ccc';
//     document.querySelector('body').classList.add('bg-dark');
// });


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    console.log(nameInput.value);

    if(nameInput.value ==='' || emailInput.value ==='') {
        msg.classList.add('error')
        msg.innerHTML = "pls enter all fileds"
        setTimeout(()=> msg.remove(),1000 );
    }else{
        console.log('success');
    }
}
