import React from 'react';
import Button from '@ingka/button';
import Layout from '../../components/layout/Layout.jsx';
import BCrumb from '../../components/Bcrumb/BCrumb.jsx';

// Button
import '@ingka/svg-icon/style.scss';
import '@ingka/button/style.scss';
import '@ingka/focus/style.scss';
import openWebChat from '../../utils/widget';

// This will only work in production mode
const WebChat = () => (
        <Layout>
            <BCrumb />
            <Button style={{ marginTop: '30px' }} onClick={() => openWebChat()} type='primary'>Chat with customer service</Button>
        </Layout>
);

export default WebChat;
