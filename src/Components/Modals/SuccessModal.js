import React, { useEffect } from 'react'

function SuccessModal(props) {


    useEffect(() => {
        const interval =setInterval( ()=> {
            props.setSuccess(false);
            props?.setMessage && props.setMessage('');
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {props?.success &&
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-[30vw] my-6 mx-auto">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="relative p-6 flex-auto">
                                    <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal"
                                        onClick={() => props.setSuccess(false)}>
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        <span className="sr-only" >Close modal</span>
                                    </button>
                                    <div className="p-6 text-center">

                                        <svg width="50" height="50" style={{ margin: 'auto' }} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M64 0C28.648 0 0 28.648 0 64C0 99.352 28.648 128 64 128C99.352 128 128 99.352 128 64C128 28.648 99.352 0 64 0ZM97.952 97.952C88.872 107 76.824 112 64 112C51.176 112 39.128 107 30.048 97.952C21 88.872 16 76.824 16 64C16 51.176 21 39.128 30.048 30.048C39.128 21 51.176 16 64 16C76.824 16 88.872 21 97.952 30.048C107 39.128 112 51.176 112 64C112 76.824 107 88.872 97.952 97.952ZM86.272 39.328L56.128 72.824L42.096 58.976L30.848 70.352L56.8 96L98.152 50.024L86.272 39.328Z" fill="#2D6A4F" />
                                        </svg>

                                        <h3 className="my-5 text-lg font-normal text-gray-500 dark:text-gray-400">{props?.message}</h3>
                                       </div>
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

export default SuccessModal