import { Injectable } from '@angular/core';
import { Excursion } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExcursionsService {

  constructor() { }

 excursionRepository: Excursion[]=[


  {
    id:1,
    title:"Auroral Boreal Tour",
    price:59,
    img:"assets/img/boreal_1.webp",
    type:"boreal"
  },

  { 
    id:2,
    title:"Auroral Boreal Tour en bote",
    price:89,
    img:"assets/img/boreal_2.webp",
    type:"boreal"
  }
  ,

  {
    id:3,
    title:"Baño de luces boreales",
    price:90,
    img:"assets/img/boreal_3.webp",
    type:"boreal"
  }
  ,

  {
    id:4,
    title:"Auroral Boreal Tour-grupos pequeños",
    price:79,
    img:"assets/img/boreal_4.webp",
    type:"boreal"
  }
  ,

  {
    id:5,
    title:"Tour de exploración Auroral boreal en Super-Jeep",
    price:50.78,
    img:"assets/img/boreal_5.webp",
    type:"boreal"
  }


  ,
  {
    id:6,
    title:"Laguna Azul : Translados y admision",
    price:129,
    img:"assets/img/lake_1.webp",
    type:"lake"
  }


  ,
  {
    id:7,
    title:"Lago Azul- Translados y Admision Premium",
    price:149,
    img:"assets/img/lake_2_webp.webp",
    type:"lake"
  }
  ,
  {
    id:8,
    title:"Circulo Dorado en Directo",
    price:64,
    img:"assets/img/circle_1webp.webp",
    type:"circle"
  }
  ,
  {
    id:9,
    title:"Circulo Dorado y Friorheimer",
    price:69,
    img:"assets/img/circle_2.webp",
    type:"circle"
  }
  ,
  {
    id:10,
    title:"Círculo Dorado y SnowBorad",
    price:209,
    img:"assets/img/circle_3.webp",
    type:"circle"
  }
  ,
  {
    id:11,
    title:"Círculo dorado y Aurora Boreal",
    price:113,
    img:"assets/img/circle_4.webp",
    type:"circle"
  }
  ,
  {
    id:12,
    title:"Círculo Dorado y Fuente natural",
    price:99,
    img:"assets/img/circle_5.webp",
    type:"circle"
  }
  ,
  {
    id:13,
    title:"Círculo Dorado y tunel de lava",
    price:139,
    img:"assets/img/circle_6.webp",
    type:"circle"
  }
  ,
  {
    id:14,
    title:"Aventura en Þórsmörk",
    price:59,
    img:"assets/img/bus_1.webp",
    type:"bus"
  }
  ,
  {
    id:15,
    title:"Aventura Landmannalaugar",
    price:65,
    img:"assets/img/bus_2.webp",
    type:"bus"
  },

  {
    id:16,
    title:"Aventura Skógar",
    price:58,
    img:"assets/img/bus_3.webp",
    type:"bus"
  },

  {
    id:17,
    title:"Aventura Grænihryggur con guias de montaña",
    price:175,
    img:"assets/img/bus_4.webp",
    type:"bus"
  },

  {
    id:18,
    title:"Camino desde Reykjavik",
    price:106,
    img:"assets/img/bus_5.webp",
    type:"bus"
  },

  {
    id:19,
    title:"Combo tour Laugavegur & Fimmvörðuháls",
    price:1970,
    img:"assets/img/bus_6.webp",
    type:"bus"
  }
 ]



 
 get excursionList():Excursion[] {
  return [...this.excursionRepository]
}


}
