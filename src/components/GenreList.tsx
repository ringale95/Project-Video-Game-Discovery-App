import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
    const { data, isLoading } = useGenres();
    if (isLoading) return <Spinner />; //if isLoading is true then return the spinner
    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={genre.image_background}
                        />
                        <Text fontSize="lg">{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
