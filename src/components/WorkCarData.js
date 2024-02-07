//import GnsoControl from '../../assets/gnsoControl.png';
import MovieMark from "../assets/movieMark.jpg";
import Pokes from "../assets/pokesO.jpg";
import StarWars from "../assets/microservicios.jpg";
import SanmyControl from "../assets/sanmyControl.png";
const portfolio = [
  {
    id: 1,
    image: SanmyControl,
    title: "Control de alquileres.",
    text: "Proyecto desarrollado para una pequeña empresa, que desea tener un control de ingresos. Puede consultar el monto total de ingresos por mes y por día, registrar clientes, editarlos, eliminarlos, buscar por nombre y dirección MAC. Además, puede registrar un alquiler, editar el registro, o eliminarlo.",
    github: "https://github.com/nacalej/sanmyControl",
    demo: "",
  },
  {
    id: 2,
    image: StarWars,
    title: "Star Wars microservicios.",
    text: "Proyecto individual desarrollado para implementar una plataforma de microservicios básica. Cada microservicio permite crear, obtener, actualizar y eliminar información sobre personajes, planetas y películas de la saga Star wars.",
    github: "https://github.com/nacalej/star_wars_upskilling",
    demo: "",
  },
  {
    id: 3,
    image: MovieMark,
    title: "Movie Mark, e-commerce.",
    text: "Colaboración en un equipo de trabajo, haciendo uso de la metodología ágil Scrum, para desarrollar una  aplicación que permita agilizar la compra de tickets y golosinas a través de MercadoPago, previo a asistir al cine.",
    github: "https://github.com/CandelaPedelhez/Moviemark",
    tools: ["ReactJS", "SASS", "NodeJS", "PostgreSQL", "Scrum"],
    demo: "https://www.youtube.com/watch?v=j1T8vVoPyCU&ab_channel=NacarithSequera",
  },
  {
    id: 4,
    image: Pokes,
    title: "Pokémon App.",
    text: "La aplicación consume información de la API: (https://pokeapi.co/), además, cuenta con una base de datos que permite al usuario almacenar los Pokémones que desee crear. A su vez, permite buscar por nombre del Pokémon, filtrar por características y ordenar los resultados alfabéticamente. ",
    github: "https://github.com/nacalej/PI-Pokemon",
    tools: ["ReactJS", "CSS", "NodeJS", "PostgreSQL"],
    demo: "",
  },
];

export default portfolio;
