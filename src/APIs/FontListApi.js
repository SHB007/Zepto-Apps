import axios from "axios";
import Config from '../Config';

export const GetAllFonts = () => {
    
    return (
        axios.get(`${Config.baseApi}/font-group-system/api/font.php`,
            {},
            {
                headers: {
                    'Content-Type': 'application/json;',
                }
            })
            .then(response => {
                return response?.data;

            })
            .catch(error => {
                console.log(error?.response)
                return error?.response;
            })
    )

};

export const DeleteSingleFont = (id) => {
    
    return (
        axios.delete(`${Config.baseApi}/font-group-system/api/font.php?id=${id}`,
            {
                headers: {"Access-Control-Allow-Origin": "*"}
            })
            .then(response => {
                return true;

            })
            .catch(error => {
                console.log(error)
                return error;
            })
    )

};
