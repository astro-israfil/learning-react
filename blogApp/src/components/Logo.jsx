import ReactLogo from "../assets/react.svg";

const Logo = ({width = "100px"}) => {
    return <img src={ReactLogo} alt="react-logo" width={width} />
}

export default Logo;