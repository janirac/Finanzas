class Calculator {
    constructor(){
        this.selectedKeys = []
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
    }

    resetCalculator(){
        this.selectedKeys = []
    }
}
export default Calculator;