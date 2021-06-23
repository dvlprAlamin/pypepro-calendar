import React from 'react';
import { taskData } from '../../../fakeData/fakeData';
import './TaskAppointmentModal.css';
import TaskSingleItem from './TaskSingleItem';
const TaskAppointmentModal = () => {
    return (
        <div id="task_appointment_modal" className="modal mr-4">
            <div className="modal-content p-0">
                <div className="row">
                    <div className="col s12 p-0">
                        <ul className="tabs p-0">
                            <li className="tab col s6">
                                <a className="active p-0 d-flex justify-content-center align-items-center" href="#task_appointment_task_tab">
                                    <span className="mt-2 mr-2">
                                        <svg width="16" height="16" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.0832 2.84267L11.4388 1.19823C11.2974 1.06346 11.1096 0.988281 10.9143 0.988281C10.719 0.988281 10.5312 1.06346 10.3899 1.19823L8.92767 2.6649H1.08322C0.847477 2.6649 0.621384 2.75855 0.454685 2.92524C0.287986 3.09194 0.194336 3.31804 0.194336 3.55378V13.3316C0.194336 13.5673 0.287986 13.7934 0.454685 13.9601C0.621384 14.1268 0.847477 14.2205 1.08322 14.2205H10.861C11.0968 14.2205 11.3228 14.1268 11.4895 13.9601C11.6562 13.7934 11.7499 13.5673 11.7499 13.3316V5.2249L13.0832 3.89156C13.2222 3.7524 13.3002 3.56378 13.3002 3.36712C13.3002 3.17046 13.2222 2.98184 13.0832 2.84267ZM6.78545 8.9449L4.92322 9.35823L5.36767 7.51378L9.61211 3.26045L11.0477 4.69601L6.78545 8.9449ZM11.5277 4.18934L10.0921 2.75378L10.9143 1.93156L12.3499 3.36712L11.5277 4.18934Z" />
                                        </svg>
                                    </span>
                                    <span>Tasks</span>
                                </a>
                            </li>
                            <li className="tab col s6">
                                <a className="p-0  d-flex justify-content-center align-items-center" href="#task_appointment_appointment_tab">
                                    <span className="mt-2 mr-2">
                                        <svg width="16" height="16" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.25033 13.6654H11.5837C12.319 13.6654 12.917 13.0674 12.917 12.332V2.9987C12.917 2.26336 12.319 1.66536 11.5837 1.66536H10.2503V0.332031H8.91699V1.66536H4.91699V0.332031H3.58366V1.66536H2.25033C1.51499 1.66536 0.916992 2.26336 0.916992 2.9987V12.332C0.916992 13.0674 1.51499 13.6654 2.25033 13.6654ZM2.25033 3.66536H11.5837V4.9987H2.25033V3.66536Z" />
                                        </svg>
                                    </span>
                                    <span>Appointment</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="task_appointment_task_tab" className="col s12 p-0 white">
                        <p className="text-center">Tuesday, April 27, 2021</p>
                        {
                            taskData.map((item, i) => <TaskSingleItem item={item} />)
                        }

                    </div>
                    <div id="task_appointment_appointment_tab" className="col s12">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskAppointmentModal;