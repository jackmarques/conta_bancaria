import { Conta } from "./Conta";

// classe conta corrente está herdando as informações da classe Conta atraves do 'extends'
export class ContaCorrente extends Conta {
    private _limite: number;

    constructor(
        numero: number, 
        agencia: number, 
        tipo: number,
        titular: string,
        saldo: number,
        limite: number ) {
            super(numero, agencia, tipo, titular, saldo);
            this._limite = limite;
        }

        public get limite() {
            return this._limite
        }

        public set(limite: number) {
            this._limite = limite;
        }

        public sacar(valor: number) : boolean {
            // Verifica se o saldo disponível (saldo + limite) é menor que o valor desejado para saque.
            // Se for menor, significa que não há saldo suficiente.
            if ((this.saldo + this._limite) < valor) {
                console.log("\nSaldo Insuficiente!");
                // Retorna false indicando que o saque NÃO foi realizado.
                return false;
            }
            // Se houver saldo suficiente: retira do saldo o valor do saque e atualiza o saldo da conta
            this.saldo = this.saldo - valor;
            // Indica que o saque foi realizado com sucesso
            return true
        }

        public visualizar(): void {
            super.visualizar();
            console.log(`Limite: ${this._limite.toFixed(2)}`);
        }

}