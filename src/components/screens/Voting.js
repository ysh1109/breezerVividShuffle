
import React,{useEffect,useState} from 'react';
import './Voting.css'
import Graffiti from '../../Assets/categories/MainPage_-05.png'
import Breaking from '../../Assets/categories/MainPage_-06.png'
import Rapping from '../../Assets/categories/MainPage_-07.png'
import Popping from '../../Assets/categories/MainPage_-09.png'
import Showcase from '../../Assets/categories/MainPage_-08.png'
import category_bg from '../../Assets/backgrounds/CategoriesBg.png'
import favoutite_bg from '../../Assets/backgrounds/FavouritesBg.png'
import AOS from 'aos';
import b1 from '../../Assets/participants/Breaking/Breaking 1.png'
import b2 from '../../Assets/participants/Breaking/Breaking 2.png'
import p1 from '../../Assets/participants/Popping/Popping 1.png'
import p2 from '../../Assets/participants/Popping/Popping 2.png'
import p3 from '../../Assets/participants/Popping/Popping 3.png'
import { Drawer, Button, Space, Radio } from 'antd';
import logo from '../../Assets/logo/BVS_Logo.png'
import axios from 'axios';
import { Spin } from 'antd';
const Voting = () => {

    const [selectedCategory,setSelectedCategory] = useState(5) 
    const [visible, setVisible] = useState(false);
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [showFloatingBtn,setShowFloatingBtn] = useState(false)
    const [allUsers,setAllUsers] = useState([])
    const [breaking,setBreaking] = useState([])
    const [graffiti,setGaffiti] = useState([])
    const [popping,setPopping] = useState([])
    const [rapping,setRapping] = useState([])
    const [showcase,setShowcase] = useState([])
    const [loading,setLoading] = useState(false)
    const breakingParticipant = [
        {'name':'b1','src':b1},
        {'name':'b2','src':b2},
        {'name':'b1','src':b1},
        {'name':'b2','src':b2},
        {'name':'b1','src':b1},
        {'name':'b2','src':b2},
        {'name':'b1','src':b1},
        {'name':'b2','src':b2},
        {'name':'b1','src':b1},
        {'name':'b2','src':b2},
        {'name':'b1','src':b1},
        {'name':'b2','src':b2},

    ]

    const poppingParticipant = [
        {'name':'b1','src':p1},
        {'name':'b2','src':p2},
        {'name':'b1','src':p3},
        {'name':'b2','src':p1},

    ]
    const showDrawer = () => {
        setVisible(true);
      };
    
      const onClose = () => {
        setVisible(false);
      };

    useEffect(()=>{
        AOS.init({
            duration : 1500
          });
         
          window.addEventListener('resize',screenWidth)
          setLoading(true)
          axios.post('https://breezervividshuffle.in/api/getAllUsers')
          .then(function (response) {
            setAllUsers([...response.data.data])
            setLoading(false)
          })
          .catch(function (error) {
            console.log(error);
          });
          
      },[])

      useEffect(()=>{
        console.log("users",allUsers)
        allUsers.map((item)=>{
            if(item.name === 'Breaking'){
                setBreaking(item.Contestants)
            }
            if(item.name === 'Popping'){
                setPopping(item.Contestants)
            }
            if(item.name === 'Graffiti'){
                setGaffiti(item.Contestants)
            }
            if(item.name === 'Rapping'){
                setRapping(item.Contestants)
            }
            if(item.name === 'Showcase'){
                setShowcase(item.Contestants)
            }
        })
      },[allUsers])

      const screenWidth = () => {
        setScreenSize(window.innerWidth)
     }

     useEffect(()=>{

        setScreenSize(window.innerWidth)
        if(screenSize>750){
            setShowFloatingBtn(false)
            setVisible(false)
        }
        if(screenSize<=750) {
            setShowFloatingBtn(true)
            
        }
     },[screenSize])
    
    const CastVote = (participantName,category) => {
        axios.post('https://breezervividshuffle.in/api/castVote', {
            CategoryName: participantName,
            ContestantName: category
          })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    const GraffitiScreen = () => {
        return(
            <div>
                <h1>Graffiti</h1>
                <div className="favourite_container">
                    {graffiti.map((item,index)=>{
                        return(
                            <img key={index} onClick={()=>CastVote(item.name,'Graffiti')} className="participant_img" alt={"about_image"} src={`https://breezervividshuffle.in/${item.imgPath}`} fluid></img>
                        )
                    })}
                </div>
            </div>
        )
    }
    const BreakingScreen = () => {
        return(
            <div>
                <h1>Breaking</h1>
                <div className="favourite_container">
                    {breaking.map((item,index)=>{
                        return(
                            <img  key={index} onClick={()=>CastVote(item.name,'Breaking')} className="participant_img" alt={"about_image"} src={`https://breezervividshuffle.in/${item.imgPath}`} fluid></img>
                        )
                    })}
                </div>
            </div>
        )
    }
    const RappingScreen = () => {
        return(
            <div>
                <h1>Rapping</h1>
                <div className="favourite_container">
                    {rapping.map((item,index)=>{
                        return(
                            <img  key={index} onClick={()=>CastVote(item.name,'Rapping')} className="participant_img" alt={"about_image"} src={`https://breezervividshuffle.in/${item.imgPath}`} fluid></img>
                        )
                    })}
                </div>
            </div>
        )
    }
    const ShowcaseScreen = () => {
        return(
            <div>
                <h1>Showcase</h1>
                <div className="favourite_container">
                    {showcase.map((item,index)=>{
                        return(
                            <img  key={index} onClick={()=>CastVote(item.name,'Showcase')} className="participant_img" alt={"about_image"} src={`https://breezervividshuffle.in/${item.imgPath}`} fluid></img>
                        )
                    })}
                </div>
            </div>
        )
    }
    const PoppingScreen = () => {
        return(
            <div>
                <h1>Popping</h1>
                <div className="favourite_container">
                    {popping.map((item,index)=>{
                        return(
                            <img  key={index} onClick={()=>CastVote(item.name,'Popping')} className="participant_img" alt={"about_image"} src={`https://breezervividshuffle.in/${item.imgPath}`} fluid></img>
                        )
                    })}
                </div>
            </div>
        )
    }

    const LeftContainer = () => {
        return(
            <>
            <div className="voting_container_left_title">
                    <span>CATEGORIES</span>
                </div>
                <div className="voting_category">
                        <div className="voting_category_row_1" >
                            <div onClick={()=>setSelectedCategory(1)}>
                                <img alt={"about_image"} className={selectedCategory==1?"category_image_selected":"category_image"} src={Graffiti} fluid></img>
                            </div>
                            <div  onClick={()=>setSelectedCategory(2)}>
                                 <img alt={"about_image"}  className={selectedCategory==2?"category_image_selected":"category_image"} src={Breaking} fluid></img>
                            </div>
                        </div>
                        <div className="voting_category_row_1" >
                            <div  onClick={()=>setSelectedCategory(3)}>
                                <img alt={"about_image"}  className={selectedCategory==3?"category_image_selected":"category_image"} src={Rapping} fluid></img>
                            </div>
                            <div  onClick={()=>setSelectedCategory(4)}>
                                 <img alt={"about_image"}  className={selectedCategory==4?"category_image_selected":"category_image"} src={Popping} fluid></img>
                            </div>
                        </div>
                        <div className="voting_category_row_1" >
                            <div  onClick={()=>setSelectedCategory(5)} >
                                <img alt={"about_image"}  className={selectedCategory==5?"category_image_selected":"category_image"} src={Showcase} fluid></img>
                            </div>
                        </div>
                    </div>
                    </>
        )
    }
	return (
       <div id="voting" className="voting_container" >
             {showFloatingBtn?<div onClick={showDrawer} className="floating_btn">
             <img alt={"about_image"}  src={logo} style={{width:'100%'}} fluid></img>
            </div>:<div className="voting_container_left" style={{backgroundImage: `url(${category_bg})`}}>
                {<LeftContainer/>}
            </div>}
            <div className="voting_container_right" style={{backgroundImage: `url(${favoutite_bg})`}}>
                 <div className="voting_container_right_title">
                    <span>VOTE YOUR FAVOURITE</span>
                </div>
               {loading? <div style={{display:'flex',justifyContent:'center',height:'70vh',alignItems:'center'}}>
                   <Spin tip="Loading..." size="large" style={{color:"black"}} />
                   </div> : <div className="voting_container_favourite">
                        {selectedCategory==1?<GraffitiScreen/>:selectedCategory==2?<BreakingScreen/>:selectedCategory==3?<RappingScreen/>:selectedCategory==4?<ShowcaseScreen/>:<PoppingScreen/>}
                </div>}
            </div>

            <Drawer
                
                placement={'left'}
                width={'70vw'}
                onClose={onClose}
                visible={visible}
                extra={
                <Space>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="primary" onClick={onClose}>
                    OK
                    </Button>
                </Space>
                }
            >
                <div className="voting_container_left" style={{backgroundImage: `url(${category_bg})`}}>
                <LeftContainer/>
                </div>
            </Drawer>
    
           
		</div>
	)
}

export default Voting;
