(function(){

    'use strict';

    //recuperando o módulo criado pelo angular angular.module("unidescApp", []);
    var unidescApp = angular.module("unidescApp");

    //Definir uma controller para esse módulo, segundo paramentro representa a função que vai tratar essa controller
    unidescApp.controller('produtoController', produtoController);
    
    //injetando as dependências dessa controller. No caso apenas o $scope
    produtoController.$inject = ['$scope', '$http'];

    
    function produtoController($scope, $http) {

        //encapsulando this dentro dessa variável
        var vm = this;
        var HOST_HTTP = "http://localhost:3000";
        
        //inicializando as minhas variáveis
        vm.produto = {};
        vm.produtos = [];

        vm.init = function(){
            vm.listarProdutos();
        };

        //Quando carregar a tela vamos o endpoint de listar os produtos da nossa API REST
        vm.listarProdutos = function(){
            $http.get(HOST_HTTP + '/produtos').then(
                function(response){
                    vm.produtos = response.data.produtos;
                    console.log(response);
                },
                function(err){
                    console.log(err);
                }
            );
        };

        vm.adicionarProduto = function(){
            //Adicionar um produto
            if(vm.produto.id === undefined){
                vm.salvarProdutoBaseDados();           
            }
            else{
                vm.atualizarProduto(vm.produto.id);
            }
                                  

            console.log(vm.produto); 
        };

        vm.salvarProdutoBaseDados = function(){
            $http.post(HOST_HTTP + '/produtos', vm.produto).then(
                function(response){
                    vm.produtos.push(angular.copy(vm.produto));
                    vm.limparCampos();
                    console.log(response);
                },
                function(err){
                    console.log(err);
                }
            );           
        };

        vm.deletarProdutoBaseDados = function(){
            $http.delete(HOST_HTTP + '/produtos', vm.produto).then(
                function(response){
                    vm.produtos.push(angular.copy(vm.produto));
                    vm.limparCampos();
                    console.log(response);
                },
                function(err){
                    console.log(err);
                }
            );           
        };

        vm.atualizarProdutoBaseDados = function(){
            $http.put(HOST_HTTP + '/produtos', vm.produto).then(
                function(response){
                    vm.produtos.push(angular.copy(vm.produto));
                    vm.limparCampos();
                    console.log(response);
                },
                function(err){
                    console.log(err);
                }
            );           
        };

        vm.limparCampos = function(){
            vm.produto = {};
        };

        //Deletar um item
        vm.deletarProduto = function(item){
            console.log(item);
            vm.produtos.splice(item,1);

        };

        //Carregar o produto selecionado
        vm.carregarProduto = function(item){
            vm.produto = angular.copy(vm.produtos[item]);  
            vm.produto.id = item;

            console.log(vm.produto);
        };

        //Atualizar o produto
        vm.atualizarProduto = function(item){
            vm.produtos[item] = angular.copy(vm.produto);
        };

    }

}());