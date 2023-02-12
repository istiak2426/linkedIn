import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WorkIcon from '@mui/icons-material/Work';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListIcon from '@mui/icons-material/List';

const navbar = () => {
    return (
        <div>
            <div className='row bg-white'>
                <div className='col-1 '>
                    <div >
                        <LinkedInIcon
                            style={{ fontSize: '50', color: '#0A66C2', cursor: 'pointer', marginLeft: "2rem", marginTop: '0.2rem' }}
                        />
                    </div>
                </div>
                <div className='col-1 '>
                    <div >
                        <SearchIcon
                            style={{ fontSize: '35', color: '#191919', cursor: 'pointer', marginLeft: "2rem", marginTop: '0.7rem' }}
                        />
                    </div>
                </div>
                <div className='col-1 '>
                    <div >
                        <HomeIcon
                            style={{ fontSize: '35', color: '#191919', cursor: 'pointer', marginLeft: "2rem", marginTop: '0.7rem' }}
                        />
                    </div>
                </div>
                <div className='col-1 '>
                    <div >
                        <Diversity3Icon
                            style={{ fontSize: '35', color: '#191919', cursor: 'pointer', marginLeft: "2rem", marginTop: '0.7rem' }}
                        />
                    </div>
                </div>
                <div className='col-1 '>
                    <div >
                        <WorkIcon
                            style={{ fontSize: '35', color: '#191919', cursor: 'pointer', marginLeft: "2rem", marginTop: '0.7rem' }}
                        />
                    </div>
                </div>
                <div className='col-1 '>
                    <div >
                        <InsertCommentIcon
                            style={{ fontSize: '35', color: '#191919', cursor: 'pointer', marginLeft: "2rem", marginTop: '0.7rem' }}
                        />
                    </div>
                </div>
                <div className='col-1 '>
                    <div >
                        <NotificationsIcon
                            style={{ fontSize: '35', color: '#191919', cursor: 'pointer', marginLeft: "2rem", marginTop: '0.7rem' }}
                        />
                    </div>
                </div>
                <div className='col-1 '>
                    <div >
                        <AccountCircleIcon
                            style={{ fontSize: '35', color: '#191919', cursor: 'pointer', marginLeft: "2rem", marginTop: '0.7rem' }}
                        />
                    </div>
                </div>
                <div className='col-1 mr-1'>
                    <div >
                        <ListIcon
                            style={{ fontSize: '35', color: '#191919', cursor: 'pointer', marginLeft: "2rem", marginTop: '0.7rem' }}
                        />
                    </div>
                </div>
                <div className='col-2 '>
                    <div
                        style={{ fontSize: '40', color: '#191919', cursor: 'pointer', marginLeft: "2rem", marginTop: '0.8rem' }}>
                        <span><u>Try Premium for free</u></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navbar