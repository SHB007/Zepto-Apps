import React, { useState } from 'react';
import AddGroupModal from './AddGroupModal';


function FontGroup() {

  const [modalVisible, setModalVisible] = useState(false);
  const [editData, setEditData] = useState({});
  const [editMode, setEditMode] = useState(false);

  const [fontLists, setFontLists] = useState([
    { id: 0, fontName: 'Roboto-Black', filePath: 'src/Assets/Roboto-Black.ttf' },
    { id: 1, fontName: 'Roboto-Bold', filePath: 'src/Assets/Roboto-Bold.ttf' },
    { id: 2, fontName: 'Roboto-Italic', filePath: 'src/Assets/Roboto-Italic.ttf' },
    { id: 3, fontName: 'Roboto-Thin', filePath: 'src/Assets/Roboto-Thin.ttf' },
    { id: 4, fontName: 'Roboto-ThinItalic', filePath: 'src/Assets/Roboto-ThinItalic.ttf' }
  ]);
  const [fontGroupLists, setFontGroupLists] = useState([
    { id: 0, fontGroupName: 'Ex-1', selectedFontLists: [{ fontName: 'ABC', selectedFontId: '0', specificSize: '10.00', priceChange: '10' }, { fontName: 'DEF', selectedFontId: '1', specificSize: '20.00', priceChange: '20' }] },
    { id: 1, fontGroupName: 'Ex-2', selectedFontLists: [{ fontName: 'GHI', selectedFontId: '2', specificSize: '30.00', priceChange: '30' }, { fontName: 'JKL', selectedFontId: '3', specificSize: '40.00', priceChange: '40' }] },
    { id: 2, fontGroupName: 'Ex-3', selectedFontLists: [{ fontName: 'MNO', selectedFontId: '4', specificSize: '50.00', priceChange: '50' }, { fontName: 'PQR', selectedFontId: '1', specificSize: '60.00', priceChange: '60' }] },
    { id: 3, fontGroupName: 'Ex-4', selectedFontLists: [{ fontName: 'STU', selectedFontId: '2', specificSize: '70.00', priceChange: '70' }, { fontName: 'VWX', selectedFontId: '3', specificSize: '8000', priceChange: '80' }] },
    { id: 4, fontGroupName: 'Ex-5', selectedFontLists: [{ fontName: 'YZ', selectedFontId: '4', specificSize: '9000', priceChange: '90' }, { fontName: 'ab', selectedFontId: '1', specificSize: '100.00', priceChange: '100' }] }
  ]);

  const editModeOn = (item, index) => {

    setEditData(item);
    setModalVisible(true);
    setEditMode(true);
  }


  return (
    <>


      {modalVisible &&
        <AddGroupModal modalVisible={modalVisible} setModalVisible={setModalVisible} fontLists={fontLists} editData={editData} setEditData={setEditData}
          editMode={editMode} setEditMode={setEditMode} />
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
                          item?.selectedFontLists?.map((fontList, index) => {
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
                        {(item?.selectedFontLists?.length)}
                      </td>
                      <td className="py-4 px-6 text-right flex justify-end">
                        <div className="mr-5 font-medium text-blue-600 dark:text-blue-500 cursor-pointer " onClick={() => editModeOn(item, index)}>Edit</div>
                        <div className="font-medium text-red-600 dark:text-red-500 cursor-pointer">Delete</div>
                      </td>
                    </tr>
                    :
                    <tr className="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item?.fontGroupName}
                      </th>
                      <td className="py-4 px-6">
                        {
                          item?.selectedFontLists?.map((fontList, index) => {
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
                        {(item?.selectedFontLists?.length)}
                      </td>
                      <td className="py-4 px-6 text-right flex justify-end">
                        <div className="mr-5 font-medium text-blue-600 dark:text-blue-500 cursor-pointer" onClick={() => editModeOn(item, index)}>Edit</div>
                        <div className="font-medium text-red-600 dark:text-red-500 cursor-pointer">Delete</div>
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