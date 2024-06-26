import { Button ,Box } from "@mui/material"
import {  useParams } from "react-router-dom"
import {Link} from "@mui/material"

export const ButtonAddBug = () => {
  const {id} = useParams()

  return (
    <Box display="start" justifyContent="" mb={2}>
      <Link href={`#/project/${id}/new-bug`} style={{ textDecoration: 'none' }}>
        <Button
          className="rounded-pill"
          color="primary"
          variant="contained"
        >
         Submit bug
        </Button>
      </Link>
    </Box>
  );
      
}
  