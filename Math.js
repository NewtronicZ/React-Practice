const PI = 3.141

function add(num1, num2) {
    return num1 + num2
}

class Random {
    static getInteger(min,max){
        return min + Math.floor(Math.random() * (max - min))
    }
    static getBoolean() {
        return (this.getInteger(1, 10) <= 5) ? true : false
    }
}

export {PI, add, Random} //ระบุสิ่งที่จะส่งออกไปไว้ในวงเล็บ { }