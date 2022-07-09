import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
    card: {
        boxShadow: "2px 2px 5px #000000"
    },

    image: {
        height: "100%"
    },

    tabs: {
      
        "& .Mui-selected": {
          background: "#0b1566",
          color:"white !important"

        },
        "& .MuiTabs-indicator": {
            display: "none"
        }
        
      }
})