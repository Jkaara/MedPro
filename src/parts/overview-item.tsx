import React from "react";

function OverviewItem(props: any) {
    return (
        <section className="bg-white dark:bg-gray-800 container mx-auto p-6">
            <h2 className="text-gray-800 dark:text-white font-medium capitalize text-xl md:text-2xl">{props.formName}</h2>

            <table className="table-auto">
                <thead>
                <tr>
                    {props.formData.map((data:any) => {
                        return(
                            <th>{data.fieldName}</th>
                        )
                    })}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Intro to CSS</td>
                    <td>Adam</td>
                    <td>858</td>
                </tr>
                <tr className="bg-emerald-200">
                    <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                    <td>Adam</td>
                    <td>112</td>
                </tr>
                <tr>
                    <td>Intro to JavaScript</td>
                    <td>Chris</td>
                    <td>1,280</td>
                </tr>
                </tbody>
            </table>
        </section>
    )
}

export default OverviewItem
