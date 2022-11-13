import axios from "axios";
import Config from '../Config';

export const GetAllFontGroup = () => {

    return (
        axios.get(`${Config.baseApi}/font-group-system/api/font_group.php`,
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

export const CreateFontGroup = (data) => {

    return (
        axios.post(`${Config.baseApi}/font-group-system/api/font_group.php`,
            { ...data },
            {
                headers: {
                    'Content-Type': 'application/json'
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

export const UpdateFontGroup = (data) => {

    return (
        axios.put(`${Config.baseApi}/font-group-system/api/font_group.php?id=${data?.id}`,
            {...data},
            {
                headers: {
                    'Content-Type': 'application/json'
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

export const DeleteSingleFontGroup = (id) => {
    
    return (
        axios.delete(`${Config.baseApi}/font-group-system/api/font_group.php?id=${id}`,
            {
                headers: {
                    // "Access-Control-Allow-Origin": "*"
                }
            })
            .then(response => {
                return response?.data;

            })
            .catch(error => {
                console.log(error)
                return error;
            })
    )

};