import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import "@fontsource-variable/inter"
import "@fontsource-variable/raleway"
import { FC, PropsWithChildren } from "react"

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const theme = extendTheme({
        // fonts: {
        //     body: `'Inter', 'Raleway'`,
        //     heading: `'Inter', 'san-serif', 'Raleway'`,
        // }
    })

    return (
        <ChakraProvider theme={theme}>
            { children }
        </ChakraProvider>
    )
}
