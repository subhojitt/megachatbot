import { useState, useEffect, useContext } from 'react';

import { Box, styled, Divider } from '@mui/material';

import { AccountContext } from '../../../context/AccountProvider';

//components
import Conversation from './Conversation';
import { getUsers } from '../../../service/api';

const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
    background: #bee1eb;
    border-radius: 15px;
    margin: 5px;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;

const Conversations = ({ text }) => {
    const [users, setUsers] = useState([]);
    
    const { account, socket, setActiveUsers } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            let data = await getUsers();
            let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(fiteredData);
        }
        fetchData();
    }, [text]);

    useEffect(() => {
        socket.current.emit('addUser', account);
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
        })
    }, [account])

    return (
        <Component>
            {
                users && users.map((user, index) => (
                    user.sub !== account.sub && 
                        <> 
                            <Conversation user={user} />
                            {
                                users.length !== (index + 1)  && <StyledDivider />
                            }
                        </>
                ))
            }

            <Conversation user={{name:'Aryan', picture:'https://i.pinimg.com/236x/06/e9/de/06e9dee956386778172d55f278f1f0a9.jpg'}} />
            <StyledDivider />
            <Conversation user={{name:'Sohona', picture:'https://i.pinimg.com/originals/2c/55/29/2c55292c3f62603ca813564041141013.jpg'}} />
            <StyledDivider />
            <Conversation user={{name:'Prabhat', picture:'https://i.pinimg.com/236x/06/e9/de/06e9dee956386778172d55f278f1f0a9.jpg'}} />
            <StyledDivider />
            <Conversation user={{name:'Byaivab', picture:'https://i.pinimg.com/originals/8b/6b/98/8b6b987316a515a6c4d77684e32cccc7.jpg'}} />
            <StyledDivider />
            <Conversation user={{name:'Manishka', picture:'https://i.pinimg.com/originals/78/b6/79/78b679decefc087ae2b60fc2867f0478.jpg'}} />
            <StyledDivider />
            <Conversation user={{name:'Megatronix  Grp', picture:'https://i.pinimg.com/originals/cd/e7/16/cde7165eef62e1c930cdea7d3676c565.png'}} />
            <StyledDivider />
            <Conversation user={{name:'Rohan', picture:'https://i.pinimg.com/236x/06/e9/de/06e9dee956386778172d55f278f1f0a9.jpg'}} />
            <StyledDivider />
            <Conversation user={{name:'Subhojit', picture:'https://i.pinimg.com/236x/06/e9/de/06e9dee956386778172d55f278f1f0a9.jpg'}} />
            <StyledDivider />
        </Component>
    )
}

export default Conversations;