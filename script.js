
function likes(id){
    var num1= parseInt(document.getElementById(id).innerHTML);
    num1++;
    document.getElementById(id).innerHTML=num1+" like(s)<button onclick=likes('"+id+"')>like</button>"
}