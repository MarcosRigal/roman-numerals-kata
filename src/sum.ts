var units = {1 : "I", 2:"II", 3:"III", 4:"IV", 5:"V", 6:"VI", 7:"VII", 8:"VIII", 9:"IX"} 
var tens = {10 : "X", 20:"XX", 30:"XXX", 40:"XL", 50:"L", 60:"LX", 70:"LXX", 80:"LXXX"} 

export function separar(n: number){
  let i = 0;
  let res = new Array() ;
  for(i = 0 ; i< n.toString().length; i++){
    let digitStr = n.toString().substring(i, i+1);
    res.push(parseInt(digitStr))
  }
  return res;
}

export function toRoman(numberToRoman: number): string {
  var array: number[] = separar(numberToRoman)

  if (array.length==2) 
  {
    if (array[0]<5 && array[1] > 0) {
      return tens[array[0]*10]+units[array[1]];
    }
    if (array[0]==5 && array[1] > 0) {
      return "L"+units[array[1]];
    }
    if (array[0]>5 && array[1] > 0) {
      return "L"+tens[(array[0]*10)-50]+units[array[1]];
    }
    return tens[array[0]*10];
  } 
  return units[array[0]];
}
