import React from 'react';
import { useState } from 'react';
import './ActivityList.css'
const ActivityListItem = ({ item }) => {
    const { title, dueDate, dueRed, duration, dealTitle, contactName, companyName, tags } = item;
    const [checked, setChecked] = useState(false);
    return (
        <tr style={{ background: checked ? 'rgba(60, 127, 243, 0.1)' : '#ffffff' }}>
            <td>
                <label>
                    <input type="checkbox" onChange={() => setChecked(!checked)} className="filled-in" />
                    <span
                        className="d-flex justify-content-start align-items-center"><i
                            className="material-icons mr-2">
                            phone
                        </i>
                        {title}
                    </span>
                </label>
            </td>
            <td>
                <p className={`m-0 ${dueRed ? 'text-red' : 'text-dark-blue-65'}`}>{dueDate}</p>
            </td>
            <td>
                <p className="m-0 text-dark-blue-65">{duration}</p>
            </td>
            <td>
                <p className="m-0 text-dark-blue-65">{dealTitle}</p>
            </td>
            <td>
                <p className="m-0 text-dark-blue-65">{contactName} </p>
            </td>
            <td>
                <p className="m-0 text-dark-blue-65">{companyName}</p>
            </td>
            <td>
                <p className="m-0 text-dark-blue-65">{tags}</p>
            </td>
        </tr>
    );
};

export default ActivityListItem;