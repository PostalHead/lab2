import * as $ from 'jquery'
import * as bootstrap from 'bootstrap'


$(function(){
    $('#load-btn').on('click', (e)=>{
        bootstrap.Toast.getOrCreateInstance($('#live-toast')).show();
    });      

    let currentCardIndex;
    let currentRow;

    $('.card').on('click', (e)=>{
        currentCardIndex = $(e.currentTarget).closest(".col").index();
        currentRow = $(e.currentTarget).closest(".row");
        $(".modal-title").text(`${$(e.currentTarget).find(".card-title").text()}`);
        $(".modal-body").text(`${$(e.currentTarget).find(".card-text").text()}`);
        bootstrap.Modal.getOrCreateInstance($('#extended-info')).show();
    });

    $('#modal-next').on('click', (e)=>{
        let cardAmount = $(currentRow).children(".col").length;
        if (currentCardIndex < cardAmount - 1){
            currentCardIndex++;
            $(currentRow).children().eq(currentCardIndex).find(".card").trigger("click");
        }
    });

    $('#modal-prev').on('click', (e)=>{
        if (currentCardIndex > 0){
            currentCardIndex--;
            $(currentRow).children().eq(currentCardIndex).find(".card").trigger("click");
        }
    });

    $('#extended-info').on('keydown', (e)=>{
        if (e.key == "ArrowLeft"){
            $("#modal-prev").trigger("click");
        }
        else if (e.key == "ArrowRight"){
            $("#modal-next").trigger("click");
        } 
    });
     
    $(document).find('[data-bs-toggle="popover"]').map(function(){
        return new bootstrap.Popover(this);
    });

});
