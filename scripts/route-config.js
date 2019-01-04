           // Arquivo de configuração das rotas para o ng-Route para nosso SPA //

            var app = angular.module("app1", ["ngRoute"]);
            app.config(function($routeProvider) {
                $routeProvider
                    .when("/", {
                        templateUrl : "simulado.html",
                        controller : "myController",
                    })
                    .when("/simulado1", {
                        templateUrl : "simulado1.html",
                        controller : "myController",
                    })
                    .when("/simulado2", {
                        templateUrl : "simulado2.html",
                        controller : "Sim2Ctrl",
                    })
                    .when("/simulado3", {
                        templateUrl : "simulado3.html",
                        controller : "Sim3Ctrl",
                    });
            });