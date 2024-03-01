// Ma solution

function removeDuplicates(arr) {
  var tab = []
  arr.filter( el => {
    if (!tab.includes(el)) {
      tab.push(el)
    }
  })

  return tab
}

// La solution 2

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

// La solution 3

const removeDuplicates = arr => arr.reduce((acc, cur) => acc.indexOf(cur) < 0 ? [...acc, cur] : acc, [])

// La solution 4

const removeDuplicates = arr => [...new Set(arr)]

/* ÉNONCÉ 📚 */


/* Créez un algorithme qui retourne un tableau sans les valeurs doublon de celui qui est passé en argument. */


/* Tests à passer 🧪 */

console.log(removeDuplicates([5,5,4,6,3,5]));               // [5, 4, 6, 3]
console.log(removeDuplicates(["a","b","z","z","e","a"]));   // ["a", "b", "z", "e"]




