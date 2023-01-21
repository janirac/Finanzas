import {Sortable, Plugins} from '@shopify/draggable';
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
    TRANSACTION_TYPES,
    INCOME_CATEGORIES_HTML,
    SPENDING_CATEGORIES_HTML,
    INCOME,
    CAR_INSURANCE,
    GROCERIES,
    CREDIT_CARD,
    UTILITIES,
    ACTIVITIES
} from "./scripts/utils/constants";

// import "./styles/main.scss";

let app; // new Finanzas()
let calc;
let graph;
let goals = []

let currentTransactionType = TRANSACTION_TYPES[REVENUE]
let category = null
let frequency = 0
let date = ""

const populateCategorySection = () => {
    document.getElementById("bottom-calc-section").innerHTML = " "

    if(currentTransactionType === TRANSACTION_TYPES[REVENUE]){
        Object.values(INCOME_CATEGORIES_HTML).forEach(button => {
            const btn = document.createElement('button')  //.innerText = button; why doesn't this work
            btn.classList.add("category-button")
            btn.setAttribute("id", button.id)
    
            btn.innerText = `${button.emoji} ${button.categoryText}`
            document.getElementById("bottom-calc-section").appendChild(btn)
        });
    } else if(currentTransactionType === TRANSACTION_TYPES[SPENDING]) {
        Object.values(SPENDING_CATEGORIES_HTML).forEach(button => {
            const btn = document.createElement('button')  //.innerText = button; why doesn't this work
            btn.classList.add("category-button")
            btn.setAttribute("id", button.id)
    
            btn.innerText = `${button.emoji} ${button.categoryText}`
            document.getElementById("bottom-calc-section").appendChild(btn)
        });
    }
}

const currentClickedCategoryButton = () => {

}

document.addEventListener("DOMContentLoaded", async () => {
    // 1. find out how to write to the browser local storage or cookie
    // 2. Check the browser local storage for the finanza app configuration file.
    // 3. if there is a configuration file then pass it as a parameter to the app

    let inflationRate = JSON.parse(window.localStorage.getItem("inflationRate"))

    if(!inflationRate) {
        inflationRate = await Finanzas.getInflationRate()
        localStorage.setItem("inflationRate", JSON.stringify(inflationRate))
        console.log("inflation saved")
    }

    app = new Finanzas(inflationRate)
    calc = new Calculator()
    graph = new Graph(app, calc)

    app.start()
    graph.setupSVG()
    document.getElementById('transaction-date').valueAsDate = new Date();
    populateCategorySection()
})


const updateSelectedTransactionType = (type) => {
    let changeRevenueColor = document.getElementById("revenue-button")
    let changeSpendingColor = document.getElementById("spending-button")
    let bottomCalcSection = document.getElementById("bottom-calc-section") //worked after I set to variable

    if(type === SPENDING_BUTTON){
        currentTransactionType = TRANSACTION_TYPES[SPENDING]
        changeSpendingColor.classList.add("clicked-display-text-color")
        changeRevenueColor.classList.remove("clicked-display-text-color")
        bottomCalcSection.classList.add("spending-category-section");
        bottomCalcSection.classList.remove("revenue-category-section")
        populateCategorySection()
        console.log(currentTransactionType);
    } else if(type === REVENUE_BUTTON){
        currentTransactionType = TRANSACTION_TYPES[REVENUE]
        changeRevenueColor.classList.add("clicked-display-text-color")
        changeSpendingColor.classList.remove("clicked-display-text-color")
        bottomCalcSection.classList.add("revenue-category-section");
        bottomCalcSection.classList.remove("spending-category-section")
        populateCategorySection()
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
            calc.updateDisplayAmount()
        break;

        case KEY_ADD_TRANSACTION:
            let currentAmount = calc.getAmount()
            let frequency = document.getElementById("frequency-select").value
            let date = document.getElementById("transaction-date").value
            // let category = document.getElementById("bottom-calc-section")

            app.addTransaction(currentTransactionType, currentAmount, category, frequency, date)
            calc.resetCalculator()
            graph.upDateGraph()
            graph.setupSVG()
        break;
    }
}

let modal = document.getElementById("instructions-modal");

let btn = document.getElementById("instructions-btn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let goalModal = document.getElementById("edit-goal-modal");

let goalBtn = document.getElementById("edit-goal-btn");

let span2 = document.getElementsByClassName("close")[1];


goalBtn.onclick = function() {
  goalModal.style.display = "block";
}

span2.onclick = function() {
  goalModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == goalModal) {
    goalModal.style.display = "none";
  }
}


document.addEventListener("click", handleClickEvent)

