import { 
    Box,
    Center,
    CircularProgress,
} from "@chakra-ui/react"

export const PageLoader = () => {
    return (
        <Box h={'100dvh'}>
            <Center h={'100dvh'}>
                <CircularProgress isIndeterminate color={'#4D5AB7'} size={'60px'} />
            </Center>
        </Box>
    )
}
