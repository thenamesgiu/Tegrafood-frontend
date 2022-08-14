function Redirecting(){
    alert("Simulação de cadastro realizado.")
   location.href="index.html"
}

function triedGoogle(){
    alert("Como é uma tela fake de login, não há implementação de Google OAuth.")
}

function LevelInfo(){
    var email = document.getElementById('useremaillogin');
    var passwordGiven = document.getElementById('userpasswordlogin').value;
    var emailGiven = document.getElementById('useremaillogin').value;
    var validator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const levelUser = "catalog.html";
    const levelAdmin = "foodmenu.html"
    var level = false;

    if(passwordGiven.length == 0 || emailGiven.length ==0){
        email.placeholder= "Seu e-mail"
        alert("Falha: informações não fornecidas.")
    }
    else{
        if(emailGiven.match(validator)){
            if(emailGiven.includes("admin" || "administrator")){
                alert("O e-mail informado foi atribuído á administração do sistema, você terá acesso à visão de um administrador.");
                location.href=levelAdmin
            }
            else{
                alert("Você terá a visão de um cliente enquanto navega pelas páginas.")
                location.href=levelUser
            }
        }
        else{
            email.value = "";
            email.placeholder= "Formato de e-mail inválido."
        }
    }  
}
 
function itemsBought(){
    alert("Simulação de compra foi realizada com sucesso");
}

