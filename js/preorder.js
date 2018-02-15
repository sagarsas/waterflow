$('.preorderbtn').click(function(){
    var pdtId = $(this).attr('id');
    localStorage.setItem('bsPreOrderPdtId',pdtId);
})

$('#confirmPreOrderBtn').click(function(){
    $("#confirm-table").hide();
    $("#orderSuccess").show();
})