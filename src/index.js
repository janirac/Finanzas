import Finanzas from "./scripts/finanzas"; 
import Calculator from "./scripts/calculator";

// import "./styles/main.scss";

const app = new Finanzas()
const calc = new Calculator()

const REVENUE = "revenue"
const SPENDING = "spending" 
const REVENUE_BUTTON = "revenue-button"
const SPENDING_BUTTON = "spending-button"
const KEY_1 = "key1"
const KEY_2 = "key2"
const KEY_3 = "key3"
const KEY_4 = "key4"
const KEY_5 = "key4"
const KEY_6 = "key5"
const KEY_7 = "key6"
const KEY_8 = "key7"
const KEY_9 = "key8"
const KEY_0 = "key9"
const KEY_DOT = "keydot"
const KEY_DELETE = "keyDelete"
const KEY_ADD_TRANSACTION = "keyAddTransaction"

const TRANSACTION_TYPES = { 
    [REVENUE]: REVENUE, 
    [SPENDING]: SPENDING
}


let currentTransactionType = TRANSACTION_TYPES[REVENUE]
let amount = 0
let category = ""
let frequency = 0
let date = ""

document.addEventListener("DOMContentLoaded", () => {
    // 1. find out how to write to the browser local storage or cookie
    // 2. Check the browser local storage for the finanza app configuration file.
    // 3. if there is a configuration file then pass it as a parameter to the app

    // app.start()
    // app.addTransaction("revenue", 100, ":) salary", "yearly", "12/31/2010")
    // app.addTransaction("revenue", 200, ":) salary", "yearly", "12/31/2010")
    // app.addTransaction("revenue", 300, ":) salary", "yearly", "12/31/2010")
    // app.showTransactions() 
    // Used lines 12 - 15 for testing purposes
})

const updateSelectedTransactionType = (type) => {
    if(type === SPENDING_BUTTON){
        currentTransactionType = TRANSACTION_TYPES[SPENDING]
        console.log(currentTransactionType);
    } else if(type === REVENUE_BUTTON){
        currentTransactionType = TRANSACTION_TYPES[REVENUE]
        console.log(currentTransactionType);
    }
}

const handleClickEvent = (e) => {
    switch(e.target.id) {
        case SPENDING_BUTTON: 
            updateSelectedTransactionType(SPENDING_BUTTON)
        break;

        case REVENUE_BUTTON: 
            updateSelectedTransactionType(REVENUE_BUTTON)
        break;

        case KEY_1:
        case KEY_2:
        case KEY_3:
        case KEY_4:
        case KEY_5:
        case KEY_6:
        case KEY_7:
        case KEY_8:
        case KEY_9:
        case KEY_0:
        case KEY_DOT:
        case KEY_DELETE:
            calc.updateAmount(e.target.innerHTML)
        break;

        case KEY_ADD_TRANSACTION:
            calc.selectedKeysAmount()
        break;
    }
}

calc.selectedKeysAmount()
// app.addTransaction(currentTransactionType, amount, category, frequency, date)

document.addEventListener("click", handleClickEvent)


