import React from 'react';
import './ActivityModal.css'
const ActivityModal = () => {
    return (
        <div id="add_activity_modal" className="modal mr-0">
            <div className="modal-content">
                <div
                    className="d-flex mb-4 justify-content-between align-items-center modal_header">
                    <h4 className="m-0">Add Task</h4>
                    <i className="material-icons white-text circle bg-red modal-close">
                        close
                    </i>
                </div>
                <div className="d-flex add_activity_top_buttons my-4">
                    <a href="!#"
                        className="active white text-gray waves-effect py-2 px-3 radius-5 d-flex justify-content-center align-items-center mr-2">
                        <i className="material-icons mr-1">
                            phone_in_talk
                        </i>
                        Call
                    </a>
                    <a href="!#"
                        className="white text-gray waves-effect py-2 px-3 radius-5 d-flex justify-content-center align-items-center mr-2">
                        <svg className="mr-1 mt-1" width="18" height="18" viewBox="0 0 18 18"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.3983 8.64207C13.4443 8.64207 13.4901 8.64207 13.5362 8.64632V3.09375H0.00390625V12.6947C0.00455909 13.4558 0.621456 14.0726 1.38262 14.0734H9.03231C8.96344 13.7578 8.92852 13.4356 8.92787 13.1125C8.93064 10.6447 10.9305 8.64485 13.3983 8.64207ZM3.11646 6.93337H9.59225C9.75366 6.93337 9.88471 7.06425 9.88471 7.22582C9.88471 7.38723 9.75366 7.51828 9.59225 7.51828H3.11646C2.9549 7.51828 2.82401 7.38723 2.82401 7.22582C2.82401 7.06425 2.9549 6.93337 3.11646 6.93337ZM6.99345 10.2339H3.11646C2.9549 10.2339 2.82401 10.1029 2.82401 9.94147C2.82401 9.77991 2.9549 9.64902 3.11646 9.64902H6.99345C7.15502 9.64902 7.28591 9.77991 7.28591 9.94147C7.28591 10.1029 7.15502 10.2339 6.99345 10.2339Z" />
                            <path
                                d="M13.3972 9.23047C11.2513 9.23047 9.51172 10.97 9.51172 13.1159C9.51172 15.2619 11.2513 17.0014 13.3972 17.0014C15.5431 17.0014 17.2827 15.2619 17.2827 13.1159C17.2809 10.9708 15.5423 9.23226 13.3972 9.23047ZM15.8246 12.1299L13.0504 14.7829C12.9962 14.8341 12.9244 14.8625 12.85 14.8624C12.7723 14.8617 12.6977 14.832 12.6411 14.7788L11.0659 13.1995C10.9518 13.0853 10.9518 12.9 11.0659 12.786C11.1801 12.6717 11.3653 12.6717 11.4796 12.786L12.8541 14.1604L15.4235 11.708C15.4793 11.654 15.5544 11.6245 15.6321 11.6259C15.7097 11.6276 15.7835 11.66 15.8372 11.7163C15.9464 11.8345 15.9408 12.0186 15.8246 12.1299Z" />
                            <path
                                d="M13.5365 1.37872C13.5357 0.61755 12.9189 0.000652844 12.1578 0H10.3195V0.923225C10.3195 1.08479 10.1886 1.21568 10.027 1.21568C9.86546 1.21568 9.73458 1.08479 9.73458 0.923225V0H3.80192V0.923225C3.80192 1.08479 3.67103 1.21568 3.50946 1.21568C3.34789 1.21568 3.21701 1.08479 3.21701 0.923225V0H1.37872C0.61755 0.000652844 0.000816 0.61755 0 1.37872V2.51508H13.5323V1.37872H13.5365Z" />
                        </svg>
                        Appointment
                    </a>
                    <a href="!#"
                        className="white text-gray waves-effect py-2 px-3 radius-5 d-flex justify-content-center align-items-center mr-2">
                        <svg className="mr-1" width="13" height="17" viewBox="0 0 13 17"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.87793 1.24772H7.67322C7.52289 1.24307 7.39372 1.13971 7.35618 0.994116C7.24202 0.401023 6.71285 -0.0205456 6.10924 0.0007735C5.50198 -0.00986585 4.9754 0.41854 4.86229 1.01527C4.82321 1.15686 4.69202 1.25306 4.54525 1.24776H3.38281V3.36127H8.87793V1.24772Z" />
                            <path
                                d="M12.2586 15.495V3.38463C12.2598 2.90606 11.8729 2.51706 11.3943 2.51576C11.3724 2.51572 11.3505 2.51649 11.3286 2.51807H9.51097V3.59596C9.51097 3.76506 9.40531 3.99755 9.23621 3.99755H3.00139C2.83229 3.99755 2.74779 3.76506 2.74779 3.59596V2.51811H0.930157C0.452883 2.48308 0.0375437 2.84162 0.00255121 3.31893C0.000933063 3.34082 0.000164473 3.36274 0.00024538 3.38467V15.495C-0.0115671 16.0202 0.404581 16.4554 0.929712 16.4672C0.929874 16.4672 0.930036 16.4672 0.930197 16.4672H11.3286C11.8538 16.4557 12.2701 16.0206 12.2586 15.4955C12.2586 15.4953 12.2586 15.4952 12.2586 15.495ZM4.41744 12.7052L2.7689 14.248C2.71619 14.3111 2.63961 14.3494 2.55757 14.3537C2.46926 14.3502 2.38581 14.3123 2.32508 14.248L1.45856 13.3604C1.34339 13.2314 1.35282 13.0339 1.47968 12.9166C1.60294 12.7957 1.80024 12.7957 1.9235 12.9166L2.55753 13.5929L3.99473 12.2402C4.13883 12.1408 4.33629 12.1769 4.43572 12.321C4.51687 12.4386 4.50935 12.5959 4.41744 12.7052ZM4.41744 9.32357L2.7689 10.8664C2.71619 10.9295 2.63961 10.9678 2.55757 10.9721C2.46926 10.9686 2.38581 10.9307 2.32508 10.8664L1.45856 9.97876C1.34339 9.84979 1.35282 9.65234 1.47968 9.53494C1.60294 9.4141 1.80024 9.4141 1.9235 9.53494L2.55753 10.2112L3.99473 8.85859C4.13883 8.75916 4.33629 8.79532 4.43572 8.93942C4.51687 9.05698 4.50935 9.21426 4.41744 9.32357ZM4.41744 5.94196L2.7689 7.48482C2.71619 7.54789 2.63961 7.58616 2.55757 7.59049C2.46926 7.58701 2.38581 7.54906 2.32508 7.48482L1.45856 6.59715C1.34339 6.46818 1.35282 6.27072 1.47968 6.15333C1.60294 6.03249 1.80024 6.03249 1.9235 6.15333L2.55753 6.82963L3.99473 5.47698C4.13883 5.37754 4.33629 5.41371 4.43572 5.55781C4.51687 5.67537 4.50935 5.83265 4.41744 5.94196ZM10.5677 13.931H5.70666C5.53157 13.931 5.38962 13.7891 5.38962 13.614C5.38962 13.4389 5.53157 13.2969 5.70666 13.2969H10.5677C10.7428 13.2969 10.8847 13.4389 10.8847 13.614C10.8847 13.7891 10.7428 13.931 10.5677 13.931ZM10.5677 10.5494H5.70666C5.53157 10.5494 5.38962 10.4074 5.38962 10.2324C5.38962 10.0573 5.53157 9.91533 5.70666 9.91533H10.5677C10.7428 9.91533 10.8847 10.0573 10.8847 10.2324C10.8847 10.4074 10.7428 10.5494 10.5677 10.5494ZM10.5677 7.16779H5.70666C5.53157 7.16779 5.38962 7.02583 5.38962 6.85075C5.38962 6.67567 5.53157 6.53371 5.70666 6.53371H10.5677C10.7428 6.53371 10.8847 6.67567 10.8847 6.85075C10.8847 7.02588 10.7428 7.16779 10.5677 7.16779Z" />
                        </svg>

                        Task
                    </a>

                    <a href="!#"
                        className="white text-gray waves-effect py-2 px-3 radius-5 d-flex justify-content-center align-items-center mr-2">
                        <i className="material-icons mr-1">
                            watch_later
                        </i>
                        Deadline
                    </a>
                    <a href="!#"
                        className="white text-gray waves-effect py-2 px-3 radius-5 d-flex justify-content-center align-items-center mr-2">
                        <i className="material-icons mr-1">
                            mail
                        </i>
                        Email
                    </a>
                    <a href="!#"
                        className="white text-gray waves-effect py-2 px-3 radius-5 d-flex justify-content-center align-items-center mr-2">
                        <i className="material-icons mr-1">
                            person_add
                        </i>
                        Followup
                    </a>
                    <a href="!#"
                        className="white text-gray waves-effect py-2 px-3 radius-5 d-flex justify-content-center align-items-center mr-2">
                        <i className="material-icons mr-1">
                            more_horiz
                        </i>
                        Others
                    </a>
                </div>
                <div className="row">
                    <div className="col s12">
                        <h6 className="text-dark-blue m-0 text-left mb-2">Title</h6>
                        <input type="text" placeholder="Enter title"
                            className="add_activity_text_field radius-5 white" />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <h6 className="text-dark-blue m-0 text-left mb-2">Description</h6>
                        <textarea type="text"
                            className="add_activity_text_field radius-5 pt-3 white"></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <h6 className="text-dark-blue m-0 text-left mb-2">Assign To</h6>
                        <select className="d-block add_activity_text_field radius-5 white">
                            <option selected hidden>Select an user</option>
                            <option value="1">User 1</option>
                            <option value="2">User 2</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col m4 s12">
                        <h6 className="text-dark-blue m-0 text-left mb-2">Date</h6>
                        <input type="date" className="add_activity_text_field radius-5 white" />
                    </div>
                    <div className="col m4 s12">
                        <h6 className="text-dark-blue m-0 text-left mb-2">Time</h6>
                        <input type="time" className="add_activity_text_field radius-5 white" />
                    </div>
                    <div className="col m4 s12">
                        <h6 className="text-dark-blue m-0 text-left mb-2">Duration (hh:mm)</h6>
                        <input type="time" className="add_activity_text_field radius-5 white" />
                    </div>
                </div>
                <div
                    className="d-flex mb-4 justify-content-between align-items-center modal_header">
                    <h4 className="m-0">Contact</h4>
                </div>
                <div className="row">
                    <div className="col m4 s12">
                        <h6 className="text-dark-blue m-0 text-left mb-2">Name</h6>
                        <input type="text" placeholder="Name"
                            className="add_activity_text_field radius-5 white" />
                    </div>
                    <div className="col m4 s12">
                        <h6 className="text-dark-blue m-0 text-left mb-2">Email</h6>
                        <input type="email" placeholder="example@gmail.com"
                            className="add_activity_text_field radius-5 white" />
                    </div>
                    <div className="col m4 s12">
                        <h6 className="text-dark-blue m-0 text-left mb-2">Phone</h6>
                        <input type="text" placeholder="+0123456789"
                            className="add_activity_text_field radius-5 white" />
                    </div>
                </div>
                <div className="text-left">
                    <label>
                        <input type="checkbox" className="filled-in add_activity_checkbox" />
                        <span className="text-dark-blue">Send invitation to the attendee</span>
                    </label>
                </div>
                <div className="text-left mt-3">
                    <label>
                        <input type="checkbox" className="filled-in add_activity_checkbox" />
                        <span className="text-dark-blue">Send an email notification to the
                            attendee</span>
                    </label>
                </div>
                <div className="text-left mt-3">
                    <label>
                        <input type="checkbox" className="filled-in add_activity_checkbox" />
                        <span className="text-dark-blue">Remind me</span>
                        <select
                            className="pt-0 mx-2 d-inline-block radius-5 add_activity_select_input add_task_reminder_time">
                            <option value="30">30 minutes</option>
                            <option value="40">40 minutes</option>
                        </select>
                        <h5 className="text-dark-blue d-inline-block m-0">before the event</h5>
                    </label>
                </div>
            </div>
            <div className="modal-footer mb-4">
                <div className="add_activity_footer_buttons text-center">
                    <a href="!#"
                        className="d-inline-flex align-items-center bg-light-blue white-text py-2 px-3 radius-10">
                        <span className="white circle mr-2 d-flex justify-content-center align-items-center">
                            <i className="material-icons text-light-blue">
                                add
                            </i>
                        </span>
                        Add Task
                    </a>
                    <a href="!#"
                        className="d-inline-flex align-items-center bg-red white-text  py-2 px-3 radius-10 modal-close ml-3">
                        <span className="white circle mr-2 d-flex justify-content-center align-items-center">
                            <i className="material-icons text-red">
                                close
                            </i>
                        </span>
                        Close
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ActivityModal;