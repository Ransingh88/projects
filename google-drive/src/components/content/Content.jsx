import React, { useEffect, useState } from 'react'
import './Content.css'
import { RiHardDrive2Line, RiArrowDownSFill } from 'react-icons/ri'
import { MdComputer,MdStarBorder,MdArrowDownward, MdCloudQueue,MdInfoOutline, MdMenuOpen } from 'react-icons/md'
import { FaRegTrashAlt } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import { FiUsers } from 'react-icons/fi'
import { FcFile, FcImageFile } from 'react-icons/fc'
import { Modal } from '@material-ui/core'
import { db, storagee } from '../../firebase'
import firebase from 'firebase'

const Content = () => {

    const [open, setOpen] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [uploadStatus,setUploadStatus] = useState('Uploading...')
    const [file,setFile] = useState(null)
    const [files, setFiles] = useState([])

    
    
    useEffect(() => {
        db.collection("myFiles").onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                data:doc.data()   
           })))
       }) 
    },[])
    
    const handleClose = () => {
        setOpen(false)
        setUploading(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleUpload = async (e) => {
        e.preventDefault()
        setUploading(true)
        setUploadStatus("Uploading....")
        await storagee.ref(`files/${file.name}`).put(file)
            .then(snapshot => {
                storagee.ref("files").child(file.name).getDownloadURL()
                    .then(url => {
                        db.collection("myFiles").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            filename: file.name,
                            fileURL: url,
                            size:snapshot._delegate.bytesTransferred
                    })
                })
             })

        setTimeout(() => {
             setUploadStatus("Upload Done.")

        },1000)
        setTimeout(() => {
             setOpen(false)
            setUploading(false)

        },2000)
           
            
        
        

    }


    console.log(files)

    files && files.sort(function (a, b) {
        return  b.data.timestamp?.seconds * 1000 - a.data.timestamp?.seconds * 1000
    })
    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <div className="modal__popup">
                    
                    <form>
                        <div className="modaleading">
                            <h2>Select a file you want to upoad</h2>
                        </div>
                        <hr />
                        <div className="modalContent">
                            <input type="file" name="" id="" className="popup__fileUpload" onChange={ handleChange}/><br />
                            {uploading ? <p className="popup__uploading">{uploadStatus} </p> :
                                <input type="submit" value="Upload" className="popup__UploadButton" onClick={handleUpload} />}
                        </div>
                    </form>
                    
                    </div>
                </Modal>
        <div className="content">
            <div className="content__sidebar">
                <div className="sidebar__createBtn" onClick={handleOpen}>
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
                <div className="contentData__header">
                    <div className="header__left">
                        <p>My Drive</p>
                        <RiArrowDownSFill/>
                    </div>
                    <div className="header__right">
                        <MdMenuOpen/>
                        <MdInfoOutline/>
                    </div>
                </div>
                <hr />
                    <div className="contentData__data">
                        {files.map(item => (
                            
                            <a href={item.data.fileURL} target="_blank" rel="noopener noreferrer">
                                
                                <div className="contentData__data__item">
                                    { item.data.filename.split('.').pop() === 'png' || item.data.filename.split('.').pop() === 'jpg' ? <FcImageFile /> : <FcFile />}
                                    <p className="dataItem__fileName">{item.data.filename}</p>
                                    
                                    </div>
                                </a>
                            

                        ))}
                    
                </div>
                <div className="contentData__dataFiles">
                    <table>
  <tr>
    <th>Name <MdArrowDownward/></th>
    <th>Owner</th>
    <th>Last Modified</th>
    <th>File Size</th>
                            </tr>
                            

                            {files.map(item => (<tr>
    <td><FcFile /> {item.data.filename}</td>
    <td>Me</td>
    <td>{new Date(item.data.timestamp?.seconds*1000).toUTCString()}</td>
    <td>{item.data.size} bytes</td>
  </tr>

                            ) )}
  {/* <tr>
    <td>Debasish Ransingh</td>
    <td>Me</td>
    <td>Yesterday</td>
    <td>1 GB</td>
  </tr> */}
                    </table>
                </div>
            </div>
            <div className="content__icons">
                icon
            </div>
            </div>
            </>
    )
}

export default Content
