# chalengebackend
Chalenge Backend for Spacial Stations


Considerações iniciais: Desde já, agradeço a oportunidade de estar participando desse desafio e poxa, tanta coisa nova que aprendi,
GraphQL, Appolo, TypeORM, consultar uma api da NASA, fantástico.


Aplicação rodando:

![Alt Text](https://github.com/almcarvalho/chalengebackend/blob/main/docs/demos/demo.gif)

```typescript


#atalhos

#Querys:


query {
  suitablePlanets  {
    name
    mass
    hasstation
  }
}

query {
  stations  {
   name
    planet{
      name
    }
  }
}


#Mutations:

mutation CreatePlanetMutation {
  createPlanet (name: "planeta u", mass: 86, hasStation: false){
    id
  }
}


mutation NewStation {
  installStation (planet_name: "planeta u"){
    id
  }
}

```


<br/>
<br/>

Desenvolvido por Lucas Carvalho. 
Agosto - 2021.

<h3> <a href="https://bedecked-echidna-e33.notion.site/Documentation-API-f78c517f9df94aea83c1ad9ef69e0a0e" target="_blank"> Documentação no Notion</a> </h3>


