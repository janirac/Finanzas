class Calculator {
    constructor(){
        this.selectedKeys = []
        this.amount = 0
        console.log(this.selectedKeys)
    }

    updateAmount(key){
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

    resetCalculator(){
        this.selectedKeys = []
    }

    selectedKeysAmount(){ 
        this.amount = parseFloat(this.selectedKeys.join("")).toFixed(2)
        return amount
    }
}
// Numbers continue to be added after 2 decimal places

export default Calculator;