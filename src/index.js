import Finanzas from "./scripts/finanzas"; 
// import "./styles/main.scss";

document.addEventListener("DOMContentLoaded", () => {
    // 1. find out how to write to the browser local storage or cookie
    // 2. Check the browser local storage for the finanza app configuration file.
    // 3. if there is a configuration file then pass it as a parameter to the app

    const navigation = document.getElementById("navigation-bar")
    const app = new Finanzas()
    app.start()
    // app.addTransaction("revenue", 100, ":) salary", "yearly", "12/31/2010")
    // app.addTransaction("revenue", 200, ":) salary", "yearly", "12/31/2010")
    // app.addTransaction("revenue", 300, ":) salary", "yearly", "12/31/2010")
    // app.showTransactions() 
    // Used lines 12 - 15 for testing purposes
})