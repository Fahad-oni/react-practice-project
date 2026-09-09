import { use, useState, type Dispatch, type SetStateAction } from 'react';
import type { IPlayer } from '../../Types/type';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

export interface PlayersProps {
  PlayerPromise: Promise<IPlayer[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

export default function Players({
  PlayerPromise,
  coin,
  setCoin,
}: PlayersProps) {
  const players = use(PlayerPromise);

  const [selectedBtn, setSlectedBtn] = useState('available');
  const handleBtn = (type: 'available' | 'selected') => {
    setSlectedBtn(type);
  };

  const [selectedPlayers, setSelectedPlayers] = useState<IPlayer[]>([]);

  return (
    <>
      <div className="flex justify-between container mx-auto my-12">
        <h2 className="text-2xl font-bold">
          {selectedBtn === 'available'
            ? 'Available Players'
            : 'Selected Players'}
        </h2>

        <div>
          <button
            onClick={() => handleBtn('available')}
            className={`btn ${selectedBtn === 'available' ? 'btn-success' : ''}  rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => handleBtn('selected')}
            className={`btn rounded-l-none ${selectedBtn === 'selected' ? 'btn-success' : ''}`}
          >
            Selected
          </button>
        </div>
      </div>
      {selectedBtn === 'available' ? (
        <AvailablePlayers
          players={players}
          coin={coin}
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          coin={coin}
          setCoin={setCoin}
        />
      )}
    </>
  );
}
