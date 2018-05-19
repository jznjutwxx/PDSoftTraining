// var i=0;
// function timedCount(){
//     i=i+1;
//     postMessage(i);
//     setTimeout("timedCount()",500);
// }
// timedCount();

onmessage=function(event){
    var n=parseInt(event.data);
    postMessage(n);
}