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

   
        //  Create a button element
        // const button = document.createElement('button')

        //  Set the button text to 'Can you click me?'
        // button.innerText = 'Can you click me?'

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

const draggables = document.querySelectorAll('.draggable')
const container = document.querySelectorAll('bottom-calculator-section')
const container2 = document.querySelectorAll('category-section')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })

    container.forEach(cnt => {
        container.addEventListener('dragover', (e) => {
            e.preventDefault()
            const afterElement = getDragAfterElement(cnt, e.clientY)
            if (afterElement == null){
                cnt.appendChild(draggable)
            } else {
                cnt.insertBefore(draggable, afterElement)
            }
            const draggable = document.querySelector('draggable')
            cnt.appendChild(draggable)
        })
    })
})

function getDragAfterElement(container, y){
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
    draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
            return {offset: offset, element: child}
        } else {
            return closest
        }
    }, {offset:Number.NEGATIVE_INFINITY}).element
}

// const data = [
//     { name: 'John', score: 80 },
//     { name: 'Simon', score: 95 },
//     { name: 'Samantha', score: 100 },
//     { name: 'Patrick', score: 10 },
//     { name: 'Mary', score: 5 },
//     { name: 'Christina', score: 75 },
//     { name: 'Michael', score: 86 },
//   ];

//   const width = 700;
//   const height = 450;
//   const margin = { top: 50, bottom: 50, left: 50, right: 50 };
  
//   const svg = d3.select('#graph')
//     .append('svg')
//     .attr('width', width - margin.left - margin.right)
//     .attr('height', height - margin.top - margin.bottom)
//     .attr("viewBox", [0, 0, width, height]);
  
//   const x = d3.scaleBand()
//     .domain(d3.range(data.length))
//     .range([margin.left, width - margin.right])
//     .padding(0.1) 
  
//   const y = d3.scaleLinear()
//     .domain([0, 100])
//     .range([height - margin.bottom, margin.top])
  
//   svg
//     .append("g")
//     .attr("fill", 'royalblue')
//     .selectAll("rect")
//     .data(data.sort((a, b) => d3.descending(a.score, b.score)))
//     .enter().append('rect')
//       .attr("x", (d, i) => x(i))
//       .attr("y", d => y(d.score))
//       .attr("height", d => y(0) - y(d.score))
//       .attr("width", x.bandwidth());
//       //   console.log(y(0))
//       //   console.log(y(d.score))
//       //   console.log(y)

//   function yAxis(g) {
//     g.attr("transform", `translate(${margin.left}, 0)`)
//       .call(d3.axisLeft(y).ticks(null, data.format))
//       .attr("font-size", '20px')
//   }
  
//   function xAxis(g) {
//     g.attr("transform", `translate(0,${height - margin.bottom})`)
//       .call(d3.axisBottom(x).tickFormat(i => data[i].name))
//       .attr("font-size", '20px')
//   }
  
//   svg.append("g").call(xAxis);
//   svg.append("g").call(yAxis);
//   svg.node();






















// let bar = d3.select('svg')
//           .selectAll('rect')
//           .data(data)
//           .enter()
//           .append('rect')
//           .attr('height', function(d) {  return d; })
//           .attr('width', barHeight - 1)
//           .attr('transform', function(d, i) {
//             return "translate(0," + i * barHeight + ")";
//           });