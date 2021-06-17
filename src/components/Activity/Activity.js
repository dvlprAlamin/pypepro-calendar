import React from 'react';
import { tableData } from '../../fakeData/fakeData';
import './Activity.css'
import IconButton from '../Shared/IconButton/IconButton';
import ActivityItem from './ActivityItem';
const Activity = () => {
    return (
        <div className="mr-0 bg-gray-light">
            <div>
                <div
                    className="d-flex justify-content-between align-items-center mb-5">
                    <h4 className="m-0">Activity</h4>
                    <div className="d-flex">
                        <a href="!#"
                            className="waves-effect bg-light-blue-10 text-light-blue radius-5 py-2 px-3 d-flex align-items-center mr-1">
                            <i className="material-icons mr-2 text-light-blue">
                                watch_later
                            </i>
                            Today Due : 2
                        </a>
                        <a href="!#"
                            className="waves-effect bg-red-10 text-red radius-5 py-2 px-3 d-flex align-items-center mr-1">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.0465 2.95354C16.1228 2.0207 15.0238 1.27956 13.8128 0.772706C12.6018 0.265849 11.3026 0.00326128 9.98984 3.01863e-05C8.67705 -0.00320091 7.37656 0.252988 6.16309 0.753878C4.94961 1.25477 3.84706 1.99049 2.91877 2.91877C1.99049 3.84706 1.25477 4.94961 0.753878 6.16309C0.252988 7.37656 -0.00320091 8.67705 3.01863e-05 9.98984C0.00326128 11.3026 0.265849 12.6018 0.772706 13.8128C1.27956 15.0238 2.0207 16.1228 2.95354 17.0465C3.87725 17.9793 4.97616 18.7204 6.18716 19.2273C7.39816 19.7342 8.69737 19.9967 10.0102 20C11.3229 20.0032 12.6234 19.747 13.8369 19.2461C15.0504 18.7452 16.1529 18.0095 17.0812 17.0812C18.0095 16.1529 18.7452 15.0504 19.2461 13.8369C19.747 12.6234 20.0032 11.3229 20 10.0102C19.9967 8.69737 19.7342 7.39816 19.2273 6.18716C18.7204 4.97616 17.9793 3.87725 17.0465 2.95354ZM13.2031 7.86458C13.4143 7.86458 13.6207 7.9272 13.7963 8.04452C13.9719 8.16184 14.1088 8.32859 14.1896 8.52369C14.2704 8.71879 14.2915 8.93347 14.2503 9.14059C14.2091 9.3477 14.1074 9.53795 13.9581 9.68727C13.8088 9.8366 13.6186 9.93829 13.4114 9.97948C13.2043 10.0207 12.9896 9.99954 12.7945 9.91873C12.5994 9.83791 12.4327 9.70106 12.3154 9.52548C12.198 9.34989 12.1354 9.14346 12.1354 8.93229C12.1351 8.79198 12.1624 8.65298 12.216 8.52328C12.2695 8.39358 12.3481 8.27573 12.4474 8.17652C12.5466 8.0773 12.6644 7.99867 12.7941 7.94513C12.9238 7.8916 13.0628 7.86422 13.2031 7.86458ZM6.79686 7.86458C7.00804 7.86458 7.21447 7.9272 7.39005 8.04452C7.56564 8.16184 7.70249 8.32859 7.7833 8.52369C7.86411 8.71879 7.88526 8.93347 7.84406 9.14059C7.80286 9.3477 7.70117 9.53795 7.55185 9.68727C7.40253 9.8366 7.21228 9.93829 7.00516 9.97948C6.79805 10.0207 6.58337 9.99954 6.38827 9.91873C6.19317 9.83791 6.02641 9.70106 5.90909 9.52548C5.79177 9.34989 5.72915 9.14346 5.72915 8.93229C5.7288 8.79198 5.75618 8.65298 5.80971 8.52328C5.86324 8.39358 5.94188 8.27573 6.04109 8.17652C6.14031 8.0773 6.25815 7.99867 6.38785 7.94513C6.51755 7.8916 6.65655 7.86422 6.79686 7.86458ZM10 11.4236C12.0206 11.4236 13.7259 12.7356 14.2584 14.5302C14.3029 14.6868 14.3621 14.9827 14.3621 14.9827H5.64018C5.64018 14.9827 5.69845 14.685 5.74383 14.5302C6.2679 12.7347 7.97713 11.4236 10 11.4236Z"
                                    fill="#FF264A" />
                            </svg>
                            Overdue : 77
                        </a>
                        <a href="!#"
                            className="waves-effect bg-green-10 text-green radius-5 py-2 px-3 d-flex align-items-center mr-1">
                            <i className="material-icons mr-2 text-green">
                                emoji_emotions
                            </i>
                            Complete: 38
                        </a>
                    </div>
                    <IconButton bg="#3C7EF3" title="Add New Activity" icon="add" />
                </div>
                <div className="col s12 white">
                    <div className="activities_tab_header d-flex align-items-center my-2">
                        <a href="!#"
                            className="waves-effect bg-gray-light text-dark-blue radius-5 py-2 px-3 mr-1">Today</a>
                        <a href="!#"
                            className="waves-effect bg-gray-light text-dark-blue radius-5 py-2 px-3 d-flex align-items-center mr-1">
                            <i className="material-icons mr-3">
                                navigate_before
                            </i>
                            April 2021
                            <i className="material-icons ml-3">
                                navigate_next
                            </i>
                        </a>

                    </div>
                    <div
                        className="activities_buttons_groups d-flex justify-content-between py-2">
                        <div className="button_group d-flex align-items-center radius-5">
                            <span
                                className="button_group_single_btn active text-dark-blue-65 white px-2 bg-light-blue d-flex align-items-center justify-content-center">All</span>
                            <span
                                className="button_group_single_btn px-2 d-inline-block white d-flex align-items-center justify-content-center">
                                <i className="material-icons text-dark-blue-65">
                                    call
                                </i>
                            </span>
                            <span
                                className="button_group_single_btn px-2 d-inline-block white d-flex align-items-center justify-content-center">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.61589 18.5021H16.2826C17.2017 18.5021 17.9492 17.7546 17.9492 16.8354V5.16878C17.9492 4.24962 17.2017 3.50212 16.2826 3.50212H14.6159V1.83545H12.9492V3.50212H7.94922V1.83545H6.28255V3.50212H4.61589C3.69672 3.50212 2.94922 4.24962 2.94922 5.16878V16.8354C2.94922 17.7546 3.69672 18.5021 4.61589 18.5021ZM4.61589 6.00212H16.2826V7.66878H4.61589V6.00212Z" />
                                </svg>

                            </span>
                            <span
                                className="button_group_single_btn px-2 d-inline-block white d-flex align-items-center justify-content-center">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.2322 3.72473L17.1766 1.66917C17 1.50071 16.7652 1.40674 16.5211 1.40674C16.277 1.40674 16.0422 1.50071 15.8655 1.66917L14.0378 3.50251H4.2322C3.93752 3.50251 3.6549 3.61957 3.44653 3.82794C3.23816 4.03632 3.12109 4.31893 3.12109 4.61362V16.8358C3.12109 17.1305 3.23816 17.4131 3.44653 17.6215C3.6549 17.8299 3.93752 17.947 4.2322 17.947H16.4544C16.7491 17.947 17.0317 17.8299 17.2401 17.6215C17.4485 17.4131 17.5655 17.1305 17.5655 16.8358V6.70251L19.2322 5.03584C19.4059 4.86189 19.5035 4.62611 19.5035 4.38028C19.5035 4.13446 19.4059 3.89868 19.2322 3.72473ZM11.36 11.3525L9.0322 11.8692L9.58776 9.56362L14.8933 4.24695L16.6878 6.04139L11.36 11.3525ZM17.2878 5.40806L15.4933 3.61362L16.5211 2.58584L18.3155 4.38028L17.2878 5.40806Z" />
                                </svg>

                            </span>
                            <span
                                className="button_group_single_btn px-2 d-inline-block white d-flex align-items-center justify-content-center">
                                <i className="material-icons text-dark-blue-65">
                                    mail
                                </i>
                            </span>
                            <span
                                className="button_group_single_btn px-2 d-inline-block white d-flex align-items-center justify-content-center">
                                <i className="material-icons text-dark-blue-65">
                                    person_add
                                </i>
                            </span>
                            <span
                                className="button_group_single_btn px-2 d-inline-block white d-flex align-items-center justify-content-center">
                                <i className="material-icons text-dark-blue-65">
                                    more_vert
                                </i>
                            </span>
                        </div>
                        <div className="button_group d-flex align-items-center radius-5">
                            <span
                                className="active button_group_single_btn text-dark-blue-65 white px-2 bg-light-blue d-flex align-items-center justify-content-center">Planned</span>
                            {
                                ['Overdue', 'Today', 'Tomorrow', 'This Week', 'Next Week', 'Custom'].map(item => (
                                    <span key={item}
                                        className="button_group_single_btn text-dark-blue-65 white px-2 bg-light-blue d-flex align-items-center justify-content-center">{item}</span>
                                ))
                            }

                        </div>
                    </div>
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
                                tableData.map((item, i) => <ActivityItem item={item} key={i} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className="">
                <div className="modal_footer_buttons text-center pb-3">
                    <a href="!#"
                        className="d-inline-flex align-items-center bg-light-blue white-text p-3 radius-10">
                        <i className="material-icons text-light-blue white circle p-1 mr-2">
                            add
                        </i>
                        Add TAsk
                    </a>
                    <a href="!#"
                        className="d-inline-flex align-items-center bg-red white-text p-3 radius-10 modal-close ml-3">
                        <i className="material-icons text-red white circle p-1 mr-2">
                            close
                        </i>
                        Close
                    </a>
                </div>
            </div> */}
        </div>
    );
};

export default Activity;