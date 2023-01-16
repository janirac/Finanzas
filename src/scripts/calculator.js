const screenAmount = document.getElementById("screen-amount")

class Calculator {
    constructor(){
        this.selectedKeys = []
        this.amount = 0
        console.log(this.selectedKeys)
    }

    getAmount(){
        return this.amount
    }

    updateAmount(key){
        let dotIndex = this.selectedKeys.indexOf(".")
        if(dotIndex > -1 && this.selectedKeys.slice(dotIndex).length > 2){
            return null //why did I need to return null instead return 
        }

        if(key === "Delete"){
            this.selectedKeys.pop()
        } else if(key === "."){
            if(this.selectedKeys.includes(key)){
                alert("You did too much")
            } else {
                this.selectedKeys.push(key)
            }
        } else {
            this.selectedKeys.push(key)
        }
        console.log(this.selectedKeys)
        console.log(this.selectedKeysAmount())

    }

    updateDisplayAmount(){
        screenAmount.innerHTML = this.amount
        // display NAN when I click something thats not a number
    }

    resetCalculator(){
        this.selectedKeys = []
        screenAmount.innerHTML = "0.00" // cant get the number to disappear when I hit the add transaction
    }

    selectedKeysAmount(){ 
        this.amount = parseFloat(this.selectedKeys.join(""))
        // make the 0 show
        return this.amount
    }

    
}

export default Calculator;