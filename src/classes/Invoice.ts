import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter{
    
    constructor(
        readonly client: String,
        private details: String,
        public amount: Number
    ){}

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}