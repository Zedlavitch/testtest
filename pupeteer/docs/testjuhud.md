Testjuhtum 1: Kasutaja sisselogimise funktsionaalsuse kontrollimine kehtivate andmete abil

Kirjeldus: See test kontrollib, kas kasutaja saab edukalt sisse logida kehtivate andmetega SauceDemo veebilehel ja teha sisselogimisest ekraanipildi.

Sammud:

1.    Avab https://www.saucedemo.com/.
2.    Ootab, kuni sisselogimise lahtrid #user-name ja #password kuvatakse.
3.    Sisestab kasutajanime standard_user ja parooli secret_sauce.
4.    Klõpsab Login nuppu.
5.    Ootab, kuni tooteid kuvav leht (.inventory_list) laeb.
6.    Võtab ekraanipildi lehe sisu kohta.

Oodatavad Tulemused:

Kasutaja suunatakse edukalt inventory lehele.
Võetud ekraanipildil kuvatakse leht pärast edukat sisselogimist.




Testjuhtum 2: Esimese toote detaillehe avamine ja ekraanipildi tegemine

Kirjeldus: See test kontrollib, kas kasutaja saab sisselogimise järel esimese toote detaillehe avada ja ekraanipildi teha.

Sammud:

1.    Avab https://www.saucedemo.com/ ja logib sisse.
2.    Ootab, kuni .inventory_list koormatakse edukalt.
3.    Klõpsab esimese toote lingil, et avaneda selle detailleht.
4.    Ootab, kuni detailleht on laetud.
5.    Võtab ekraanipildi detaillehe sisust.

Oodatavad Tulemused:

Kasutaja saab edukalt esimese toote detaillehe avada.
Võetud ekraanipildil kuvatakse esimese toote detailleht.




Testjuhtum 3: Toote lisamine ostukorvi ja ekraanipildi tegemine

Kirjeldus: See test kontrollib, kas kasutaja saab pärast sisselogimist toote ostukorvi lisada ja seejärel ostukorvi ekraanipildi teha.

Sammud:

1.    Avab https://www.saucedemo.com/ ja logib sisse.
2.    Ootab, kuni .inventory_list koormatakse edukalt.
3.    Klõpsab esimese toote "Add to Cart" nuppu.
4.    Klõpsab "Shopping Cart" lingil, et suunduda ostukorvi lehele.
5.    Ootab, kuni .cart_list koormatakse edukalt.
6.    Võtab ekraanipildi ostukorvi lehe sisu kohta.

Oodatavad Tulemused:

Kasutaja saab edukalt esimese toote ostukorvi lisada.
Ostukorvi lehel kuvatakse lisatud toode.
Võetud ekraanipildil kuvatakse ostukorvi sisu.