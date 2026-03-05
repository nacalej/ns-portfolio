import MovieMark from "../assets/movieMark.jpg";
import Pokes from "../assets/pokesO.jpg";
import StarWars from "../assets/microservicios.jpg";
import SanmyControl from "../assets/sanmyControl.png";
import OptiZet from "../assets/OptiZet.png";

const portfolio = [
  {
    id: 1,
    image: OptiZet,
    title: "OptiZet",
    text: "OptiZet es una plataforma web para gestionar soporte técnico de desarrollos Z en ABAP. Incluye autenticación segura, roles administrativos, gestión de perfiles, control de acceso por compras y generación de documentación técnica. Repositorio privado – disponible bajo solicitud.",
    status: "wip",
    tools: ["Node.js", "Express", "MySQL", "JWT", "React", "Redux"],
    demo: "",
    github: "",
  },
  {
    id: 2,
    image: SanmyControl,
    title: "Control de alquileres",
    text: "Proyecto desarrollado para una pequeña empresa, que desea tener un control de ingresos. Puede consultar el monto total de ingresos por mes y por día, registrar clientes, editarlos, eliminarlos, buscar por nombre y dirección MAC. Además, puede registrar un alquiler, editar el registro, o eliminarlo.",
    github: "https://github.com/nacalej/sanmyControl",
    tools: ["React", "Node.js", "Express", "PostgreSQL", "CSS"],
    demo: "",
  },
  {
    id: 3,
    image: StarWars,
    title: "Star Wars microservicios",
    text: "Proyecto individual desarrollado para implementar una plataforma de microservicios básica. Cada microservicio permite crear, obtener, actualizar y eliminar información sobre personajes, planetas y películas de la saga Star Wars.",
    github: "https://github.com/nacalej/star_wars_upskilling",
    tools: ["ExpressJS", "MongoDB", "Mongoose", "Docker", "Docker Compose"],
    demo: "",
  },
  {
    id: 4,
    image: MovieMark,
    title: "Movie Mark, e-commerce",
    text: "Colaboración en un equipo de trabajo usando metodología ágil Scrum, para desarrollar una aplicación que permita agilizar la compra de tickets y golosinas a través de MercadoPago.",
    github: "https://github.com/CandelaPedelhez/Moviemark",
    tools: [
      "ReactJS",
      "Redux",
      "SASS",
      "Node.js",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "Git",
      "GitHub",
      "Trello",
      "Slack",
      "Scrum"
    ],
    demo: "https://www.youtube.com/watch?v=j1T8vVoPyCU&ab_channel=NacarithSequera",
  },
  {
    id: 5,
    image: Pokes,
    title: "Pokémon App",
    text: "La aplicación consume información de la API (https://pokeapi.co/), además cuenta con una base de datos que permite al usuario almacenar los Pokémones que desee crear. Permite buscar por nombre, filtrar por características y ordenar los resultados alfabéticamente.",
    github: "https://github.com/nacalej/PI-Pokemon",
    tools: [
      "JavaScript",
      "ReactJS",
      "Redux",
      "CSS",
      "Node.js",
      "Express",
      "Sequelize",
      "PostgreSQL"
    ],
    demo: "",
  },
];

export default portfolio;