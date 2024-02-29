// Ma methode

function removeDuplicates(arr) {
  var tab = []
  arr.filter( el => {
    if (!tab.includes(el)) {
      tab.push(el)
    }
  })

  return tab
}


/* ÉNONCÉ 📚 */


/* Créez un algorithme qui retourne un tableau sans les valeurs doublon de celui qui est passé en argument. */


/* Tests à passer 🧪 */

console.log(removeDuplicates([5,5,4,6,3,5]));               // [5, 4, 6, 3]
console.log(removeDuplicates(["a","b","z","z","e","a"]));   // ["a", "b", "z", "e"]




