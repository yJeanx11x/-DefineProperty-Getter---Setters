// DefineProperty => Getter é Setters

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  let estoquePrivado = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,
    get: function (valor) {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("Mensagem");
      }
      estoquePrivado = valor;
    },
  });
}
const p1=new Produto('camiseta',15,)
p1.estoquePrivado=3
console.log(p1)