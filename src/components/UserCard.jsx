import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import userIcon from '../assets/userIcon.jpg'
import { useNavigate } from 'react-router-dom'
import { useStyles } from '../theme/styles'


const UserCard = ({ name, username, email, id }) => {

    const navigate = useNavigate()
    const classes = useStyles()

    return (
        <Card sx={{ maxWidth: 345 }} className={classes.card}>
            <CardMedia
                component="img"
                height="140"
                image={userIcon}
                alt="user icon"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {username}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    name: {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    email: {email}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={() => navigate(`/users/${id}/todos`)}
                    variant= {"primary"}
                >
                    See to do list
                </Button>
            </CardActions>
        </Card>
    );
}

export default UserCard