import React, { useState, useEffect } from 'react'
import Select from 'react-select';

function SingleFontEntity(props) {

  const [fontOption, setFontOption] = useState([]);

  const setFunction = (e) => {
    let tempSelectedFontLists = [...props?.values.selectedFontList];
    tempSelectedFontLists[props?.index][e.target.name] = e?.target?.value;
    props.setValues({ ...props?.values, selectedFontList:[...tempSelectedFontLists] });

  };

  useEffect(() => {
    if (props?.motherProps?.editMode) {
      let fontListOption = [];
      props?.fontList?.filter((singleItem) => {
        return (
          (props?.values?.selectedFontList?.filter(selected => selected?.selectedFontId == singleItem?.id))?.length == 0
        )
      })?.map((item) => {
        const temp = {};
        temp.value = item.id;
        temp.label = item.fontName;
        fontListOption.push(temp);
      });
      fontListOption.unshift({
        value: props?.values?.['selectedFontList'][props?.index]['selectedFontId'], label: (props?.fontList?.filter((singleItem) => {
          return (
            singleItem?.id == props?.values?.['selectedFontList'][props?.index]['selectedFontId']
          )
        }))?.[0]?.fontName, isDisabled: true
      });
      
      fontListOption.unshift({ value: '*', label: 'Select a Font', isDisabled: true });
      setFontOption(fontListOption);
    } else {
      let fontListOption = [];
      props?.fontList?.filter((singleItem) => {
        return (
          (props?.values?.selectedFontList?.filter(selected => selected?.selectedFontId == singleItem?.id))?.length == 0
        )
      })?.map((item) => {
        const temp = {};
        temp.value = item.id;
        temp.label = item.fontName;
        fontListOption.push(temp);
      });
      fontListOption.unshift({ value: '*', label: 'Select a Font', isDisabled: true });
      setFontOption(fontListOption);
    }

  }, [props?.fontList]);


  return (
    <>
      <div className="p-4 w-[100%] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className='flex w-[100%] '>
          <div className='flex w-[4%] ml-2 mr-2'>
            <span className='text-sm m-auto'>&#8661;</span>
          </div>

          <div className='flex w-[21%] ml-2 mr-2'>
            <input
              className='w-[100%] border-2 border-black-50 border-solid text-base p-2 rounded'
              name='fontName'
              type='text'
              placeholder='Font Name'
              value={props?.values?.['selectedFontList'][props?.index].fontName}
              onChange={(e) => setFunction(e)} />
          </div>

          <div className='flex w-[21%] ml-2 mr-2' id='fontSelection'>
            <Select
              styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
              menuPortalTarget={document.body}
              menuPlacement="auto"
              value={(fontOption?.filter(item => item.value == props?.values?.['selectedFontList'][props?.index]['selectedFontId']))}
              onChange={(e) => {
                let tempSelectedFontLists = [...props?.values.selectedFontList];
                tempSelectedFontLists[props?.index]['selectedFontId'] = e?.value;
                props.setValues({ ...props?.values, selectedFontList:[...tempSelectedFontLists] });
              }}
              name="fontName"
              placeholder='Select a Font'
              options={fontOption} />
          </div>

          <div className='flex w-[21%] ml-2 mr-2'>
            <div className="did-floating-label-content">
              <input className="did-floating-input"
                name='specificSize'
                type='number'
                // placeholder='Specific Size'
                value={props?.values?.['selectedFontList'][props?.index].specificSize}
                onChange={(e) => setFunction(e)} />
              <label className="did-floating-label">Specific Size</label>
            </div>
          </div>

          <div className='flex w-[21%] ml-2 mr-2'>
            <div className="did-floating-label-content">
              <input className="did-floating-input"
                name='priceChange'
                type='number'
                // placeholder='Price Change'
                value={props?.values?.['selectedFontList'][props?.index].priceChange}
                onChange={(e) => setFunction(e)} />
              <label className="did-floating-label">Price Change</label>
            </div>
          </div>

          <div className='flex w-[4%] ml-2 mr-2 cursor-pointer' onClick={() => props.deleteIntoSelectedFontLists(props?.index)}>
            <span className='text-sm m-auto'>&#10060;</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default SingleFontEntity