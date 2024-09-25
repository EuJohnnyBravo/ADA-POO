export class Endereco {
  constructor(
    private _rua: string,
    private _cidada: string,
    private _cep: string,
    private _numero: number
  ) {}

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
}
