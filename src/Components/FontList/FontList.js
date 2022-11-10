import React, { useState } from 'react';

function FontList() {

  const [fontLists, setFontLists] = useState([
    { id: 0, fontName: 'Roboto-Black', filePath: 'src/Assets/Roboto-Black.ttf' },
    { id: 1, fontName: 'Roboto-Bold', filePath: 'src/Assets/Roboto-Bold.ttf' },
    { id: 2, fontName: 'Roboto-Italic', filePath: 'src/Assets/Roboto-Italic.ttf' },
    { id: 3, fontName: 'Roboto-Thin', filePath: 'src/Assets/Roboto-Thin.ttf' },
    { id: 4, fontName: 'Roboto-ThinItalic', filePath: 'src/Assets/Roboto-ThinItalic.ttf' }
  ]);

  return (
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
                      <span style={{
                        fontFace: {
                          fontFamily: item?.fontName,
                          src: item?.filePath
                        }
                        // fontFamily:'src: url(http://www.princexml.com/fonts/larabie/kimberle.ttf) format("truetype")' 
                      }}>Example Style</span>
                    </td>

                    <td className="py-4 px-6 text-right">
                      <div className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</div>
                    </td>
                  </tr>
                  :
                  <tr className="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item?.fontName}
                    </th>
                    <td className="py-4 px-6">
                      <span>Example Style</span>
                    </td>

                    <td className="py-4 px-6 text-right">
                      <div className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</div>
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
  )
}

export default FontList