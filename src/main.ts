import { Usuario } from "./Usuario";
import { Endereco } from "./Endereco";
import { Eletronicos, Eletrodomestico, Roupas, Produto } from "./Produto";

const endereco = new Endereco("rua A", "Gravataí", "12345-000", 115);
const user = new Usuario("Rodrigo", endereco, "rodi", []);

const produto1 = new Eletronicos("Smartphone X1", 2999.99, 4.5);
const produto2 = new Eletronicos("Notebook Pro", 4999.9, 4.8);
const produto3 = new Eletronicos("Fone Bluetooth XYZ", 299.9, 4.3);
const produto4 = new Eletronicos("Smartwatch Z50", 999.99, 4.6);
const produto5 = new Eletrodomestico("TV 4K Ultra HD", 3599.9, 4.7);
const produto6 = new Eletrodomestico("Geladeira duas Portas", 5599.9, 4.8);
const produto7 = new Roupas("P", "Casaco GUTI", 9999.99, 5);
const produto8 = new Roupas("G", "Camiseta over size", 89.9, 4.2);

console.log(user);
user.adicionarListaDesejos(produto1);
user.adicionarListaDesejos(produto2);
user.adicionarListaDesejos(produto3);
user.adicionarListaDesejos(produto4);
user.adicionarListaDesejos(produto5);
user.adicionarListaDesejos(produto6);
user.adicionarListaDesejos(produto7);
user.adicionarListaDesejos(produto8);

console.log(user);
console.log(user.listaDesejos);
user.removerProdutoLista(produto3);
user.removerProdutoLista(produto5);
user.removerProdutoLista(produto7);
console.log(user.listaDesejos);

console.log(Produto.DESCONTO_PADRAO);
Produto.mudarDescontoPadrao(10);
console.log(Produto.DESCONTO_PADRAO);
