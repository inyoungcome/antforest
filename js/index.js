$(function(){
// var Neblab = require("Neb");
var NebPay = require("nebpay"); //https://github.com/nebulasio/nebPay
var nebpay = new NebPay();
// var neblab = new Neblab();

var dappAddress = "n1vPgEr4X7q9z5qzKufwNbF5Ns5v9tvwwN5";

$("#savebutton").click(function(){
var treeName = $("#treeName").val();
var address = $("#address").val();
var walfare = $("#walfare").val();
var owner = "";

var date = Date.now();


if(treeName == ""){
alert("请输入你要领养的树苗。");
return;
}
if(address == ""){
alert("请输入你要种植的地点。");
return;
}
if(walfare == "" ){
alert("请选择公益组织。");
return;
}
// if(owner == "" ){
// alert("请选择你的地址信息。");
// return;
// }
var to = dappAddress;
var value = "0";
var callFunction = "save";
var callArgs = "[\"" + date + "\",\"" + treeName + "\",\"" +  address + "\",\"" + owner + "\",\"" +  walfare + "\"]";
nebpay.call(to, value, callFunction, callArgs, {
listener: function(resp){
console.log(JSON.stringify(resp));
}
});
});
$("#searchbutton").click(function(){
var id = $("#id").val();

if(id == ""){
alert("请输入你要查询的树苗编号。");
return;
}

var to = dappAddress;
var value = "0";
var callFunction = "get";
var callArgs = "[\"" + id+ "\"]";
nebpay.simulateCall(to, value, callFunction, callArgs, {
listener: function(resp){
//console.log(JSON.stringify(resp.result));
var myArr = JSON.parse(resp.result);
console.log(myArr);
// console.log(myArr.length);
var tempStr = "";
// if(myArr.length == 0){
	// alert("没有找到符合条件的记录。");
// }
// for(var i=0;i<myArr.length;i++){
tempStr += '<tr class="info">';
// tempStr += '<td >';
// tempStr += (1);
// tempStr += '</td>';
tempStr += '<td>';
tempStr += myArr.id;
tempStr += '</td>';
tempStr += '<td>';
tempStr += myArr.name;
tempStr += '</td>';
tempStr += '<td>';
tempStr += myArr.date;
tempStr += '</td>';
tempStr += '<td>';
tempStr += myArr.address;
tempStr += '</td>';
tempStr += '<td>';
tempStr += myArr.owner;
tempStr += '</td>';
tempStr += '<td>';
tempStr += myArr.walfare;
tempStr += '</td>';
tempStr += '</tr>';
// }
console.log("打印结果")
console.log(tempStr);
$("#searchresult").html(tempStr);
$("#recordscount").html(myArr.length + "条记录");
}
});
});

});
