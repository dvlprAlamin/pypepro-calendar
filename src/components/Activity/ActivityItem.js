import React from 'react';
import { useState } from 'react';

const ActivityItem = ({ item }) => {
    const { title, dueDate, duration, dealTitle, contactName, companyName, tags } = item;
    const [checked, setChecked] = useState(false);
    return (
        <tr style={{ background: checked ? 'rgba(60, 127, 243, 0.1)' : '#ffffff', marginTop: '10px !important' }}>
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
                <p className="m-0 text-dark-blue-65">{dueDate}</p>
            </td>
            <td>
                <h5 className="m-0 text-dark-blue-65">{duration}</h5>
            </td>
            <td>
                <h5 className="m-0 text-dark-blue-65">{dealTitle}</h5>
            </td>
            <td>
                <h5 className="m-0 text-dark-blue-65">{contactName} </h5>
            </td>
            <td>
                <h5 className="m-0 text-dark-blue-65">{companyName}</h5>
            </td>
            <td>
                <h5 className="m-0 text-dark-blue-65">{tags}</h5>
            </td>
        </tr>
    );
};

export default ActivityItem;