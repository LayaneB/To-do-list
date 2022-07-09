import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'primary' },
                    style: {
                        background: 'transparent',
                        color: '#0b1566',
                        '&:hover': {
                            opacity: '70%',
                            background: 'transparent'
                        }
                    },
                },
                {
                    props: { variant: 'secondary' },
                    style: {
                        background: '#8cfa9a',
                        color: '#0b1566',
                        '&:hover': {
                            background: '#8cfa9a',
                            opacity: '60%'
                        }
                    },
                },
                {
                    props: { variant: 'header' },
                    style: {
                        background: 'transparent',
                        color: 'white',
                        '&:hover': {
                            background: 'transparent',
                            opacity: '60%'
                        }
                    },
                },
            ],

            styleOverrides: {
                root: {
                    borderRadius: '6px',
                    padding: '8px',
                    textTransform: 'capitalize',
                    fontWeight: '700'
                },
            },
        }
    },
    palette: {
        primary: {
            light: "#afb0f871",
            main: "#0b1566",
            dark: "#778899",
            contrastText: "#fff"
        }
    }
})

export default theme