import React from 'react';
import './ActivityModal.css'
const ActivityModal = () => {
    return (
        <div id="add_activity_modal" className="modal mr-0">
            <div className="modal-content p-0">
                <div
                    className="d-flex mb-4 justify-content-between align-items-center modal_header">
                    <h4 className="m-0 text-dark-blue">Activity</h4>
                    <svg className="modal-close" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z" fill="#FF264A" />
                        <path d="M17.1242 19.1372L19.1348 17.1253L8.87702 6.86082L6.86649 8.87267L17.1242 19.1372Z" fill="white" />
                        <path d="M8.87702 19.1397L19.1348 8.87518L17.1242 6.86333L6.86649 17.1278L8.87702 19.1397Z" fill="white" />
                    </svg>

                </div>
                <div className="px-4">
                    <div className="d-flex add_activity_top_buttons my-4">
                        <a href="!#"
                            className="active white text-gray waves-effect py-2 px-4 radius-5 d-flex justify-content-center align-items-center mr-2">
                            <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.84593 3.73874C8.78429 3.73052 8.72184 3.7353 8.66262 3.75276C8.6034 3.77021 8.54872 3.79997 8.50212 3.8401C8.45551 3.88022 8.41801 3.92983 8.39205 3.98572C8.36608 4.0416 8.35223 4.10252 8.35138 4.16453L8.34776 4.461C8.34625 4.56936 8.38468 4.67519 8.45574 4.75832C8.52679 4.84145 8.62549 4.89606 8.73303 4.91174C9.50654 5.01972 10.2272 5.37961 10.7831 5.93547C11.339 6.49133 11.6988 7.21202 11.8068 7.98553C11.8226 8.09307 11.8774 8.19172 11.9606 8.26268C12.0438 8.33364 12.1497 8.37194 12.2581 8.37029L12.5545 8.36667C12.6166 8.36582 12.6775 8.35196 12.7334 8.326C12.7892 8.30003 12.8389 8.26254 12.879 8.21593C12.9191 8.16933 12.9489 8.11464 12.9663 8.05542C12.9838 7.9962 12.9886 7.93376 12.9803 7.87212C12.8416 6.82931 12.3595 5.85647 11.6106 5.10775C10.8617 4.35903 9.88877 3.87725 8.84593 3.73874ZM8.85256 1.37362C8.79209 1.36765 8.73127 1.37418 8.67387 1.39281C8.61648 1.41145 8.56375 1.44178 8.51898 1.48192C8.47421 1.52206 8.43836 1.57115 8.41367 1.62611C8.38897 1.68108 8.37597 1.74075 8.37546 1.80139L8.37183 2.09681C8.37013 2.20883 8.41113 2.31805 8.48649 2.40232C8.56186 2.4866 8.66596 2.53961 8.77767 2.55061C10.1542 2.68625 11.448 3.30023 12.4332 4.28539C13.4183 5.27055 14.0323 6.56432 14.168 7.94089C14.179 8.0526 14.232 8.1567 14.3162 8.23207C14.4005 8.30744 14.5097 8.34843 14.6217 8.34673L14.9172 8.3431C14.9778 8.3426 15.0375 8.32959 15.0924 8.3049C15.1474 8.2802 15.1965 8.24435 15.2366 8.19958C15.2768 8.15481 15.3071 8.10209 15.3257 8.04469C15.3444 7.9873 15.3509 7.92647 15.3449 7.866C15.1865 6.20616 14.4484 4.64509 13.2607 3.45763C12.0729 2.27017 10.5117 1.53246 8.85179 1.3744L8.85256 1.37362ZM8.32877 6.54719L8.32445 6.85223C8.32364 6.94882 8.35431 7.0436 8.41184 7.12224C8.46936 7.20088 8.5506 7.2591 8.64327 7.28809C8.82723 7.34618 8.99499 7.44813 9.13192 7.58507C9.26886 7.722 9.37081 7.88976 9.4289 8.07372C9.45773 8.16667 9.51595 8.2482 9.59471 8.30593C9.67348 8.36367 9.76848 8.39444 9.86529 8.39358L10.1703 8.38926C10.2372 8.38844 10.3027 8.37251 10.362 8.34265C10.4213 8.31279 10.4728 8.26979 10.5127 8.21685C10.5526 8.16392 10.5799 8.10243 10.5924 8.03699C10.605 7.97154 10.6025 7.90384 10.5852 7.83896C10.4763 7.43056 10.2606 7.05685 9.96036 6.75663C9.66014 6.45641 9.28642 6.24065 8.87803 6.13177C8.81306 6.11449 8.74528 6.11209 8.67977 6.12474C8.61427 6.1374 8.55275 6.16477 8.49982 6.20482C8.44689 6.24487 8.40394 6.29655 8.37418 6.35598C8.34443 6.41541 8.32864 6.48105 8.328 6.54797L8.32877 6.54719Z" />
                                <path d="M6.95789 12.6071C7.94324 14.667 9.60868 16.3325 11.6685 17.3178L12.9609 15.7326C13.0467 15.6272 13.165 15.5532 13.2978 15.5217C13.4307 15.4902 13.571 15.503 13.6975 15.5581L16.6582 16.8483C16.795 16.9078 16.9073 17.0132 16.9755 17.146C17.0437 17.2788 17.0635 17.4305 17.0313 17.5746L16.4246 20.3095C16.3938 20.4485 16.3167 20.5722 16.2057 20.6604C16.0947 20.7486 15.9565 20.7961 15.8135 20.7951C9.05662 20.7343 3.54109 15.2089 3.48061 8.46216C3.4794 8.31916 3.52668 8.18082 3.61472 8.06971C3.70277 7.9586 3.8264 7.88127 3.96544 7.85032L6.69923 7.24251C6.84368 7.21019 6.9958 7.23 7.12888 7.29848C7.26195 7.36696 7.36746 7.47973 7.42687 7.61697L8.71681 10.578C8.77196 10.7044 8.78482 10.8446 8.75343 10.9775C8.72205 11.1104 8.64813 11.2286 8.54283 11.3145L6.95789 12.6071Z" />
                            </svg>
                            Call
                        </a>
                        <a href="!#"
                            className="white text-gray waves-effect py-2 px-4 radius-5 d-flex justify-content-center align-items-center mr-2">
                            <svg className="mr-2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3983 8.64207C13.4443 8.64207 13.4901 8.64207 13.5362 8.64632V3.09375H0.00390625V12.6947C0.00455909 13.4558 0.621456 14.0726 1.38262 14.0734H9.03231C8.96344 13.7578 8.92852 13.4356 8.92787 13.1125C8.93064 10.6447 10.9305 8.64485 13.3983 8.64207ZM3.11646 6.93337H9.59225C9.75366 6.93337 9.88471 7.06425 9.88471 7.22582C9.88471 7.38723 9.75366 7.51828 9.59225 7.51828H3.11646C2.9549 7.51828 2.82401 7.38723 2.82401 7.22582C2.82401 7.06425 2.9549 6.93337 3.11646 6.93337ZM6.99345 10.2339H3.11646C2.9549 10.2339 2.82401 10.1029 2.82401 9.94147C2.82401 9.77991 2.9549 9.64902 3.11646 9.64902H6.99345C7.15502 9.64902 7.28591 9.77991 7.28591 9.94147C7.28591 10.1029 7.15502 10.2339 6.99345 10.2339Z" />
                                <path d="M13.3972 9.23047C11.2513 9.23047 9.51172 10.97 9.51172 13.1159C9.51172 15.2619 11.2513 17.0014 13.3972 17.0014C15.5431 17.0014 17.2827 15.2619 17.2827 13.1159C17.2809 10.9708 15.5423 9.23226 13.3972 9.23047ZM15.8246 12.1299L13.0504 14.7829C12.9962 14.8341 12.9244 14.8625 12.85 14.8624C12.7723 14.8617 12.6977 14.832 12.6411 14.7788L11.0659 13.1995C10.9518 13.0853 10.9518 12.9 11.0659 12.786C11.1801 12.6717 11.3653 12.6717 11.4796 12.786L12.8541 14.1604L15.4235 11.708C15.4793 11.654 15.5544 11.6245 15.6321 11.6259C15.7097 11.6276 15.7835 11.66 15.8372 11.7163C15.9464 11.8345 15.9408 12.0186 15.8246 12.1299Z" />
                                <path d="M13.5365 1.37872C13.5357 0.61755 12.9189 0.000652844 12.1578 0H10.3195V0.923225C10.3195 1.08479 10.1886 1.21568 10.027 1.21568C9.86546 1.21568 9.73458 1.08479 9.73458 0.923225V0H3.80192V0.923225C3.80192 1.08479 3.67103 1.21568 3.50946 1.21568C3.34789 1.21568 3.21701 1.08479 3.21701 0.923225V0H1.37872C0.61755 0.000652844 0.000816 0.61755 0 1.37872V2.51508H13.5323V1.37872H13.5365Z" />
                            </svg>
                            Appointment
                        </a>
                        <a href="!#"
                            className="white text-gray waves-effect py-2 px-4 radius-5 d-flex justify-content-center align-items-center mr-2">
                            <svg className="mr-2" width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.87745 1.24772H7.67273C7.52241 1.24307 7.39324 1.13971 7.3557 0.994116C7.24153 0.401023 6.71236 -0.0205456 6.10875 0.0007735C5.5015 -0.00986585 4.97491 0.41854 4.8618 1.01527C4.82272 1.15686 4.69153 1.25306 4.54476 1.24776H3.38232V3.36127H8.87745V1.24772Z" />
                                <path d="M12.2586 15.4949V3.38457C12.2598 2.906 11.8729 2.517 11.3943 2.5157C11.3724 2.51566 11.3505 2.51643 11.3286 2.51801H9.51097V3.5959C9.51097 3.765 9.40531 3.99748 9.23621 3.99748H3.00139C2.83229 3.99748 2.74779 3.765 2.74779 3.5959V2.51805H0.930157C0.452883 2.48302 0.0375437 2.84156 0.00255121 3.31887C0.000933063 3.34076 0.000164473 3.36268 0.00024538 3.38461V15.495C-0.0115671 16.0201 0.404581 16.4554 0.929712 16.4672C0.929874 16.4672 0.930036 16.4672 0.930197 16.4672H11.3286C11.8538 16.4556 12.2701 16.0205 12.2586 15.4954C12.2586 15.4953 12.2586 15.4951 12.2586 15.4949ZM4.41744 12.7051L2.7689 14.248C2.71619 14.3111 2.63961 14.3493 2.55757 14.3537C2.46926 14.3502 2.38581 14.3122 2.32508 14.248L1.45856 13.3603C1.34339 13.2313 1.35282 13.0339 1.47968 12.9165C1.60294 12.7957 1.80024 12.7957 1.9235 12.9165L2.55753 13.5928L3.99473 12.2401C4.13883 12.1407 4.33629 12.1769 4.43572 12.321C4.51687 12.4385 4.50935 12.5958 4.41744 12.7051ZM4.41744 9.32351L2.7689 10.8664C2.71619 10.9294 2.63961 10.9677 2.55757 10.972C2.46926 10.9686 2.38581 10.9306 2.32508 10.8664L1.45856 9.9787C1.34339 9.84973 1.35282 9.65228 1.47968 9.53488C1.60294 9.41404 1.80024 9.41404 1.9235 9.53488L2.55753 10.2112L3.99473 8.85853C4.13883 8.7591 4.33629 8.79526 4.43572 8.93936C4.51687 9.05692 4.50935 9.2142 4.41744 9.32351ZM4.41744 5.9419L2.7689 7.48476C2.71619 7.54783 2.63961 7.5861 2.55757 7.59043C2.46926 7.58695 2.38581 7.549 2.32508 7.48476L1.45856 6.59708C1.34339 6.46812 1.35282 6.27066 1.47968 6.15327C1.60294 6.03243 1.80024 6.03243 1.9235 6.15327L2.55753 6.82957L3.99473 5.47692C4.13883 5.37748 4.33629 5.41365 4.43572 5.55775C4.51687 5.6753 4.50935 5.83259 4.41744 5.9419ZM10.5677 13.931H5.70666C5.53157 13.931 5.38962 13.789 5.38962 13.6139C5.38962 13.4388 5.53157 13.2969 5.70666 13.2969H10.5677C10.7428 13.2969 10.8847 13.4388 10.8847 13.6139C10.8847 13.789 10.7428 13.931 10.5677 13.931ZM10.5677 10.5493H5.70666C5.53157 10.5493 5.38962 10.4074 5.38962 10.2323C5.38962 10.0572 5.53157 9.91527 5.70666 9.91527H10.5677C10.7428 9.91527 10.8847 10.0572 10.8847 10.2323C10.8847 10.4074 10.7428 10.5493 10.5677 10.5493ZM10.5677 7.16773H5.70666C5.53157 7.16773 5.38962 7.02577 5.38962 6.85069C5.38962 6.67561 5.53157 6.53365 5.70666 6.53365H10.5677C10.7428 6.53365 10.8847 6.67561 10.8847 6.85069C10.8847 7.02581 10.7428 7.16773 10.5677 7.16773Z" />
                            </svg>
                            Task
                        </a>

                        <a href="!#"
                            className="white text-gray waves-effect py-2 px-4 radius-5 d-flex justify-content-center align-items-center mr-2">
                            <svg className="mr-2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 0.875C4.51289 0.875 0.875 4.51289 0.875 9C0.875 13.4801 4.52031 17.125 9 17.125C13.4867 17.125 17.125 13.4867 17.125 9C17.125 4.51992 13.4801 0.875 9 0.875ZM13.2188 10.25H8.53125C8.48981 10.25 8.45007 10.2335 8.42076 10.2042C8.39146 10.1749 8.375 10.1352 8.375 10.0938V3.53125C8.375 3.48981 8.39146 3.45007 8.42076 3.42076C8.45007 3.39146 8.48981 3.375 8.53125 3.375H9.46875C9.51019 3.375 9.54993 3.39146 9.57924 3.42076C9.60854 3.45007 9.625 3.48981 9.625 3.53125V9H13.2188C13.2602 9 13.2999 9.01646 13.3292 9.04576C13.3585 9.07507 13.375 9.11481 13.375 9.15625V10.0938C13.375 10.1352 13.3585 10.1749 13.3292 10.2042C13.2999 10.2335 13.2602 10.25 13.2188 10.25Z" />
                            </svg>
                            Deadline
                        </a>
                        <a href="!#"
                            className="white text-gray waves-effect py-2 px-4 radius-5 d-flex justify-content-center align-items-center mr-2">
                            <svg className="mr-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.01469 9H7.98531C7.04469 9 6.0975 8.26813 5.40594 7.73375C5.29344 7.64688 0.774063 4.33437 0 3.72906V10.5C0 10.8978 0.158035 11.2794 0.43934 11.5607C0.720644 11.842 1.10218 12 1.5 12H14.5C14.8978 12 15.2794 11.842 15.5607 11.5607C15.842 11.2794 16 10.8978 16 10.5V3.73C15.2356 4.32906 10.7063 7.64688 10.5938 7.73375C9.9025 8.26813 8.95531 9 8.01469 9ZM14.5 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5L0 2.09375C0.000152699 2.20753 0.0261037 2.31979 0.0759011 2.42209C0.125698 2.52439 0.198045 2.61407 0.2875 2.68437C1.24375 3.43125 1.55938 3.69688 5.70625 6.70625C6.23125 7.0875 7.275 8.0125 8 8C8.725 8.0125 9.76875 7.0875 10.2937 6.70625C14.4406 3.69688 14.7562 3.43437 15.7125 2.68437C15.8022 2.6143 15.8747 2.52467 15.9246 2.42232C15.9744 2.31997 16.0002 2.20759 16 2.09375V1.5C16 1.10218 15.842 0.720644 15.5607 0.43934C15.2794 0.158035 14.8978 0 14.5 0Z" />
                            </svg>

                            Email
                        </a>
                        <a href="!#"
                            className="white text-gray waves-effect py-2 px-4 radius-5 d-flex justify-content-center align-items-center mr-2">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.914634 17.4086H8.57293C9.74646 18.8932 11.5626 19.8476 13.5976 19.8476C17.1279 19.8476 20 16.9755 20 13.4452C20 9.91486 17.1279 7.04272 13.5976 7.04272C11.4946 7.04272 9.62531 8.06199 8.45744 9.63236C7.98409 9.53309 7.50049 9.48175 7.0122 9.48175C3.14567 9.48175 0 12.6274 0 16.4939C0 16.9991 0.409512 17.4086 0.914634 17.4086ZM13.5976 8.87199C16.1192 8.87199 18.1707 10.9235 18.1707 13.4452C18.1707 15.9668 16.1192 18.0183 13.5976 18.0183C11.0759 18.0183 9.02439 15.9668 9.02439 13.4452C9.02439 10.9235 11.0759 8.87199 13.5976 8.87199Z" />
                                <path d="M7.01378 0C4.9039 0 3.1875 1.71646 3.1875 3.82628C3.1875 5.9361 4.9039 7.65244 7.01378 7.65244C9.1236 7.65244 10.84 5.9361 10.84 3.82628C10.84 1.71646 9.1236 0 7.01378 0Z" />
                                <path d="M11.7662 14.3617H12.6808V15.2763C12.6808 15.7814 13.0903 16.1909 13.5955 16.1909C14.1006 16.1909 14.5101 15.7814 14.5101 15.2763V14.3617H15.4247C15.9299 14.3617 16.3394 13.9521 16.3394 13.447C16.3394 12.9419 15.9299 12.5324 15.4247 12.5324H14.5101V11.6178C14.5101 11.1126 14.1006 10.7031 13.5955 10.7031C13.0903 10.7031 12.6808 11.1126 12.6808 11.6178V12.5324H11.7662C11.2611 12.5324 10.8516 12.9419 10.8516 13.447C10.8516 13.9521 11.2611 14.3617 11.7662 14.3617Z" />
                            </svg>

                            Followup
                        </a>
                        <a href="!#"
                            className="white text-gray waves-effect py-2 px-4 radius-5 d-flex justify-content-center align-items-center mr-2">
                            <svg className="mr-2" width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2" cy="2" r="2" />
                                <circle cx="9" cy="2" r="2" />
                                <circle cx="16" cy="2" r="2" />
                            </svg>

                            Others
                        </a>
                    </div>
                    <div className="row">
                        <div className="col s12 pl-0">
                            <h6 className="text-dark-blue m-0 text-left mb-2">Title</h6>
                            <input type="text" placeholder="Enter title"
                                className="add_activity_text_field radius-5 white" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 pl-0">
                            <h6 className="text-dark-blue m-0 text-left mb-2">Description</h6>
                            <textarea type="text"
                                className="add_activity_text_field radius-5 pt-3 white"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 pl-0">
                            <h6 className="text-dark-blue m-0 text-left mb-2">Assign To</h6>
                            <select className="d-block add_activity_text_field radius-5 white">
                                <option selected hidden>Select an user</option>
                                <option value="1">User 1</option>
                                <option value="2">User 2</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m4 s12 pl-0">
                            <div className="mr-3">
                                <h6 className="text-dark-blue m-0 text-left mb-2">Date</h6>
                                <input type="date" className="add_activity_text_field radius-5 white" />
                            </div>
                        </div>
                        <div className="col m4 s12 pl-0">
                            <div className="mx-2">
                                <h6 className="text-dark-blue m-0 text-left mb-2">Time</h6>
                                <input type="time" className="add_activity_text_field radius-5 white" />
                            </div>
                        </div>
                        <div className="col m4 s12 pl-0">
                            <div className="ml-3">
                                <h6 className="text-dark-blue m-0 text-left mb-2">Duration (hh:mm)</h6>
                                <input type="time" className="add_activity_text_field radius-5 white" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="d-flex mb-4 justify-content-between align-items-center modal_header">
                        <h4 className="m-0 text-dark-blue">Contact</h4>
                    </div>
                    <div className="row">
                        <div className="col m4 s12 pl-0">
                            <div className="mr-3">
                                <h6 className="text-dark-blue m-0 text-left mb-2">Name</h6>
                                <input type="text" placeholder="Name"
                                    className="add_activity_text_field radius-5 white" />
                            </div>
                        </div>
                        <div className="col m4 s12 pl-0">
                            <div className="mx-2">
                                <h6 className="text-dark-blue m-0 text-left mb-2">Email</h6>
                                <input type="email" placeholder="example@gmail.com"
                                    className="add_activity_text_field radius-5 white" />
                            </div>
                        </div>
                        <div className="col m4 s12 pl-0">
                            <div className="ml-3">
                                <h6 className="text-dark-blue m-0 text-left mb-2">Phone</h6>
                                <input type="text" placeholder="+0123456789"
                                    className="add_activity_text_field radius-5 white" />
                            </div>
                        </div>
                    </div>
                    <div className="text-left">
                        <label className="activity_checkbox_label">
                            <input type="checkbox" className="filled-in add_activity_checkbox" />
                            <span className="text-dark-blue">Send invitation to the attendee</span>
                        </label>
                    </div>
                    <div className="text-left mt-3">
                        <label className="activity_checkbox_label">
                            <input type="checkbox" className="filled-in add_activity_checkbox" />
                            <span className="text-dark-blue">Send an email notification to the
                                attendee</span>
                        </label>
                    </div>
                    <div className="text-left mt-3">
                        <label className="activity_checkbox_label">
                            <input type="checkbox" className="filled-in add_activity_checkbox" />
                            <span className="text-dark-blue">Remind me</span>
                            <select
                                className="mx-2 d-inline-block radius-5 add_activity_select_input add_task_reminder_time">
                                <option value="30">30 minutes</option>
                                <option value="40">40 minutes</option>
                            </select>
                            <span className="text-dark-blue d-inline-block m-0">before the event</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="modal-footer mb-4">
                <div className="add_activity_footer_buttons text-center">
                    <a href="!#" className=" d-inline-flex align-items-center bg-light-blue waves-effect white-text py-2 px-3 radius-10">
                        <span className="appointment text-light-blue white circle mr-2 d-flex justify-content-center align-items-center">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5C10 5.46083 9.96 5.83333 9.49917 5.83333H5.83333V9.49917C5.83333 9.95917 5.46083 10 5 10C4.53917 10 4.16667 9.95917 4.16667 9.49917V5.83333H0.500833C0.0408332 5.83333 0 5.46083 0 5C0 4.53917 0.0408332 4.16667 0.500833 4.16667H4.16667V0.500833C4.16667 0.0399998 4.53917 0 5 0C5.46083 0 5.83333 0.0399998 5.83333 0.500833V4.16667H9.49917C9.96 4.16667 10 4.53917 10 5Z" />
                            </svg>
                        </span>
                        Add Appointment
                    </a>
                    <a href="!#"
                        className="d-inline-flex align-items-center bg-red white-text waves-effect py-2 pl-3 pr-4 radius-10 modal-close ml-3">
                        <span className="close white circle mr-2 d-flex justify-content-center align-items-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5355 11.5356C11.2097 11.8614 10.918 12.0965 10.5921 11.7707L8 9.17853L5.40786 11.7707C5.0826 12.0959 4.79032 11.8614 4.46447 11.5356C4.13861 11.2097 3.90408 10.9174 4.22935 10.5922L6.82149 8.00002L4.22935 5.40789C3.90408 5.08262 4.13861 4.79035 4.46447 4.46449C4.79032 4.13863 5.0826 3.90411 5.40786 4.22938L8 6.82151L10.5921 4.22938C10.918 3.90352 11.2097 4.13863 11.5355 4.46449C11.8614 4.79035 12.0965 5.08203 11.7706 5.40789L9.17851 8.00002L11.7706 10.5922C12.0965 10.918 11.8614 11.2097 11.5355 11.5356Z" />
                            </svg>

                        </span>
                        Close
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ActivityModal;