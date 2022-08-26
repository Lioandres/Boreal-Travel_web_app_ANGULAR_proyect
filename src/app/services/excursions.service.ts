import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Excursion } from '../interfaces/apiShowList.interface';
import { Excursion_ } from '../interfaces/excursion_';
import { PetitionService } from './petition.service';


@Injectable({
  providedIn: 'root'
})
export class ExcursionsService {

  constructor(private route:Router,
              private petitionServ:PetitionService) { }

 excursionRepository: Excursion_[]=[


  {
    id:1,
    title:"Auroral Boreal Tour",
    price:59,
    img:"assets/img/boreal_1.webp",
    type:"boreal", 
    description:"",
    month:["Noviembre","Diciembre","Enero","Febrero","Marzo"],
    

  },

  { 
    id:2,
    title:"Auroral Boreal Tour en bote",
    price:89,
    img:"assets/img/boreal_2.webp",
    type:"boreal", 
    description:"",
    month:["Noviembre","Diciembre","Enero","Febrero","Marzo"],
       
  }
  ,

  {
    id:3,
    title:"Baño de luces boreales",
    price:90,
    img:"assets/img/boreal_3.webp",
    type:"boreal", 
    description:"Conducimos a través del hermoso sitio de la UNESCO Þingvellir Parque Nacional en nuestro camino a Laugarvatn Fontana, donde tiene la opción de comprar la cena en su restaurante por un costo adicional. Fontana tiene tres salas de vapor construidas sobre una fuente termal natural y una sauna tradicional junto con cuatro piscinas calientes diferentes. Los viajeros más aventureros pueden darse un chapuzón en el lago Laugarvatn (cuando sea accesible) y refrescarse entre los baños de vapor y la sauna. Las temperaturas de vapor oscilan entre 40 ° C y 50 ° C (104 ° F y 122 ° F), dependiendo de la temperatura de las aguas termales y el clima. Las salas de vapor crean una experiencia única, ya que se puede oler el agua caliente natural hirviendo debajo de las rejillas en el suelo. La sauna tradicional tiene una humedad más baja que las salas de vapor, pero la temperatura es más alta, entre 80 ° C y 90 ° C (176 ° F y 194 ° F). Los tres baños minerales al aire libre conectados varían en profundidad, tamaño y temperatura. Es el escenario perfecto para relajarse y socializar. Desde los baños, se puede ver una vista panorámica del campo alrededor de Fontana y las auroras boreales bailando en el cielo si tienes suerte y aparecen temprano.El gel de ducha, el champú y el acondicionador de Sóley Organics están disponibles en los vestuarios.Caza de auroras boreales en Islandia   En nuestro camino de regreso a Reikiavik, vamos en una cacería de auroras boreales, una de las vistas más inolvidables de Islandia. Nuestro equipo de expertos estudia las auroras boreales y los pronósticos de nubes para encontrar el mejor lugar para un avistamiento, pero dado que las auroras boreales son un fenómeno natural, no se pueden garantizar los avistamientos.Duración del tour: 18:00 - 00:30.",
    month:["Noviembre","Diciembre","Enero","Febrero","Marzo"]

  }
  ,

  {
    id:4,
    title:"Auroral Boreal Tour-grupos pequeños",
    price:79,
    img:"assets/img/boreal_4.webp",
    type:"boreal", 
    description:"",
    month:["Noviembre","Diciembre","Enero","Febrero","Marzo"]

  }
  ,

  {
    id:5,
    title:"Tour de exploración Auroral boreal en Super-Jeep",
    price:50.78,
    img:"assets/img/boreal_5.webp",
    type:"boreal", 
    description:"",
    month:["Noviembre","Diciembre","Enero","Febrero","Marzo"]

  }


  ,
  {
    id:6,
    title:"Laguna Azul : Translados y admision",
    price:129,
    img:"assets/img/lake_1.webp",
     type:"lake", 
    description:"",
    month:["Julio", "Agosto","Septiembre", "Octubre", "Noviembre","Diciembre"]

  }


  ,
  {
    id:7,
    title:"Lago Azul- Translados y Admision Premium",
    price:149,
    img:"assets/img/lake_2_webp.webp",
     type:"lake", 
    description:"",
    month:["Julio", "Agosto","Septiembre", "Octubre", "Noviembre","Diciembre"]

  }
  ,
  {
    id:8,
    title:"Circulo Dorado en Directo",
    price:64,
    img:"assets/img/circle_1webp.webp",
      type:"circle", 
    description:"",
    month:["Julio", "Agosto","Septiembre", "Octubre", "Noviembre","Diciembre"]

  }
  ,
  {
    id:9,
    title:"Circulo Dorado y Friorheimer",
    price:69,
    img:"assets/img/circle_2.webp",
    type:"circle", 
    description:"",
    month:["Julio", "Agosto","Septiembre", "Octubre", "Noviembre","Diciembre"]

  }
  ,
  {
    id:10,
    title:"Círculo Dorado y SnowBorad",
    price:209,
    img:"assets/img/circle_3.webp",
    type:"circle", 
    description:"",
    month:["Julio", "Agosto","Septiembre", "Octubre", "Noviembre","Diciembre"]

  }
  ,
  {
    id:11,
    title:"Círculo dorado y Aurora Boreal",
    price:113,
    img:"assets/img/circle_4.webp",
    type:"circle", 
    description:"",
    month:["Noviembre","Diciembre","Enero","Febrero","Marzo"]

  }
  ,
  {
    id:12,
    title:"Círculo Dorado y Fuente natural",
    price:99,
    img:"assets/img/circle_5.webp",
    type:"circle", 
    description:"",
    month:["Julio", "Agosto","Septiembre", "Octubre", "Noviembre","Diciembre"]

  }
  ,
  {
    id:13,
    title:"Círculo Dorado y tunel de lava",
    price:139,
    img:"assets/img/circle_6.webp",
    type:"circle", 
    description:"",
    month:["Julio", "Agosto","Septiembre", "Octubre", "Noviembre","Diciembre"]

  }
  ,
  {
    id:14,
    title:"Aventura en Þórsmörk",
    price:59,
    img:"assets/img/bus_1.webp",
    type:"bus", 
    description:"",
    month:["Julio", "Agosto","Septiembre", "Octubre", "Noviembre","Diciembre"]

  }
  ,
  {
    id:15,
    title:"Aventura Landmannalaugar",
    price:65,
    img:"assets/img/bus_2.webp",
    type:"bus", 
    description:"",
    month:["Julio", "Agosto","Septiembre", "Octubre", "Noviembre","Diciembre"],
  },

  {
    id:16,
    title:"Aventura Skógar",
    price:58,
    img:"assets/img/bus_3.webp",
    type:"bus", 
    description:"",
    month:["Julio", "Agosto","Septiembre", "Octubre", "Noviembre","Diciembre"]

  },

  {
    id:17,
    title:"Aventura Grænihryggur con guias de montaña",
    price:175,
    img:"assets/img/bus_4.webp",
    type:"bus", 
    description:"",
    month:["Julio", "Agosto","Septiembre", "Octubre", "Noviembre","Diciembre"]

  },

  {
    id:18,
    title:"Camino desde Reykjavik",
    price:106,
    img:"assets/img/bus_5.webp",
    type:"bus", 
    description:"",
    month:["Julio", "Agosto","Septiembre", "Octubre", "Noviembre","Diciembre"]

  },

  {
    id:19,
    title:"Combo tour Laugavegur & Fimmvörðuháls",
    price:1970,
    img:"assets/img/bus_6.webp",
    type:"bus", 
    description:"",
    month:["Julio", "Agosto","Septiembre", "Octubre", "Noviembre","Diciembre"]

  }
 ]

_month:{value:number, month:string, year:number}[]=[
  {
    value:1,
    month:"Julio",
    year:2022
  },

  {
    value:2,
    month:"Agosto",
    year: 2022
  },

  {
    value:3,
    month:"Septiembre",
    year: 2022
  },

  {
    value:4,
    month:"Septiembre",
    year: 2022
  },

  {
    value:5,
    month:"Septiembre",
    year: 2022
  },

  {
    value:6,
    month:"Septiembre",
    year: 2022
  }

]


 get excursionList():Excursion_[] {
  return [...this.excursionRepository]
  }

  
  get month() {
    return [...this._month]
  }


id:number=0
idTemp:number=0

setExcursionIds (id:number,idTemp:number) {
    this.id=id
    this.idTemp=idTemp
  } 


  
 


// resultExcursionFound:Excursion_[]=[]

// findExcursionAux(KeyWord:string) {
//     let keyWord=KeyWord.toLowerCase()
//     this.resultExcursionFound=this.excursionList.filter(excursion=>excursion.title.toLowerCase().includes(keyWord) ||excursion.description.toLowerCase().includes(keyWord) || excursion.month.includes(keyWord))
//     console.log (this.resultExcursionFound)
//     } 








resultExcursionFound:Excursion[]=[]

findExcursions (start:Date,end:Date) {
  
 
 

  this.resultExcursionFound=this.petitionServ.excursionListFromAPI.filter(excursion=>(new Date(excursion.start).getTime()>=start.getTime())&&(new Date(excursion.end).getTime()<=end.getTime())) 

  console.log(this.resultExcursionFound)

  this.route.navigate(['/result'])
  


}

}

