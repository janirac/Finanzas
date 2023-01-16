class Finanzas {
    constructor(){
        this.name = ""
        this.revenueTransactions = []
        this.spendingTransactions = []
        this.totalSpending = 0
        this.totalRevenue = 0
        this.totalSpendingWithInflation = 0
    }

    start(){
        this.promptUser()
        this.updateTitle()
    }

    promptUser(){
        let name = prompt("Please Enter Your Name", "Janira Crispin");
        this.name = name;
    }

    updateTitle(){
        if(this.name != null){
            document.getElementById("main-header").innerHTML = 
            this.name + " Finanzas"
        }
    }

    addTransaction(transactionType, amount, category, frequency, date){
        const transaction = {
            transactionType,
            amount,
            category,
            frequency,
            date
        }

        if (transactionType === "spending") {
            this.spendingTransactions.push(transaction)
            this.totalSpending += transaction.amount

        } else if (transactionType === "revenue"){
            this.revenueTransactions.push(transaction)
            this.totalRevenue += transaction.amount
        }
        
        this.showTransactions()
    }

    showTransactions(){
        console.log(this.transactions)
        console.log({
            "spending": this.spendingTransactions,
            "revenue": this.revenueTransactions
        })
    }
}



export default Finanzas;