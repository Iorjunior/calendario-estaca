import Head from "next/head";
import Image from "next/image";
import EventCard from "../components/eventCard";

export default function Home(props) {
  return (
    <div className={"mx-auto bg-gray-700 py-2 min-h-screen"}>
      <div className={"flex flex-col gap-2 mx-auto items-center container"}>
        {props.eventos.map((evento)=>
          <EventCard key={evento.id} 
          dia={evento.dia} 
          mes={evento.mes}
          hora={evento.hora}
          evento={evento.evento}
          descricao={evento.descricao} 
          organizacao={evento.organizacao}
          />

        )}      
      </div>
    </div>
  );
}


export async function getServerSideProps() {
  const dadosApi = await fetch("http://localhost:3000/api/eventos")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((res) => {
      return res;
    });

  return {
    props: {
      eventos: dadosApi.eventos,
    },
  };
}
