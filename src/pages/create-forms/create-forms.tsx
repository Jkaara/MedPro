import React, {useState} from 'react';
import Listitem from "../../parts/list-item";
import {firebase_app} from "../../firebase";

function CreateForms() {

    const documentReference = firebase_app
        .firestore()
        .collection('forms')

    const [formName, setFormName] = useState<any>('');
    const [formData, setFormData] = useState<any>([]);

    const createForm = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        const item = {
            formName: formName,
            formData: formData
        };
        documentReference.add(item);
        setFormName('');
        setFormData([]);
    }

    function handleChange(event: any) {
        setFormName(event.target.value)
    }

    function addFormField(e: any) {
        e.preventDefault();

        setFormData([
            ...formData,
            {
                id: formData.length,
                fieldName: e.target.name.value,
                fieldType: e.target.type.value
            }
        ]);
    }

    return (
        <div className="grid grid-cols-4 gap-6 p-6 mx-auto bg-white dark:bg-gray-800 rounded-md shadow-md">

            <div className="w-full col-start-1 col-end-2">

                <div className='m-4'>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="formname">Formularname</label>
                    <input type="text" id="formname" value={formName} onChange={handleChange}
                           className="mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>

                <div className='m-4 text-gray-600 dark:text-gray-400 font-bold text-xl'>
                    Liste der Felder
                </div>
                <div>
                    {formData.map((data: any) => {
                        return (
                            <div className="flex m-4" key={data.fieldName}>
                                <Listitem className="h-8 w-4/6" {...data}/>
                            </div>
                        );
                    })}
                </div>

            </div>

            <div className="w-full col-start-2 col-end-4">
                <h2 className="text-lg text-gray-700 dark:text-white font-semibold capitalize">Feld anlegen</h2>

                <form id="create-form" onSubmit={addFormField} method='POST'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="fieldname">Feldname</label>
                            <input id="name" type="text"
                                   className="mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Typ</label>
                            <select id="type"
                                    className="mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                <option value="text">Text</option>
                                <option value="select">Auswahl</option>
                                <option value="checkbox">Checkbox</option>
                                <option value="radio">Radiobutton</option>
                                <option value="number">Nummer</option>
                                <option value="textarea">Textfeld</option>
                                <option value="email">E-Mail</option>
                                <option value="range">Spanne</option>
                                <option value="search">Suche</option>
                                <option value="tel">Telefonnummer</option>
                                <option value="url">URL</option>
                                <option value="Time">Zeit</option>
                                <option value="datetime">Datum/Uhrzeit</option>
                                <option value="datetime-local">Datum/Uhrzeit lokal</option>
                                <option value="week">Woche</option>
                                <option value="month">Monat</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button
                            className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Feld
                            anlegen
                        </button>
                    </div>
                </form>
            </div>

            <div className="grid grid-rows-2 sm:grid-rows-2 gap-6 mt-4">
                <button onClick={createForm} className="flex w-max items-center py-2 px-4 capitalize tracking-wide bg-blue-600 dark:bg-gray-800 text-white font-medium rounded hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                    Beam me Up Scotty
                </button>
            </div>

        </div>
    );
}


export default CreateForms;
