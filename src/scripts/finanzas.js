import { MONTH_NAMES } from "./utils/constants"

class Finanzas {
    constructor(){
        this.name = ""
        this.revenueTransactions = []
        this.spendingTransactions = []
        this.totalSpending = 0
        this.totalRevenue = 0
        this.totalSpendingWithInflation = 0
        this.largestSpendingAmount = 0
        this.inflationRate = 0
        this.spendingData = [{month: MONTH_NAMES[new Date().getMonth()], 
            amount: this.largestSpendingAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 1], 
            amount: this.largestSpendingAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 2], 
            amount: this.largestSpendingAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 3], 
            amount: this.largestSpendingAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 4], 
            amount: this.largestSpendingAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 5], 
            amount: this.largestSpendingAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 6], 
            amount: this.largestSpendingAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 7], 
            amount: this.largestSpendingAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 8], 
            amount: this.largestSpendingAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 9], 
            amount: this.largestSpendingAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 10], 
            amount: this.largestSpendingAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 11], 
            amount: this.largestSpendingAmount}
                        ]
        this.largestRevenueAmount = 0
        this.revenueData = [
            {month: MONTH_NAMES[new Date().getMonth()], 
            amount: this.largestRevenueAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 1], 
            amount: this.largestRevenueAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 2], 
            amount: this.largestRevenueAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 3], 
            amount: this.largestRevenueAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 4], 
            amount: this.largestRevenueAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 5], 
            amount: this.largestRevenueAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 6], 
            amount: this.largestRevenueAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 7], 
            amount: this.largestRevenueAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 8], 
            amount: this.largestRevenueAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 9], 
            amount: this.largestRevenueAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 10], 
            amount: this.largestRevenueAmount},

            {month: MONTH_NAMES[new Date().getMonth() + 11], 
            amount: this.largestRevenueAmount}
                        ]
    }

    async getInflationRate () {
        const response = await fetch('https://api.api-ninjas.com/v1/inflation?country=United States', {
            headers: {
                'X-Api-Key': '8oQ4SzIZyP5xcTIAQwS4Cw==Ah6NdarSzjvzEZNm',
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        console.log(data);
        this.inflationRate = data[0].monthly_rate_pct
        console.log(this.inflationRate)
        return data;
    }

    getSpendingData(){
        return this.spendingData
    }

    getRevenueData(){
        return this.revenueData
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

        // let obj = {month: MONTH_NAMES[new Date(transaction.date).getMonth()], 
        //     amount: transaction.amount}

        if (transactionType === "spending") {
            // debugger
            this.spendingTransactions.push(transaction)
            this.totalSpending += transaction.amount
            this.totalSpendingWithInflation = this.inflationRate += this.totalSpending
            console.log(this.totalSpendingWithInflation)
            // obj = {month: MONTH_NAMES[new Date(transaction.date).getMonth()], 
            //         amount: transaction.amount}
            const dateNumber = new Date(transaction.date).getMonth()

            this.spendingData[dateNumber].amount += transaction.amount
            console.log(this.spendingData[dateNumber])
            this.largestSpendingAmount += transaction.amount 

            // debugger
            console.log(this.spendingData)


        } else if (transactionType === "revenue"){
            this.revenueTransactions.push(transaction)
            this.totalRevenue += transaction.amount
            // obj = {month: MONTH_NAMES[new Date(transaction.date).getMonth()], 
            //         amount: transaction.amount}
            // this.revenueData.push(obj)
        
            const dateNumber = new Date(transaction.date).getMonth()
            // debugger
            this.revenueData[dateNumber].amount += transaction.amount 
            this.largestRevenueAmount += transaction.amount
            console.log(this.largestRevenueAmount)
            console.log(this.revenueData)
            
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