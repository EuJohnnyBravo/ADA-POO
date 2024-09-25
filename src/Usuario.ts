import { Endereco } from "./Endereco";
import { Produto } from "./Produto";

export class Usuario {
  constructor(
    private _nome: string,
    private _endereco: Endereco,
    private _apelido: string,
    private _listaDesejos: Produto[]
  ) {}

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

  public adicionarListaDesejos(produto: Produto) {
    if (this._listaDesejos) {
      this._listaDesejos.push(produto);
    }
  }

  public removerProdutoLista(produto: Produto) {
    this._listaDesejos = this._listaDesejos.filter((p) => p !== produto);
    console.log(`Removendo o produto: ${produto.nome}`);
  }
}
