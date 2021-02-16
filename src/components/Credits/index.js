import styled from 'styled-components';

const Credits = styled.p`
    background-color: rgba(255,255,255,0.15);
    border-radius: 4px;
    color: #181818;
    font-family: "Arial", "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 1.2rem;
    line-height: 150%;
    margin: 2rem 0;
    padding: 1rem 2rem;
    text-align: center;

    > strong {
        font-weight: bold;
    }

    > a {
        color: #181818;
        font-weight: bold;
    }
`

export default Credits;