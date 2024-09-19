class Usuario {
  private _nome: string;
  private _apelido: string;
  private _listaDesejos: Produto[];
  private _endereco: Endereco;

  get nome() {
    return this._nome;
  }

  set nome(val: string) {
    this._nome = val;
  }

  get apelido() {
    return this._apelido;
  }

  set apelido(val: string) {
    this._apelido = val;
  }

  get listaDesejos() {
    return this._listaDesejos;
  }

  set listaDesejos(val: Produto[]) {
    this._listaDesejos = val;
  }

  get endereco() {
    return this._endereco;
  }

  set endereco(val: Endereco) {
    this._endereco = val;
  }

  constructor(nome: string, endereco: Endereco) {
    this._nome = nome;
    this._endereco = endereco;
    this._apelido = "";
    this._listaDesejos = [];
  }

  adicionarListaDesejos(produto: Produto) {
    if (this._listaDesejos) {
      this._listaDesejos.push(produto);
    }
  }

  removerProdutoLista(produto: Produto) {
    this._listaDesejos = this._listaDesejos.filter((p) => p !== produto);
    console.log(`Removendo o produto: ${produto.nome}`);
  }
}

class Produto {
  private _nome: string;
  private _preco: number;
  private _avaliacao: number;

  get nome() {
    return this._nome;
  }

  set nome(val: string) {
    this._nome = val;
  }

  get preco() {
    return this._preco;
  }

  set preco(val: number) {
    this._preco = val;
  }

  get avaliacao() {
    return this._avaliacao;
  }

  set avaliacao(val: number) {
    this._avaliacao = val;
  }

  constructor(nome: string, preco: number, avaliacao: number) {
    this._nome = nome;
    this._preco = preco;
    this._avaliacao = avaliacao;
  }
}

class Endereco {
  private _rua: string;
  private _cidada: string;
  private _cep: string;
  private _numero: number;

  get rua() {
    return this._rua;
  }

  set rua(val: string) {
    this._rua = val;
  }

  get cidada() {
    return this._cidada;
  }

  set cidada(val: string) {
    this._cidada = val;
  }

  get cep() {
    return this._cep;
  }

  set cep(val: string) {
    this._cep = val;
  }

  get numero() {
    return this._numero;
  }

  set numero(val: number) {
    this._numero = val;
  }

  constructor(rua: string, cidada: string, cep: string, numero: number) {
    this._rua = rua;
    this._cidada = cidada;
    this._cep = cep;
    this._numero = numero;
  }
}

const endereco = new Endereco("rua A", "Gravataí", "12345-000", 115);
const user = new Usuario("Rodrigo", endereco);

const produto1 = new Produto("Smartphone X1", 2999.99, 4.5);
const produto2 = new Produto("Notebook Pro", 4999.9, 4.8);
const produto3 = new Produto("Fone Bluetooth XYZ", 299.9, 4.3);
const produto4 = new Produto("Smartwatch Z50", 999.99, 4.6);
const produto5 = new Produto("TV 4K Ultra HD", 3599.9, 4.7);

console.log(user);
user.apelido = "rodi";
user.adicionarListaDesejos(produto1);
user.adicionarListaDesejos(produto2);
user.adicionarListaDesejos(produto3);
user.adicionarListaDesejos(produto4);
user.adicionarListaDesejos(produto5);
console.log(user);
console.log(user.listaDesejos);
user.removerProdutoLista(produto3);
console.log(user.listaDesejos);
