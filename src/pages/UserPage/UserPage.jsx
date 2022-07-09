import { Box, Checkbox, TextField, Button, Typography, Tabs, Tab } from "@mui/material"
import { useEffect, useState } from "react"
import { getRequest, postRequest, putRequest } from "../../services/requests"
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from "../../components/Header"
import { useStyles } from "../../theme/styles"
import TabPanel from '../../components/TabPanel'

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function UserPage() {
    const [user, setUser] = useState({})
    const [toDos, setToDos] = useState([])
    const [newTask, setNewTask] = useState("")
    const params = useParams()
    const [tabValue, setTabValue] = useState(0)
    const classes = useStyles()

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleCheckboxChange = async (todo, index) => {
        const updatedToDo = await putRequest(`todos/${todo.id}`, { ...todo, completed: !todo.completed })
        const updatedToDoList = [...toDos]

        updatedToDoList[index] = updatedToDo
        setToDos(updatedToDoList)
    };

    useEffect(() => {
        getRequest(`users/${params.id}`, setUser)
        getRequest(`users/${params.id}/todos`, setToDos)
    }, [params.id])

    let filterTodos = []
    switch (tabValue) {
        case 0:
            filterTodos = toDos.filter(todo => !todo.completed)
            break;
        case 1:
            filterTodos = toDos.filter(todo => todo.completed)
            break;
        case 2:
            filterTodos = toDos
            break;
        default:
            filterTodos = toDos
    }

    const renderToDos = filterTodos.map((todo, index) => {
        return <Typography key={index}>
            <Checkbox
                checked={todo.completed}
                onChange={() => handleCheckboxChange(todo, index)}
                inputProps={{ 'aria-label': 'controlled' }}
                color="success"
                size="small"
            />
            {todo.title}
        </Typography>
    })

    const addNewTask = async (event) => {
        event.preventDefault()
        if (newTask) {
            const addedTask = await postRequest("todos", {
                completed: false,
                userId: params.id,
                title: newTask
            })
            const updatedToDos = [...toDos, addedTask]
            setToDos(updatedToDos)
            setNewTask('')
        }
    }


    return (
        <>
            <Header />
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", gap: "20px", mt: 5, mb: 5 }}>
                <Typography variant="h4">{`${user.name} (${user.username})`}</Typography>

                <Box
                    component="form"
                    sx={{
                        display: "flex", alignItems: "center", justifyContent: "center", width: "80%", gap: "20px"
                    }}
                    validate
                    autoComplete="off"
                    onSubmit={addNewTask}
                >
                    <TextField
                        id="outlined-name"
                        label="New Task"
                        value={newTask}
                        fullWidth
                        size="small"
                        onChange={handleInputChange}
                    />
                    <Button
                        sx={{ width: '25%' }}
                        type={"submit"}
                        variant={"secondary"}
                    >
                        add task
                    </Button>
                </Box>

                <Box
                    sx={{ display: "flex", flexDirection: "column", width: '80%', flexFlow: "column nowrap" }}
                >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            value={tabValue}
                            onChange={handleTabChange}
                            sx={{ background: '#afb0f8', borderRadius: '5px 5px 0 0' }}
                            className={classes.tabs}
                        >
                            <Tab
                                label="To Do"
                                {...a11yProps(0)}
                            />
                            <Tab
                                label="Done"
                                {...a11yProps(1)}
                            />
                            <Tab
                                label="All Tasks"
                                {...a11yProps(2)}
                            />
                        </Tabs>
                    </Box>
                    <TabPanel
                        value={tabValue}
                        index={0}
                    >
                        {renderToDos}
                    </TabPanel>
                    <TabPanel
                        value={tabValue}
                        index={1}
                    >
                        {renderToDos}
                    </TabPanel>
                    <TabPanel
                        value={tabValue}
                        index={2}
                    >
                        {renderToDos}
                    </TabPanel>
                </Box>

            </Box>
        </>
    );
}

export default UserPage;