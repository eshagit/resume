import React from 'react';
import styled from 'styled-components';
import kubernets from '../assets/kubernetesbadge.jpeg';
import safe from '../assets/safecertification.png';
const Certification = () => {
    return (
        <Cert>
            <h4>Certification:</h4>
            <div className="gridcert">
                <div className="certifiedName">Kubernetes</div>
                <img src={kubernets} width="250" height="160" alt="kubernetes"/>
                <hr color="black" />
                <hr color="black" />
                <div className="certifiedName">SAFe</div>
                <img src={safe} width="250" alt="SAFe"/>
            </div>
        </Cert>
    );
}

const Cert = styled.section`
    h4 {
        color: gray;
    }

    div {
        background-color: hsl(0,0%,30%);
        color: white;
        padding: 2px;
        margin-right: 20px;
    }

    .gridcert {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 10px;
        align-items: center;
        justify-content: center;
        
    }

    .certifiedName {
        font-size: .8rem;
    }

`

export default Certification;