class Usuario {
  nome: string;
  apelido?: string;
  listaDesejos: Produto[];
  endereco: Endereco;

  constructor(nome: string, endereco: Endereco) {
    this.nome = nome;
    this.endereco = endereco;
    this.listaDesejos = [];
  }

  adicionarListaDesejos(produto: Produto) {
    if (this.listaDesejos) {
      this.listaDesejos.push(produto);
    }
  }

  removerProdutoLista(nomeProduto: string) {
    this.listaDesejos = this.listaDesejos.filter((produto) => produto.nome !== nomeProduto);
    console.log(`Removendo o produto: ${nomeProduto}`);
  }
}

class Produto {
  nome: string;
  preco: number;
  avaliacao: number;

  constructor(nome: string, preco: number, avaliacao: number) {
    this.nome = nome;
    this.preco = preco;
    this.avaliacao = avaliacao;
  }
}

class Endereco {
  rua: string;
  cidada: string;
  cep: string;
  numero: number;

  constructor(rua: string, cidada: string, cep: string, numero: number) {
    this.rua = rua;
    this.cidada = cidada;
    this.cep = cep;
    this.numero = numero;
  }
}

const endereco = new Endereco("rua A", "Gravataí", "12345-000", 221);
const user = new Usuario("Rodrigo", endereco);

const produto1 = new Produto("Smartphone X1", 2999.99, 4.5);
const produto2 = new Produto("Notebook Pro", 4999.9, 4.8);
const produto3 = new Produto("Fone Bluetooth XYZ", 299.9, 4.3);
const produto4 = new Produto("Smartwatch Z50", 999.99, 4.6);
const produto5 = new Produto("TV 4K Ultra HD", 3599.9, 4.7);

console.log(user);
user.adicionarListaDesejos(produto1);
user.adicionarListaDesejos(produto2);
user.adicionarListaDesejos(produto3);
user.adicionarListaDesejos(produto4);
user.adicionarListaDesejos(produto5);
console.log(user);
console.log(user.listaDesejos);
user.removerProdutoLista("Smartphone X1");
console.log(user.listaDesejos);
