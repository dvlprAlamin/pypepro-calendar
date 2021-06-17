import React from 'react';
import { tableData } from '../../fakeData/fakeData';
import ActivityListItem from './ActivityListItem';

const ActivityList = () => {
    return (
        <table className="activities_items_table" cellSpacing="10">
            <thead className="bg-gray-light py-1">
                <tr className="px-1">
                    <td>
                        <label>
                            <input type="checkbox" className="filled-in" />
                            <span className="text-dark-blue"> Title</span>
                        </label>
                    </td>
                    <td>
                        <h5 className="m-0 text-dark-blue">Due Date</h5>
                    </td>
                    <td>
                        <h5 className="m-0 text-dark-blue">Duration</h5>
                    </td>
                    <td>
                        <h5 className="m-0 text-dark-blue">Deal Title</h5>
                    </td>
                    <td>
                        <h5 className="m-0 text-dark-blue">Contact Name</h5>
                    </td>
                    <td>
                        <h5 className="m-0 text-dark-blue">Company Name</h5>
                    </td>
                    <td>
                        <h5 className="m-0 text-dark-blue">Tags</h5>
                    </td>
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map((item, i) => <ActivityListItem item={item} key={i} />)
                }
            </tbody>
        </table>
    );
};

export default ActivityList;