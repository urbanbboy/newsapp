import { Box, Button, Center, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const NotFoundPage = () => {
    return (
        <Box h="100dvh">
            <Center h="100dvh" w="100dvw">
                <Stack h="full" align={"center"} direction={'column'} justifyContent={"center"}>
                    <Box fontSize={'20px'} fontWeight={'semibold'}>УПС!</Box>  
                    <Heading fontWeight={'bold'} fontSize={'100px'}>404</Heading>
                    <Heading>Страница не найдена</Heading>
                    <Button
                        as={Link}
                        colorScheme="telegram"
                        fontSize={"lg"}
                    >
                        Вернуться на главную
                    </Button>
                </Stack>
            </Center>
        </Box>
    )
}

export default NotFoundPage;