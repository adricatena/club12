import type { Sport } from "@/entities/sport/sport.types";
import { Switch } from "@mantine/core";
import { MouseEvent } from "react";

interface Props {
  sports: Sport[];
  activeSports: string[];
  federatedSports: string[];
  onClickSport: (event: MouseEvent<HTMLInputElement>) => void;
  onClickFederatedSport: (event: MouseEvent<HTMLInputElement>) => void;
}

function SportsSwitches({
  sports,
  activeSports,
  federatedSports,
  onClickSport,
  onClickFederatedSport,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <Switch.Group label="Deportes">
        {sports?.map((sport) => (
          <Switch
            key={sport.id}
            value={sport.name}
            label={sport.name}
            className="pb-1"
            onClick={onClickSport}
          />
        ))}
      </Switch.Group>
      <Switch.Group label="Federado" value={federatedSports}>
        {sports?.map((sport) => (
          <Switch
            key={sport.id}
            value={sport.name}
            label={sport.name}
            disabled={!activeSports.includes(sport.name)}
            className="pb-1"
            onClick={onClickFederatedSport}
          />
        ))}
      </Switch.Group>
    </div>
  );
}

export default SportsSwitches;
