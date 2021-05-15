var n = 0;
var counter = 1;
var eng = 0;
var ger = 0;
var fran = 0;
var noone = 0;
var str = 0;
var lang = 0;
function CountOfPeople()
{
    n = (document.getElementById("countn").value);
}
function CountResult()
{
    console.log(`counter = ${counter}`);
    console.log(`n = ${n}`);
    lang = document.getElementById("lang").value;
    var res = document.getElementById('result');
    console.log(`lang = ${lang}`);
    while(n)
    {
        if(lang == 0)
        {
            noone++;
        }
        if(lang == 1)
        {
            eng++;
        }
        if(lang == 2)
        {
            ger++;
        }
        if(lang == 3)
        {
            fran++;
        }
        counter++;
        break;
    }
    if(counter > n)
    {
        str = "Английский язык изучали: " + String(eng) + " человек<br>" +
            "Немецкий язык изучали: " + String(ger) + " человек<br>" + 
            "Французский язык изучали: " + String(fran) + " человек<br>"+ 
            "Никакой язык не изучали: " + String(noone) + " человек";
        res.innerHTML = str;
    }
    console.log(`noone = ${noone}`);
    console.log(`eng = ${eng}`);
    console.log(`ger = ${ger}`);
    console.log(`fran = ${fran}`);
}