
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
import vote from '../../Assets/participants/vote.png'
import { Drawer, Button, Space, Radio,notification,Modal } from 'antd';
import logo from '../../Assets/logo/BVS_Logo.png'
import axios from 'axios';
import { Spin } from 'antd';
const Voting = () => {

    const [selectedCategory,setSelectedCategory] = useState(5) 
    const [visible, setVisible] = useState(false);
    const [isModalVisible,setIsModalVisible] = useState(false)
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [showFloatingBtn,setShowFloatingBtn] = useState(false)
    const [allUsers,setAllUsers] = useState([])
    const [breaking,setBreaking] = useState([])
    const [graffiti,setGaffiti] = useState([])
    const [popping,setPopping] = useState([])
    const [rapping,setRapping] = useState([])
    const [showcase,setShowcase] = useState([])
     const [loading,setLoading] = useState(false)
    const [participantName,setParticipantName] = useState('')
    const [categoryName,setCategoryName] = useState('')
    const [votedList,setVotedList] = useState('')
   
    const showDrawer = () => {
        setVisible(true);
      };
    
      const onClose = () => {
        setVisible(false);
      };

    const notificationError = (participant) => {
        notification['error']({
            message: 'Already Voted',
            description:
              `You have already voted for ${participant} in Breaking Category`,
          });
    }
    const setLocalStorage = () => {
        let votingList = window.localStorage.getItem('votingList');
        let obj = {}
        if(votingList){
            obj = JSON.parse(votingList)
        }
        else{
             obj = {
                'Breaking':'',
                'Popping':'',
                'Graffiti':'',
                'Rapping':'',
                'Showcase':''
            }
            window.localStorage.setItem('votingList',JSON.stringify(obj))
            
        }
        
      
        switch(categoryName) {
            case 'Breaking' : {
                if(obj.Breaking==''){
                 obj.Breaking = participantName
                 voteService()
                }
                else {
                   notificationError(obj.Breaking)
                }
                break;
            }
            case 'Popping' : {
                if(obj.Popping==''){
                  obj.Popping = participantName
                  voteService()
                }
                else {
                    notificationError(obj.Popping)
                 }
                break;
            }
            case 'Graffiti' : {
                if(obj.Graffiti==''){
                    obj.Graffiti = participantName
                    voteService()
                  }
                  else {
                      notificationError(obj.Graffiti)
                   }
                  break;
            }
            case 'Rapping' : {
                if(obj.Rapping==''){
                    obj.Rapping = participantName
                    voteService()
                  }
                  else {
                      notificationError(obj.Rapping)
                   }
                  break;
            }
            case 'Showcase' : {
                if(obj.Showcase==''){
                    obj.Showcase = participantName
                    voteService()
                  }
                  else {
                      notificationError(obj.Showcase)
                   }
                  break;
            }
            default : {
            }  
        }
        console.log("voting list",obj)
        window.localStorage.setItem('votingList',JSON.stringify(obj))
    }
    useEffect(()=>{
        AOS.init({
            duration : 1500
          });
       getAllUsers()
          
      },[])

      const getAllUsers = () => {
        let votingList = window.localStorage.getItem('votingList');
        let obj = {}
        if(votingList){
            obj = JSON.parse(votingList)
            setVotedList(obj)
        }
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
      }

      const showModal = () => {
        setIsModalVisible(true);
      };
    
      const voteService = () => {
        axios.post('https://breezervividshuffle.in/api/castVote', {
            CategoryName: categoryName,
            ContestantName: participantName
          })
        .then(function (response) {
          console.log(response)
          notification['success']({
            message: 'Voted Successfully',
            description:
              `You have successfully voted for ${participantName} in ${categoryName} Category`,
          });
          setCategoryName('')
          setParticipantName('')
          getAllUsers()
        })
        .catch(function (error) {
          console.log(error);
          notification['error']({
            message: 'Something Went Wrong',
            description:
              `Please try again`,
          });
        });
      }
      const handleOk = () => {
        setIsModalVisible(false);
        setLocalStorage()
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
        setParticipantName('')
        setCategoryName('')
      };

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
    
    const CastVote = (participant,category) => {

        setCategoryName(category)
        setParticipantName(participant)
        showModal(participant,category)

      
    }
    const GraffitiScreen = () => {
        return(
            <div>
                <h1>Graffiti</h1>
                <div className="favourite_container">
                    
                    {graffiti.map((item,index)=>{
                        return(
                            <div className="favourite_container_participant" >
                            <img key={index} onClick={()=>CastVote(item.name,'Graffiti')} className="participant_img" alt={"about_image"} src={`https://breezervividshuffle.in/${item.imgPath}`} fluid></img>
                                {votedList?.Graffiti == item.name &&<div className="voted">
                                    <img src={vote} fluid />
                                </div>}
                            </div>
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
                            <div className="favourite_container_participant" >
                              <img  key={index} onClick={()=>CastVote(item.name,'Breaking')} className="participant_img" alt={"about_image"} src={`https://breezervividshuffle.in/${item.imgPath}`} fluid></img>
                                {votedList?.Breaking == item.name &&<div className="voted">
                                        <img src={vote} fluid />
                                </div>}
                            </div>
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
                          <div className="favourite_container_participant" >  
                            <img  key={index} onClick={()=>CastVote(item.name,'Rapping')} className="participant_img" alt={"about_image"} src={`https://breezervividshuffle.in/${item.imgPath}`} fluid></img>
                                {votedList?.Rapping == item.name &&<div className="voted">
                                        <img src={vote} fluid />
                                </div>}
                          </div>
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
                            <div className="favourite_container_participant" >
                              <img  key={index} onClick={()=>CastVote(item.name,'Showcase')} className="participant_img" alt={"about_image"} src={`https://breezervividshuffle.in/${item.imgPath}`} fluid></img>
                                {votedList?.Showcase == item.name &&<div className="voted">
                                        <img src={vote} fluid />
                                </div>}
                            </div>
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
                            <div className="favourite_container_participant" > 
                             <img  key={index} onClick={()=>CastVote(item.name,'Popping')} className="participant_img" alt={"about_image"} src={`https://breezervividshuffle.in/${item.imgPath}`} fluid></img>
                                 {votedList?.Popping == item.name &&<div className="voted">
                                        <img src={vote} fluid />
                                </div>}
                             </div>
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
                            <div onClick={()=>{setSelectedCategory(1);setVisible(false)}}>
                                <img alt={"about_image"} className={selectedCategory==1?"category_image_selected":"category_image"} src={Graffiti} fluid></img>
                            </div>
                            <div  onClick={()=>{setSelectedCategory(2);setVisible(false)}}>
                                 <img alt={"about_image"}  className={selectedCategory==2?"category_image_selected":"category_image"} src={Breaking} fluid></img>
                            </div>
                        </div>
                        <div className="voting_category_row_1" >
                            <div  onClick={()=>{setSelectedCategory(5);setVisible(false)}} >
                                <img alt={"about_image"}  className={selectedCategory==5?"category_image_selected":"category_image"} src={Showcase} fluid></img>
                            </div>
                            <div  onClick={()=>{setSelectedCategory(4);setVisible(false)}}>
                                 <img alt={"about_image"}  className={selectedCategory==4?"category_image_selected":"category_image"} src={Popping} fluid></img>
                            </div>
                        </div>
                        <div className="voting_category_row_1" >
                        <div  onClick={()=>{setSelectedCategory(3);setVisible(false)}}>
                                <img alt={"about_image"}  className={selectedCategory==3?"category_image_selected":"category_image"} src={Rapping} fluid></img>
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
            <Modal title="Confirmation" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div>
                    <span style={{fontSize:22}}>Vote for <span style={{fontWeight:'bold',color:'blue'}}>{participantName}</span> in <span style={{fontWeight:'bold',color:'red'}}>{categoryName}</span> category ?</span>
                </div>
            </Modal>
    
           
		</div>
	)
}

export default Voting;
