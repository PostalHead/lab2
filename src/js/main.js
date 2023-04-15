import * as $ from 'jquery'
import * as bootstrap from 'bootstrap'


$(function(){
    $('#load-btn').on('click', (e)=>{
        bootstrap.Toast.getOrCreateInstance($('#liveToast')).show();
    });      

    let currentCardIndex;
    let currentRow;

    $('.card').on('click', (e)=>{
        currentCardIndex = $(e.currentTarget).closest(".col").index();
        currentRow = $(e.currentTarget).closest(".row");
        $(".modal-title").text(`${$(e.currentTarget).find(".card-title").text()}`);
        $(".modal-body p").text(`${$(e.currentTarget).find(".card-text").text()}`);
        bootstrap.Modal.getOrCreateInstance($('#extended-info')).show();
    });

    $('#extended-info').on('keydown', (e)=>{
        let cardAmount = $(currentRow).children(".col").length;
        if (e.key == "ArrowLeft" && currentCardIndex > 0){
            currentCardIndex--;
            $(currentRow).children().eq(currentCardIndex).find(".card").trigger("click");
        }
        if (e.key == "ArrowRight" && currentCardIndex < cardAmount - 1){
            currentCardIndex++;
            $(currentRow).children().eq(currentCardIndex).find(".card").trigger("click");
        } 
    });
    

    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

});
