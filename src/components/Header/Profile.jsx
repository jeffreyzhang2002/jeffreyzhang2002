import Styled from "styled-components";
import Profile from "../../assets/profile.png";

export default Styled.div`
    margin-left: 1em;
    
    height: 70%;
    aspect-ratio 1 / 1;
        
    background-image: url(${Profile});
    background-position: center;
    background-size: cover;
    
    border-radius: 50%;
    
    &:hover {
        animation: zoom 0.5s;
        animation-fill-mode: forwards;
    }
    
    @keyframes zoom {
        from {
            transform: scale(1);
        } to {
            transform: scale(1.1);
        }
    }
`
