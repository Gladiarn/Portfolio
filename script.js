let name = "hey";
const obj = {
    name: "Ianne",
    regular() {
      Firstname = this.name
      const arrow = () => {
        console.log(this.name)
      }
      arrow()
    },
    arrow: () => {
      console.log("arrow:", this.name);
    }
  };
  
  obj.regular();