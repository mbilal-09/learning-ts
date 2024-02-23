import { Invoice } from "./classes/Invoice.js";

interface Person {
    name: string,
    age: number
}

const  createPerson: Person = {
    name : 'bilal',
    age: 20
};

console.log(createPerson);


const one = new Invoice('bilal', 'pay', 500)
const two = new Invoice('hassan', 'pay', 400)

const invoices: Invoice[] = [];
invoices.push(one)
invoices.push(two)

invoices.forEach(inv => {
    console.log(inv.format());
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
    
})