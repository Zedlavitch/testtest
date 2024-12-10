Testjuhtum 1: Kasutaja sisselogimise funktsionaalsuse kontrollimine kehtivate andmete abil

Kirjeldus: See test kontrollib, kas kasutaja saab edukalt sisse logida kehtivate andmetega SauceDemo veebilehel.

Sammud:

1.   Avab https://www.saucedemo.com.
2.   Sisestab standard_user kasutajanime lahtrisse.
3.   Sisestab secret_sauce parooli lahtrisse.
4.   Klõpsab Login nuppu.


Oodatavad Tulemused:

Kasutaja suunatakse inventory.html lehele.
Lehe pealkiri kuvab 'Products'.

---

Testjuhtum 2: Vormi esitamistesti - Toote lisamine ostukorvi

Kirjeldus: See test kontrollib, kas kasutaja saab toote ostukorvi lisada.

Sammud:

1.  Avab SauceDemo veebileht ja logib sisse.
2.  Lisab toode (nt Sauce Labs Backpack) ostukorvi.
3.  Liikub ostukorvi lehele.


Oodatavad Tulemused:

Toode kuvatakse ostukorvis.
Ostukorvi arvestus on uuendatud vastavalt lisatud tootele.

Testjuhtum 3: Lehe vahel navigeerimise testimine

Kirjeldus: See test kontrollib, kas kasutaja saab edukalt navigeerida erinevate lehtede vahel pärast sisselogimist. Testime, kas kasutaja saab liikuda toodete lehelt ostukorvi lehele ja tagasi.

Sammud:

1. Avab https://www.saucedemo.com/ ja logib sisse
2. Ootab, kuni on sisseloginud ja suunatud tooteid kuvavale lehele.
3. Klõpsab "Shopping Cart" ikoonil, et minna ostukorvi lehele.
4. Kontrollib, kas suundumine ostukorvi lehele õnnestub ja kuvatakse ostukorvi sisu.
5. Klõpsab tagasi tooted (või "Inventory") lehe lingil.
6. Kontrollib, kas on tagasi toodete lehel.

Oodatavad Tulemused:

Samm 3: Kasutaja suunatakse edukalt ostukorvi lehele.
Samm 5: Kasutaja suunatakse edukalt tagasi toodete lehele.
Lehe pealkirjad ja sisu vastavad iga lehe jaoks.