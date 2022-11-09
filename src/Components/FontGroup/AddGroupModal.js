import React, { useState } from 'react';
import SingleFontEntity from './SingleFontEntity';

function AddGroupModal(props) {

    const [numberOfRows, setNumberOfRows] = useState([0]);
    const [values, setValues] = useState({
        groupName: '',
        selectedFontId: '',
    });


    return (
        <>
            {props?.modalVisible &&
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-[80vw] my-6 mx-auto max-w-3xl">
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
                                        onClick={() => props.setModalVisible(false)}
                                    >
                                        <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <input
                                        className='w-[100%] border-2 border-black border-solid text-base'
                                        type='text'
                                        placeholder='Group Title'
                                        onChange={(e) => setValues({ ...values, groupName: e.target.value })} />

{
    for (let index = 0; index < list; index++) {
        <></>
    }
}



                                </div>

                                {/* BUTTONS */}
                                <div className="relative p-6 flex justify-between">
                                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                                        onClick={() => setNumberOfRows(numberOfRows => numberOfRows + 1)}
                                    >
                                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            + Add Row
                                        </span>
                                    </button>

                                    <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Create
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