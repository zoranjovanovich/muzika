# CLAUDE.md — Serijal humanitarnih svirki (Šabac)

> Ovo je trajni kontekst projekta za Claude Code. Drži ga u korenu repozitorijuma.

## Šta gradimo
Veb sajt za **serijal humanitarnih svirki** u Šapcu. Muzičari sviraju da bi se
prikupila sredstva za zajednicu (inicijalno: outdoor muzički park / instrumenti).
Cilj sajta: **legitimitet, poverenje, i lako doniranje.**

## Brend (čitaj pre svake izmene dizajna)
- **Brend je SERIJAL, ne bend.** Konstanta su dva osnivača (bubnjar + gitarista);
  muzičari i žanrovi se smenjuju. Svaka svirka je "epizoda".
- **Žanr menja samo AKCENTNU boju**, ne ceo izgled. Mehanizam: atribut
  `data-genre` (vrednosti: `hardrock`, `pop`, `funk`, `blues`, `akustika`).
  Lansiranje je hard rock → default akcenat je užareni crveni.
- **Dve vrste sekcija** nose značenje:
  - `.stage` (tamno) = šou, energija, svirke.
  - `.ledger` (svetlo) = transparentnost, "gde idu pare", poverenje.
- Tipografija: display `Archivo Expanded`, body `Hanken Grotesk`, brojke `Space Mono`.
- Potpisni elementi: **termometar donacija** (`.thermo`) i **puls** (`.pulse`).
- Sve boje, razmaci i tipografija dolaze iz `styles.css` (CSS custom properties).
  **Ne uvoditi nove hardkodirane boje** — koristi tokene.

## Struktura sajta (jedna stranica, skrol; svaka sekcija → kasnije zasebna strana)
1. **Hero** (`.stage`) — ime serijala, jedna rečenica misije, vizual, dugmad
   "Doniraj" + "Sledeća svirka", i termometar napretka.
2. **O projektu** (`.ledger`) — ko smo, koncept gostiju i žanr-epizoda, zašto.
3. **Cilj / gde idu pare** (`.ledger`) — šta je park, transparentnost: koja
   organizacija prima sredstva, namenski račun, obećanje javnog izveštaja.
4. **Svirke / kalendar** (`.stage`) — sledeća istaknuta + naredne + arhiva.
5. **Kako da pomogneš** (`.stage`) — doniraj / dođi / podeli / sponzor / volontiraj.
6. **Sponzori i partneri** (`.ledger`) — logoi; ponuda "posvoji instrument".
7. **Galerija / video** (`.stage`) — kratki vertikalni klipovi su prioritet.
8. **Mediji** (`.ledger`) — linkovi ka prilozima + press kit za novinare.
9. **Futer** — mreže, kontakt, broj računa, link ka izveštajima.

## Tehnika
- **Statički sajt**: čist HTML + `styles.css` + minimalan vanilla JS.
  Bez teških framework-a — mora biti lako za hosting i kasnije ručno menjanje.
- **Mobile-first.** Najveći deo saobraćaja dolazi sa mreža, sa telefona.
- Lepljiva "Doniraj" traka (`.donate-bar`) na dnu na mobilnom.
- Pristupačnost je obavezna: vidljiv focus, `prefers-reduced-motion`, semantički HTML.
- Jezik: **srpski** (primarni). Engleska verzija nije prioritet na startu.
- Bez tracking-a koji nije neophodan; ako ide analitika, neka bude privatnosti naklonjena.

## Copy (tekst) — pravila
- Aktivni glas, rečenica počinje malim slovom gde nije naslov, bez floskula.
- "Doniraj" je "Doniraj" kroz ceo tok (dugme i potvrda govore isto).
- Emocija u sekciji "O projektu"; brojke i mehanika u "gde idu pare".
- Konkretno > pametno. Reci tačno gde ide novac.

## Sadržaj koji tek treba uneti (placeholderi, označi jasno)
- Ime serijala, logo, prava cifra cilja, broj namenskog računa, datumi svirki,
  fotke/video, lista sponzora, linkovi ka mrežama. Ostavi `TODO:` markere.

---

## Skilovi (kada koji koristiti)
Relevantni skilovi za ceo projekat, ne samo za sajt:

- **frontend-design** — primarni za sajt. Dizajn identitet, tipografija,
  layout koji ne deluje "templejtski". Koristi pri svakoj izmeni izgleda.
- **ad-creative** — za "jak marketing": varijante objava i oglasa za društvene
  mreže (Facebook/Instagram/TikTok), naslovi, opisi, A/B varijante.
- **xlsx** — tabela za praćenje donacija i budžeta (skupljeno vs cilj po fazama,
  troškovi instrumenata/uvoza/montaže). Izvor istine za termometar.
- **docx** — formalni dokumenti: predlog sponzorima, dopis školi/gradu,
  saopštenje za medije (press release).
- **pdf** — izvoz press kita, popunjavanje formulara za grantove/konkurse.
- **pptx** — pitch deck za sponzore ili prijavu na grant, ako zatreba.

> Napomena: lista je orijentir. Za sam sajt dovoljan je **frontend-design**.
