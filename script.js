var question = new Array();
var querty = new Array();
question[0] = {query: "W css zmieniamy kolor tła po przez", a:"background-color", b:"color", c:"text-color", d:"background-image", correct:"a", reped:null};
question[1] = {query: "W języku HTML aby zdefiniować poziomą linię, należy użyć znacznika", a:"<br>", b:"<p>", c:"<a>", d:"<div>", correct:"a", reped:null};
question[2] = {query: "W języku CSS wcięcie pierwszej linii akapitu na 30 pikseli uzyska się za pomocą zapisu", a:"p{text-spacing: 30px;}", b:"p{line-height: 30px;}", c:"p{text-indent: 30px;}", d:" p{line-indent: 30px;}", correct:"c", reped:null};
question[3] = {query: "W języku HTML znacznik <strong> tekst</strong> będzie wyświetlany w ten sam sposób przez przeglądarkę co znacznik", a:" <b>tekst</b>", b:"<h1>tekst</h1>", c:"<big>tekst</big>", d:"<sub>tekst</sub>", correct:"a", reped:null};
question[4] = {query: "Aby strona WWW była responsywna, należy między innymi definiować", a:" jedynie znane czcionki, np. Arial.", b:" rozmiary obrazów w procentach.", c:"rozmiary obrazów wyłącznie w pikselach.", d:"rozkład strony wyłącznie za pomocą tabel.", correct:"b", reped:null};
question[5] = {query: "W języku CSS wartości: underline, overline, blink przyjmują atrybut.", a:"text-style", b:"font-style", c:" font-weight", d:"text-decoration", correct:"d", reped:null};
question[6] = {query: "Aby przygotować szablon strony z trzema kolumnami ustawionymi obok siebie, można posłużyć się stylem CSS", a:".kolumny{ float: left; width: 33%; }", b:"kolumny{ float: right; height: 33%; }", c:"kolumny{ float: right; height: 33%; }", d:".kolumny{ float: left; width: 40%;}", correct:"a" , reped:null};
question[7] = {query: "Do grupowania obszarów na poziomie bloków, które będą formatowane za pośrednictwem znaczników, należy użyć", a:"<p>", b:"<div>", c:"<span>", d:"<param>", correct:"b" , reped:null};
question[8] = {query: "Znacznik <i> języka HTML służy do", a:"umieszczenia obrazka.", b:"zdefiniowania formularza.", c:"zmiany kroju pisma na pochylony.", d:"zdefiniowania nagłówka w tekście.", correct:"c" , reped:null};
question[9] = {query: "Kod języka CSS można umieścić wewnątrz kodu HTML, posługując się znacznikiem", a:"<head>", b:"<style>", c:"<meta>", d:"<body>", correct:"b" , reped:null};
question[10] = {query: "Aby uzyskać efekt rozstrzelenia liter w selektorze CSS, należy użyć właściwości",a:"letter-transform", b:"text-decoration", c:"letter-spacing", d:"text-space", correct:"c", reped:null};
question[11] = {query: "Zdarzenie JavaScript, będące reakcją na pojedynczo kliknięty dowolny element strony, nosi nazwę", a:"onClick", b:"onDblClick", c:"onLoad", d:"onKeyDown", correct:"a", reped:null};
question[12] = {query: "W języku skryptowym JavaScript zmienne mogą być deklarowane", a:"tylko na początku skryptu", b:"w momencie pierwszego użycia zmiennej", c:"tylko jeśli podamy typ zmiennej i jej nazwę", d:"tylko jeśli podamy typ zmiennej i jej nazwę", correct:"b", reped:null};
question[13] = {query: "W języku JavaScript poprawnie zadeklarowana zmienna to", a:" #imie", b:"var imie", c:"imię2", d:"imię%", correct:"b", reped:null};
question[14] = {query: "Komentarz w języku JavaScript rozpoczyna się od znaku lub znaków", a:"<!--", b:"<?", c:"//", d:"#", correct:"c", reped:null};
question[15] = {query: "W języku JavaScript metoda document.getElementById(id) ma za zadanie", a:"wstawić tekst o treści ’id’ na stronie WWW", b:"sprawdzić poprawność formularza o identyfikatorze id", c:"pobrać dane z pola formularza i wstawić je do zmiennej id", d:"zwrócić odniesienie do pierwszego elementu HTML o podanym id", correct:"d", reped:null};
question[16] = {query: "W języku JavaScript, aby sprawdzić warunek czy liczba znajduje się w przedziale (100;200>, należy zapisać:", a:"if (liczba > 100 || liczba <= 200)", b:"if (liczba < 100 || liczba >= 200)", c:" if (liczba > 100 && liczba <= 200)", d:" if (liczba > 100 && liczba <= 200)", correct:"c", reped:null};
question[17] = {query: "Zapis znacznika HTML w postaci <a href=\"#hobby\">przejdź</a>", a:"<p><big>Duży tekst</p>zwykły tekst", b:"<p><strike>Duży tekst zwykły tekst</p>", c:"<p><big>Duży tekst</big>zwykły tekst</p>", d:"<p><strike>Duży tekst</strike>zwykły tekst</p>", correct:"c", reped:null};
question[18] = {query: "Zapis znacznika HTML w postaci <a href=\"#hobby\">przejdź</a>", a:"jest niepoprawny, w atrybucie href należy podać adres URL.", b:"jest niepoprawny, zastosowano błędnie znak \"#\" w atrybucie href", c:" jest poprawny, po wybraniu odnośnika otworzy się strona internetowa o adresie \"hobby\".", d:" jest poprawny, po wybraniu odnośnika aktualna strona zostanie przewinięta do elementu o nazwie \"hobby\".", correct:"d", reped:null};
question[19] = {query: "W języku CSS, aby zdefiniować niestandardowe odstępy między wyrazami, stosuje się właściwość", a:"tłem całej strony.", b:"tłem każdego paragrafu.", c:"wyświetlony obok każdego paragrafu.", d:"wyświetlony, jeśli w kodzie zostanie zastosowany znacznik img.", correct:"b", reped:null};
question[20] = {query: "Który z odsyłaczy posiada poprawną konstrukcję?", a:"<a href='mailto:adres'>tekst</a>", b:"<a href='http://:adres'>tekst</a>", c:"<a href=“http://adres“>tekst</a>", d:"<a href=\"mailto:adres\">tekst</a>", correct:"d", reped:null};
question[21] = {query: "W znaczniku <meta> jest zapisywane", a:"autora.", b:"kodowania.", c:"typu dokumentu.", d:"automatycznego odświeżania.", correct:"c", reped:null};
question[22] = {query: "Proces walidacji strony internetowej to", a:"zespół działań mających na celu zwiększenie oglądalności.", b:"sprawdzenie jej w celu wyeliminowania błędów.", c:"publikowanie w sieci.", d:"promocja strony.", correct:"b", reped:null};
question[23] = {query: "Aby ustawić czcionkę Verdana w kodzie CSS, należy wykorzystać właściwość", a:"font-style: Verdana;", b:"font-family: Verdana;", c:"font-weight: Verdana;", d:"font-name: Verdana;", correct:"b", reped:null};
question[24] = {query: "Który zapis stylu CSS ustawi tło bloku na kolor niebieski?", a:"div {background-color:blue;}", b:"div {border-color:blue;}", c:"div {shadow:blue;}", d:"div {color:blue;}", correct:"a", reped:null};
question[25] = {query: "div {color:blue;}", a:"pading", b:"margin", c:"height", d:"width", correct:"c", reped:null};
question[26] = {query: "Projektowanie logicznego układu witryny polega na", a:"zdefiniowaniu treści witryny.", b:"opracowaniu zestawu grafik dla witryny.", c:"ustaleniu adresów URL dla podstron witryny.", d:"rozmieszczeniu elementów w konkretnych miejscach witryny.", correct:"d", reped:null};
question[27] = {query: "W języku HTML aby zdefiniować słowa kluczowe strony, należy użyć zapisu", a:"<meta keywords=\"psy, koty, gryzonie\">", b:"<meta name=\"keywords\" = \"psy, koty, gryzonie\">", c:" <meta name=\"keywords\" content=\"psy, koty, gryzonie\">", d:"<meta name=\"description\" content=\"psy, koty, gryzonie\">", correct:"c", reped:null};
question[28] = {query: "W języku CSS wcięcie pierwszej linii akapitu na 30 pikseli uzyska się za pomocą zapisu", a:"p{text-indent: 30px;}", b:"p{text-spacing: 30px;}", c:"p{line-height: 30px;}", d:"p{line-indent: 30px;}", correct:"a", reped:null};
question[29] = {query: "W języku CSS aby sformatować dowolny element języka HTML w ten sposób, że po najechaniu na niego kursorem zmienia on kolor czcionki, należy zastosować pseudoklasę", a:":active", b:"hover", c:":visited", d:" :coursor", correct:"b", reped:null};
var correct;
var point = 0;
var questions = 0;
var how;

window.getParameterByName = function(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null) return "";
    else return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getRandomInt() {
    min = Math.ceil(0);
    max = Math.floor(question.length-1);
    return Math.floor(Math.random() * (max - min)) + min;
}

function builtRESULT() {
    var odp = document.getElementById("odp");
    for (var i= 0 ; i < how ; i++) {
        odp.innerHTML += "<h3 id='question" + i + "'>" +question[querty[i]].query + "</h3><br><h4 id='a" + i + "'>" +question[querty[i]].a+ "</h4><br><h4 id='b" + i + "'></h4><br><h4 id='c" + i + "'></h4><br><h4 id='d" + i + "'></h4><br>";
        document.getElementById("question"+i).innerText = question[querty[i]].query;
        document.getElementById("a"+i).innerText = question[querty[i]].a;
        document.getElementById("b"+i).innerText = question[querty[i]].b;
        document.getElementById("c"+i).innerText = question[querty[i]].c;
        document.getElementById("d"+i).innerText = question[querty[i]].d;
        if(question[querty[i]].correct == question[querty[i]].reped)
        {
            document.getElementById(question[querty[i]].correct+i).style.backgroundColor="blue";
        }
        else
        {
            document.getElementById(question[querty[i]].correct+i).style.backgroundColor="green";
            document.getElementById(question[querty[i]].reped+i).style.backgroundColor="red";
        }
        console.log(i+1+" OK")
    }

}

function result() {
    var pomoc = document.getElementById("quiz");
    pomoc.innerHTML = "<h1>Zdobyłeś:" + point + "pkt </h1><br><div id='odp'></div>";
    pomoc.style.height = "auto";
    builtRESULT();
}

function writeQuestion() {
    if(questions < how) {
        querty[questions] = getRandomInt();
        document.getElementById("query").innerText = question[querty[questions]].query;
        document.getElementById("a").innerText = question[querty[questions]].a;
        document.getElementById("b").innerText = question[querty[questions]].b;
        document.getElementById("c").innerText = question[querty[questions]].c;
        document.getElementById("d").innerText = question[querty[questions]].d;
        correct = question[querty[questions]].correct;
    }
    else
        result();

}

function check(odp) {
    var reply = odp;
    console.log("Question "+ questions + " Reply :" +reply);
    question[querty[ parseInt(questions)]].reped = reply;
    if (reply == correct)
    {
        ++point;
        console.log("+Point");
    }
    ++questions;
    writeQuestion();
}

function start() {
    console.log("Strona prototypowa posiada bład którego nie umiem wytropić");
    console.log("The prototype page has a bug that I can't track down");
    how = getParameterByName("how");
    writeQuestion();
}