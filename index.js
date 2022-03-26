var arr=[];
var obj={};
$("#submit").click(function(){
    obj.name=$("#nm").val();
    obj.email=$("#em").val();
    obj.message=$("#msg").val();
    arr.push(obj);
    obj={};
    $("#nm").val('');
    $("#em").val('');
    $("#msg").val('');
    window.sessionStorage.setItem("items", JSON.stringify(arr));
    var storedArray = JSON.parse(sessionStorage.getItem("items"));
    for (var i = 0; i < storedArray.length; i++) {
             alert(storedArray[i].name);
             alert(storedArray[i].email);
             alert(storedArray[i].message);
    }



})