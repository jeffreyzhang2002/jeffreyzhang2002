import React from "react";
import Styled from "styled-components";
import Arrow from "../Lib/Arrow";
import {Chrono} from "react-chrono";

const Container = Styled.div`
    width: 100vw;
    height: 90vh;
    
    background-color: ${props=>props.theme.backgroundPrimary};
 
    display: grid;
    grid-template-rows: 15% 85%;
   
    justify-items: center;
    align-items: center;
    
    position: relative;
 
`

const Title = Styled.h2`

    width: fit-content;

   
    text-align: center;
    
    color: ${props => props.theme.primary};
    
    font-size: min(3em, 7vw);
    
`

const Timeline = Styled.div`
    width: 90%;
    height: 100%;
    
    over-scroll: auto;
    
    @media only screen and (max-width: 992px) {
        display: none;
    }
`

const TimelineAlt = Styled.div`
    width: 100%;
    height: 100%;
        
    over-scroll: auto;
        
    @media only screen and (min-width: 992px) {
        display: none;
    }
`

export default class Background extends React.Component {

    constructor(props) {
        super(props);

        this.items = [
        {
            title: "Summer 2022",
            cardTitle: "Summer Internship",
            url: "https://careers.homedepot.com/students-internships/",
            cardSubtitle:"Home Depot full stack development internship",
            cardDetailedText: "As an full stack development intern, I assisted in creating a drag and drop web dashboard. This dashboard was used internally to help create machine learning models",
            media: {
                type: "IMAGE",
                source: {
                    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATAAAACmCAMAAABqbSMrAAABwlBMVEX///9ZWlz7u5dDQUT8//9vbnPzayZubnDsZiHraCZ4dHXzkWL8vZl6SDRTU1Obm5v39/dFRUZhYWH0aBy2lIOCgoRLTE7Gx8hoaWu2t7hucHlBPEAxMTFYW1pYXGBzcG/6up6vXTBAQU7uYib8uob4/////P86OjqNjY3j4+PwYQfX1dj207z3y7MtKy////nsuqPnYgnYai//9f//+u3/8Or3/P/tu5v34NT/+vDjZyX/+OT1ZSn6//WkpKQpKSnveTnZrZX2vpVqWEzKaUh2VUpfWlNPX16eaUX7ZRmvakmIWTxdV19ZV2hPXWZERkDq0sT25cT62dv9/uPn///3WSHng136yKjno4LQXirgikbDcTftoXXmnIvapIDnnGPhjWDMUADoy63/5+njg2/YiVXYeEj4gWPmeCHva0Lopo/eY0Pvw43ZgEDGg17oekTxtaj/zcnjrHj5nn3TlGzhiFbqfFfqY0r72KvNnXX707bwiHLlomTtopP56cHQax/Rk3nRhnPShUL4Th7mXDP71JvVbTrul24WFhZOO0SWfnO4iW/+rnYyJSHLnZD8vYgYLidsRyYvIBOSjJ4pMxpZLyetM8e/AAAPyUlEQVR4nO2djV/bRpqAB3sKNnDBxEcIa0O958w4GDljGxnrwwLizbbrdG+L18GoPYe4hPiK0wAhgaN02yRNNuxHc73r3v6/944k2yQBE5UE7HSeX35BGo3G0uP5eEeyZYQEAoFAIBAIBAKBQCAQCAQCgeDdMTU71CXMTp21K2Cyb/hch3LxVc73XJw8c1/D53reOuPjPRMT/O9Jyuj54BD6zp21sfNvS9KBUx3v+cNvrl377cT4Rycppu8wYR/09wTO1Nfo8NvS1GL844nx3xUK189NnKSG9R0u7IPzY2cqbOgdNMieiZ7xT9LpTz4an/j5ZfQdJaxv5EyFjbw9TS3A1O9/89ueiY9+fpO8eLSwvvdP2O8/nvj3j8f/MPHzffX1dbqwC8NvEe+n8O/TExRw4bAgo8eW2BnCLowGOp6xix0l7EyP4o0QwlwihLlECHOJEOYSIcwlQphLhDCXCGEuEcJcIoS5RAhziRDmEiHMJUKYS4QwlwhhLhHCXCKEuUQIc4kQ5hIhzCVCmEuEMJcIYS4RwlwihLlECHNJhwrDR2Sk1jb2avJL2RlmjRSMMF9xdmCNVIxaxWAK65Rhntfa5Gzk/yi8HHnlRTpRGCWUwKG/DoHTIYgQfo7EOW+uhJEZSjFzdpYJCxACCgx6gxHMaIDIjFBGDQSpsA7LKoFVlRqUkmmVGNMMioV0xGZmwCDDsJkwNDMDiYwQrMKezFbXkcIYxUryELLZZDafzSpkIcJXFXtnEKcXCbFqH2KKjKFmwB+iF/+oKIoUUGQENosyMWhG4aetKxgRrGTAuaGoCE0XdUIVhVCDTJcWKFSqjGIhKTdQSckOKpiLt1+tE4UhePcT8UMo5KKLBV+WoUyZry7ZmeHdNz+TDeeEyp/DOlH/I4MrtZvm8vItpboECva+kKDKJJbhzNFKlUEN+qIO/5Wu6YTdvlshVLomTxvTKL8Ke+OF5bqZMpcrCXx7/U42+/COjp03pCOFQRUxEtFDyPlSufTnlbK2vx/1RbWElZmxGb1mZrkJgP3nl5tEJ+qjDLoZ4d2ZipM3wY+5YUJLNCWwiTJpFTPp850So+AOE4+5plOjbsrTWL9bgvaOVBnLaQqNsXTnK6jBanJdbXSTHSkMepZEsLdBsDfn8/X6YCGnBRcjrB6PLpWDwaCvIQwnzOI9lah81Vgt+qB9snSGVbI3oC0SVryHsLq+V2aUbWegL0JoQ0GsvrdfJKg+CB3XRslMkGn53h6Ry3sG5cNGgOhaxgig3TJi8AKsJjW6zE4UxvvmRMpylcvlfL2pxZWtxS/9i0F/NJqHs9ksZI1q3Be1hCFDxbWMUStSq1Nmtdt7zw1C0xm0nDWgcpQI28jgYhnVbjNl2y6/njTwXT1ZZ6wG0haq5P73YF56rmarMGLyHJiqUAIjD5ZsTcktqPXWUocKQ7awnKb1Bte0AdPTWwj6or5CJYDYtJw3ZbZd+brRh0lPEE6adheD7ijyTTCRNuiDnSfV8vrDDDITKJ9Ey0nIZOcBcZkdJq2zzD0YNr+RcOmuAhVp2VzPIMMOKxxhO7u2MIl3e9ZShwvz+4O5QsJ4EKk8i/YWFr/a+q8E9FXsaq0+cBMV7dx4IFJUdjXVNlYuEvkzyVhToYbJOgBna6JbCpYesgeSXXzmSzURQfq6en+LUt1fVIrQBxpE1pYIBBxWmZYwDMLsYEJ6wIzO7fQPCAsGc5+ZSUKTedPjS0WQWdAkY5rKl+KFMnUCL93/8Ov9x2t5+4R2ijPGXq20BqNkEvGgjWC9ptcYVmulmuoUf0faVyhblkwIIrIbT775Zn9ehypU4yNpq4bBkhmxa5gnCV2BtdTZwvy+gpbXr5mMDXz93VqEUfkOGIOAimZT+6WMlZlmbxpMRgv37FHyToYS/Kdv0zoyk8hpRjtf1WEQ3c+vNkL+FbNmBMieuT1dws+LyCConIDhYF2BmEK2SwVhhM58d1e3dkgXCe3cwNUSFof+3u9fTEEzkncgTsr7yzKE33I5rkk8x2byltXpE7km8QFMXrfaG6sqEJTKtaclauZ1VZZVlaF8dIViurKYt3t0hJVHJrQ3XSsjvLtuSVwpG9N6VcJOQE9JCQIMSoxs+TZjxfKmSpw5UucK4/19bzwpP0rcoM8jxWeFVIIQaI3VeHwB5jfyvUVbmPKYx0iYJZN8lT3OwCSH7a2WaH27eufevdoKw8VrOpjSV6GaWHmI/HAB/soPYZerC9ZL6k/UafZYgYDeqqh0Rn6iU2jO8sr3tZ3qrkox7vBOfxH6+2CuohjK/n1WuuRb3i+kdd7cMhBRSNSoxFOWMKbymR/0VcxpbnDGUDP4VBAGPpnPrRFRuQaonzOOMGjCBGbWhkxohjm9POwVaM2A8AxMNCEghBBOlvkUnKJOFwa6tAGlugctRyreNdm0tJ3cLLJpFHgYr+lmPOfb43nBE8GNKxB8X0sF4VNyg9wgBrQxe6KOW1cesDWJ5xWI8NDW2s0y28ISTLkwPmwc2NyxwlLBIPT3q9uagpWtNQ9MfwlTiqsKHH6mXhnQNuJOpE9eLoqfFqZG4+QN5+9rV4Qa6a9uaF4BsjYYjDaqnFNixwrzBTUIOPXtQkopPtooKlBR4P2uayVCDfYgbuobdpNEKDByGbC+ITvGly4PwdJoY2HM2tqA55o9sD7Cv7s92coy2/gut502EnCKH2l+x7uDhfmX1iWizqduPVtcfBpflWRoHXp64zZC30T/qNQGCo6wyblYLBa+zBcvh2OhUCgMpzkbhsTzkDQUDrUI8+/R9sWa67E5S9iV5nr4Sr89kE7NWZvH+FbIP9cNwnzpgXiClEytIhV3q/HqVQUTOf/0cWkrupWhxbWUPTVCk+Hh4eGYLSzmBcJQzGwM0i5C0lDI2yLEhX0Ya64Ph21hB7KEz1uFTvG04dgIL56ndoMwCFv9PknXKiUeNO5qSrIsETK/UYnvKzUdK1qjhlnCePMDYcNwdlxeO2EHUg4KC9siw9ZBTDkSadcIS4EwGCc3ni8NPE/yAUtJ7yW/uKXsphYTJfVmTUe3nSuurwnznjsg7PKVK1dsEzFYOiCMN8EDwkJ9s5ftbFZddYSFp7pHmC9YiOZSizVWjwcTzJhBS4+KS6vb9579uQYzmP0vA5mWsMZpOsLg9GZjXlvY5NTU5Cw3Fpvli8gRNux8wdYqgMvhxqe4mxDfqyEsNts1wgp+f1TzBYMmZiaPIAzKttMqu1WIypGUhDKaud1qkq8KG0OzIUcYZ/RKs6mhRg078OpNYciSZHVijjCw10XCckFftWBiTMHYJsTu+afFrej+rRl2CaaTZV/8SGHQVb0sLOxCWKyfpzX6sFigW4TxJhk3S9FtA+YulXh0BbG9ZxvxCC5NI/Lto2I6mLKvbh0izHuh1SQ5hwmbtLEKeKlJhmd5WkNYeKpbhPl4pI+NOmhhmFWCEKYuxf2JfFUNJA20VE5FC4cLC/V7vVcmjxUWnuNYzc8eJUemxrjtkO3GDiv6vaGhQOcL47ehE8++LGTZjCHXH8mBAOFXDqerqSwmm/VEauPBRjSYCx7eJEOX+0OxsWOF2Q3OOm1bWOwKzxXz2tksYaGxWKhnMtYNwlAivri9q2AKXf4TmVAmbz6oaNKPdcRW0vFCtLc36tw1el3YyFgo1O9emN3J9zlmbGHwf2yq82sYovx62GYpmpbYjWm29XxPBoXZVMXMpk3GsvP8HlsbYVzA0HGdfjgchrjsQJMMxXh66IrVhdnCwoFzEFiEukCYihMmRpfiaQlRFKin5k1zXttDVfPbgknUqr+3rTB0AcIB7zHCpqZGAevhfHbgenHIDlznWn1YODAU854f7gJh7EaGYQo9/jLjlweXo8FgYX4PBbJf3fJIlVTQ39tW2GVLibuwIgSj5FjYDuJQU1hzsOxsYZgRZYF/AGfz0vdFylTGNgr15PoSoTeff7fDG2RvMNh7tDArUHUnzJpbBZoBWUMYCneDMP7JpUSK35Bg5tO1IsGoopm7MksuMZq/FbVuJ/lzfu1IYYHYccJChwauVgRxYC4JwvpjXSAMahhOxH3cGIrE/Qqux/fYauSGYa6U9lPWhy40/2LO17q884ow1Bc6roYNj9o0J9+tGvaSsLFwdwhDCY3fgKQ3jC3fnhkdgACjmqf3d/701J/rdT51kTpamDXbPnaUBOb4mNhqkq/XsMmuERb05zSoY4jp23G/pkkssHO/+NSX89u+fPMD6SObZOPyXzth9jPVYg1hR9UwdK4LhEG4ihOFaK7glxjB9aAfxsjgfRrIfr6Y03L8Ez25nH/As98U5m1dcR328qukAe+w17oeZj88dJRfMWsJi7UeQmcLa15Qi/G97Mn3HBTBhfEihzteGGGJFOcLSTbjcWtRk0pVe4kTT80PPGo0yb/wtmUJG5mDJX7C/XM87bxT/CjP8ZeGsItz4SZ2k2wW0GMlcjlTVtqks2+4s6/pM0ZIRrLIqFLCXkosZBqL1irfaO8caPbeqBmMTo42w9LmWuOcp0YPMNksYKq5aaqZFmgsjDafc9uJwpDRui2LW7dX6Rkc2Ot0ojBqMMrv8wP8kwAWlBlOko3BXrsFezp0ojD+qWCnYvEa1rwXjfFR+58iHSmskxHCXCKEuUQIc4kQ5hIhzCVCmEuEMJcIYS4RwlwihLlECHOJEOYSIcwlQphLhDCXCGEuEcJcIoS5RAhziRDmEiHMJUKYS4QwlwhhLhHCXCKEuUQIc4kQ5hIhzCVCmEvGLnbSz1a/IefPkImO+p3vN/TVd4Z01g+jv5mvw3/b/XTpImEd4esUhNGjAWHjb8z5vqPPgf/7VVtabeqEuriwI8+H8qfLvlObIxNvysU2RqxNH7blGJ9vCpf2ToXQD3o+Gm/TzLwx/sSlWMh67pLz8CVn+ZUk+xEwR+EN/fXf2vLX9vu7oV23ca6nJ3C8lXZ4//avp8Lfr/+6PX8/neP424sTfg3De3XwNMj/4A+2xf9D/hQOwzN49cUJa9in/+3JeywGPRvzNvueiOftMuj5Ie1vi/YDZHr3gLCZE/miLWEeT1qzH/a+Pxh5y0cPpQ3kDnuufJMBz2D3CatUKpcsYDl/5Gv+rOOMDHp+vNSGHz2eSLcJy2fhoC14Sv7tHicQacup1C/PyfuwwP+AsIjdH0b4u2z10HkQ9pY7W15mO/KDttZ3zdUXk8dbacPMi/WBXxSrJxRGh6/nghofpnzvOdZYHPRdP2Efhj7831yhfYT0PlHIffLxyXyh0Z9+rfX6ep134D2G/9yL33/tp7GT+TLQP/7v+lrvL4T09Z9+hU92tQIjNPTin//yC+GfLy4f/etyb87kbP8vhKGTjZCCE3HYj/q9T5y1X4FAIBAIBAKBQCAQCAQCwanw/8QVQpfpiocGAAAAAElFTkSuQmCC"
                }
            }
        },
        {
            title: "2021-2025",
            cardTitle: "Georgia Tech Computer Science",
            url: "https://www.cc.gatech.edu/",
            cardSubtitle:"Computer Science Major at Georgia Tech (GPA: 4.0)",
            cardDetailedText: "Coursework: Data Structures and Algorithms, Computer Organization, Object Oriented Design, Introduction to Artifical Intelligence",
            media: {
                type: "IMAGE",
                source: {
                    url: "https://brand.gatech.edu/sites/default/files/inline-images/GTVertical_RGB.png"
                }
            }
        },
        {
            title: "Summer 2021",
            cardTitle: "Research Internship",
            url: "https://nanobiotecusa.com/",
            cardSubtitle:"Research Intern at NanoBiotec LLC",
            cardDetailedText: "During my time at NanoBioTec, I assisted in different lab procedure such as PCR, WesternBlot and learned more about data collection and analysis with Excel.",
            media: {
                type: "IMAGE",
                source: {
                    url: "https://app.scientist.com/providers/nanobiotec-llc/logo"
                }
            }
        },
        {
            title: "2017-2021",
            cardTitle: "Mountain Lakes High school",
            url: "https://hs.mlschools.org/",
            cardSubtitle:"High School student at Mountain Lakes (GPA 4.0)",
            cardDetailedText: "Coursework: Integral and Differential Calculus, Computer Science",
            media: {
                type: "IMAGE",
                source: {
                    url: "https://upload.wikimedia.org/wikipedia/en/b/b3/MountainLakesHSlogo2.jpg"
                }
            }
        }];
    }

    render() {
        return (
            <Container ref={this.props.reference}>
                <Title> Background </Title>
                <Timeline>
                    <Chrono items={this.items} mode="VERTICAL_ALTERNATING" cardWidth={400}/>
                </Timeline>
                <TimelineAlt>
                    <Chrono items={this.items} mode="VERTICAL"  cardWidth={500}/>
                </TimelineAlt>
                <Arrow onClick={()=>this.props.scroll("skills")}/>
            </Container>
        )
    }
}
