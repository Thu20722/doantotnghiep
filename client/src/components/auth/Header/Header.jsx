import React from 'react';
import { FaBars, FaRegBell, FaRegEnvelope, FaAngleDown } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { Avatar } from "/src/components/ui/avatar.jsx";
import './Header.css';

// Dữ liệu tạm thời nếu chưa có `account` từ `useAuthStore`
const account = {
    image: '', 
    full_name: 'Ngô Thị Thanh Thư',
    role: 'User'
};

const Header = () => {
    return (
        <div className='header-ad'>
            <FaBars className='icon' />
            <div className='header-right'>
                <div className='icons-group'>
                    <IoSearch className='icon' />
                    <MdOutlineCalendarToday className='icon' />
                    <div className='icon-wrapper'>
                        <FaRegBell className='icon' />
                        <div className='notification-badge'>30</div>
                    </div>
                    <div className='icon-wrapper'>
                        <FaRegEnvelope className='icon' />
                        <div className='notification-badge'>30</div>
                    </div>
                </div>
                <div className='account-info'>
                    <div className='profile-image-wrapper'>
                        <Avatar 
                            name={account.full_name}
                            src={account.image || undefined} 
                            size="md" 
                            bg="blue.200"
                        />
                        <div className='online-status'></div>
                    </div>
                    <div className='account-text'>
                        <span className='account-name'>{account.full_name}</span>
                        <span className='account-role'>{account.role}</span>
                    </div>
                    <FaAngleDown className='icon' />
                </div>
            </div>
        </div>
    );
};

export default Header;
