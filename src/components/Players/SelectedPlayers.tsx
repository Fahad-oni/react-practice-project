import type { Dispatch, SetStateAction } from 'react';
import type { IPlayer } from '../../Types/type';
import SelectedPlayersCard from './SelectedPlayersCard';

export interface SelectedPlayersProps {
  selectedPlayers: IPlayer[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

export default function SelectedPlayers({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: SelectedPlayersProps) {

  if (selectedPlayers.length === 0) {
    return (
      <h2 className='text-xl font-bold text-center text-red-500 my-20'>No Player Selected</h2>
    )
  }
  return (
    <>
      <div className="grid grid-cols-1 gap-2 container mx-auto">
        {selectedPlayers.map((player: IPlayer,ind:number) => (
          <SelectedPlayersCard
            key={ind}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            coin={coin}
            setCoin={setCoin}
            player={player}
          />
        ))}
      </div>
    </>
  );
}
