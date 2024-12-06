const expenseInput=document.querySelector(".expense-input");
const selections=document.querySelector(".selections");
const amt=document.querySelector(".amt");
const add=document.querySelector(".add");
const table=document.querySelector(".myTable");
const list=document.querySelector(".list");
const total=document.querySelector('.total');
const showAmt=document.querySelector(".t-amt");

const addData=(event)=>{
    event.preventDefault();
    const expense=expenseInput.value;
    const category=selections.value;
    const amount=amt.value;
    const newRow=document.createElement('tr');
    newRow.innerHTML=`<td>${expense}</td>
    <td>${category}</td>
    <td>${amount}</td>`;
    list.appendChild(newRow);

    expenseInput.value = '';
    amt.value = '';
}

const calcTotal=(event)=>{
    event.preventDefault();
    let amount=0;
    const allRows=list.querySelectorAll("tr");
    allRows.forEach((row)=>{
        const cell=row.querySelectorAll("td");
        amount=amount+parseInt(cell[2].textContent);
    })
    showAmt.innerHTML=`Rs.${amount}`;
}

add.addEventListener('click',addData);
total.addEventListener("click",calcTotal);