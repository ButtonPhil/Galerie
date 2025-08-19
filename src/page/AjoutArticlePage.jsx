import { useEffect, useState } from "react";
import { getType } from "../service/articleService";
import { FormControl } from "react-bootstrap";
import { InputLabel, NativeSelect } from "@mui/material";





const AjoutArticlePage = () => {

    const [types, setTypes] = useState();
    const [idType, setIdType] = useState();

    const fetchType = async () => {

        try {

            await getType()

            setTypes(data.nomCategorie)
            setIdType(data.idCategorie)

            console.log(setTypes);
            
        } catch (error) {



        }
    }

    useEffect(() => {

        fetchType();

    }, []);




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

                    }}

                >

                    {types.map((type) => (

                        key = { idType } >

                        <option type={type} />

                    ))}

                </NativeSelect>

            </FormControl>

        </>

    )
}

export default AjoutArticlePage;