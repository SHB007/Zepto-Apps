import React, { useState } from 'react'
import { FileUploader } from "react-drag-drop-files";
import { useNavigate } from "react-router-dom";
import SuccessModal from '../../Components/Modals/SuccessModal';
import { CreateFont } from '../../APIs/FontCreateApi'

const fileTypes = ["ttf", "TTF"];

function UploadFont() {
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (file) => {
        if ((file?.name)?.split('.')[(file?.name)?.split('.')?.length - 1] === 'ttf' || (file?.name)?.split('.')[(file?.name)?.split('.')?.length - 1] === 'TTF') {
            setSelectedFile(file);
            CreateFont(file).then(response => {
                if (response === true) {
                    setSuccess(true);
                    setIsFileUploaded(true);
                    setError(false);
                } else {
                    console.log(response);
                }
            })

        } else {

            setIsFileUploaded(false);
            setError(true);
        }
    };

    return (
        <>

            {success &&
                <SuccessModal success={success} setSuccess={setSuccess} message={'Your File is Successfully Uploaded.'} />
            }
            {!isFileUploaded &&
                <FileUploader
                    // label='Click to upload or drag and drop /n Only TTF File Allowed'd
                    children={
                        <div className=" w-[90%] mx-auto my-5">
                            <label
                                className="flex justify-center w-full h-[40vh] px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                                <span className="flex flex-col justify-center items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <br />
                                    <span className="font-medium text-gray-600 flex flex-col items-center">

                                        <div>
                                            <span className="text-bold font-bold">Click to upload</span>
                                            <span> &nbsp;or drag & drop</span>
                                        </div>
                                        <div>Only TTF File Allowed</div>
                                    </span>
                                </span>
                            </label>
                        </div>}
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                    classes='DragAndDropStyle'
                />
            }
            {isFileUploaded &&
                <>
                    <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  w-[90%] mx-auto my-5" style={{ minWidth: '90vw' }}>
                        <div className="flex w-[100%] align-middle h-56">
                            <div className="flex items-center justify-center flex-col w-[50%] border-r-4 border-black-500 border-dashed h-56">
                                <span className='font-bold'>Last Uploaded File Details...</span><br />
                                <div><span className='font-bold'>Name: </span> {selectedFile?.name} </div> <br />
                                <div><span className='font-bold'>Size: </span> {selectedFile?.size} B </div> <br />
                            </div>

                            <div className="w-[50%] m-auto h-56 flex justify-around items-center">
                                {/* UPLOAD ANOTHER */}
                                <div onClick={() => setIsFileUploaded(false)} className='pl-2'>
                                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Upload Another
                                        </span>
                                    </button>


                                </div>

                                {/* GO TO */}
                                <div onClick={() => {
                                    setIsFileUploaded(false);
                                    navigate('/fontList')
                                }}>
                                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Font Lists
                                        </span>
                                    </button>

                                </div>

                            </div>
                        </div>

                    </div>
                </>

            }
            {error &&
                <div className=" w-[90%] mx-auto my-5 text-red-500"> Only .ttf file is allowed to upload.</div>
            }
        </>
    )
}

export default UploadFont