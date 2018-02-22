function customCallbackFunc(){
    console.log("Shots fired !! :)")
}
var options = [
    {selector: '.inner', offset: 0, callback: customCallbackFunc() },
    {selector: '.hpSecImg', offset: 0, callback: 
      customCallbackFunc()
    },
  ];
  Materialize.scrollFire(options);