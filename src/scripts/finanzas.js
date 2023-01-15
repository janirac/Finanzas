class Finanzas {
    constructor(){
        this.name = ""
        this.transactions = []
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
        this.transactions.push({
            transactionType,
            amount,
            category,
            frequency,
            date
        })
    }

    // showTransactions(){
    //     console.log(this.transactions)
    // }

    
}



export default Finanzas;