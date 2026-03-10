import React from "react";
import "./jugadores.css";

/* SWIPER */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* IMAGENES */
import yamal        from "./assets/jugadores/LamineYamal.png";
import raphinha     from "./assets/jugadores/Raphinha.png";
import fermin       from "./assets/jugadores/FerminLopez.png";
import Joan         from "./assets/jugadores/JoanGarcia.png";
import Lewandowski  from "./assets/jugadores/Lewandowski.png";
import Pedri        from "./assets/jugadores/Pedri.png";
import Gavi         from "./assets/jugadores/Gavi.png";
import Araujo       from "./assets/jugadores/Araujo.png";
import Balde        from "./assets/jugadores/Balde.png";
import Szczesny     from "./assets/jugadores/Szczesny.png";

function Jugadores() {

  const jugadores = [
    { id:1,  nombre:"LAMINE YAMAL",       posicion:"Atacante",       imagen:yamal,       partidos:141, goles:42,  asistencias:42 },
    { id:2,  nombre:"RAPHINHA",           posicion:"Atacante",       imagen:raphinha,    partidos:120, goles:30,  asistencias:28 },
    { id:3,  nombre:"FERMÍN LÓPEZ",       posicion:"Centrocampista", imagen:fermin,      partidos:90,  goles:15,  asistencias:10 },
    { id:4,  nombre:"JOAN GARCÍA",        posicion:"Portero",        imagen:Joan,        partidos:31,  porteria:13, paradas:85 },
    { id:5,  nombre:"ROBERT LEWANDOWSKI", posicion:"Atacante",       imagen:Lewandowski, partidos:179, goles:115, asistencias:21 },
    { id:6,  nombre:"PEDRI",              posicion:"Centrocampista", imagen:Pedri,       partidos:150, goles:18,  asistencias:25 },
    { id:7,  nombre:"GAVI",               posicion:"Centrocampista", imagen:Gavi,        partidos:130, goles:12,  asistencias:15 },
    { id:8,  nombre:"RONALD ARAÚJO",      posicion:"Defensa",        imagen:Araujo,      partidos:140, goles:8,   asistencias:6  },
    { id:9,  nombre:"ALEJANDRO BALDE",    posicion:"Defensa",        imagen:Balde,       partidos:110, goles:3,   asistencias:12 },
    { id:10, nombre:"SZCZESNY",           posicion:"Portero",        imagen:Szczesny,    partidos:39,  porteria:13, paradas:88  },
  ];

  return (
    <section className="jugadores">
      <div className="contenedor-seccion">

        <h2 className="titulo">JUGADORES</h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          slidesPerView={4}
          breakpoints={{
            0:    { slidesPerView: 1 },
            600:  { slidesPerView: 2 },
            900:  { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {jugadores.map((jugador) => (
            <SwiperSlide key={jugador.id}>

              <div className="card-jugador">

                <img src={jugador.imagen} alt={jugador.nombre} />

                <div className="overlay">
                  <div className="overlay-content">

                    <h3>{jugador.nombre}</h3>
                    <p>{jugador.posicion}</p>

                    {/* Línea dorada decorativa */}
                    <div className="overlay-divider" />

                    <div className="stats">

                      <div>
                        <span>PARTIDOS</span>
                        <h4>{jugador.partidos}</h4>
                      </div>

                      {jugador.goles && (
                        <div>
                          <span>GOLES</span>
                          <h4>{jugador.goles}</h4>
                        </div>
                      )}

                      {jugador.porteria && (
                        <div>
                          <span>PORTERÍA</span>
                          <h4>{jugador.porteria}</h4>
                        </div>
                      )}

                      {jugador.paradas && (
                        <div>
                          <span>PARADAS</span>
                          <h4>{jugador.paradas}</h4>
                        </div>
                      )}

                      {jugador.asistencias && (
                        <div>
                          <span>ASISTENCIAS</span>
                          <h4>{jugador.asistencias}</h4>
                        </div>
                      )}

                    </div>
                  </div>
                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Jugadores;