import { Card, CardBody } from "@chakra-ui/card";
import { Game } from "../hooks/useGames";
import { Image } from "@chakra-ui/image";
import { Heading } from "@chakra-ui/layout";

interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};
export default GameCard;
