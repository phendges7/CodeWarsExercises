function validateHello(greetings) {
  const possibleLanguages = [
    "hello",
    "ciao",
    "salut",
    "hallo",
    "hola",
    "ahoj",
    "czesc",
  ];
  let didWeMeet = false;
  for (const language of possibleLanguages) {
    if (greetings.toLowerCase().match(language)) {
      didWeMeet = true;
    }
  }
  console.log(didWeMeet);
}

validateHello(
  "vIstA VISTA; wie: tSCHuSs viSTa la TrEs hOlA? you; you! tSChusS: hAsTa doING? wIE! DOInG! TRes vISTa pAsA! ViStA; hoMbRe; TSCHusS LA wIe hASTA? DOing doing: HOmbrE; La BIen! lA,"
);
