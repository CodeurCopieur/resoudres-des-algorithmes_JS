function squareDigits(num){
  
  // Ma version
  // const array = num.toString().split('')
  // const carre = array.map( el => el * el)
  // return Number(carre.join(''))

  // correction
  // return Number((''+num).split('').map(el => el * el).join(''))

  return +num.toString().split('').map(el => el * el).join('')
}


/* ÉNONCÉ 📚 */


/*
  Retournez chaque chiffre que contient le nombre passé en argument au carré et concaténez-les. 
  Retournez le nombre concaténé final.
*/


/* Tests à passer 🧪 */

console.log(squareDigits(5225));    // 254425
console.log(squareDigits(5555));    // 2525252525
console.log(squareDigits(1111));    // 1111