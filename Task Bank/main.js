function kreditHesabla()
{
    var verilenkredit,kreditmuddeti;
    var ayliqfaiz,umumimebleg;

    umumimebleg=document.getElementById("kreditfaizi").value;

    var liste= document.getElementById("ay");
    kreditmuddeti=liste.options[liste.selectedIndex].value;

    if(kreditmuddeti==12)
    {
        umumimebleg=verilenkredit*1.1;
    }
    else if(kreditmuddeti==24)
    {
        umumimebleg=verilenkredit*1.2;
    }
    else if(kreditmuddeti==36)
    {
        umumimebleg=verilenkredit*1.3;
    }
    else if(kreditmuddeti==48)
    {
        umumimebleg=verilenkredit*1.4;
    }
    ayliqfaiz=umumimebleg/kreditmuddeti;

    document.getElementById("netice").innerHTML="Umumi Mebleg: "+umumimebleg+"<br>"+
    "Ayliq odenilecek: "+ayliqfaiz.toFixed(2);


}