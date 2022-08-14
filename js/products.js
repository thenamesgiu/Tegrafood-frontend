function showAll(){
    //Changing text according to section chosen
    const headingclass = document.getElementById('sectionNow');

    headingclass.innerHTML = "Tudo";

    //Using XMLHttpRequest to list items, concatenating variable with HTML strutucture
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var product = JSON.parse(this.responseText);
    
                var string = '';
                for(let i = 0; i < product['id'].length; i++){
                    string+= `
                    <div id="food" class="card-catalog">
                        <div class="imageborders">
                        <img src="${product.details[i]['pic']}">
                        </div>
                            <div class="togetherleft">
                                <h3>${product.details[i]['name']}</h3>
                                <p>${product.details[i]['ingredients']}</p>
                            </div>
                            <div class="togetherright">
                                <h3>R$${product.details[i]['price']},00</h4>
                                <button onclick="notifAdded()">Comprar</button>
                            </div>
                  </div>`
                }
            document.getElementById("food-catalog-container").innerHTML = string
        }
    };
    
    xmlhttp.open("POST", "products.json", true);
    
    xmlhttp.send();
}


function showDessert(){
//Changing text according to section chosen
const headingclass = document.getElementById('sectionNow');

headingclass.innerHTML = "Sobremesa";
//Using XMLHttpRequest to list items, concatenating variable with HTML strutucture
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var product = JSON.parse(this.responseText);

            var string = '';
            
            for(let i = 0; i < product['id'].length; i++){
                if(product.details[i]['class'] == "Sobremesa"){
                    string+= `
                    <div id="food" class="card-catalog">
                        <div class="imageborders">
                        <img src="${product.details[i]['pic']}">
                        </div>
                            <div class="togetherleft">
                                <h3>${product.details[i]['name']}</h3>
                                <p>${product.details[i]['ingredients']}</p>
                            </div>
                            <div class="togetherright">
                                <h3>R$${product.details[i]['price']},00</h4>
                                <button onclick="notifAdded()">Comprar</button>
                            </div>
                  </div>`
                }
              
            }
        document.getElementById("food-catalog-container").innerHTML = string
    }
};

xmlhttp.open("POST", "products.json", true);

xmlhttp.send();
}

function showPizza(){
//Changing text according to section chosen
const headingclass = document.getElementById('sectionNow');

headingclass.innerHTML = "Pizza";
//Using XMLHttpRequest to list items, concatenating variable with HTML strutucture
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var product = JSON.parse(this.responseText);

            var string = '';
            
            for(let i = 0; i < product['id'].length; i++){
                if(product.details[i]['class'] == "Pizza"){
                    string+= `
                    <div id="food" class="card-catalog">
                        <div class="imageborders">
                        <img src="${product.details[i]['pic']}">
                        </div>
                            <div class="togetherleft">
                                <h3>${product.details[i]['name']}</h3>
                                <p>${product.details[i]['ingredients']}</p>
                            </div>
                            <div class="togetherright">
                                <h3>R$${product.details[i]['price']},00</h4>
                                <button onclick="notifAdded()">Comprar</button>
                            </div>
                  </div>`
                }
              
            }
        document.getElementById("food-catalog-container").innerHTML = string
    }
};

xmlhttp.open("POST", "products.json", true);

xmlhttp.send();
}

function showDrinks(){
//Changing text according to section chosen
const headingclass = document.getElementById('sectionNow');

headingclass.innerHTML = "Bebida";
//Using XMLHttpRequest to list items, concatenating variable with HTML strutucture
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var product = JSON.parse(this.responseText);

            var string = '';
            
            for(let i = 0; i < product['id'].length; i++){
                if(product.details[i]['class'] == "Bebida"){
                    string+= `
                    <div id="food" class="card-catalog">
                        <div class="imageborders">
                        <img src="${product.details[i]['pic']}">
                        </div>
                            <div class="togetherleft">
                                <h3>${product.details[i]['name']}</h3>
                                <p>${product.details[i]['ingredients']}</p>
                            </div>
                            <div class="togetherright">
                                <h3>R$${product.details[i]['price']},00</h4>
                                <button onclick="notifAdded()">Comprar</button>
                            </div>
                  </div>`
                }
              
            }
        document.getElementById("food-catalog-container").innerHTML = string
    }
};

xmlhttp.open("POST", "products.json", true);

xmlhttp.send();
}

function showAcai(){
//Changing text according to section chosen
const headingclass = document.getElementById('sectionNow');

headingclass.innerHTML = "Açaí";
//Using XMLHttpRequest to list items, concatenating variable with HTML strutucture
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var product = JSON.parse(this.responseText);

            var string = '';
            
            for(let i = 0; i < product['id'].length; i++){
                if(product.details[i]['class'] == "Acai"){
                    string+= `
                    <div id="food" class="card-catalog">
                        <div class="imageborders">
                        <img src="${product.details[i]['pic']}">
                        </div>
                            <div class="togetherleft">
                                <h3>${product.details[i]['name']}</h3>
                                <p>${product.details[i]['ingredients']}</p>
                            </div>
                            <div class="togetherright">
                                <h3>R$${product.details[i]['price']},00</h4>
                                <button onclick="notifAdded()">Comprar</button>
                            </div>
                  </div>`
                }
              
            }
        document.getElementById("food-catalog-container").innerHTML = string
    }
};

xmlhttp.open("POST", "products.json", true);

xmlhttp.send();
}

function showBurguers(){
//Changing text according to section chosen
const headingclass = document.getElementById('sectionNow');

headingclass.innerHTML = "Lanches";

//Using XMLHttpRequest to list items, concatenating variable with HTML strutucture
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var product = JSON.parse(this.responseText);

            var string = '';
            
            for(let i = 0; i < product['id'].length; i++){
                if(product.details[i]['class'] == "Lanche"){
                    string+= `
                    <div id="food" class="card-catalog">
                        <div class="imageborders">
                        <img src="${product.details[i]['pic']}">
                        </div>
                            <div class="togetherleft">
                                <h3>${product.details[i]['name']}</h3>
                                <p>${product.details[i]['ingredients']}</p>
                            </div>
                            <div class="togetherright">
                                <h3>R$${product.details[i]['price']},00</h4>
                                <button onclick="notifAdded()">Comprar</button>
                            </div>
                  </div>`
                }
              
            }
        document.getElementById("food-catalog-container").innerHTML = string
    }
};

xmlhttp.open("POST", "products.json", true);

xmlhttp.send();
}

function showAllAdmin(){
    //Changing text according to section chosen
    const headingclass = document.getElementById('sectionNow');

    headingclass.innerHTML = "Tudo";

    //Using XMLHttpRequest to list items, concatenating variable with HTML strutucture
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var product = JSON.parse(this.responseText);
    
                var string = '';
                for(let i = 0; i < product['id'].length; i++){
                    string+= `
                    <div id="food" class="card-catalog">
                        <div class="imageborders">
                        <img src="${product.details[i]['pic']}">
                        </div>
                            <div class="togetherleft">
                                <h3>${product.details[i]['name']}</h3>
                                <p>${product.details[i]['ingredients']}</p>
                            </div>
                            <div class="togetherright">
                                <h3>R$${product.details[i]['price']},00</h4>
                                <button onclick="notifAdded()">Editar</button>
                            </div>
                  </div>`
                }
            document.getElementById("food-catalog-container").innerHTML = string
        }
    };
    
    xmlhttp.open("POST", "products.json", true);
    
    xmlhttp.send();
}


function showDessertAdmin(){
//Changing text according to section chosen
const headingclass = document.getElementById('sectionNow');

headingclass.innerHTML = "Sobremesa";
//Using XMLHttpRequest to list items, concatenating variable with HTML strutucture
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var product = JSON.parse(this.responseText);

            var string = '';
            
            for(let i = 0; i < product['id'].length; i++){
                if(product.details[i]['class'] == "Sobremesa"){
                    string+= `
                    <div id="food" class="card-catalog">
                        <div class="imageborders">
                        <img src="${product.details[i]['pic']}">
                        </div>
                            <div class="togetherleft">
                                <h3>${product.details[i]['name']}</h3>
                                <p>${product.details[i]['ingredients']}</p>
                            </div>
                            <div class="togetherright">
                                <h3>R$${product.details[i]['price']},00</h4>
                                <button onclick="notifAdded()">Editar</button>
                            </div>
                  </div>`
                }
              
            }
        document.getElementById("food-catalog-container").innerHTML = string
    }
};

xmlhttp.open("POST", "products.json", true);

xmlhttp.send();
}

function showPizzaAdmin(){
//Changing text according to section chosen
const headingclass = document.getElementById('sectionNow');

headingclass.innerHTML = "Pizza";
//Using XMLHttpRequest to list items, concatenating variable with HTML strutucture
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var product = JSON.parse(this.responseText);

            var string = '';
            
            for(let i = 0; i < product['id'].length; i++){
                if(product.details[i]['class'] == "Pizza"){
                    string+= `
                    <div id="food" class="card-catalog">
                        <div class="imageborders">
                        <img src="${product.details[i]['pic']}">
                        </div>
                            <div class="togetherleft">
                                <h3>${product.details[i]['name']}</h3>
                                <p>${product.details[i]['ingredients']}</p>
                            </div>
                            <div class="togetherright">
                                <h3>R$${product.details[i]['price']},00</h4>
                                <button onclick="notifAdded()">Editar</button>
                            </div>
                  </div>`
                }
              
            }
        document.getElementById("food-catalog-container").innerHTML = string
    }
};

xmlhttp.open("POST", "products.json", true);

xmlhttp.send();
}

function showDrinksAdmin(){
//Changing text according to section chosen
const headingclass = document.getElementById('sectionNow');

headingclass.innerHTML = "Bebida";
//Using XMLHttpRequest to list items, concatenating variable with HTML strutucture
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var product = JSON.parse(this.responseText);

            var string = '';
            
            for(let i = 0; i < product['id'].length; i++){
                if(product.details[i]['class'] == "Bebida"){
                    string+= `
                    <div id="food" class="card-catalog">
                        <div class="imageborders">
                        <img src="${product.details[i]['pic']}">
                        </div>
                            <div class="togetherleft">
                                <h3>${product.details[i]['name']}</h3>
                                <p>${product.details[i]['ingredients']}</p>
                            </div>
                            <div class="togetherright">
                                <h3>R$${product.details[i]['price']},00</h4>
                                <button onclick="notifAdded()">Editar</button>
                            </div>
                  </div>`
                }
              
            }
        document.getElementById("food-catalog-container").innerHTML = string
    }
};

xmlhttp.open("POST", "products.json", true);

xmlhttp.send();
}

function showAcaiAdmin(){
//Changing text according to section chosen
const headingclass = document.getElementById('sectionNow');

headingclass.innerHTML = "Açaí";
//Using XMLHttpRequest to list items, concatenating variable with HTML strutucture
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var product = JSON.parse(this.responseText);

            var string = '';
            
            for(let i = 0; i < product['id'].length; i++){
                if(product.details[i]['class'] == "Acai"){
                    string+= `
                    <div id="food" class="card-catalog">
                        <div class="imageborders">
                        <img src="${product.details[i]['pic']}">
                        </div>
                            <div class="togetherleft">
                                <h3>${product.details[i]['name']}</h3>
                                <p>${product.details[i]['ingredients']}</p>
                            </div>
                            <div class="togetherright">
                                <h3>R$${product.details[i]['price']},00</h4>
                                <button onclick="notifAdded()">Editar</button>
                            </div>
                  </div>`
                }
              
            }
        document.getElementById("food-catalog-container").innerHTML = string
    }
};

xmlhttp.open("POST", "products.json", true);

xmlhttp.send();
}

function showBurguersAdmin(){
//Changing text according to section chosen
const headingclass = document.getElementById('sectionNow');

headingclass.innerHTML = "Lanches";

//Using XMLHttpRequest to list items, concatenating variable with HTML strutucture
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var product = JSON.parse(this.responseText);

            var string = '';
            
            for(let i = 0; i < product['id'].length; i++){
                if(product.details[i]['class'] == "Lanche"){
                    string+= `
                    <div id="food" class="card-catalog">
                        <div class="imageborders">
                        <img src="${product.details[i]['pic']}">
                        </div>
                            <div class="togetherleft">
                                <h3>${product.details[i]['name']}</h3>
                                <p>${product.details[i]['ingredients']}</p>
                            </div>
                            <div class="togetherright">
                                <h3>R$${product.details[i]['price']},00</h4>
                                <button onclick="notifAdded()">Editar</button>
                            </div>
                  </div>`
                }
              
            }
        document.getElementById("food-catalog-container").innerHTML = string
    }
};

xmlhttp.open("POST", "products.json", true);

xmlhttp.send();
}


