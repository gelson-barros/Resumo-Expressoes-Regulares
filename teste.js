// Verificando se uma string contém uma substring

// console.log(/palavra/.test("palavras"));// true
// console.log(/palavra/.test("Esta frase contém uma palavra"));//[palavra]
// console.log("palavras".match(/palavra/));//[palavra]
// console.log("Esta frase contém uma palavra".match(/palavra/));//[palavra]
// console.log(/palavra/.test('Esta frase não contém'));//false
// console.log("Esta frase não contém".match(/palavra/));//null

// Substring no inicio ou final da string
// Operador ^(inicio)

// console.log(/^oi/.test('oi, tudo certo?')); //true
// console.log("oi, tudo certo?".match(/^oi/)); // ['oi']
// console.log(/^oi/.test('...oi, tudo certo?')); //false
// console.log("...oi, tudo certo?".match(/^oi/)); // null

// Operador $(fim)
// console.log(/fim$/.test('aqui termina com fim')); // true
// console.log(/fim$/.test('aqui termina com fim...')); // false

// Combinando inicio e fim de uma string
// console.log(/^oi$/.test('oi'))// true
// console.log(/^oi$/.test("oi, tudo certo?")); // false
// console.log(/^oi$/.test("oi, tudo certo? oi"));// false

// Da forma literal:
// console.log(/teste/i.test('Teste'))// true

// objeto RegExp com a flag no segundo parâmetro:
// console.log(new RegExp('teste', 'i').test('Teste')); //true

// conjuntos
// console.log("Teste 123 agora".match(/[0-9a-z]/gi))
// console.log("Idade: 22".match(/[0-9]+/)) // ['22']

/* 
/[1-5]/ // 1, 2, 3, 4, 5 
/[0-9]/ // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 
/ab/ // a, b 
/[a-d]/ // a, b, c, d 
/[a-z]/ // a, b, c, d ... z 
/[A-Z]/ // A, B, C ... Z 
*/

// console.log(/[0-9a-zA-Z]/.test('1')) // true
// console.log(/[0-9a-zA-Z]/.test('A')) // true
// console.log(/[0-9a-zA-Z#]/.test('#')) // true
// console.log(/[0-9a-zA-Z]/.test('#')) // false
// console.log(/[0-9a-zA-Z]/.test('Á')) // false

// Negando conjuntos
// console.log(/[^0-9]/.test('Teste')); // true
// console.log(/[^0-9]/.test("012345teste")); // true
// console.log(/[^0-9]/.test("012345")); // false
// console.log(/^[0-9]/.test('123456')); // true
// console.log(/[^0-9a-z]/.test("012345teste!")); //true
// console.log(/[^0-9a-z]/.test("012345teste")); // false

// Meta caracteres
/*
. -> Corresponde à qualquer caractere, exceto quebra de linha.
\d -> [0-9]
\D -> [^0-9]
\w -> [0-9a-zA-z]
\W -> [^0-9a-zA-z]
\s -> O caracter de espaço, tab e quebra de linha
\S -> O não caracter de espaço, tab e quebra de linha
\n -> Corresponde à quebra de linha
\t -> Corresponde á tab
\0 -> Corresponde á null
\p{x} -> Corresponde à um caractere unicode cuja propriedade passada em "x" seja verdadeira. Requer que a flag "u" seja utilizada.
\P{x} -> Corresponde ao oposto de \p{x}.
[^] -> Corresponde à qualquer caractere, incluindo quebra de linha (diferente do .).
*/

// Alguns mnemônicos para facilitar na memorização:
/*
-Como você pôde perceber, quando o meta caractere está em maiúsculo ele sempre corresponde ao contrário do caractere em minúsculo.
-"." pode ser lembrado como reticências (...) para corresponder à qualquer coisa.
-"d" pode ser lembrado como abreviação de digit - somente números.
-"w" pode ser lembrado como abreviação de word - é usado com frequência juntamente com quantificadores para corresponder à palavras. Lembre-se que também pode conter números.
-"s" pode ser lembrado como abreviação de space.
-O "\p", talvez como abreviação de property, é uma inclusão recente do ES2018, vamos ver mais abaixo como usar isso.
*/

// Quantificadores

// A? Corresponde a zero ou um "A":
// console.log(/A?/.test("")); //true
// console.log(/A?/.test("A")); //true
// console.log(/A?/.test("AAA")); //true
// console.log(/A?/.test("B")); //true
// console.log(/A?/.test("BASSD")); //true

// A* Corresponde a zero ou mais "A":
// console.log(/A*/.test("")); //true
// console.log(/A*/.test("A")); //true
// console.log(/A*/.test("AAA")); //true
// console.log(/A*/.test("B")); //true

// A+ Corresponde a pelo menos um "A":
// console.log(/A+/.test("")); //false
// console.log(/A+/.test("A")); // true
// console.log(/A+/.test("AAA")); //true
// console.log(/A+/.test("B")); //false

// A{x} Corresponde a exatamente x vezes "A" - Note que a sequência também deve corresponder:
// console.log(/A{3}/.test("AA")); //false
// console.log(/A{3}/.test("AAA")); //true
// console.log(/A{3}/.test("AAAAA")); //true
// console.log(/A{3}/.test("B")); //false
// console.log(/A{3}/.test("ABAA")); //false

// A{x,y} Corresponde a exatamente de x a y vezes "A":
// console.log(/A{2,3}/.test("A")); //false
// console.log(/A{2,3}/.test("AA")); //true
// console.log(/A{2,3}/.test("AAA")); //true
// console.log(/A{2,3}/.test("AAAAA")); //true
// console.log(/A{2,3}/.test("ABA")); //false
// console.log(/A{2,3}/.test("AABA")); //true

// A{x,} Corresponde a x até o infinito vezes "A":
// console.log(/A{3,}/.test("A")); //false
// console.log(/A{3,}/.test("AA")); //false
// console.log(/A{3,}/.test("AAA")); //true
// console.log(/A{3,}/.test("AAAAA")); //true

// Exemplos com quantificadores
// quer validar um endereço de IP (v4):
let [ip] = [..."O ip de loopback 127.0.0.1 ou seja localhost".match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)]; 
// console.log(ip);
// console.log(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test("127.0.0.1")); //true
// console.log(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test("127.0.0")); //false
// console.log(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test("127.0.0.10000"));//false
// console.log(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test("localhost"));//false

// verificar se um número de telefone contém o 9 na frente ou não, ignorando outros caracteres
// console.log(/^9+\d{8}$/.test(999998888));
// console.log(/^9+\d{8}$/.test(899998888));
// console.log(/^9+\d{8}$/.test(99998888));

// Para encontrar uma tag HTML span com seu conteúdo:
// console.log(/<span>.*<\/span>/.test("<span>Teste</span>"));
// console.log(..."<span>Teste</span>".match(/<span>.*<\/span>/));

const textoHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`;
let tagHtmlRegex = /<.*\>/g;
// console.log(textoHtml.match(tagHtmlRegex)); 


let numeroTelefone = "Este é o meu numero 936599579"
let regexNrValido = /9+[0-9]{8}/;
// console.log(numeroTelefone.match(regexNrValido))

// \ A barra serve para escapar outros caracteres. Use \\ se quiser corresponder à "\"
// / Começa e termina uma expressão regular.
// [ ] Define um set ou conjunto.
// { } Define uma propriedade.
// ( ) Define um grupo.
// ?+* Quantificadores.
// | Operador "OR".
// . Curinga.
// ^ Define início de um padrão e também serve para negar um grupo.
// $ Define o final de um padrão.

/*
-quando queremos escapar um caractere especial, usamos \
-não é necessário dentro de conjuntos
-um conjunto tem números de 0-9, ponto ou vírgula -> /[0-9.,]/  fora do conjunto [0-9]\.,
*/

// Grupos
// validar uma string que possa ter dois formatos "Nº 1234" ou "1234":
// console.log(/^Nº\s?\d{4}$/.test('Nº 1234')); //true
// console.log(/^(Nº\s)?\d{4}$/.test("1234")); //true
// console.log(/^(Nº\s)?\d{4}$/.test("No 1234")); //false
// console.log(/^Nº\s?\d{4}$/.test("1234")); //false
// console.log(/^Nº\s?\d{4}$/.test("No 1234")); //false
// console.log(/^Nº\s?\d{4}$/.test("Nº1234")); //true
// console.log(/^Nº\s?\d{4}$/.test("Nº 1234")); //true
// Agrupando a string "Nº " e adicionando o quantificador "?" (opcional), o grupo todo se torna opcional.

// caractere opcional
// para verificar "pessoa" ou "pessoas"
// console.log(/pessoas?/.test('pessoa')); //true
// console.log(/pessoas?/.test("pessoas")); //true
// console.log(/pessoas?/.test("")); //false
// console.log(/pessoas?/.test("s")); //false

// usar grupos é poder simplificar padrões repetidos
// console.log(/(ha){2,}/.test("hahaha"));//true
// console.log(/(ha){2,}/.test("hahaa"));//true
// console.log(/(ha){2,}/.test("haaha"));//false
// console.log(/(ha){2,}/.test("hahha"));//false

// seria impossível testar "ha" infinitas vezes
// console.log(/ha{2,}/.test("hahaha"));//false
// console.log(/ha{2,}/.test('haaaaa'))//true


// Capturando grupos
// console.log(/(.+) - ([\w]{2})/.exec('São Paulo - SP'))


// Referência de Grupos + substituições
// grupos definidos com $1, $2, $3...
// você precisa capturar um valor numérico em uma string e apresentá-lo em valor monetário
// console.log("O valor é de 2000".replace(/(\d+)/, "R$ $1"));

// Ignorando grupos
// sem ignorar
// ?:  (?: ... )
// console.log(/(https?):\/\/(.*)/.exec('https://metring.com.br'));

// Ignorando o protocolo
// console.log(/(?:https?):\/\/(.*)/.exec('https://metring.com.br'));

// Grupos com nomes
const data = /(?<dia>\d{2})\/(?<mes>\d{2})\/(?<ano>\d{4})/.exec('03/05/2019')
// console.log(data.groups.dia);
// console.log(data.groups.mes);
// console.log(data.groups.ano);

// Referência de grupos dentro do padrão
// console.log(/['"](.*)['"]/.exec('<img src="test.jpg">'));

// fazer referência do primeiro grupo \1
// console.log(/(['"])(.*?)\1/.exec(`<img title="Ricardo's site">`))


// passar nomes de grupos como referência usando \k<nome>
// console.log(/(?<aspas>['"])(.*?)\k<aspas>/.exec(`Empresa: "Ricardo's Pizzaria"`))


// Aninhamento de grupos
console.log('<a href="https://metring.com.br">Metring</a>'.match(/<a (href="(.*)")>(.*)<\/a>/))

// Operador | OR
/whiskey|vodka/.test('whiskey'); // ✅ 
/whiskey|vodka/.test('vodka'); // ✅ 
/whiskey|vodka/.test('pinga'); // ❌

// O operador OR também funciona dentro de grupos e entre grupos:
/(whiskey|vodka)|(refrigerante|suco)/.test('whiskey'); // ✅ 
/(whiskey|vodka)|(refrigerante|suco)/.test('refrigerante'); // ✅ 
/(whiskey|vodka)|(refrigerante|suco)/.test('pinga'); // ❌

// Lookahead (olhe para frente) Se após a letra A vier a letra B:
/A(?=B)/.test('AB'); // ✅ 
/A(?=B)/.test('AZ'); // ❌ 
/A(?=B)/.test('BA'); // ❌
// É possível também negar a expressão acima utilizando ?!.
/A(?!B)/.test('AB'); // ❌ 
/A(?!B)/.test('BA'); // ✅ 
/A(?!B)/.test('ABA'); // ✅ Contém e ao mesmo tempo não contém B na frente de A

// Lookbehind (olhe para trás)
/(?<=A)B/.test('ABC'); // ✅ 
/(?<=A)B/.test('BA'); // ❌
// Para negar o lookbehind, utilize ?<!
/(?<!A)B/.test('ABC'); // ❌ 
/(?<!A)B/.test('BA'); // ✅

// Propriedades interessantes unicode
// Você pode fazer isso por meio do meta caractere \p ou \P (negado).
// como se trata de um meta caractere de propriedade unicode, a flag "u" precisa ser usada
// string unicode contém um ou mais caracteres em maiúsculo
/\p{Uppercase}+/u.test('MAIÚSCULO'); // ✅ 
/\p{Uppercase}+/u.test('Maiúsculo'); // ✅ 
/\p{Uppercase}+/u.test('minúsculo'); // ❌
// forma negada das expressões acima usando \P
/\P{Uppercase}+/u.test('MAIÚSCULO'); // ❌
/\P{Uppercase}+/u.test('Maiúsculo'); // ✅ 
/\P{Uppercase}+/u.test('minúsculo'); // ✅
// Outros exemplos usando \p
/^\p{Lowercase}$/u.test('a'); // ✅ 
/^\p{Lowercase}$/u.test('A'); // ❌ 
/^\p{Emoji}$/u.test('?') // ✅ 
/^\p{Emoji}$/u.test('A') // ❌ 
/^\p{Script=Arabic}+$/u.test('صفيحة '); // ✅ /^\p{Script=Hebrew}+$/u.test('ואיה '); // ✅ /^\p{Script=Latin}+$/u.test('FestaNoAP'); // ✅