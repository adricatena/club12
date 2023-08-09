import { Sport } from "@/types/sports";
import { Switch, createStyles } from "@mantine/core";
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
  const { classes } = useClasses();

  return (
    <div className={classes.container}>
      <Switch.Group label="Deportes">
        {sports?.map((sport) => (
          <Switch
            key={sport.id}
            value={sport.name}
            label={sport.name}
            className={classes.switch}
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
            className={classes.switch}
            onClick={onClickFederatedSport}
          />
        ))}
      </Switch.Group>
    </div>
  );
}

const useClasses = createStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.xs,
  },
  switch: {
    paddingBottom: theme.spacing.xs,
  },
}));

export default SportsSwitches;
