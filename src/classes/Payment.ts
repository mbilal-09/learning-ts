import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter{
    
    constructor(
        readonly recipient: String,
        private details: String,
        public amount: Number
    ){}

    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}