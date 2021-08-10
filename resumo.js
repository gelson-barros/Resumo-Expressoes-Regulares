
/**
 * Usando o método de teste
 */
/*
Se você quiser encontrar a palavra the na string The dog chased the cat, você poderia usar a seguinte expressão regular: /the/. Observe que as aspas não são necessárias na expressão regular.
*/

let testStr1 = "The dog chased the cat";
let testRegex1 = /the/;
// console.log(testRegex1.test(testStr1));

let testStr2 = "freeCodeCamp";
let testRegex2 = /Code/;
// console.log(testRegex2.test(testStr2));

let myString1 = "Hello, World!";
let myRegex1 = /Hello/;
// console.log(myRegex1.test(myString1));

let testStr3 = "Hello, my name is Kevin.";
let testRegex3 = /Kevin/;
// console.log(testRegex3.test(testStr3));
/*
Quaisquer outras formas de Kevin não corresponderão. Por exemplo, a regex /Kevin/ não corresponderá a kevin ou KEVIN.
*/
let wrongRegex1 = /kevin/;
// console.log(wrongRegex1.test(testStr3));

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
// console.log(waldoRegex.test(waldoIsHiding));




/**
 * Combine uma string literal com diferentes possibilidades utilizando alternation operador OR -> |
 */

let petString1 = "Alice has a pet fish.";
let petString2 = "Kara has a pet dolphin.";
let petString3 = "Emma has a pet rock.";
let petString4 = "Emma has a pet bird.";
let petString5 = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
// console.log(petRegex.test(petString1));
// console.log(petRegex.test(petString2));
// console.log(petRegex.test(petString3));
// console.log(petRegex.test(petString4));
// console.log(petRegex.test(petString5));~

/**
 * Ignorar maiúsculas e minúsculas durante a correspondência
 * Sinalizador /ignorecase/i Este regex pode combinar as string ignorecase, igNoreCasee IgnoreCase.
 */

let myString21 = "freeCodeCamp";
let myString22 = "FreeCodeCamp";
let myString23 = "Free Code Camp";
let myString24 = "FreeCOdeCamp";
let myString25 = "FrEeCoDeCamp";
let fccRegex = /freeCodeCamp/i;
// console.log(fccRegex.test(myString21));
// console.log(fccRegex.test(myString22));
// console.log(fccRegex.test(myString23));
// console.log(fccRegex.test(myString24));
// console.log(fccRegex.test(myString24));

/**
 * Extrair as correspondências reais encontradas com .match()
 */

// console.log("Hello, World!".match(/Hello/));
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
// console.log(ourStr.match(ourRegex));


/*
Observe que a .match sintaxe é o "oposto" do .test método que você está usando até agora:
*/
"string".match(/regex/);
/regex/.test("string");

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
// console.log(result);


/**
 * Encontre mais do que a primeira correspondência
 */

let strRepeat = "Repeat, Repeat, Repeat";
let repeatRegex = /Repeat/;
let resultadoRepeat = strRepeat.match(repeatRegex);
// console.log(resultadoRepeat);
// Aqui match voltaria ["Repeat"].
let repeatRegexGlobal = /Repeat/g;
let resultadoRepeatGlobal = strRepeat.match(repeatRegexGlobal);
// console.log(resultadoRepeatGlobal);

/*
Nota
Você pode ter vários sinalizadores em seu regex, como /search/gi
*/
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let resultTwinkle = twinkleStar.match(starRegex);
// console.log(resultTwinkle);

/**
 * Corresponder a qualquer coisa com o período curinga (.)
 */

/*
O caractere curinga (.) corresponderá a qualquer um dos caracteres. O curinga também é chamado dote period. Você pode usar o caractere curinga como qualquer outro caractere na regex. Por exemplo, se você queria corresponder hug, huh, hut, e hum, você pode usar o regex /hu./ para coincidir com todas as quatro palavras.
*/

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
// console.log(huRegex.test(humStr));

let strUn1 = "Let's have fun with regular expressions!";
let strUn2 = "Let us go on a run!";
let strUn3 = "The sun is out today!";
let strUn4 = "Seven days without a pun makes one weak!";
let strUn5 = "There is a bug in my code!";
let unRegex = /.un/;
// console.log(unRegex.test(strUn1));
// console.log(unRegex.test(strUn2));
// console.log(unRegex.test(strUn3));
// console.log(unRegex.test(strUn4));
// console.log(unRegex.test(strUn5));



/**
 * Combine um único personagem com múltiplas possibilidades
 */

/*
As classes de caracteres permitem que você defina um grupo de caracteres que deseja combinar, colocando-os entre colchetes ( [e ]).
Por exemplo, você deseja corresponder bag, bige bug, mas não bog. Você pode criar o regex /b[aiu]g/para fazer isso. A [aiu]é a classe de personagem que só irá coincidir com os personagens a, iou u.
*/
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
// console.log(bigStr.match(bgRegex));
// console.log(bagStr.match(bgRegex));
// console.log(bugStr.match(bgRegex));
// console.log(bogStr.match(bgRegex));

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
// console.log(quoteSample.match(vowelRegex));

/**
 * Corresponder letras do alfabeto
 */
/*
Por exemplo, para combinar letras minúsculas apor meio de evocê usaria [a-e].
*/
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let aeRegex = /[a-e]at/;
// console.log(catStr.match(aeRegex));
// console.log(batStr.match(aeRegex));
// console.log(matStr.match(aeRegex));
// Em ordem, as três match chamadas iria retornar os valores ["cat"], ["bat"]e null.

let azString = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
// console.log(azString.match(alphabetRegex));

/**
 * Corresponder números e letras do alfabeto
 */

/*
O uso do hífen ( -) para corresponder a um intervalo de caracteres não se limita a letras. Também funciona para corresponder a um intervalo de números.

Por exemplo, /[0-5]/corresponde a qualquer número entre 0 e 5, incluindo 0 e 5.

Além disso, é possível combinar uma série de letras e números em um único conjunto de caracteres.
*/

let jennyStr = "Jenny8675309";
let az09Regex = /[a-z0-9]/gi;
// console.log(jennyStr.match(az09Regex));

let hs26String = "Blueberry 3.141592653s are delicious.";
let hs26Regex = /[h-s2-6]/ig;
// console.log(hs26String.match(hs26Regex));


/**
 * Corresponder a caracteres únicos não especificados
 * Conjuntos de caracteres negados ( ^)
 */

/*
Por exemplo, /[^aeiou]/gi corresponde a todos os caracteres que não são vogais. Note-se que personagens como ., !, [, @, /e espaços em branco são combinados - o conjunto de caracteres vogal negada única exclui os caracteres de vogais.
*/

let aeiou09Str = "3 blind mice.";
let aeiou09Regex = /[^aeiou0-9]/gi;
// console.log(aeiou09Str.match(aeiou09Regex));

/**
 * Corresponder caracteres que ocorrem uma ou mais vezes
 */

/*
Você pode usar o + string para verificar se é esse o caso. Lembre-se de que o caractere ou padrão deve estar presente consecutivamente. Ou seja, o string deve repetir um após o outro.

Por exemplo, /a+/g encontraria uma correspondência em abce retornaria ["a"]. Por causa do +, ele também encontraria uma única correspondência em aabce retornaria ["aa"].

Se, em vez disso, estivesse verificando a string abab, ele encontraria duas correspondências e retornaria ["a", "a"]
*/

let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
// console.log(difficultSpelling.match(myRegex));


/**
 * Corresponder caracteres que ocorrem zero ou mais vezes (*)
 */

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
// console.log(soccerWord.match(goRegex));
// console.log(gPhrase.match(goRegex));
// console.log(oPhrase.match(goRegex));
// Em ordem, as três matchchamadas iria retornar os valores ["goooooooo"], ["g"]e null.


let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh";
let chewieRegex = /A*/;
// console.log(chewieQuote.match(chewieRegex));

/**
 * Encontre String com correspondência preguiçosa
 */

let titanicStr = 'titanic';
let titanicRegex = /t[a-z]*i/;
let titanicRegex2 = /t[a-z]*?i/;
console.log(titanicStr.match(titanicRegex));["titani"];//["titani"]
console.log(titanicStr.match(titanicRegex2));
["titani"];//["ti"]

let htmlStr = "<h1>Winter is coming</h1>";
let htmlRegex = /<.*?>/;
let htmlRegex2 = /<.*?>/;
console.log(htmlStr.match(htmlRegex));
console.log(htmlStr.match(htmlRegex2));

