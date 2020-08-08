import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <div>
      <article className="teacher-item">
        <header>
          <img
            src="https://scontent.fsod9-1.fna.fbcdn.net/v/t1.0-9/104936079_679917595904173_2492582236253885495_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_ohc=6hDF-3-kVe8AX_cCeSv&_nc_ht=scontent.fsod9-1.fna&oh=e241f3c1c31aff1d1ec93b582fdf08af&oe=5F532211"
            alt="Carla Robles"
          />
          <div>
            <strong>Carla Robles</strong>
            <span>Biologia</span>
          </div>
        </header>

        <p>
          Desenvolve pesquisas nas mais diversas áreas da biologia e está sempre
          disposta a plantar mais uma árvore.
          <br />
          <br />
          Amante dos seres vivos.
        </p>

        <footer>
          <p>
            Preço/hora
            <strong>R$ 4,90</strong>
          </p>
          <a href="https://wa.me/5515996976651" target="_blank">
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </a>
        </footer>
      </article>

      <article className="teacher-item">
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/58633356?s=460&u=cff380187b6ae342bddd67343967f63ec7a45fe0&v=4"
            alt="Rodrigo Gonçalves"
          />
          <div>
            <strong>Rodrigo Gonçalves</strong>
            <span>Estrutura de Dados II</span>
          </div>
        </header>

        <p>
          Entusiasta das melhores tecnologias de estrutura de dados avançadas.
          <br />
          <br />
          Apaixonado por programação.
        </p>

        <footer>
          <p>
            Preço/hora
            <strong>R$ 75,00</strong>
          </p>

          <a href="https://wa.me/5515997332834" target="_blank">
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </a>
        </footer>
      </article>
    </div>
  );
}

export default TeacherItem;
