import React, {useEffect, useState} from 'react';
import OverviewItem from "../../parts/overview-item";
import {firebase_app} from "../../firebase";
import {render} from "react-dom";

function Overview() {
    const [forms, setForms] = useState<any>([]);
    const documentReference = firebase_app
        .firestore()
        .collection('forms')

    function showData() {

        setForms([]);
        documentReference.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots

                forms.push(
                    {
                        formName: doc.data().formName,
                        formData: doc.data().formData
                    }
                )

                setForms([...forms]);
            });
        });
        tryRerender()
    }

    function tryRerender() {
        console.log('FORMS', forms)
    }

    return (

        <div>
            <div>
                {forms.map((data: any) => {
                    return (
                        <div className="flex m-4" key={data.formName}>
                            <OverviewItem className="h-8 w-4/6" {...data}/>
                        </div>
                    );
                })}
            </div>

            <button onClick={showData}
                    className="flex w-max items-center py-2 px-4 capitalize tracking-wide bg-blue-600 dark:bg-gray-800 text-white font-medium rounded hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">DRÜCK
                MICH
            </button>
        </div>
    );
}

export default Overview;
