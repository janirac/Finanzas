import { MONTH_NAMES } from "./utils/constants"

class Finanzas {
    constructor(inflationRate){
        this.name = " "
        this.largestScale = 0
        this.revenueTransactions = []
        this.spendingTransactions = []
        this.totalSpending = 0
        this.totalRevenue = 0
        this.totalSpendingWithInflation = 0
        this.largestSpendingAmount = 0
        this.largestRevenueAmount = 0
        this.inflationRate = inflationRate
        this.data = [   
            {month: MONTH_NAMES[new Date().getMonth()], 
                revenue: this.largestRevenueAmount, 
                spending: this.largestSpendingAmount, 
                inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 1], 
                revenue: this.largestRevenueAmount, 
                spending: this.largestSpendingAmount, 
                inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 2], 
                revenue: this.largestRevenueAmount, 
                spending: this.largestSpendingAmount, 
                inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 3], 
                revenue: this.largestRevenueAmount, 
                spending: this.largestSpendingAmount, 
                inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 4], 
                revenue: this.largestRevenueAmount, 
                spending: this.largestSpendingAmount, 
                inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 5], 
                revenue: this.largestRevenueAmount, 
                spending: this.largestSpendingAmount, 
                inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 6], 
                revenue: this.largestRevenueAmount, 
                spending: this.largestSpendingAmount, 
                inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 7], 
                revenue: this.largestRevenueAmount, 
                spending: this.largestSpendingAmount, 
                inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 8], 
                revenue: this.largestRevenueAmount, 
                spending: this.largestSpendingAmount, 
                inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 9], 
                revenue: this.largestRevenueAmount, 
                spending: this.largestSpendingAmount, 
                inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 10], 
                revenue: this.largestRevenueAmount, 
                spending: this.largestSpendingAmount, 
                inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 11], 
                revenue: this.largestRevenueAmount, 
                spending: this.largestSpendingAmount, 
                inflation: this.totalSpendingWithInflation}
                        ]
            this.data.columns = ["month", "revenue", "spending", "inflation"]

            this.spendingData = [{month: MONTH_NAMES[new Date().getMonth()], 
            amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 1], 
            amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 2], 
            amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 3], 
            amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 4], 
            amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 5], 
            amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 6], 
            amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 7], 
            amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 8], 
            amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 9], 
            amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 10], 
            amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

            {month: MONTH_NAMES[new Date().getMonth() + 11], 
            amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation}
                        ]
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

    findLargestNumber(){
        // debugger
        this.largestScale = [
            this.totalSpendingWithInflation,
            this.largestSpendingAmount,
            this.largestRevenueAmount
        ].reduce((partialSum, a) => partialSum + a, 0)


    }

    getLargestNumber(){
        return this.largestScale
    }

    static async getInflationRate () {
        const response = await fetch('https://api.api-ninjas.com/v1/inflation?country=United States', {
            headers: {
                'X-Api-Key': '8oQ4SzIZyP5xcTIAQwS4Cw==Ah6NdarSzjvzEZNm',
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        console.log(data);
        const inflationRate = data[0].monthly_rate_pct
        console.log(inflationRate)
        return inflationRate;
    }

    getSpendingData(){
        return this.spendingData
    }

    // getSpendingData(){
    //     return this.spendingData
    // }

    getData(){
        return this.data
    }

    start(){
        this.promptUser()
        this.updateTitle()
    }

    promptUser(){
        // debugger
    let name = JSON.parse(window.localStorage.getItem("name"))

        if(!name) {
            name = prompt("Please Enter Your Name", "Janira Crispin");
            localStorage.setItem("name", JSON.stringify(name))
            console.log("name saved")
            this.name = name;
        } else {
            this.name = name
        }
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
            debugger
            this.spendingTransactions.push(transaction)
            this.totalSpending += transaction.amount
            
            this.totalSpendingWithInflation += (this.inflationRate += this.totalSpending)
            console.log(this.totalSpendingWithInflation)
            // obj = {month: MONTH_NAMES[new Date(transaction.date).getMonth()], 
            //         amount: transaction.amount}
            const dateNumber = new Date(transaction.date).getMonth()
            
            this.data[dateNumber].inflation += this.totalSpendingWithInflation
            this.data[dateNumber].spending += transaction.amount
            console.log(this.data[dateNumber])
            this.largestSpendingAmount += transaction.amount 

            // debugger
            console.log(this.data)


        } else if (transactionType === "revenue"){
            this.revenueTransactions.push(transaction)
            this.totalRevenue += transaction.amount
            // obj = {month: MONTH_NAMES[new Date(transaction.date).getMonth()], 
            //         amount: transaction.amount}
            // this.revenueData.push(obj)
        
            const dateNumber = new Date(transaction.date).getMonth()
            // debugger
            this.data[dateNumber].revenue += transaction.amount 
            this.largestRevenueAmount += transaction.amount
            console.log(this.largestRevenueAmount)
            console.log(this.data)
            
        }
        
        this.findLargestNumber()
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