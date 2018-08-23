### Estudos Javascript
* Valores, tipos e operadores - [Capítulo 1](http://eloquentjavascript.net/01_values.html) Eloquent Javascript
* Estrutura de programas - [Capítulo 2](http://eloquentjavascript.net/02_program_structure.html) Eloquent Javascript
    * Exercício 'Looping a triangle'
    ```javascript
        let triangle = '';
        for(let i=0;i < 7; i++){
            triangle += '#';
            console.log(triangle);
        }
    ```
    * Exercício 'FizzBuzz'
    ```javascript
        for(let i = 1; i<=100; i++){
            if(i%3 === 0 && i%5 ===0){
                console.log('FizzBuzz');
            } else if(i%3 === 0){
                console.log('Fizz');
            } else if(i%5 === 0){
                console.log('Buzz');
            } else {
                console.log(i);
            }
        }
    ```
    * Exercício 'ChessBoard'
    ```javascript 
        let chessBoard = '';
        let size = 8;

        for(let i = 0; i < size; i++){
            for(let j = 0; j < size; i++){
                if((i + j)%2 === 0){
                    chessBoard += ' ';
                } else {
                    chessBoard += '#';
                }
            }
            chessBoard +='\n'
        }

        console.log(chessBoard);
    ```

### Bibliografia

- [Desvendando Javascript(Playlist Youtube)](https://www.youtube.com/watch?v=093dIOCNeIc&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc)
- [Eloquent Javascript](http://eloquentjavascript.net/)