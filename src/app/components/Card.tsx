import { Badge, Box, HStack, Image } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

export default function Card() {
  return (
    <Box flexDirection="row" overflow="hidden" maxW="xl" borderWidth="1px" borderRadius="lg">
      <Image
        objectFit="cover"
        maxW="200px"
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />
      <Box>
        <Box p="4">
          <Box fontWeight="bold" mb="2">
            The perfect latte
          </Box>
          <Box>
            Caffè latte is a coffee beverage of Italian origin made with
            espresso and steamed milk.
          </Box>
          <HStack mt="4">
            <Badge>Hot</Badge>
            <Badge>Caffeine</Badge>
          </HStack>
        </Box>
        <Box p="4" backgroundColor={"white"}>
          <Button>Buy Latte</Button>
        </Box>
      </Box>
    </Box>
  );
}
