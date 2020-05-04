!function(){"use strict";angular.module("unidescApp",[])}(),function(){"use strict";function produtoController($scope,$http){var vm=this,HOST_HTTP="http://localhost:3000";vm.produto={},vm.produtos=[],vm.init=function(){vm.listarProdutos()},vm.listarProdutos=function(){$http.get(HOST_HTTP+"/produtos").then(function(response){vm.produtos=response.data.produtos,console.log(response)},function(err){console.log(err)})},vm.adicionarProduto=function(){void 0===vm.produto.id?vm.salvarProdutoBaseDados():vm.atualizarProduto(vm.produto.id),console.log(vm.produto)},vm.salvarProdutoBaseDados=function(){$http.post(HOST_HTTP+"/produtos",vm.produto).then(function(response){vm.produtos.push(angular.copy(vm.produto)),vm.limparCampos(),console.log(response)},function(err){console.log(err)})},vm.deletarProdutoBaseDados=function(){$http.delete(HOST_HTTP+"/produtos",vm.produto).then(function(response){vm.produtos.push(angular.copy(vm.produto)),vm.limparCampos(),console.log(response)},function(err){console.log(err)})},vm.atualizarProdutoBaseDados=function(){$http.put(HOST_HTTP+"/produtos",vm.produto).then(function(response){vm.produtos.push(angular.copy(vm.produto)),vm.limparCampos(),console.log(response)},function(err){console.log(err)})},vm.limparCampos=function(){vm.produto={}},vm.deletarProduto=function(item){console.log(item),vm.produtos.splice(item,1)},vm.carregarProduto=function(item){vm.produto=angular.copy(vm.produtos[item]),vm.produto.id=item,console.log(vm.produto)},vm.atualizarProduto=function(item){vm.produtos[item]=angular.copy(vm.produto)}}angular.module("unidescApp").controller("produtoController",produtoController),produtoController.$inject=["$scope","$http"]}();