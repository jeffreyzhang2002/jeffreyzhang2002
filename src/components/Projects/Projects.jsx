import React from "react";
import Styled from "styled-components";
import Arrow from "../Lib/Arrow";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "../../globals/styles.css";

import LC3img from "../../assets/LC3.png";
import Jetpackimg from "../../assets/jetpack.jpg";
import PathPlaningimg from "../../assets/PathPlanning.png";
import Manimimg from "../../assets/manim.png";
import Discordimg from "../../assets/discord.jpg";
import BigNumimg from "../../assets/bignum.jpeg";

const Container = Styled.div`
    width: 100vw;
    height: 90vh;
    
    background-color: ${props => props.theme.backgroundPrimary};
  
    display: grid;
    grid-template-rows: 15% 75% 10%;
   
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

const ProjectTitle = Styled.div`

    font-size: 1.5em;
     
    height: fit-content;
    
    margin-bottom: 0.5em;

`

const Description = Styled.div`
    
    width: 100%;
    height: 100%;
    
    padding: 0 1em;
    text-align: left;
    
`

const Content = Styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
`

const Meta = Styled.div`

    align-self: flex-end;
    height: fit-content;
    width: 100%;
    
    background-color: #f0ead6;

    text-align: left;
    
    padding: 0.5em 1em;

    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;

    & p{
        margin: 0 0.5em;
        display: inline-block;         
    
        a {
            text-decoration: none;
            color: black;
        }
    
        & a:hover {
            text-decoration: underline;
        }
        
    }
`

const TagBox = Styled.div`
    display: flex;
    padding: 0.1em 1em;
`

const Tag = Styled.div`
    display: inline-block;
    background-color: #394AB1;
    color: white;
    padding: 0 0.5em;
    border-radius: 1em;
    margin-right: 0.5em;
    
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

const Image = Styled.div`

    width: 100%;
    height: 100%;
    
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
 
`

export default class Projects extends React.Component {

    render() {
        return (
            <Container ref={this.props.reference}>
                <Title> Projects </Title>
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={35}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={this.props.children > 1}
                    modules={[Pagination, Navigation, Scrollbar]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Image image={LC3img}/>
                        <Content>
                            <ProjectTitle>
                                LC3 Assembly Extension
                            </ProjectTitle>
                            <Description>
                                For this project, I added more abstractions to LC3 assembly. For example stack calling convention, logical flow statements, and more quality of life improvements.
                            </Description>
                            <TagBox>
                                <Tag> #React </Tag>
                                <Tag> #JS </Tag>
                                <Tag> #LC3 ASM </Tag>
                            </TagBox>
                            <Meta>
                                <p> 📁 <a href={"https://github.com/jeffreyzhang2002/LC3AssemblyTemplates"} target={"_blank"}> Github </a></p>
                                <p> 🌐 <a href={"https://jeffreyzhang2002.github.io/LC3AssemblyTemplates/"} target={"_blank"}> Website</a> </p>
                            </Meta>
                        </Content>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image image={Jetpackimg}/>
                        <Content>
                            <ProjectTitle>
                                GBA Jetpack Joyride
                            </ProjectTitle>
                            <Description>
                                Using a gameboy emulator, I created clone of the popular Jetpack Joyride game. I also implemented a physics engine for collision detection.
                            </Description>
                            <TagBox>
                                <Tag> #C99 </Tag>
                            </TagBox>
                            <Meta>
                                <p> 📁 <a> Github </a></p>
                            </Meta>
                        </Content>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image image={PathPlaningimg}/>
                        <Content>
                            <ProjectTitle>
                                Robotics Path Planning
                            </ProjectTitle>
                            <Description>
                                For this project, I implemented A* for path planning. The Pure pursuit algorithm to follow the generated path and lastly a PID controller for drive motors.
                            </Description>
                            <TagBox>
                                <Tag> #Java  </Tag>
                                <Tag> #JavaFX  </Tag>
                            </TagBox>
                            <Meta>
                                <p> 📁 <a href={"https://github.com/jeffreyzhang2002/PathPlanning"} target={"_blank"}> Github </a></p>
                            </Meta>
                        </Content>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image image={Discordimg} style={{backgroundPositionY: "-10px"}}/>
                        <Content>
                            <ProjectTitle>
                                Discord Bot
                            </ProjectTitle>
                            <Description>
                                Created Discord Bot using Discord.js and Rest API. Implemented multiple commands, embed, etc.
                            </Description>
                            <TagBox>
                                <Tag> #TS  </Tag>
                                <Tag> #Discord API  </Tag>
                            </TagBox>
                            <Meta>
                                <p> 📁 <a herf={"https://github.com/jeffreyzhang2002/DiscordBotTemplate"} target={"_blank"}> Github </a></p>
                                <p> 📖 <a href={"https://discord.com/developers/docs/intro"} target={"_blank"}> Library </a></p>
                            </Meta>
                        </Content>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image image={BigNumimg}/>
                        <Content>
                            <ProjectTitle>
                                Big Number Library
                            </ProjectTitle>
                            <Description>
                                In C++ I implemented a math library for numbers that where out of range for the C++ type system. I also implemented elementary operations.
                            </Description>
                            <TagBox>
                                <Tag> #C++  </Tag>
                                <Tag> #GCC </Tag>
                            </TagBox>
                            <Meta>
                                <p> 📁 <a href={"https://github.com/jeffreyzhang2002/BigNumber"} target={"_blank"}> Github </a></p>
                            </Meta>
                        </Content>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image image={Manimimg} style={{backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundColor:"black"}}/>
                        <Content>
                            <ProjectTitle>
                                Manim Animation Engine GUI
                            </ProjectTitle>
                            <Description>
                                for HackGT, My team and I created a dashboard that aided in creating animations with Manim animation engine.
                            </Description>
                            <TagBox>
                                <Tag> Python  </Tag>
                                <Tag> React </Tag>
                            </TagBox>
                            <Meta>
                                <p> 📁 <a href={"https://github.com/jeffreyzhang2002/HackGT8"} target={"_blank"}> Github </a></p>
                                <p> 📖 <a href={"https://www.manim.community/"} target={"_blank"}> Library </a></p>
                            </Meta>
                        </Content>
                    </SwiperSlide>
                </Swiper>
                <Arrow onClick={()=>this.props.scroll("contact")}/>
            </Container>
        )
    }
}
