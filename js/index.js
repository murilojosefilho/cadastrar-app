var usuarios = new Array()
function cadastrar() {
    var clogin = document.getElementById('input-name').value
    var csenha = document.getElementById('input-pass').value
    var consenha = document.getElementById('input-pass2').value
    if (csenha == consenha) {
        usuarios = JSON.parse(localStorage.getItem('Usuarios'))
        if (usuarios == null) {
            usuarios = new Array()
        }
        var user = {
            login: clogin,
            senha: csenha
        }
        usuarios.push(user)
        localStorage.setItem('Usuarios', JSON.stringify(usuarios))

        alert('Usuario cadastro com sucesso!')
        window.open('index.html')
    } else { alert('As senhas estao diferentes') }
}
function logar() {
    var clogin = document.getElementById('input-name').value
    var csenha = document.getElementById('input-pass').value

    usuarios = JSON.parse(localStorage.getItem('Usuarios'))
    if (usuarios == null) {
        usuarios = new Array()

        var achou = false
        for (var i = 0; i < usuarios.length; i++) {
            alert('entro')
            if (clogin == usuarios[i].login && csenha == usuarios[i].senha) {
                alert('achou')
                var achou = true
            }
        }
        if (achou == true) {
            alert('Bem-vindo ao site!')
            window.open('home.html')
        } else {
            alert('Login ou senha inexistentes no sistema!')
        }
    }
}
var produtos = new Array()
function cadastrarproduto() {
    var cProduto = document.getElementById('idProduto').value
    var cQntd = document.getElementById('idQntd').value
    var cPreco = document.getElementById('idPreco').value
    if (Produto != 0) {
        produtos = JSON.parse(localStorage.getItem('Produtos'))
        if (produtos == null) {
            produtos = new Array()
        }
        var product = {
            Produto: cProduto,
            Qntd: cQntd,
            Preco: cPreco
        }

        produtos.push(product)
        localStorage.setItem('Produtos', JSON.stringify(product))
        alert('Produto cadastro com sucesso!')
    } else { alert('Especifique o numero de produtos') }
}