import { Card, CardBody } from "@chakra-ui/card";
import { Game, Platform } from "../hooks/useGames";
import { Image } from "@chakra-ui/image";
import { Heading } from "@chakra-ui/layout";
import PlatformIconList from "./platformIconList";
import CriticScore from "./CriticScore";
import { HStack } from "@chakra-ui/react";
import getCroppedImageURL from "../services/image-url";

interface GameProps {
    game: Game;
}

const GameCard = ({ game }: GameProps) => {
    return (
        <Card width="300px" borderRadius={10} overflow={"hidden"}>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize={"2xl"}>{game.name}</Heading>
                <HStack justifyContent="space-between">
                    <PlatformIconList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
};
export default GameCard;
