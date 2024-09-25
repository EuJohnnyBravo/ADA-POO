export class Produto {
  constructor(
    private _nome: string,
    private _preco: number,
    private _avaliacao: number
  ) {}

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
}

export class Eletronicos extends Produto {
  public aplicarDesconto(): void {
    this.preco -= this.preco * (10 / 100);
  }
}

export class Eletrodomestico extends Produto {
  public aplicarDesconto(): void {
    this.preco -= this.preco * (5 / 100);
  }
}

export class Roupas extends Produto {
  constructor(
    private _tamanho: string,
    _nome: string,
    _preco: number,
    _avaliacao: number
  ) {
    super(_nome, _preco, _avaliacao);
  }

  get tamanho() {
    return this._tamanho;
  }

  set tamanho(tamanho: string) {
    this._tamanho = tamanho;
  }

  public aplicarDesconto(): void {
    this.preco -= this.preco * (15 / 100);
  }
}
