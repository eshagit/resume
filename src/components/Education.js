import React from 'react';
import styled from 'styled-components';

const Education = () => {
    return (
        <Edu>
            <h4>Education:</h4>
            <div>BE, Electronics and Communication Engineering - Distinction score:80%</div>
        </Edu>
    );
}

const Edu = styled.section`
    h4 {
        color: gray;
    }

    div {
        background-color: hsl(0,0%,30%);
        color: white;
        padding: 2px;
        margin-right: 20px;
    }

`

export default Education;