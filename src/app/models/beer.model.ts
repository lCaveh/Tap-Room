export class Beer{
  public capacity:number=124;
  public currentPrice:number;

  constructor(public name:string,public brand:string,public price: number,public discountedPrice:number, public alcohol:number){
    this.currentPrice=this.price;
  }
  sellBeer(type:string){
    if (type=="Pint"){
      this.capacity--;
    } else if (type=="Growler"){
      this.capacity-=2;
    } else if (type=="Large") {
      this.capacity-=4;
    }
  }
  needReplacement(){
    if (this.capacity<10){
      return true;
    } else {
     return false;
    }
  }
}
