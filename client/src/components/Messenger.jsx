import { useContext } from 'react';
import { AppBar, Toolbar, styled, Box } from '@mui/material';

import { AccountContext } from '../context/AccountProvider';

//components
import ChatDialog from './chat/ChatDialog';
import LoginDialog from './account/LoginDialog';

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
    box-radius:7px;
`;

const Header = styled(AppBar)`
    background-color: #0795A6;
    height: 125px;
    box-shadow: none;
    box-radius:7px;
`;
    
const LoginHeader = styled(AppBar)`
    background: #0795A6;
    height: 200px;
    box-shadow: none;
    box-radius:7px;
`;

const Messenger = () => {
    const { account } = useContext(AccountContext);
    
    return (
        <Component>
            {
                account ? 
                <>
                    <Header>
                        <Toolbar></Toolbar>
                    </Header>
                    <ChatDialog />
                </>
                :
                <>
                    <LoginHeader>
                        <Toolbar></Toolbar>
                    </LoginHeader>
                    <LoginDialog />
                </>
            }
        </Component>
    )
}

export default Messenger;