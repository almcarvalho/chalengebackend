# chalengebackend
Chalenge Backend for Spacial Stations

Documentação:

Encontrando os planetas ideais pra se colocar as estações de recarga, fiz um filtro usando a documentação da NASA, direto na api deles:
Rode o index.js

Veja o exemplo:

![Alt Text](https://github.com/almcarvalho/chalengebackend/blob/main/docs/demos/demo.gif)


Querys and Mutations:


query {
  suitablePlanets  {
    id
    name
    mass
    hasStation
  }
}



mutation {
  criarPlaneta(name: "Saturno", mass: 15, hasStation: false) {
    id
    name
    mass
    hasStation
  }
}


<br/>
<br/>

<h3> <a href="https://bedecked-echidna-e33.notion.site/Documentation-API-f78c517f9df94aea83c1ad9ef69e0a0e" target="_blank"> More Docs </a> </h3>


