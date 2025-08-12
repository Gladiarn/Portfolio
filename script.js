// class Store {
//   constructor() {
//     this.value = new Set([10,4,8,7])
//   }

//   InsertValue(val) {
//     this.value.add(val);
//   }

//   DeleteValue(val) {
//     this.value.delete(val)
//   }

//   RandomValue(){
//     let randomNumber = Math.floor(Math.random() * this.value.size)
//     console.log(Array.from(this.value)[randomNumber])
//   }
// }

// let Store1 = new Store();
// Store1.RandomValue()

let num1 = 1;
let num2 = "1";

if(num1 == num2){
  console.log("same");
}else{
  console.log("not same");
}