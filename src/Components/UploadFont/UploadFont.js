import React, { useState } from 'react'
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["ttf", "TTF"];

function UploadFont() {
    const [error, setError] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [isFileUploaded, setIsFileUploaded] = useState(false);

    
    const handleChange = (file) => {
        if ((file?.name)?.split('.')[(file?.name)?.split('.')?.length - 1] === 'ttf' || (file?.name)?.split('.')[(file?.name)?.split('.')?.length - 1] === 'tTTF') {
            setSelectedFile(file);
            setIsFileUploaded(true);
            setError(false);
        } else {
            setIsFileUploaded(false);
            setError(true);
        }
    };

    return (
        <>
            <FileUploader
                // label='Click to upload or drag and drop \n Only TTF File Allowed'
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
            {isFileUploaded &&
                <div className=" w-[90%] mx-auto my-5">
                    <span className='font-bold'>Last Uploaded File Details...</span><br />
                    <span className='font-bold'>Name:</span> {selectedFile?.name}<br />
                    <span className='font-bold'>Size:</span>{selectedFile?.size} B<br />
                </div>
            }
            {error &&
                <div className=" w-[90%] mx-auto my-5 text-red-500"> Only .ttf file is allowed to upload.</div>
            }
        </>
    )
}

export default UploadFont