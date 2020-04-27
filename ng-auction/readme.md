# Informacje ogólne 
Aplikacja ngAuction, która umożliwia przeglądanie produktów oraz licytowanie kwot za dany produkt przez wielu użytkowników

# Wymagania
- Nodejs v12.16.1
- Npm 6.13.4
- Angular CLI - newest

# Instrukcja uruchomienia
## Serwer
1. W pierwszej kolejności przechodzimy do folderu server, w którym musimy zainstalować zależności. Uruchamiamy konsolę, w której wpisujemy poniższe polecenie: `npm install`
2. Po zainstalowaniu zależności musimy wykonać transpilację plików TypeScript do kodu JavaScript za pomocą polecenia: `npm run build`. Można podejrzeć w pliku `package.json` co robi to polecenie. 
3. Po poprawnej transpilacji możemy uruchomić server za pomocą polecenia `npm run start`. Powinniśmy zobaczyć w konsoli komunikat taki jak poniżej:
```
> ng-auction-server@1.0.0 start`C:\Others\Projects\ngAuction\ng-auction\server
> node build/main.js

Listening on localhost:9000
```
4. Teraz mamy uruchomiony serwer, dlatego możemy przejść do uruchomienia klienta

## Klient
1. W pierwszej kolejności przechodzimy do folderu client, w którym musimy zainstalować zależności. Uruchamiamy konsolę, w której wpisujemy poniższe polecenie: `npm install`
2. Transpilujemy i uruchamiamy serwer hostujący aplikację opartą o angular poleceniem: `ng serve`