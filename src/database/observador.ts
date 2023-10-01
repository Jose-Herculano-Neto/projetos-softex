/*


interface Observador{
    notificar(mensagem: string): void;
}

abstract class Observado {
    private observadores: Observador[] = [];

    public adicionarObservador(observador: Observador): void{
        this.observadores.push(observador);
        console.log("Observador adicionado");
    }

    public removerObservador(observador: Observador): void {
        this.observadores = this.observadores.filter((obs) => obs !== observador);
    }

    public notificarObservadores(mensagem: string): void {
        this.observadores.forEach((observador) => observador.notificar(mensagem));
    }
}

class Botao extends Observado {
    private texto: string;

    constructor(texto: string) {
        super();
        this.texto = texto;
    }

    getTexto(): string {
        return this.texto;
    }

    setTexto(texto: string): void {
        this.texto = texto;
    }

    clicar(): void {
        this.notificarObservadores(this.texto);
    }
}


const bota1 = new Botao("Cadastrar");

const observador1 = new ObservadorConcreto();


*/


