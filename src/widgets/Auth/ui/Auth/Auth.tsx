import { Box, Button, Heading, Stack } from "@chakra-ui/react"
import cls from './Auth.module.scss'

export const Auth = () => {
    

    return (
        <Box className={cls.Auth}>
            <Box p={'1rem'} display={'flex'} flexDirection={'column'} >
                <Heading
                    color={'whiteAlpha.900'}
                    size={'4xl'}
                >
                    Добро пожаловать в NEWS APP
                </Heading>
                <Stack p={'2em 0 2em 0'} spacing={3}>
                    <Button
                        fontWeight={'bold'}
                        color={'#4D5AB7'}
                        borderRadius={'xl'}
                        h={'3rem'}
                    >
                        Начать пользоваться
                    </Button>
                    <Button
                        border={'none'}
                        variant={'unstyled'}
                        color={'whiteAlpha.900'}
                        h={'3rem'}
                    >
                        Есть профиль? Войти
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}
