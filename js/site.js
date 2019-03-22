$('.card').click(function(event){
    event.preventDefault();
    var card = $(this).clone(),
        title = card.find('.card-title', 'a').text(),
        unavailable = card.attr('unavailable');

    $("#exampleModal").modal("show");
    $('#modal-title').html(title);
    $('#modal-body').html(card.html());

    if (unavailable !== undefined) {
        $('#order-btn').hide();
    } else {
        $('#order-btn').show();
    }
});

var gift = document.querySelector(".gifts"),
    hermes = document.querySelector("#hermes"),
    ground =document.querySelector("ground"),
    gh = 1;


function ClickGift() {
    MoveGift();
    MakeGift();
}

function MoveGift(g) {
    setTimeout(function(){
        g.style.top = window.innerHeight+"px";

        setTimeout(function(){
            RemoveGift(g);
        }, 5000);
    }, 100);
}

function MakeGift() {
    var newGift = document.createElement("img");
    newGift.src = "img/GIFT.png";
    newGift.className = "gifts";
    newGift.style.left = Math.round(Math.random()*window.innerWidth) + "px";
    newGift.style.top = "-100px";
    
    var dim = Math.round(Math.random()*100) + "px";
    newGift.style.width = dim;
    newGift.style.height = dim;
    newGift.style.opacity = dim/50;
    
    hermes.appendChild(newGift);
    MoveGift(newGift);
}

function RemoveGift(g) {
    hermes.removeChild(g);
    //gh = gh+1;
    //ground.style.height = gh+"px";
}
