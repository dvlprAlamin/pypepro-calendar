import React from 'react';
import './Activity.css'
import ActivityList from './ActivityList/ActivityList';
import MyCalendar from '../Calendar/Calendar';
import ActivityModal from './ActivityModal/ActivityModal';
import { useState } from 'react';
import TaskAppointmentModal from './TaskAppointmentModal/TaskAppointmentModal';
const Activity = () => {
    const [isCalendar, setIsCalendar] = useState(false)
    return (
        <div className="mr-0 white p-3 radius-10">
            <div>
                <div
                    className="d-flex justify-content-between align-items-center activity__top__header">
                    <h4 className="m-0 pt-1 pb-2">Activity</h4>
                    <div className="d-flex activity__header__buttons pt-1 pb-2">
                        <span
                            className="waves-effect bg-light-blue-10 text-light-blue radius-5 py-2 px-3 d-flex align-items-center mr-3">
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 0.84375C4.89111 0.84375 0.34375 5.39111 0.34375 11C0.34375 16.6001 4.90039 21.1562 10.5 21.1562C16.1084 21.1562 20.6562 16.6084 20.6562 11C20.6562 5.3999 16.1001 0.84375 10.5 0.84375ZM15.7734 12.5625H9.91406C9.86226 12.5625 9.81258 12.5419 9.77596 12.5053C9.73933 12.4687 9.71875 12.419 9.71875 12.3672V4.16406C9.71875 4.11226 9.73933 4.06258 9.77596 4.02596C9.81258 3.98933 9.86226 3.96875 9.91406 3.96875H11.0859C11.1377 3.96875 11.1874 3.98933 11.224 4.02596C11.2607 4.06258 11.2812 4.11226 11.2812 4.16406V11H15.7734C15.8252 11 15.8749 11.0206 15.9115 11.0572C15.9482 11.0938 15.9688 11.1435 15.9688 11.1953V12.3672C15.9688 12.419 15.9482 12.4687 15.9115 12.5053C15.8749 12.5419 15.8252 12.5625 15.7734 12.5625Z" fill="#3C7EF3" />
                            </svg>

                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 0.875C4.51289 0.875 0.875 4.51289 0.875 9C0.875 13.4801 4.52031 17.125 9 17.125C13.4867 17.125 17.125 13.4867 17.125 9C17.125 4.51992 13.4801 0.875 9 0.875ZM13.2188 10.25H8.53125C8.48981 10.25 8.45007 10.2335 8.42076 10.2042C8.39146 10.1749 8.375 10.1352 8.375 10.0938V3.53125C8.375 3.48981 8.39146 3.45007 8.42076 3.42076C8.45007 3.39146 8.48981 3.375 8.53125 3.375H9.46875C9.51019 3.375 9.54993 3.39146 9.57924 3.42076C9.60854 3.45007 9.625 3.48981 9.625 3.53125V9H13.2188C13.2602 9 13.2999 9.01646 13.3292 9.04576C13.3585 9.07507 13.375 9.11481 13.375 9.15625V10.0938C13.375 10.1352 13.3585 10.1749 13.3292 10.2042C13.2999 10.2335 13.2602 10.25 13.2188 10.25Z" />
                            </svg>
                            Today Due : 2
                        </span>
                        <span
                            className="waves-effect bg-red-10 text-red radius-5 py-2 px-3 d-flex align-items-center mr-3">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.0465 2.95354C16.1228 2.0207 15.0238 1.27956 13.8128 0.772706C12.6018 0.265849 11.3026 0.00326128 9.98984 3.01863e-05C8.67705 -0.00320091 7.37656 0.252988 6.16309 0.753878C4.94961 1.25477 3.84706 1.99049 2.91877 2.91877C1.99049 3.84706 1.25477 4.94961 0.753878 6.16309C0.252988 7.37656 -0.00320091 8.67705 3.01863e-05 9.98984C0.00326128 11.3026 0.265849 12.6018 0.772706 13.8128C1.27956 15.0238 2.0207 16.1228 2.95354 17.0465C3.87725 17.9793 4.97616 18.7204 6.18716 19.2273C7.39816 19.7342 8.69737 19.9967 10.0102 20C11.3229 20.0032 12.6234 19.747 13.8369 19.2461C15.0504 18.7452 16.1529 18.0095 17.0812 17.0812C18.0095 16.1529 18.7452 15.0504 19.2461 13.8369C19.747 12.6234 20.0032 11.3229 20 10.0102C19.9967 8.69737 19.7342 7.39816 19.2273 6.18716C18.7204 4.97616 17.9793 3.87725 17.0465 2.95354ZM13.2031 7.86458C13.4143 7.86458 13.6207 7.9272 13.7963 8.04452C13.9719 8.16184 14.1088 8.32859 14.1896 8.52369C14.2704 8.71879 14.2915 8.93347 14.2503 9.14059C14.2091 9.3477 14.1074 9.53795 13.9581 9.68727C13.8088 9.8366 13.6186 9.93829 13.4114 9.97948C13.2043 10.0207 12.9896 9.99954 12.7945 9.91873C12.5994 9.83791 12.4327 9.70106 12.3154 9.52548C12.198 9.34989 12.1354 9.14346 12.1354 8.93229C12.1351 8.79198 12.1624 8.65298 12.216 8.52328C12.2695 8.39358 12.3481 8.27573 12.4474 8.17652C12.5466 8.0773 12.6644 7.99867 12.7941 7.94513C12.9238 7.8916 13.0628 7.86422 13.2031 7.86458ZM6.79686 7.86458C7.00804 7.86458 7.21447 7.9272 7.39005 8.04452C7.56564 8.16184 7.70249 8.32859 7.7833 8.52369C7.86411 8.71879 7.88526 8.93347 7.84406 9.14059C7.80286 9.3477 7.70117 9.53795 7.55185 9.68727C7.40253 9.8366 7.21228 9.93829 7.00516 9.97948C6.79805 10.0207 6.58337 9.99954 6.38827 9.91873C6.19317 9.83791 6.02641 9.70106 5.90909 9.52548C5.79177 9.34989 5.72915 9.14346 5.72915 8.93229C5.7288 8.79198 5.75618 8.65298 5.80971 8.52328C5.86324 8.39358 5.94188 8.27573 6.04109 8.17652C6.14031 8.0773 6.25815 7.99867 6.38785 7.94513C6.51755 7.8916 6.65655 7.86422 6.79686 7.86458ZM10 11.4236C12.0206 11.4236 13.7259 12.7356 14.2584 14.5302C14.3029 14.6868 14.3621 14.9827 14.3621 14.9827H5.64018C5.64018 14.9827 5.69845 14.685 5.74383 14.5302C6.2679 12.7347 7.97713 11.4236 10 11.4236Z"
                                    fill="#FF264A" />
                            </svg>
                            Overdue : 77
                        </span>
                        <span
                            className="waves-effect bg-green-10 text-green radius-5 py-2 px-3 d-flex align-items-center">
                            <i className="material-icons mr-2 text-green">
                                emoji_emotions
                            </i>
                            Complete: 38
                        </span>
                    </div>
                    <a href="#add_activity_modal" className="mt-1 mb-1 modal-trigger add_activity_btn d-inline-flex align-items-center waves-effect white-text py-2 px-3 radius-10">
                        <i className="material-icons text-light-blue white circle p-1 mr-2">
                            add
                        </i>
                        Add New Activity
                    </a>
                    <ActivityModal />
                </div>
                <div className="white">
                    <div className="activity__header__bottom my-2 py-3 row">
                        <div className="col l4 d-flex p-0 navigate_buttons">
                            {
                                !isCalendar &&
                                <>
                                    <span
                                        className="waves-effect bg-gray-light text-dark-blue radius-5 py-2 px-3 mr-1">Today</span>
                                    <span
                                        className="waves-effect bg-gray-light text-dark-blue radius-5 py-2 px-0 d-flex align-items-center mr-1">
                                        <i className="material-icons mr-3">
                                            navigate_before
                                        </i>
                                    </span>
                                    <span
                                        className="waves-effect bg-gray-light text-dark-blue radius-5 py-2 px-1 d-flex align-items-center mr-1">
                                        April 2021
                                    </span>
                                    <span
                                        className="waves-effect bg-gray-light text-dark-blue radius-5 py-2 px-0 d-flex align-items-center mr-1">
                                        <i className="material-icons ml-3">
                                            navigate_next
                                        </i>
                                    </span>
                                </>
                            }
                        </div>
                        <div className="col l6 offset-l2 d-flex justify-content-end p-0">
                            <div className="mr-3">
                                <select className="d-block activity_select_field tasks">
                                    <option selected hidden>Show Tasks</option>
                                    <option value="appointments">Show Appointments</option>
                                    <option value="both">Show Both</option>
                                </select>
                            </div>
                            <div className="activity_calendar_list_tab" style={{ marginRight: isCalendar && 220 }}>
                                <ul className="tabs d-inline-flex align-items-center">
                                    <li className="tab"><a onClick={() => setIsCalendar(false)} className="active py-0 px-3" href="#activity__list__tab">List</a></li>
                                    <li className="tab"><a onClick={() => setIsCalendar(true)} className=" py-0 px-3" href="#calendar__tab">Calendar</a></li>
                                </ul>
                            </div>
                            {!isCalendar &&
                                <>
                                    <select className="d-block activity_select_field columns ml-3">
                                        <option selected hidden>Columns</option>
                                        <option value="option">option</option>
                                        <option value="option">option</option>
                                    </select>
                                    <select className="d-block activity_select_field actions ml-3">
                                        <option selected hidden>Actions</option>
                                        <option value="option">option</option>
                                        <option value="option">option</option>
                                    </select>
                                </>
                            }
                        </div>
                    </div>
                    <div
                        className="activities_buttons_groups d-flex justify-content-between">
                        <div className="d-flex py-2">
                            <div className="button_group d-flex align-items-center radius-5">
                                <span
                                    data-target="task_appointment_modal"
                                    className="modal-trigger button_group_single_btn text-dark-blue-65 white px-2 bg-light-blue d-flex align-items-center justify-content-center">
                                    <i className="material-icons text-dark-blue-65">
                                        menu
                                    </i>
                                </span>
                                <TaskAppointmentModal />
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
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 0.875C4.51289 0.875 0.875 4.51289 0.875 9C0.875 13.4801 4.52031 17.125 9 17.125C13.4867 17.125 17.125 13.4867 17.125 9C17.125 4.51992 13.4801 0.875 9 0.875ZM13.2188 10.25H8.53125C8.48981 10.25 8.45007 10.2335 8.42076 10.2042C8.39146 10.1749 8.375 10.1352 8.375 10.0938V3.53125C8.375 3.48981 8.39146 3.45007 8.42076 3.42076C8.45007 3.39146 8.48981 3.375 8.53125 3.375H9.46875C9.51019 3.375 9.54993 3.39146 9.57924 3.42076C9.60854 3.45007 9.625 3.48981 9.625 3.53125V9H13.2188C13.2602 9 13.2999 9.01646 13.3292 9.04576C13.3585 9.07507 13.375 9.11481 13.375 9.15625V10.0938C13.375 10.1352 13.3585 10.1749 13.3292 10.2042C13.2999 10.2335 13.2602 10.25 13.2188 10.25Z" />
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

                            <select className="d-block activity_select_field selected_users ml-3">
                                <option selected hidden>Selected User[2]</option>
                                <option value="1">option</option>
                                <option value="2">option</option>
                            </select>
                        </div>
                        <div className="py-2">
                            {
                                isCalendar ?
                                    <div className="d-flex calendar_info_item_checkbox">
                                        <label className="mr-5">
                                            <input type="checkbox" className="filled-in" />
                                            <span
                                                className="d-flex justify-content-start align-items-center black-text">
                                                Activities I am following
                                                <i className="material-icons text-dark-blue-65 ml-2">
                                                    info
                                                </i>
                                            </span>
                                        </label>
                                        <label>
                                            <input type="checkbox" className="filled-in" />
                                            <span
                                                className="d-flex justify-content-start align-items-center black-text">
                                                Hide closed activities
                                                <i className="material-icons text-dark-blue-65 ml-2">
                                                    info
                                                </i>
                                            </span>
                                        </label>
                                    </div> :
                                    <div className="button_group d-flex align-items-center radius-5">
                                        <span
                                            className="active button_group_single_btn text-dark-blue-65 white px-2 bg-light-blue d-flex align-items-center justify-content-center">Planned</span>
                                        {
                                            ['Overdue', 'Today', 'Tomorrow', 'This Week', 'Next Week', 'Custom'].map(item => (
                                                <span key={item}
                                                    className="button_group_single_btn text-dark-blue-65 white px-2 bg-light-blue d-flex align-items-center justify-content-center">{item}</span>
                                            ))
                                        }

                                    </div>}
                        </div>
                    </div>

                    <div id="activity__list__tab" className="col s12">
                        <ActivityList />
                    </div>
                    <div id="calendar__tab" className="col s12">
                        <MyCalendar />
                    </div>

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