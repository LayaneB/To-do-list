import { Box, Button, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Header = ({ page, searchField, handleInputChange }) => {

    const navigate = useNavigate()

    return (

        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                bgcolor: '#0b1566',
                height: '10vh',
                padding: '5px 35px'
            }}
        >

            <Box
                component={"img"}
                src={logo}
                alt="to do logo"
                sx={{
                    height: '100%'
                }}
            />
            {
                page === 'home' ?
                    <TextField
                        id="name"
                        label="Search user"
                        value={searchField}
                        size="small"
                        onChange={handleInputChange}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><SearchIcon sx={{ color: 'white', opacity: "80%" }} /></InputAdornment>,
                            style: { color: "white" }
                        }}
                        sx={{
                            "& .MuiInputLabel-root": { color: 'white', opacity: "90%" },
                            "& .MuiOutlinedInput-root": {
                                "& > fieldset": { borderColor: "white", opacity: "80%", color: "white" }
                            },
                            "& .MuiOutlinedInput-root.Mui-focused": {
                                "& > fieldset": {
                                    borderColor: "white"
                                }
                            },
                            "& .MuiOutlinedInput-root:hover": {
                                "& > fieldset": {
                                    borderColor: "white",
                                    opacity: '90%'
                                }
                            },
                            color: "white"
                        }}
                    />
                    :
                    <Button
                        onClick={() => navigate('/')}
                        variant='header'
                    >
                        Home
                    </Button>
            }
        </Box>

    );
}

export default Header