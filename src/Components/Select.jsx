import Multiselect from 'multiselect-react-dropdown';
import React, { useState, useEffect, useRef } from "react";

const Search = () => {


    const [selectedValues, setSelectedValues] = useState([]);
    const multiselectRef = useRef(null);
    var arr = [];

    const handleSaveAdmin = () => {

        var Addadmin = multiselectRef.current.getSelectedItems();
        Addadmin.map((role) => {
            arr.push(role.cat);

        },

            setSelectedValues(arr)

        );
    }


    const handleDelete = () =>
     {
        multiselectRef.current.resetSelectedValues();
     }

    useEffect(() => {
        handleSaveAdmin();
    }, [arr])

    return (

        <div class="container text-center">
            <div class="row">
                <div class="col">
                <h6>With selected items</h6>
                    <Multiselect
                        displayValue="key"
                        onKeyPressFn={function noRefCheck() { }}
                        onRemove={function noRefCheck() { }}
                        onSearch={function noRefCheck() { }}
                        onSelect={function noRefCheck() { }}
                        ref={multiselectRef}
                        selectedValues={[
                            {
                              cat: '1',
                              key: 'Option 1'
                            },
                            {
                              cat: '2',
                              key: 'Option 2'
                            }
                          ]}
                        options={[
                            {
                                cat: '1',
                                key: 'Option 1'
                            },
                            {
                                cat: '2',
                                key: 'Option 2'
                            },
                            {
                                cat: '3',
                                key: 'Option 3'
                            },
                            {
                                cat: '4',
                                key: 'Option 4'
                            },
                            {
                                cat: '5',
                                key: 'Option 5'
                            },
                            {
                                cat: '6',
                                key: 'Option 6'
                            },
                            {
                                cat: '7',
                                key: 'Option 7'
                            }
                        ]}
                    />
                    <button 
                    onClick={handleDelete}
                    className='btn btn-danger mt-2'>Reset</button>
                </div>
                
                <div class="col">

                    {selectedValues.map((obj) => {
                        return <h4>Selected : {obj}</h4>
                    })}
                </div>
            </div>



        </div>


    );
}

export default Search;