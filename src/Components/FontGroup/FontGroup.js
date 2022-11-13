import React, { useState, useEffect } from 'react';
import AddGroupModal from './AddGroupModal';
import SuccessModal from './../Modals/SuccessModal';
import { GetAllFonts } from '../../APIs/FontListApi';
import { GetAllFontGroup } from '../../APIs/FontGroupApi';
import DeleteModal from '../Modals/DeleteModal';

function FontGroup() {
  const [success, setSuccess] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editData, setEditData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [message, setMessage] = useState('');
  const [fontLists, setFontLists] = useState();
  const [fontGroupLists, setFontGroupLists] = useState();

  const [deleteItem, setDeleteItem] = useState(false);
  const [selectedDeleteItemID, setSelectedDeleteItemID] = useState();

  useEffect(() => {
    GetAllFonts().then(response => {
      if (response) {
        setFontLists(response);
        GetAllFontGroup().then(response => {
          if (response) {
            console.log(response)
            setFontGroupLists(response);
          } else {
            console.log(response);
          }
        });
      } else {
        console.log(response);
      }
    });
  }, []);

  const editModeOn = (item, index) => {

    setEditData(item);
    setModalVisible(true);
    setEditMode(true);
  }


  return (
    <>
      {success &&
        <SuccessModal success={success} setSuccess={setSuccess} message={message} />
      }

      {/* {success &&
        <SuccessModal success={success} setSuccess={setSuccess} message={'The Font Group is Successfully Deleted.'} />
      } */}

      {deleteItem &&
        <DeleteModal
          mother={'fontGroup'}
          deleteItem={deleteItem} setDeleteItem={setDeleteItem}
          success={success} setSuccess={setSuccess}
          selectedDeleteItemID={selectedDeleteItemID} setSelectedDeleteItemID={setSelectedDeleteItemID}
          message={'Are you sure you want to delete this Font?'} />
      }

      {modalVisible &&
        <AddGroupModal modalVisible={modalVisible} setModalVisible={setModalVisible} fontLists={fontLists} editData={editData} setEditData={setEditData}
          editMode={editMode} setEditMode={setEditMode} success={success} setSuccess={setSuccess} setMessage={setMessage} />
      }

      <div className="w-[90%] mx-auto my-5 bg-white rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              <div className='flex '>
                <div className='w-[80%]'>
                  Our Font Groups
                  <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">List of all available font groups.</p>
                </div>

                <div className='flex w-[20%] justify-center align-middle'>
                  <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={() => setModalVisible(true)}> + Add Font Group</button>
                </div>
              </div>

            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  NAME
                </th>
                <th scope="col" className="py-3 px-6">
                  Fonts
                </th>
                <th scope="col" className="py-3 px-6">
                  Count
                </th>
                <th scope="col" className="py-3 px-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {fontGroupLists?.map((item, index) => {
                return (
                  (index % 2 === 0) ?
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item?.fontGroupName}
                      </th>
                      <td className="py-4 px-6">
                        {
                          item?.selectedFontList?.map((fontList, index) => {
                            return (
                              <span key={index}>
                                <span>{(fontLists?.filter(font => font?.id == fontList?.selectedFontId))?.[0]?.fontName}</span>
                                <span>{index !== (item?.fontList?.length - 1) && ','}</span>
                              </span>
                            )
                          })
                        }
                      </td>
                      <td className="py-4 px-6">
                        {(item?.selectedFontList?.length)}
                      </td>
                      <td className="py-4 px-6 text-right flex justify-end">
                        <div className="mr-5 font-medium text-blue-600 dark:text-blue-500 cursor-pointer " onClick={()=>editModeOn(item,index)}>Edit</div>
                        <div className="font-medium text-red-600 dark:text-red-500 cursor-pointer" onClick={() => { setDeleteItem(true); setSelectedDeleteItemID(item?.id) }}>Delete</div>
                      </td>
                    </tr>
                    :
                    <tr className="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item?.fontGroupName}
                      </th>
                      <td className="py-4 px-6">
                        {
                          item?.selectedFontList?.map((fontList, index) => {
                            return (
                              <span key={index}>
                                <span>{(fontLists?.filter(font => font?.id == fontList?.selectedFontId))?.[0]?.fontName}</span>
                                <span>{index !== (item?.fontList?.length - 1) && ','}</span>
                              </span>
                            )
                          })
                        }
                      </td>
                      <td className="py-4 px-6">
                        {(item?.selectedFontList?.length)}
                      </td>
                      <td className="py-4 px-6 text-right flex justify-end">
                        <div className="mr-5 font-medium text-blue-600 dark:text-blue-500 cursor-pointer" onClick={()=>editModeOn(item,index)}>Edit</div>
                        <div className="font-medium text-red-600 dark:text-red-500 cursor-pointer" onClick={() => { setDeleteItem(true); setSelectedDeleteItemID(item?.id) }}>Delete</div>
                      </td>
                    </tr>
                )
              })
              }


            </tbody>
          </table>
          <br /><br />
        </div>
      </div>
    </>

  )
}

export default FontGroup