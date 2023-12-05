

class TictactoeModel {

    #lista=[]
    constructor() {
        this.#lista = [
            " ", " ", " ", 
            " ", "X", " ", 
            " ", " ", " "];
    }
    getLista () {
        return [...this.#lista]
    }

    setLista(index) {
        if (this.#lista[index] == " ") {
            this.#lista[index] = "X";
        }
        if (this.#lista[index] == "X") {
            this.#lista[index] = "O";
        } else {
            this.#lista[index] = "X";
        }
        
        
    }
}

export default TictactoeModel;