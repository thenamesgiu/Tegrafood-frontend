function notifAdded(){
    const Added = document.getElementById('added-area');

    Added.style.transition = 'opacity 1s ease'
    Added.style.visibility = 'visible';
    Added.style.opacity = 1;
    
}

function hideAdded(){
    const AddedShown = document.getElementById('added-area');

    AddedShown.style.visibility = 'hidden';
    AddedShown.style.opacity = 0;
}

function priceShow(){
    const priceFilter = document.getElementById('filters');

    priceFilter.style.transition = 'opacity 0.35s ease'
    priceFilter.style.visibility = 'visible';
    priceFilter.style.opacity = 1;
}

function priceHide(){
    const priceFilterShown = document.getElementById('filters');

    priceFilterShown.style.visibility = 'hidden';
    priceFilterShown.style.opacity = 0;
}

function hideAside(){
    const newone =  document.getElementById('newone');

    newone.style.visibility = 'hidden';
    newone.style.opacity = 0;
}

function showAside(){
    const newone =  document.getElementById('newone');

    newone.style.transition = 'opacity 0.35s ease'
    newone.style.visibility = 'visible';
    newone.style.opacity = 1;
}