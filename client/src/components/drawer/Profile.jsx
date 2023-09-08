import { useContext } from "react";
import { Box, styled, Typography } from "@mui/material"

import { AccountContext } from "../../context/AccountProvider";

const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
`;

const Image = styled('img') ({
    width: 200,
    height: 200,
    borderRadius: '50%',
    padding: '25px 0'
});

const BoxWrapper = styled(Box)`
    background: #bee1eb;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    border-radius: 15px;
    margin-inline: 15px;
    & :first-child {
        font-size: 13px;
        color: #0796a6;
        font-weight: 200;
    };
    & :last-child {
        margin: 14px 0;
        color: #4A4A4A;
    }
`;

const DescriptionContainer = styled(Box)`
    padding: 15px 20px 28px 30px;
    & > p {
        color: #8696a0;
        font-size: 13px;
    }
`;

const Profile = () => {

    const { account } = useContext(AccountContext);

    return (
        <>
            <ImageContainer>
                <Image src={account.picture} alt="displaypicture" />
            </ImageContainer>
            <BoxWrapper>
                <Typography>Your name</Typography>
                <Typography>{account.name}</Typography>
            </BoxWrapper>
            <DescriptionContainer>
                <Typography>Your MegaChatBot username. You can share this with your friends and they can start chatting with you...</Typography>
            </DescriptionContainer>
            <BoxWrapper>
                <Typography>About</Typography>
                <Typography>Busy Now!!!!!!</Typography>
            </BoxWrapper>
        </>
    )
}

export default Profile;