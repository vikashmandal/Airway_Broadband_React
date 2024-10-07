
import React from 'react'
import './chaticon.scss'
// React
import { motion } from "framer-motion"

// React Server Components
// import * as motion from "framer-motion/client"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faShare } from '@fortawesome/free-solid-svg-icons';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { WhatsApp } from '@mui/icons-material';

const ChatIcon = () => {
    return (
        < motion.div
            animate={{ x: 100 }}
            className='chat'>
            < WhatsApp className='chat-icon' />
            <span >Chat Us</span>
        </motion.div>
    )
}

export default ChatIcon