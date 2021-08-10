
Operador ^ (inicio)

Operador $ (fim)

Combinando inicio e fim de uma string

````
/^oi$/.test('oi')
````

### Conjuntos

/[1-5]/ -> 1, 2, 3, 4, 5 

/[0-9]/ -> 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 

/ab/ -> a, b 

/[a-d]/ -> a, b, c, d

/[a-z]/ -> a, b, c, d ... z
 
/[A-Z]/ -> A, B, C ... Z 

Negar conguntos
/[^0-9]/
/[^0-9a-z]/

### Meta caracteres

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

### Alguns mnemônicos para facilitar na memorização:

-Como você pôde perceber, quando o meta caractere está em maiúsculo ele sempre corresponde ao contrário do caractere em minúsculo.

-"." pode ser lembrado como reticências (...) para corresponder à qualquer coisa.
-"d" pode ser lembrado como abreviação de digit - somente números.

-"w" pode ser lembrado como abreviação de word. é usado com frequência juntamente com quantificadores para corresponder à palavras. Lembre-se que também pode conter números.

-"s" pode ser lembrado como abreviação de space.

-O "\p", talvez como abreviação de property, é uma inclusão recente do ES2018, vamos ver mais abaixo como usar isso.

### Quantificadores
A? Corresponde a zero ou um "A": /A?/

A* Corresponde a zero ou mais "A": /A*/

A+ Corresponde a pelo menos um "A": /A+/

A{x} Corresponde a exatamente x vezes "A": /A{3}/

A{x,y} Corresponde a exatamente de x a y vezes "A": /A{2,4}/

A{x,} Corresponde a x até o infinito vezes "A": /A{2,}/

### Estes são os caracteres que precisam ser "escapados", ou ignorados:

\ A barra serve para escapar outros caracteres. Use \\ se quiser corresponder à "\"

/ Começa e termina uma expressão regular.

[ ] Define um set ou conjunto.

{ } Define uma propriedade.

( ) Define um grupo.

?+* Quantificadores.

| Operador "OR".

^ Define início de um padrão e também serve para negar um grupo.

$ Define o final de um padrão.