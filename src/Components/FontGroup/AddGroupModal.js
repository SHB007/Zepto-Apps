import React, { useState, useEffect } from 'react';
import SingleFontEntity from './SingleFontEntity';
import { CreateFontGroup, UpdateFontGroup } from '../../APIs/FontGroupApi';


function AddGroupModal(props) {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [oneTimeFlag, setOneTimeFlag] = useState(true);
    

    const [values, setValues] = useState({
        fontGroupName: '',
        selectedFontList: [{ fontName: '', selectedFontId: '*', specificSize: '1.00', priceChange: '0' }],
    });

    useEffect(() => {
        if (props?.editMode) {
            setValues(props?.editData);
        }
        if (oneTimeFlag && props?.editMode) {
            setEditMode(true);
        } else {
            setOneTimeFlag(false);
        }
    }, [props?.editData]);



    useEffect(() => {
        let emptyField = CheckEmptyField();
        if (!emptyField) {
            setError(false);
            setErrorMessage('');
        }
    }, [values]);

    const addIntoSelectedFontLists = () => {
        let emptyField = CheckEmptyField();
        if (emptyField) {
            setError(true);
            setErrorMessage('Please Fill the above font Selection field.');
        } else if(props?.fontLists?.length == values?.selectedFontList?.length){
            setError(true);
            setErrorMessage('Maximum Number of Font List already added. Please Upload more file to add in the group.');
        }else {
            setError(false);
            setErrorMessage('');
            const selectedFontList = [...values.selectedFontList, { fontName: '', selectedFontId: '*', specificSize: '1.00', priceChange: '0' }];
            setValues({ ...values, selectedFontList });
            props.setEditMode(false);
        }

    };

    const CheckEmptyField = () => {
        const mapping = values?.selectedFontList?.map(fontList => {
            return (
                fontList?.selectedFontId
            )
        })
        let emptyField = (mapping?.includes('') || mapping?.includes('*'));
        return emptyField;
    };

    const deleteIntoSelectedFontLists = (index) => {
        const selectedFontList = [...values?.selectedFontList]
        selectedFontList.splice(index, 1)
        setValues({
            ...values,
            selectedFontList
        })
    };

    const createNewFontGroup = () => {
        let mapping = values?.selectedFontList?.map(fontList => {
            return (
                fontList?.selectedFontId
            )
        })
        mapping = mapping.filter(item => {
            return (item !== '' || item !== '*')
        })
        if (values?.fontGroupName == '') {
            setError(true);
            setErrorMessage('Please Fill the Group Title.');
        } else if (mapping?.length >= 2) {
            setError(false);
            setErrorMessage('')
            if (!editMode) {
                CreateFontGroup(values).then(response => {
                    if (response) {
                        props.setModalVisible(false);
                        props.setSuccess(true);
                        props.setMessage('New Font Group is Successfully Created.');
                    } else {
                        console.log(response)
                    }
                })
            } else {
                UpdateFontGroup(values).then(response => {
                    if (response) {
                        props.setModalVisible(false);
                        props?.setSuccess(true);
                        props.setMessage('Font Group is Successfully Update.');
                    } else {
                        console.log(response)
                    }
                })
            }

        } else {
            setError(true);
            setErrorMessage('Please Fill at least two font.');
        }
    };



    return (
        <>

            

            {props?.modalVisible &&
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-[90vw] my-6 mx-auto max-w-[90vw]">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            Create Font Group
                                        </h3>
                                        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">You have to select at least two fonts.</p>
                                    </div>

                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => {
                                            props.setEditData([]);
                                            props.setEditMode(false);
                                            props.setModalVisible(false);
                                        }}
                                    >
                                        <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <input
                                        className='w-[100%] p-2 border-2 border-black-50 border-solid rounded text-base'
                                        type='text'
                                        placeholder='Group Title'
                                        value={values?.fontGroupName}
                                        onChange={(e) => setValues({ ...values, fontGroupName: e.target.value })} />

                                    {values.selectedFontList?.map((item, index) => (
                                        <div style={{ marginTop: 20 }} key={index}>
                                            <SingleFontEntity
                                                values={values} setValues={setValues}
                                                deleteIntoSelectedFontLists={deleteIntoSelectedFontLists}
                                                index={index} fontList={props?.fontLists}
                                                motherProps={props}
                                            />
                                        </div>
                                    ))
                                    }
                                </div>

                                {error &&
                                    <div className="relative p-6 text-red-500">* {errorMessage}</div>
                                }
                                {/* BUTTONS */}
                                <div className="relative p-6 flex justify-between">

                                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                                        onClick={addIntoSelectedFontLists}
                                    >
                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            + Add Row
                                        </span>
                                    </button>

                                    <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                        onClick={createNewFontGroup}
                                    >
                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            {editMode ? 'Update' : 'Create'}
                                        </span>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            }
        </>
    )
}

export default AddGroupModal