import { Box, Typography } from "@mui/material";

export default function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && (
                <Box sx={{
                    display: "flex", overflow: "auto", flex: "none",
                    flexFlow: "column nowrap", overflowY: "scroll", height: "55vh", background: '#afb0f871'
                }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
