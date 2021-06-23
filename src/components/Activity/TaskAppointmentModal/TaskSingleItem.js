import React from 'react';

const TaskSingleItem = ({ item }) => {
    const { time, text, status } = item;
    return (
        <div className="single_modal_tab_task py-3 row m-0">
            <div className="col l8 m8">
                <p className="ml-4 pl-2 d-flex align-items-center my-1">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0.875C4.51289 0.875 0.875 4.51289 0.875 9C0.875 13.4801 4.52031 17.125 9 17.125C13.4867 17.125 17.125 13.4867 17.125 9C17.125 4.51992 13.4801 0.875 9 0.875ZM13.2188 10.25H8.53125C8.48981 10.25 8.45007 10.2335 8.42076 10.2042C8.39146 10.1749 8.375 10.1352 8.375 10.0938V3.53125C8.375 3.48981 8.39146 3.45007 8.42076 3.42076C8.45007 3.39146 8.48981 3.375 8.53125 3.375H9.46875C9.51019 3.375 9.54993 3.39146 9.57924 3.42076C9.60854 3.45007 9.625 3.48981 9.625 3.53125V9H13.2188C13.2602 9 13.2999 9.01646 13.3292 9.04576C13.3585 9.07507 13.375 9.11481 13.375 9.15625V10.0938C13.375 10.1352 13.3585 10.1749 13.3292 10.2042C13.2999 10.2335 13.2602 10.25 13.2188 10.25Z" fill="#546376" />
                    </svg>
                    <span className="ml-2 time">{time}</span>
                </p>
                <label>
                    <input type="checkbox" className="filled-in" />
                    <span className="text-dark-blue ml-0 comment">{text}</span>
                </label>
                <div className="ml-4 pl-2 d-flex align-items-center mt-2">
                    <span className="tab_task_round_icon  d-inline-flex justify-content-center align-items-center mr-3">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.06146 8.92546C6.60551 8.61713 6.14658 8.31326 5.69062 8.00492C5.6311 7.96385 5.58854 7.96088 5.52693 8.00492L4.36979 8.7823C5.29836 9.40046 7.1436 10.6332 7.1436 10.6332V9.0323C7.1436 8.99599 7.09747 8.94957 7.06146 8.92546ZM5.68795 7.04242C6.14807 6.74004 6.60551 6.43389 7.06027 6.12397C7.08434 6.10464 7.10417 6.08055 7.11851 6.0532C7.13285 6.02585 7.14139 5.99584 7.1436 5.96504V4.42636C7.1436 4.42636 5.29836 5.65016 4.36801 6.26981C4.77574 6.54243 5.16176 6.80284 5.55193 7.05671C5.58229 7.07635 5.65312 7.06504 5.68795 7.04242ZM7.91265 6.11028C8.38308 6.42913 8.85561 6.74481 9.33021 7.05731C9.34792 7.06611 9.36742 7.0707 9.3872 7.0707C9.40698 7.0707 9.42649 7.06611 9.4442 7.05731L10.6275 6.26951L7.85789 4.41772V6.00552C7.85899 6.02588 7.86445 6.04577 7.8739 6.06385C7.88334 6.08192 7.89656 6.09775 7.91265 6.11028ZM7.56354 6.73588C7.54127 6.72564 7.5169 6.72076 7.4924 6.72164C7.46791 6.72252 7.44395 6.72913 7.42247 6.74094C7.27902 6.83022 7.14062 6.92546 7.00074 7.01921C6.75521 7.18379 6.24628 7.52516 6.24628 7.52516L7.40223 8.2948C7.43018 8.31189 7.46219 8.3212 7.49494 8.32178C7.5277 8.32236 7.56001 8.31417 7.58854 8.29808L8.74926 7.52427C8.74926 7.52427 7.73527 6.84986 7.56354 6.73588ZM4.07812 6.93677V8.11564L4.95967 7.52516L4.07812 6.93677Z" fill="#3C7EF3" />
                            <path d="M7.50065 0.832031C3.81881 0.832031 0.833984 3.81685 0.833984 7.4987C0.833984 11.1805 3.81881 14.1654 7.50065 14.1654C11.1825 14.1654 14.1673 11.1805 14.1673 7.4987C14.1673 3.81685 11.1825 0.832031 7.50065 0.832031ZM11.6376 8.71894C11.6376 8.89096 11.5587 9.01239 11.414 9.10852C10.1896 9.92201 8.96652 10.7374 7.7447 11.5546C7.57059 11.6713 7.41226 11.6663 7.23875 11.5505C6.02506 10.737 4.80849 9.92677 3.58904 9.11983C3.43696 9.01894 3.36315 8.89483 3.36315 8.7112V6.33798C3.36315 6.15525 3.43815 6.03025 3.58994 5.92965C4.8075 5.12221 6.02863 4.31179 7.24261 3.4987C7.41583 3.38292 7.57267 3.37965 7.74678 3.49602C8.96781 4.31368 10.1906 5.12906 11.4152 5.94215C11.5545 6.03471 11.637 6.149 11.637 6.31894L11.6376 8.71894Z" fill="#3C7EF3" />
                            <path d="M9.29347 8.01008C8.84526 8.31445 8.39496 8.61544 7.94258 8.91306C7.87085 8.96008 7.85657 9.01157 7.85746 9.09728V10.6253L10.6253 8.78002L9.47859 8.00978C9.41014 7.96187 9.36282 7.96306 9.29347 8.01008ZM10.8932 8.11276V6.93359L10.0125 7.52496L10.8932 8.11276Z" fill="#3C7EF3" />
                        </svg>
                    </span>
                    <span className="tab_task_round_icon d-inline-flex justify-content-center align-items-center">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.49913 1.55859C4.73455 1.55859 1.55469 4.73846 1.55469 8.50304C1.55469 12.2676 4.73455 15.4475 8.49913 15.4475C12.2637 15.4475 15.4436 12.2676 15.4436 8.50304C15.4436 4.73846 12.2637 1.55859 8.49913 1.55859ZM8.49913 5.03082C9.69844 5.03082 10.5825 5.91415 10.5825 7.11415C10.5825 8.31415 9.69844 9.19748 8.49913 9.19748C7.30052 9.19748 6.4158 8.31415 6.4158 7.11415C6.4158 5.91415 7.30052 5.03082 8.49913 5.03082ZM4.9533 11.8169C5.57622 10.9003 6.6151 10.2891 7.80469 10.2891H9.19358C10.3839 10.2891 11.422 10.9003 12.045 11.8169C11.1575 12.7669 9.89844 13.3642 8.49913 13.3642C7.09983 13.3642 5.8408 12.7669 4.9533 11.8169Z" fill="#3C7EF3" />
                        </svg>
                    </span>
                </div>
            </div>
            {status === 'Complete' ?
                <div className="col offset-l1 l3 m4 d-flex align-items-center mt-4 pt-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM6.59961 9.60156C7.15189 9.60156 7.59961 9.15385 7.59961 8.60156C7.59961 8.04928 7.15189 7.60156 6.59961 7.60156C6.04732 7.60156 5.59961 8.04928 5.59961 8.60156C5.59961 9.15385 6.04732 9.60156 6.59961 9.60156ZM14.3996 8.60147C14.3996 9.15375 13.9519 9.60147 13.3996 9.60147C12.8473 9.60147 12.3996 9.15375 12.3996 8.60147C12.3996 8.04918 12.8473 7.60146 13.3996 7.60146C13.9519 7.60146 14.3996 8.04918 14.3996 8.60147ZM9.99963 15.6015C12.7196 15.6015 14.0663 13.2015 14.3996 12.0015L5.59963 12.0015C5.93297 13.2015 7.27963 15.6015 9.99963 15.6015Z" fill="#27AE60" />
                    </svg>
                    <span className="ml-2 status">Complete</span>
                </div> :
                <div className="col offset-l1 l3 m4 d-flex align-items-center mt-4 pt-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0465 2.95354C16.1228 2.0207 15.0238 1.27956 13.8128 0.772706C12.6018 0.265849 11.3026 0.00326128 9.98984 3.01863e-05C8.67705 -0.00320091 7.37656 0.252988 6.16309 0.753878C4.94961 1.25477 3.84706 1.99049 2.91877 2.91877C1.99049 3.84706 1.25477 4.94961 0.753878 6.16309C0.252988 7.37656 -0.00320091 8.67705 3.01863e-05 9.98984C0.00326128 11.3026 0.265849 12.6018 0.772706 13.8128C1.27956 15.0238 2.0207 16.1228 2.95354 17.0465C3.87725 17.9793 4.97616 18.7204 6.18716 19.2273C7.39816 19.7342 8.69737 19.9967 10.0102 20C11.3229 20.0032 12.6234 19.747 13.8369 19.2461C15.0504 18.7452 16.1529 18.0095 17.0812 17.0812C18.0095 16.1529 18.7452 15.0504 19.2461 13.8369C19.747 12.6234 20.0032 11.3229 20 10.0102C19.9967 8.69737 19.7342 7.39816 19.2273 6.18716C18.7204 4.97616 17.9793 3.87725 17.0465 2.95354ZM13.2031 7.86458C13.4143 7.86458 13.6207 7.9272 13.7963 8.04452C13.9719 8.16184 14.1088 8.32859 14.1896 8.52369C14.2704 8.71879 14.2915 8.93347 14.2503 9.14059C14.2091 9.3477 14.1074 9.53795 13.9581 9.68727C13.8088 9.8366 13.6186 9.93829 13.4114 9.97948C13.2043 10.0207 12.9896 9.99954 12.7945 9.91873C12.5994 9.83791 12.4327 9.70106 12.3154 9.52548C12.198 9.34989 12.1354 9.14346 12.1354 8.93229C12.1351 8.79198 12.1624 8.65298 12.216 8.52328C12.2695 8.39358 12.3481 8.27573 12.4474 8.17652C12.5466 8.0773 12.6644 7.99867 12.7941 7.94513C12.9238 7.8916 13.0628 7.86422 13.2031 7.86458ZM6.79686 7.86458C7.00804 7.86458 7.21447 7.9272 7.39005 8.04452C7.56564 8.16184 7.70249 8.32859 7.7833 8.52369C7.86411 8.71879 7.88526 8.93347 7.84406 9.14059C7.80286 9.3477 7.70117 9.53795 7.55185 9.68727C7.40253 9.8366 7.21228 9.93829 7.00516 9.97948C6.79805 10.0207 6.58337 9.99954 6.38827 9.91873C6.19317 9.83791 6.02641 9.70106 5.90909 9.52548C5.79177 9.34989 5.72915 9.14346 5.72915 8.93229C5.7288 8.79198 5.75618 8.65298 5.80971 8.52328C5.86324 8.39358 5.94188 8.27573 6.04109 8.17652C6.14031 8.0773 6.25815 7.99867 6.38785 7.94513C6.51755 7.8916 6.65655 7.86422 6.79686 7.86458ZM10 11.4236C12.0206 11.4236 13.7259 12.7356 14.2584 14.5302C14.3029 14.6868 14.3621 14.9827 14.3621 14.9827H5.64018C5.64018 14.9827 5.69845 14.685 5.74383 14.5302C6.2679 12.7347 7.97713 11.4236 10 11.4236Z" fill="#FF0000" />
                    </svg>
                    <span className="ml-2 status">Overdue</span>
                </div>}
        </div>
    );
};

export default TaskSingleItem;