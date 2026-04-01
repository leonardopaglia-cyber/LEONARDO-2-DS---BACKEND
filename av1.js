/*
Imagine que você abriu uma loja:
1) Crie o nome de 10 produtos e armazene em uma lista;
2) Crie outra lista para armazenar o preço de cada produto.
3) Crie uma função para mostrar o estoque, mostrando o nome da cada produto e o seu preço.
4) Crie uma função que adiciona um novo produto (e consequentemente um novo preço)
5) Crie uma função que remove um produto da lista recebendo seu índice.
6) EXECUTE AS FUNÇÕES CRIADAS NA SEGUINTE ORDEM:
    - mostra estoque
    - adiciona produto
    - mostra estoque
    - remove um elemento pelo índice
    - mostra estoque
*/
const produtos = ["Lápis", "Caneta", "Borracha", "Apontador", "Caderno", "Régua", "Tesoura", "Cola", "Marca-texto", "Post-it"]
const precos = [ "2,00"  ,  "3,00" , "2,50"    , "3,50"     , "20,00"  , "3,00" , "8,00"   , "3,00", "4,00"       , "6,00"]

let contador = 0 // variável de início
while(contador <= 3){ // condição de parada
    console.log(produtos[contador] + " - " + precos[contador])
    contador = contador + 1 // incremento do laço
}