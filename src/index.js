import Finanzas from "./scripts/finanzas"; 
import Calculator from "./scripts/calculator";
import Graph from "./scripts/graph";
import {
    SPENDING_BUTTON, 
    REVENUE_BUTTON,
    KEY_0,
    KEY_1,
    KEY_2,
    KEY_3,
    KEY_4,
    KEY_5,
    KEY_6,
    KEY_7,
    KEY_8,
    KEY_9,
    KEY_ADD_TRANSACTION,
    KEY_DELETE,
    KEY_DOT,
    SPENDING,
    REVENUE,
    TRANSACTION_TYPES
} from "./scripts/utils/constants";

// import "./styles/main.scss";

const app = new Finanzas()
const calc = new Calculator()
const graph = new Graph(app, calc)





let currentTransactionType = TRANSACTION_TYPES[REVENUE]
let amount = calc.getAmount()
let category = null
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

const handleClickEvent = (event) => {
    switch(event.target.id) {
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
            calc.updateAmount(event.target.innerHTML)
        break;

        case KEY_ADD_TRANSACTION:
            app.addTransaction(currentTransactionType, amount, category, frequency, date)
        break;

    }


    calc.updateDisplayAmount()
}

calc.selectedKeysAmount()
// app.addTransaction(currentTransactionType, amount, category, frequency, date)

document.addEventListener("click", handleClickEvent)


