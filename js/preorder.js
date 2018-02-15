$('.preorderbtn').click(function(){
    var pdtId = $(this).attr('id');
    localStorage.setItem('bsPreOrderPdtId',pdtId);
    window.location.href = "confirmation.html"
})

$('#confirmPreOrderBtn').click(function(){
    $("#confirm-table").hide();
    $("#orderSuccess").show();
})