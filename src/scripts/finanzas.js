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
        // this.data = [   
        //     {month: MONTH_NAMES[new Date().getMonth()], 
        //         revenue: this.largestRevenueAmount, 
        //         spending: this.largestSpendingAmount, 
        //         inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 1], 
        //         revenue: this.largestRevenueAmount, 
        //         spending: this.largestSpendingAmount, 
        //         inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 2], 
        //         revenue: this.largestRevenueAmount, 
        //         spending: this.largestSpendingAmount, 
        //         inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 3], 
        //         revenue: this.largestRevenueAmount, 
        //         spending: this.largestSpendingAmount, 
        //         inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 4], 
        //         revenue: this.largestRevenueAmount, 
        //         spending: this.largestSpendingAmount, 
        //         inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 5], 
        //         revenue: this.largestRevenueAmount, 
        //         spending: this.largestSpendingAmount, 
        //         inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 6], 
        //         revenue: this.largestRevenueAmount, 
        //         spending: this.largestSpendingAmount, 
        //         inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 7], 
        //         revenue: this.largestRevenueAmount, 
        //         spending: this.largestSpendingAmount, 
        //         inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 8], 
        //         revenue: this.largestRevenueAmount, 
        //         spending: this.largestSpendingAmount, 
        //         inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 9], 
        //         revenue: this.largestRevenueAmount, 
        //         spending: this.largestSpendingAmount, 
        //         inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 10], 
        //         revenue: this.largestRevenueAmount, 
        //         spending: this.largestSpendingAmount, 
        //         inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 11], 
        //         revenue: this.largestRevenueAmount, 
        //         spending: this.largestSpendingAmount, 
        //         inflation: this.totalSpendingWithInflation}
        //     ]
        //     this.data.columns = ["month", "revenue", "spending", "inflation"]

        const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.data = [];
        
        for (let i = 0; i < 12; i++) {
            const monthIndex = (new Date().getMonth() + i) % 12; // use modulo to wrap around to January if necessary
            const monthAbbreviation = MONTH_NAMES[monthIndex].slice(0, 3);
            const monthObject = {
                month: monthAbbreviation,
                revenue: this.largestRevenueAmount,
                spending: this.largestSpendingAmount,
                inflation: this.totalSpendingWithInflation
            };
            this.data.push(monthObject);
        }   

        this.data.columns = ['month', 'revenue', 'spending', 'inflation'];

        //     this.spendingData = [{month: MONTH_NAMES[new Date().getMonth()], 
        //     amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 1], 
        //     amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 2], 
        //     amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 3], 
        //     amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 4], 
        //     amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 5], 
        //     amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 6], 
        //     amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 7], 
        //     amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 8], 
        //     amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 9], 
        //     amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 10], 
        //     amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation},

        //     {month: MONTH_NAMES[new Date().getMonth() + 11], 
        //     amount: this.largestSpendingAmount, inflation: this.totalSpendingWithInflation}
        //     ]
        // this.revenueData = [
        //     {month: MONTH_NAMES[new Date().getMonth()], 
        //     amount: this.largestRevenueAmount},

        //     {month: MONTH_NAMES[new Date().getMonth() + 1], 
        //     amount: this.largestRevenueAmount},

        //     {month: MONTH_NAMES[new Date().getMonth() + 2], 
        //     amount: this.largestRevenueAmount},

        //     {month: MONTH_NAMES[new Date().getMonth() + 3], 
        //     amount: this.largestRevenueAmount},

        //     {month: MONTH_NAMES[new Date().getMonth() + 4], 
        //     amount: this.largestRevenueAmount},

        //     {month: MONTH_NAMES[new Date().getMonth() + 5], 
        //     amount: this.largestRevenueAmount},

        //     {month: MONTH_NAMES[new Date().getMonth() + 6], 
        //     amount: this.largestRevenueAmount},

        //     {month: MONTH_NAMES[new Date().getMonth() + 7], 
        //     amount: this.largestRevenueAmount},

        //     {month: MONTH_NAMES[new Date().getMonth() + 8], 
        //     amount: this.largestRevenueAmount},

        //     {month: MONTH_NAMES[new Date().getMonth() + 9], 
        //     amount: this.largestRevenueAmount},

        //     {month: MONTH_NAMES[new Date().getMonth() + 10], 
        //     amount: this.largestRevenueAmount},

        //     {month: MONTH_NAMES[new Date().getMonth() + 11], 
        //     amount: this.largestRevenueAmount}
        // ]
    }

    findLargestNumber(){
        // 
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
        // 
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
        debugger
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
            
            this.totalSpendingWithInflation += this.totalSpending * this.inflationRate;
            console.log(this.totalSpendingWithInflation)
            const dateMonthName = new Date(transaction.date).toLocaleString("en-US", {month: "short"})

            this.data.forEach((key, index) => {
                const currMonth = key.month
                if(currMonth === dateMonthName) {
                    this.data[index].spending += transaction.amount
                    this.data[index].inflation += this.totalSpendingWithInflation
                }
            })
            
            this.largestSpendingAmount += transaction.amount 

        } else if (transactionType === "revenue"){
            this.revenueTransactions.push(transaction)
            this.totalRevenue += transaction.amount
            const dateMonthName = new Date(transaction.date).toLocaleString("en-US", {month: "short"})
            this.data.forEach((key, index) => {
                const currMonth = key.month
                if(currMonth === dateMonthName) {
                    this.data[index].revenue += transaction.amount 
                }
            })
            
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