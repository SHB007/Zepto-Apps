import axios from "axios";
import Config from '../Config';

export const CreateFont = (data) => {
    const formData = new FormData();
    formData.append("fontFile", data);
    
    return (
        axios.post(`${Config.baseApi}/font-group-system/api/font.php`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data;',
                }
            })
            .then(response => {
                return true;

            })
            .catch(error => {
                console.log(error?.response)
                return error?.response;
            })
    )

};
