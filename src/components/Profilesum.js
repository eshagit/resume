import React from 'react';
import styled from 'styled-components';


const ProfileSum = () => {
    return (
        <Profilewrapper>
            <h4>Profile Summary:</h4>
            <p className="profilestyle">Senior Software Developer with 10+ years of experience in designing, building, and maintaining large scale distributed applications in Grid Control domain and OAM(FCAPS) domain.Expertise in Automatic Generation control(AGC) applications component development (C, C++) ,Websdk and HUD UI (javascript,plsql,QT/QML) and OAM(FCAPS) development.Contributed to solution development in SP7/MGMS products for domestic and international clients including design, requirements analysis, software customization and integration, acceptance testing and issue resolution.</p>
        </Profilewrapper>
    );
    }

const Profilewrapper = styled.section`
   
    .profilestyle {
        font-size: .8rem;
    }

`

export default ProfileSum;