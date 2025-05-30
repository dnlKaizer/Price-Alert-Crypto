class Cripto {
    constructor(id, descricao, valor, urlImagem) {
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
        this.urlImagem = urlImagem;
    }
}

class User {
    constructor(id, nome, login, email, chave) {
        this.id = id;
        this.nome = nome;
        this.login = login;
        this.email = email;
        this.chave = chave;
    }
}

class Alerta {
    constructor(id, nome, valor, isCompra) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.isCompra = isCompra;
    }
}

class Compra {
    constructor(id, nome, valor, data) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.data = data;
    }
}