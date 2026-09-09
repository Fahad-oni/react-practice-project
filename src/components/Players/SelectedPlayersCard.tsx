import { BiTrash } from 'react-icons/bi';
import type { IPlayer } from '../../Types/type';
import type { Dispatch, SetStateAction } from 'react';

export interface SelectedPlayersCardProps {
  player:IPlayer
  selectedPlayers: IPlayer[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

export default function SelectedPlayersCard({
  player,
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: SelectedPlayersCardProps) {
  const handleDeletePlayer = (player: IPlayer) => {
    let restPlayers = selectedPlayers.filter(
      selectedPlayer => selectedPlayer.playername !== player.playername,
    );

    setSelectedPlayers(restPlayers);

    let newCoin = coin + player.price;
    setCoin(newCoin);
  };
  return (
    
      <div className="flex justify-between items-center border border-gray-200 rounded px-4 py-6">
        <div className="flex gap-2 items-center">
          <img src={player.playerimage} alt="" className="h-12 w-12" />
          <div className="space-y-0.5">
            <h2 className="text-xl font-bold">{player.playername}</h2>
            <p>{player.playertype}</p>
          </div>
        </div>
        <span>
          <BiTrash
            onClick={() => handleDeletePlayer(player)}
            className="text-red-500 text-2xl mr-4 cursor-pointer"
          />
        </span>
      </div>
  );
}
