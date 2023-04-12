//import BOX from "@mui/material/Box";
import { Box } from "@mui/material";

//create a new component called UserImage
const UserImage = ({ image, size = "60px" }) => {

//return the image 
  return (
    <Box width={size} height={size}>
{/**using the Box component from MUI to display the user's profile picture */}
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:3001/assets/${image}`}
      />

    </Box>
  );
  
};

export default UserImage;