import { useEffect, useState } from "react";
import { getType } from "../service/articleService";
import { FormControl } from "react-bootstrap";
import { InputLabel, NativeSelect } from "@mui/material";




const AjoutArticlePage = () => {

    const [types, setTypes] = useState();
    const [idType, setIdType] = useState();

    const fetchType = async () => {

        try {

            const response = await getType()

            setTypes(response.data.nomCategorie)
            setIdType(response.data.idCategorie)

            console.log(response);

        } catch (error) {

            console.error("Error recherche type", error);

        }

    }


useEffect (

    fetchType ()
    
)

    return (

        <>

            <FormControl fullWidth>

                <InputLabel variant="standard" htmlFor="uncontrolled-native">

                    Categorie

                </InputLabel>

                <NativeSelect

                    defaultValue={30}
                    inputProps={{

                        name: 'Categorie',
                        // id: 'uncontrolled-native',

                    }}>

                    {/* {types.map((type) => (

                        key = {idType},

                        <option type = {type} />

                    ))} */}

                </NativeSelect>

            </FormControl>

        </>

    )

}







export default AjoutArticlePage;