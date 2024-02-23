import { Invoice } from "./classes/Invoice.js";
const createPerson = {
    name: 'bilal',
    age: 20
};
console.log(createPerson);
const one = new Invoice('bilal', 'pay', 500);
const two = new Invoice('hassan', 'pay', 400);
const invoices = [];
invoices.push(one);
invoices.push(two);
invoices.forEach(inv => {
    console.log(inv.format());
});
const form = document.querySelector('.new-item-form');
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
