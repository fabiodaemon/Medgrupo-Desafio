function imprimir() {
         window.frames["frameimpressao"].document.body.innerHTML = document.getElementById("tabelaimpressao").innerHTML;
         window.frames["frameimpressao"].window.focus();
         window.frames["frameimpressao"].window.print();
       }

