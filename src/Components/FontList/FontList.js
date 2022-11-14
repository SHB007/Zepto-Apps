import React, { useState, useEffect } from 'react';
import DeleteModal from '../Modals/DeleteModal';
import SuccessModal from '../Modals/SuccessModal';
import { GetAllFonts } from '../../APIs/FontListApi';
import Config from '../../Config';

function FontList() {
  const [deleteItem, setDeleteItem] = useState(false);
  const [selectedDeleteItemID, setSelectedDeleteItemID] = useState();
  const [success, setSuccess] = useState(false);

  const [fontLists, setFontLists] = useState();
  const [fontFamilyInDOM, setFontFamilyInDOM] = useState();

  useEffect(() => {
    GetAllFonts().then(response => {
      if (response) {
        setFontLists(response);
      } else {
        console.log(response);
      }
    })
  }, [success]);

  // For Reference => https://webplatform.github.io/docs/tutorials/typography/fontface/
  useEffect(() => {
    fontLists?.forEach(singleFont => {
      if(!(fontFamilyInDOM?.includes((singleFont.fontName)?.split('.')?.[0]))){
        const font = new FontFace((singleFont.fontName)?.split('.')?.[0], `url(${Config.baseApi}/font-group-system/${singleFont.filePath})`, {});

      document.fonts.add(font);
      font.load().then(function (loadedFont) {
        debugger
        document.fonts.add(loadedFont);
        document.body.style.fontFamily = `${singleFont.fontName}, serif`;
        //do something after the font is loaded
      }).catch(function (error) {
        // error occurred
      });
      }
      
    });
    listOfFonts();
  }, [fontLists]);


  const listOfFonts = () => {
    let { fonts } = document;
    const it = fonts.entries();

    let arr = [];
    let done = false;

    while (!done) {
      const font = it.next();
      if (!font.done) {
        arr.push(font.value[0]);
      } else {
        done = font.done;
      }
    }
    arr = arr?.map(item=>{
      return(item?.family)
    });
    console.log(arr);

    debugger;
    setFontFamilyInDOM([...arr]);
    return arr;
  };
  

  return (
    <>
      {success &&
        <SuccessModal success={success} setSuccess={setSuccess} message={'The Font is Successfully Deleted.'} />
      }

      {deleteItem &&
        <DeleteModal
          mother={'fontList'}
          deleteItem={deleteItem} setDeleteItem={setDeleteItem}
          success={success} setSuccess={setSuccess}
          selectedDeleteItemID={selectedDeleteItemID} setSelectedDeleteItemID={setSelectedDeleteItemID}
          message={'Are you sure you want to delete this Font?'} />
      }

      <div className="w-[90%] mx-auto my-5 bg-white rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Our Fonts
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Zepto fonts to build your font group.</p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  FONT NAME
                </th>
                <th scope="col" className="py-3 px-6">
                  PREVIEW
                </th>
                <th scope="col" className="py-3 px-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {fontLists?.map((item, index) => {
                return (
                  (index % 2 === 0) ?
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item?.fontName}
                      </th>
                      <td className="py-4 px-6">
                        <span style={{ fontFamily: `${(item.fontName)?.split('.')?.[0]}` }}>Example Style</span>
                      </td>

                      <td className="py-4 px-6 text-right cursor-pointer">
                        <div className="font-medium text-red-600 dark:text-red-500"
                          onClick={() => { setDeleteItem(true); setSelectedDeleteItemID(item?.id) }}>Delete</div>
                      </td>
                    </tr>
                    :
                    <tr className="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item?.fontName}
                      </th>
                      <td className="py-4 px-6">
                        <span style={{ fontFamily: `${(item.fontName)?.split('.')?.[0]}` }}>Example Style</span>
                      </td>

                      <td className="py-4 px-6 text-right cursor-pointer">
                        <div className="font-medium text-red-600 dark:text-red-500" onClick={() => { setDeleteItem(true); setSelectedDeleteItemID(item?.id) }}>Delete</div>
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

export default FontList