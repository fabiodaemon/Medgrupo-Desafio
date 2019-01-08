            //<reference path="angular.js" />
            app.controller("myController", function ($scope) {
                var tabela = [
                    { posicao: "1", nota: "10", matricula: "897413", especialidade: "clinica medica", turma: "2008 MEDCURSO SALVADOR - Turma A/2008 MED SALVADOR" , filial:"Salvador (BA)" },
                    { posicao: "2", nota: "40", matricula: "897413", especialidade: "cardiologia", turma: "2008 MEDCURSO SP - Turma A/2008 MED SP", filial:"São Paulo (SP)" },
                    { posicao: "3", nota: "50", matricula: "205500", especialidade: "cardiologia", turma: "2008 MEDCURSO SP - Turma A/2007 MED SP" , filial:"São Paulo (SP)"},
                    { posicao: "4", nota: "90", matricula: "897413", especialidade: "pediatria", turma: "2008 MEDCURSO NATAL - Turma A/2008 MED NATAL", filial:"Natal (RN)" },
                    { posicao: "5", nota: "80", matricula: "205500", especialidade: "clinica medica", turma: "2008 MEDCURSO NATAL - Turma A/2005 MED NATAL", filial:"Natal (RN)" },
                    { posicao: "6", nota: "70", matricula: "897416", especialidade: "clinica medica", turma: "2008 MEDCURSO NATAL - Turma A/2008 MED NATAL", filial:"Natal (RN)" },
                    { posicao: "7", nota: "10", matricula: "205500", especialidade: "clinica medica", turma: "2008 MEDCURSO SALVADOR - Turma A/2006 MED SALVADOR", filial:"Salvador (BA)" },
                    { posicao: "8", nota: "10", matricula: "897413", especialidade: "clinica medica", turma: "22008 MEDCURSO NATAL - Turma A/2008 MED NATAL", filial:"Natal (RN)" },
                    { posicao: "9", nota: "10", matricula: "897413", especialidade: "cardiologia", turma: "2008 MEDCURSO SP - Turma A/2008 MED SP", filial:"São Paulo (SP)" },
                    { posicao: "10", nota: "10", matricula: "897413", especialidade: "urologia", turma: "2008 MEDCURSO SALVADOR 
                ];
                $scope.tabela = tabela;
            });