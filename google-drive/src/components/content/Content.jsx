import React from 'react'
import './Content.css'
import { RiHardDrive2Line } from 'react-icons/ri'
import { MdComputer,MdStarBorder,MdCloudQueue } from 'react-icons/md'
import { FaRegTrashAlt } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import { FiUsers } from 'react-icons/fi'

const Content = () => {
    return (
        <div className="content">
            <div className="content__sidebar">
                <div className="sidebar__createBtn">
                    <img src="./images/googledriveplus.jpg" alt="" />
                    <p>New</p>
                </div>
                <div className="sidebar__menus">
                    <div className="menus__menu Active">
                        <RiHardDrive2Line />
                        <p>My Drive</p>
                    </div>
                    <div className="menus__menu">
                        <MdComputer />
                        <p>Computers</p>
                    </div>
                    <div className="menus__menu">
                        <FiUsers />
                        <p>Share with me</p>
                    </div>
                    <div className="menus__menu">
                        <IoMdTime />
                        <p>Recent</p>
                    </div>
                    <div className="menus__menu">
                        <MdStarBorder />
                        <p>Stared</p>
                    </div>
                    <div className="menus__menu">
                        <FaRegTrashAlt />
                        <p>Trash</p>
                    </div>
                    <hr class="hrLine"/>
                     <div className="menus__menu">
                        <MdCloudQueue />
                        <p>Storage</p>
                    </div>
                </div>
                
                <div className="menus__storage">
                    <div className="storage__progressBar storage__progressBarClr"></div>
                    <p className="storage__usage">6.95 GB of 15 GB used</p>
                    <p className="storage__manage">Manage Storage</p>
                </div>
            </div>
            <div className="content__data">
                <h1>Data</h1>
            </div>
            <div className="content__icons">
                icon
            </div>
        </div>
    )
}

export default Content
