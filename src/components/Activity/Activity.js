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
        <div className="mr-0 white p-3 pt-2 radius-10">
            <div>
                <div
                    className="d-flex justify-content-between align-items-center activity__top__header">
                    <h4 className="m-0 py-2">Activity</h4>
                    <div className="d-flex activity__header__buttons">
                        <span
                            className="waves-effect bg-light-blue-10 text-light-blue radius-5 py-2 px-4 d-flex align-items-center mr-3 my-2">
                            <svg className="mr-2" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 0.84375C4.89111 0.84375 0.34375 5.39111 0.34375 11C0.34375 16.6001 4.90039 21.1562 10.5 21.1562C16.1084 21.1562 20.6562 16.6084 20.6562 11C20.6562 5.3999 16.1001 0.84375 10.5 0.84375ZM15.7734 12.5625H9.91406C9.86226 12.5625 9.81258 12.5419 9.77596 12.5053C9.73933 12.4687 9.71875 12.419 9.71875 12.3672V4.16406C9.71875 4.11226 9.73933 4.06258 9.77596 4.02596C9.81258 3.98933 9.86226 3.96875 9.91406 3.96875H11.0859C11.1377 3.96875 11.1874 3.98933 11.224 4.02596C11.2607 4.06258 11.2812 4.11226 11.2812 4.16406V11H15.7734C15.8252 11 15.8749 11.0206 15.9115 11.0572C15.9482 11.0938 15.9688 11.1435 15.9688 11.1953V12.3672C15.9688 12.419 15.9482 12.4687 15.9115 12.5053C15.8749 12.5419 15.8252 12.5625 15.7734 12.5625Z" fill="#3C7EF3" />
                            </svg>

                            Today Due : 2
                        </span>
                        <span
                            className="waves-effect bg-red-10 text-red radius-5 py-2 px-4 d-flex align-items-center mr-3 my-2">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.0465 2.95354C16.1228 2.0207 15.0238 1.27956 13.8128 0.772706C12.6018 0.265849 11.3026 0.00326128 9.98984 3.01863e-05C8.67705 -0.00320091 7.37656 0.252988 6.16309 0.753878C4.94961 1.25477 3.84706 1.99049 2.91877 2.91877C1.99049 3.84706 1.25477 4.94961 0.753878 6.16309C0.252988 7.37656 -0.00320091 8.67705 3.01863e-05 9.98984C0.00326128 11.3026 0.265849 12.6018 0.772706 13.8128C1.27956 15.0238 2.0207 16.1228 2.95354 17.0465C3.87725 17.9793 4.97616 18.7204 6.18716 19.2273C7.39816 19.7342 8.69737 19.9967 10.0102 20C11.3229 20.0032 12.6234 19.747 13.8369 19.2461C15.0504 18.7452 16.1529 18.0095 17.0812 17.0812C18.0095 16.1529 18.7452 15.0504 19.2461 13.8369C19.747 12.6234 20.0032 11.3229 20 10.0102C19.9967 8.69737 19.7342 7.39816 19.2273 6.18716C18.7204 4.97616 17.9793 3.87725 17.0465 2.95354ZM13.2031 7.86458C13.4143 7.86458 13.6207 7.9272 13.7963 8.04452C13.9719 8.16184 14.1088 8.32859 14.1896 8.52369C14.2704 8.71879 14.2915 8.93347 14.2503 9.14059C14.2091 9.3477 14.1074 9.53795 13.9581 9.68727C13.8088 9.8366 13.6186 9.93829 13.4114 9.97948C13.2043 10.0207 12.9896 9.99954 12.7945 9.91873C12.5994 9.83791 12.4327 9.70106 12.3154 9.52548C12.198 9.34989 12.1354 9.14346 12.1354 8.93229C12.1351 8.79198 12.1624 8.65298 12.216 8.52328C12.2695 8.39358 12.3481 8.27573 12.4474 8.17652C12.5466 8.0773 12.6644 7.99867 12.7941 7.94513C12.9238 7.8916 13.0628 7.86422 13.2031 7.86458ZM6.79686 7.86458C7.00804 7.86458 7.21447 7.9272 7.39005 8.04452C7.56564 8.16184 7.70249 8.32859 7.7833 8.52369C7.86411 8.71879 7.88526 8.93347 7.84406 9.14059C7.80286 9.3477 7.70117 9.53795 7.55185 9.68727C7.40253 9.8366 7.21228 9.93829 7.00516 9.97948C6.79805 10.0207 6.58337 9.99954 6.38827 9.91873C6.19317 9.83791 6.02641 9.70106 5.90909 9.52548C5.79177 9.34989 5.72915 9.14346 5.72915 8.93229C5.7288 8.79198 5.75618 8.65298 5.80971 8.52328C5.86324 8.39358 5.94188 8.27573 6.04109 8.17652C6.14031 8.0773 6.25815 7.99867 6.38785 7.94513C6.51755 7.8916 6.65655 7.86422 6.79686 7.86458ZM10 11.4236C12.0206 11.4236 13.7259 12.7356 14.2584 14.5302C14.3029 14.6868 14.3621 14.9827 14.3621 14.9827H5.64018C5.64018 14.9827 5.69845 14.685 5.74383 14.5302C6.2679 12.7347 7.97713 11.4236 10 11.4236Z"
                                    fill="#FF264A" />
                            </svg>
                            Overdue : 77
                        </span>
                        <span
                            className="waves-effect bg-green-10 text-green-2 radius-5 py-2 px-4 d-flex align-items-center my-2">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM6.59961 9.60156C7.15189 9.60156 7.59961 9.15385 7.59961 8.60156C7.59961 8.04928 7.15189 7.60156 6.59961 7.60156C6.04732 7.60156 5.59961 8.04928 5.59961 8.60156C5.59961 9.15385 6.04732 9.60156 6.59961 9.60156ZM14.3996 8.60147C14.3996 9.15375 13.9519 9.60147 13.3996 9.60147C12.8473 9.60147 12.3996 9.15375 12.3996 8.60147C12.3996 8.04918 12.8473 7.60146 13.3996 7.60146C13.9519 7.60146 14.3996 8.04918 14.3996 8.60147ZM9.99963 15.6015C12.7196 15.6015 14.0663 13.2015 14.3996 12.0015L5.59963 12.0015C5.93297 13.2015 7.27963 15.6015 9.99963 15.6015Z" fill="#27AE60" />
                            </svg>

                            Complete: 38
                        </span>
                    </div>
                    <a href="#add_activity_modal" className="mt-1 mb-1 modal-trigger add_activity_btn d-inline-flex align-items-center waves-effect white-text py-2 px-2 radius-10">
                        <span className="material-icons text-light-blue white circle p-1 mr-2 d-flex justify-content-center align-items-center">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5C10 5.46083 9.96 5.83333 9.49917 5.83333H5.83333V9.49917C5.83333 9.95917 5.46083 10 5 10C4.53917 10 4.16667 9.95917 4.16667 9.49917V5.83333H0.500833C0.0408332 5.83333 0 5.46083 0 5C0 4.53917 0.0408332 4.16667 0.500833 4.16667H4.16667V0.500833C4.16667 0.0399998 4.53917 0 5 0C5.46083 0 5.83333 0.0399998 5.83333 0.500833V4.16667H9.49917C9.96 4.16667 10 4.53917 10 5Z" fill="#3C7EF3" />
                            </svg>
                        </span>
                        Add New Activity
                    </a>
                    <ActivityModal />
                </div>
                <div className="white">
                    <div className="activity__header__bottom mt-2 mb-0 row">
                        <div className="col l3 d-flex p-0 navigate_buttons py-3" style={{ visibility: !isCalendar ? 'visible' : 'hidden' }}>

                            <span
                                className="waves-effect bg-gray-light text-dark-blue radius-5 py-2 px-3 mr-1">Today</span>
                            <span
                                className="waves-effect bg-gray-light text-dark-blue radius-5 py-2 px-0 d-flex align-items-center mr-1">
                                <i className="material-icons mr-1">
                                    navigate_before
                                </i>
                            </span>
                            <span
                                className="waves-effect bg-gray-light text-dark-blue radius-5 py-2 px-1 d-flex align-items-center mr-1">
                                April 2021
                            </span>
                            <span
                                className="waves-effect bg-gray-light text-dark-blue radius-5 py-2 px-0 d-flex align-items-center mr-1">
                                <i className="material-icons ml-1">
                                    navigate_next
                                </i>
                            </span>
                        </div>
                        <div className="col l6 offset-l3 d-flex justify-content-end px-0 py-3 header_bottom_middle">
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
                        className="activities_buttons_groups d-flex justify-content-between align-items-center mb-2">
                        <div className="d-flex py-2">
                            <div className="button_group icon_buttons d-flex align-items-center radius-5 mt-2">
                                <span
                                    data-target="task_appointment_modal"
                                    className="modal-trigger button_group_single_btn text-dark-blue-65 white px-2 bg-light-blue d-flex align-items-center justify-content-center">
                                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.25 13.5H19.75V11.3332H0.25V13.5ZM0.25 8.08316H19.75V5.91684H0.25V8.08316ZM0.25 0.5V2.66684H19.75V0.5H0.25Z" />
                                    </svg>

                                </span>
                                <TaskAppointmentModal />
                                <span
                                    className="button_group_single_btn px-2 d-inline-block white d-flex align-items-center justify-content-center">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.0404 13.6386L15.2125 13.3157C14.88 13.2766 14.5429 13.3134 14.2267 13.4234C13.9104 13.5333 13.6232 13.7134 13.3866 13.9503L11.338 15.9989C8.17742 14.3914 5.60846 11.8225 4.00102 8.66187L6.06073 6.60217C6.53947 6.12343 6.77327 5.45542 6.69534 4.77628L6.37246 1.97063C6.30934 1.42751 6.04869 0.926573 5.64014 0.563187C5.23159 0.199802 4.70367 -0.000648255 4.15689 1.57504e-06H2.23079C0.972706 1.57504e-06 -0.0738448 1.04655 0.00408987 2.30464C0.594166 11.8127 8.19836 19.4057 17.6953 19.9958C18.9533 20.0737 19.9999 19.0272 19.9999 17.7691V15.843C20.011 14.7185 19.1649 13.7722 18.0404 13.6386Z" />
                                    </svg>

                                </span>
                                <span
                                    className="button_group_single_btn px-2 d-inline-block white d-flex align-items-center justify-content-center">
                                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.16667 17.3346H13.8333C14.7525 17.3346 15.5 16.5871 15.5 15.668V4.0013C15.5 3.08214 14.7525 2.33464 13.8333 2.33464H12.1667V0.667969H10.5V2.33464H5.5V0.667969H3.83333V2.33464H2.16667C1.2475 2.33464 0.5 3.08214 0.5 4.0013V15.668C0.5 16.5871 1.2475 17.3346 2.16667 17.3346ZM2.16667 4.83464H13.8333V6.5013H2.16667V4.83464Z" />
                                    </svg>


                                </span>
                                <span
                                    className="button_group_single_btn px-2 d-inline-block white d-flex align-items-center justify-content-center">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.3333 2.55554L14.2777 0.499983C14.101 0.331525 13.8663 0.237549 13.6222 0.237549C13.378 0.237549 13.1433 0.331525 12.9666 0.499983L11.1388 2.33332H1.33328C1.03859 2.33332 0.755979 2.45038 0.547605 2.65875C0.339231 2.86713 0.222168 3.14974 0.222168 3.44443V15.6667C0.222168 15.9613 0.339231 16.244 0.547605 16.4523C0.755979 16.6607 1.03859 16.7778 1.33328 16.7778H13.5555C13.8502 16.7778 14.1328 16.6607 14.3412 16.4523C14.5495 16.244 14.6666 15.9613 14.6666 15.6667V5.53332L16.3333 3.86665C16.507 3.6927 16.6045 3.45692 16.6045 3.21109C16.6045 2.96527 16.507 2.72949 16.3333 2.55554ZM8.46106 10.1833L6.13328 10.7L6.68883 8.39443L11.9944 3.07776L13.7888 4.87221L8.46106 10.1833ZM14.3888 4.23887L12.5944 2.44443L13.6222 1.41665L15.4166 3.21109L14.3888 4.23887Z" />
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
                                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.33419 0C2.45017 0 1.60235 0.351177 0.977252 0.976275C0.352153 1.60137 0.000976563 2.44919 0.000976562 3.33321V3.6682L10.0006 9.05301L20.0003 3.66987V3.33321C20.0003 2.44919 19.6491 1.60137 19.024 0.976275C18.3989 0.351177 17.5511 0 16.667 0H3.33419Z" />
                                        <path d="M19.9993 5.56213L10.3946 10.7336C10.2732 10.799 10.1375 10.8332 9.99964 10.8332C9.86177 10.8332 9.72605 10.799 9.60465 10.7336L0 5.56213V13.3335C0 14.2175 0.351177 15.0654 0.976275 15.6904C1.60137 16.3155 2.44919 16.6667 3.33321 16.6667H16.6661C17.5501 16.6667 18.3979 16.3155 19.023 15.6904C19.6481 15.0654 19.9993 14.2175 19.9993 13.3335V5.56213Z" />
                                    </svg>

                                </span>
                                <span
                                    className="button_group_single_btn px-2 d-inline-block white d-flex align-items-center justify-content-center">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.14062 11.875V9.76562H6.25V8.35938H4.14062V6.25H2.73438V8.35938H0.625V9.76562H2.73438V11.875H4.14062Z" />
                                        <path d="M11.25 10C13.6662 10 15.625 8.04125 15.625 5.625C15.625 3.20875 13.6662 1.25 11.25 1.25C8.83375 1.25 6.875 3.20875 6.875 5.625C6.875 8.04125 8.83375 10 11.25 10Z" />
                                        <path d="M11.25 11.25C8.53828 11.25 3.125 12.925 3.125 16.25V18.75H19.375V16.25C19.375 12.925 13.9617 11.25 11.25 11.25Z" />
                                    </svg>

                                </span>
                                <span
                                    className="button_group_single_btn px-2 d-inline-block white d-flex align-items-center justify-content-center">
                                    <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.30769 12.3076C3.5822 12.3076 4.61538 11.2745 4.61538 9.99995C4.61538 8.72545 3.5822 7.69226 2.30769 7.69226C1.03319 7.69226 0 8.72545 0 9.99995C0 11.2745 1.03319 12.3076 2.30769 12.3076Z" />
                                        <path d="M2.30769 19.9982C3.5822 19.9982 4.61538 18.965 4.61538 17.6905C4.61538 16.416 3.5822 15.3828 2.30769 15.3828C1.03319 15.3828 0 16.416 0 17.6905C0 18.965 1.03319 19.9982 2.30769 19.9982Z" />
                                        <path d="M2.30769 4.61538C3.5822 4.61538 4.61538 3.5822 4.61538 2.30769C4.61538 1.03319 3.5822 0 2.30769 0C1.03319 0 0 1.03319 0 2.30769C0 3.5822 1.03319 4.61538 2.30769 4.61538Z" />
                                    </svg>

                                </span>
                            </div>

                            <select className="d-block activity_select_field selected_users ml-3 mt-2 mr-4">
                                <option selected hidden>Selected User[2]</option>
                                <option value="1">option</option>
                                <option value="2">option</option>
                            </select>
                        </div>
                        <div className="py-2 px-0 mt-2">
                            {
                                isCalendar ?
                                    <div className="d-flex calendar_info_item_checkbox">
                                        <label className="mr-4">
                                            <input type="checkbox" className="filled-in" />
                                            <span
                                                className="d-flex justify-content-start align-items-center black-text">
                                                Activities I am following
                                                <svg className="ml-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 0C2.69163 0 0 2.69163 0 6C0 9.30837 2.69163 12 6 12C9.30836 12 12 9.30837 12 6C12 2.69163 9.30836 0 6 0ZM6.57692 9.22817H5.42308V8.07433H6.57692V9.22817ZM6.46154 7.38462H5.53846L5.36538 2.76923H6.63461L6.46154 7.38462Z" fill="#133159" fill-opacity="0.65" />
                                                </svg>
                                            </span>
                                        </label>
                                        <label className="ml-1">
                                            <input type="checkbox" className="filled-in" />
                                            <span
                                                className="d-flex justify-content-start align-items-center black-text">
                                                Hide closed activities
                                                <svg className="ml-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 0C2.69163 0 0 2.69163 0 6C0 9.30837 2.69163 12 6 12C9.30836 12 12 9.30837 12 6C12 2.69163 9.30836 0 6 0ZM6.57692 9.22817H5.42308V8.07433H6.57692V9.22817ZM6.46154 7.38462H5.53846L5.36538 2.76923H6.63461L6.46154 7.38462Z" fill="#133159" fill-opacity="0.65" />
                                                </svg>
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