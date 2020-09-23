$(function(){
    let galleryImage = $("#gallery-img");
    let images = [
        "images/barbershop0.jpg",
        "images/barbershop1.jpg",
        "images/barbershop2.jpg",
        "images/barbershop3.jpg",
        "images/barbershop4.jpg",
        "images/barbershop5.jpg",
    ];
    let i = 0;
    setInterval(function(){
        i = (i + 1) % images.length;
        galleryImage.fadeTo(1500, 0.1, function(){
            $(this).attr("src", images[i]);
            $(this).fadeTo(1500, 1);
        });
    }, 3000)

});