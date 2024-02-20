function getVowelsNumber(txt) {
  // ma version
  // var nb = 0;
  // var voyelle = /[aeiouy]/gi; // g: global, i: insensibe à la case
  // for (const iterator of txt) {
  //   if(iterator.match(voyelle)) {
  //     nb++
  //   }
  // }
  // return nb

  const vowels = txt.match(/[aeiouy]/gi)

  if (vowels) {
    return vowels.length
  } else {
    return 0
  }
  
}


/* ÉNONCÉ 📚 */


/* Créez un programme qui retourne le nombre de voyelles dans une chaîne de caractères. */


/* Tests à passer 🧪 */

console.log(getVowelsNumber("jdhqgdqsghdakzejamazemlqksd"));               // 5
console.log(getVowelsNumber("Lorem ipsum dolor sit amet consectetur."));   // 13
console.log(getVowelsNumber("L’imagination gouverne le monde."));          // 13
console.log(getVowelsNumber("zzzZZZzz"));                                  // 0