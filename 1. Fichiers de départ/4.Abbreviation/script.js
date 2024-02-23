function abreviation(str) {
  // console.log(str.split(' '), 'phase 1');
  const words = str.split(' ')
  return `${words[0]} ${words[1].charAt(0)}.`
}


/* ÉNONCÉ 📚 */


/* Créez un algorithme qui retourne l'abréviation d'un nom et prénom. */


/* Tests à passer 🧪 */

console.log(abreviation("John Doe"));           // John D.
console.log(abreviation("Romy Schneider"));     // Romy S.
console.log(abreviation("Alfred Hitchcock"));   // Alfred H.

