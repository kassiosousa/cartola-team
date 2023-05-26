import React, { useEffect, useState } from "react";
import { List } from "../components/list";
import { loadMarketStatus, loadTeamData } from "../services/";

interface ITeamProps {
  time: {
    temporada_inicial: number;
    cor_fundo_escudo: string;
    cor_camisa: string;
    cor_borda_escudo: string;
    foto_perfil: string;
    nome_cartola: string;
    globo_id: "";
    nome: string;
    url_escudo_svg: string;
    url_escudo_png: string;
    url_camisa_svg: string;
    url_camisa_png: string;
    slug: string;
  };
}

export const TeamPage = () => {
  const [team, setTeam] = useState<ITeamProps>();
  const [players, setPlayer] = useState([]);

  useEffect(() => {
    async function loadData() {
      const teamData = await loadTeamData();
      setTeam(teamData);
      teamData.atletas.forEach((element: any) => {
        setPlayer((state) => [...state, element]);
      });
    }
    loadData();
  }, []);

  console.log(players);
  return (
    <>
      <div className="App">
        {team?.time.slug}
        <img src={team?.time.url_escudo_png} />
      </div>
      <List data={players} />
    </>
  );
};
