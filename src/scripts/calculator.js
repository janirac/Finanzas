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
        if(
            dotIndex > -1 
            && 
            this.selectedKeys.slice(dotIndex).length > 2
            &&
            key !== "Delete"
        ){
            return null//why did I need to return null instead return 
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

        this.setAmount()
        console.log(this.selectedKeys)
    }

    updateDisplayAmount(){
        if (this.selectedKeys.length > 0){
            document.getElementsByClassName("screen")[0].classList.remove("empty-display-text-color");
            document.getElementsByClassName("screen")[0].classList.add("active-display-text-color");
        } else {
            document.getElementsByClassName("screen")[0].classList.remove("active-display-text-color");
            document.getElementsByClassName("screen")[0].classList.add("empty-display-text-color");
        }

        screenAmount.innerHTML = this.selectedKeys.join("")
    }

    resetCalculator(){
        this.selectedKeys = []
        this.amount = 0
        screenAmount.innerHTML = "0.00" 
    }

    setAmount(){ 
        this.amount = parseFloat(this.selectedKeys.join(""))
    }
}

export default Calculator;