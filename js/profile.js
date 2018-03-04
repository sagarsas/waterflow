var subsTable =  $('.subscribtion-table').detach();

var userData = JSON.parse(localStorage.getItem('bsuserData'));

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://us-central1-waterflow-2ff7e.cloudfunctions.net/fetchPreOrders",
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "processData": false,
  "data": JSON.stringify({'email': userData.email})
}

$.ajax(settings).done(function (response) {
  //var response = JSON.parse(response);
    
    $('#address').html(response[0].address);
    $('#phoneNumber').html(response[0].phoneNumber);
    
    
    for(var i=0;i<response.length;i++){
        
        var subsTableClone = subsTable.clone();
        var pdtId = response[i].productId;
        
        var settings2 = {
          "async": true,
          "crossDomain": true,
          "url": "https://us-central1-waterflow-2ff7e.cloudfunctions.net/getProductDetails",
          "method": "POST",
          "headers": {
            "content-type": "application/json"
          },
          "processData": false,
          "data": JSON.stringify({'productId':pdtId})
        }

        $.ajax(settings2).done(function (response2) {
            subsTableClone.find('#pdtName').html("<b>" + response2.productName + "</b>");
            subsTableClone.find('#itemRent').html("<b>"+response2.productRent+"</b>");
            subsTableClone.find('#subsStatus').html("Pre-ordered");
            subsTableClone.find('.pdt-image').attr('src','images/'+pdtId+'.png');
            $(".subs-body").append(subsTableClone);
        });
    }
});