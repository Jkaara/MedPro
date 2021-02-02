import React from "react";

function Listitem(props: any) {
    return (
        <div className="grid grid-cols-4 w-full mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">

            <div className="w-full p-4 md:p-4">
                <span className="m-4 text-gray-800 dark:text-white font-bold text-xl">{props.fieldName}</span>

                <span className="m-4 text-gray-600 dark:text-gray-400 font-bold text-xl">{props.fieldType}</span>
            </div>


                <div className="flex item-center justify-center mt-3">
                    <button
                        className="mx-4 px-2 py-1 bg-gray-800 dark:bg-gray-700 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600 ">
                        Edit
                    </button>
                    <button
                        className="mx-4 px-2 py-1 bg-gray-800 dark:bg-gray-700 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600 ">
                        Löschen
                    </button>
                </div>
        </div>
    )
}

export default Listitem
