$(document).ready( () =>{
    $('.toogleBtn').on('click',() =>{
        $('.nav-links').toggle()
    });

    $('.showAbout').on('click',()=>{
        $('.main').toggle();
    });

    $('.showGallery').on('.click',()=>{
        $('.images').toggle()
    })
});