import {
    ChakraProvider,
    Stack,
    theme,
    Text,
    Button,
    Center
} from "@chakra-ui/react"


export const ErrorPage = () => {
    const reload = () => {
        location.reload()
    }

    return (
        <ChakraProvider theme={theme}>
            <Center minH={'100dvh'}>
                <Stack>
                    <Text fontSize={'2xl'} color={'tomato'}>Произошла непредвиденная ошибка</Text>
                    <Button onClick={reload}>Обновить страницу</Button>
                </Stack>
            </Center>
        </ChakraProvider>
    )
}
