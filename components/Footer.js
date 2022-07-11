import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    return (
        <footer>
            <h3>About :</h3> 
            <div className="container">
                <a link href="https://www.instagram.com/binoy_manoj/" text-align> <InstagramIcon style={{ color: "white" }} fontSize="large" /> </a> <br/>
                <a link href="https://github.com/binoymanoj/"> <GitHubIcon style={{ color: "white" }} fontSize="large" /> </a> <br/>
                <a link href="https://twitter.com/binoy_manoj_"> < TwitterIcon style={{ color: "white" }} fontSize="large" /> </a> <br/>
                <a link href="https://www.linkedin.com/in/binoy-manoj-29b5a3223/"> <LinkedInIcon style={{ color: "white" }} fontSize="large" /> </a> <br/>
                <a link href="mailto:binoypm2002@gmail.com">< EmailIcon style={{ color: "white" }} fontSize="large" /></a>
            </div>
        </footer>
    )
}

