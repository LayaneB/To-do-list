import { Alert, Snackbar, Box } from "@mui/material";
import { useEffect, useState } from "react"
import Header from "../../components/Header";
import UserCard from "../../components/UserCard";
import { getRequest } from "../../services/requests"

function HomePage() {
    const [users, setUsers] = useState([])
    const [open, setOpen] = useState(false)
    const [messageError, setMessageError] = useState('')

    const [searchField, setSearchField] = useState("")
    const handleInputChange = (event) => {
        setSearchField(event.target.value);
    };

    useEffect(() => {
        getRequest('users', setUsers, setOpen, setMessageError)
    }, [])

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const renderCards = users.filter(user => user.name.toLowerCase().includes(searchField.toLowerCase()) || user.username.toLowerCase().includes(searchField.toLowerCase())).map((user) => {
        return <UserCard
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            id={user.id}
        />
    })

    return (
        <>
            <Header 
                searchField = {searchField}
                handleInputChange = {handleInputChange}
                page = "home"
            />

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", mt:5, mb:5 }}>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center", justifyContent: "center"}} >
                    {renderCards}
                </Box>

                <Snackbar
                    open={open}
                    onClose={handleCloseAlert}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    key={'topcenter'}
                >
                    <Alert onClose={handleCloseAlert} severity="error" sx={{ width: '100%' }}>
                        {messageError}
                    </Alert>
                </Snackbar>
            </Box>
        </>
    );
}

export default HomePage;