import React, {useEffect, useState } from 'react';
// import './Assets/styles/BuyTickets.css';
// import FAQImg from './Assets/images/FAQQ.png'
// import Strip from './Assets/images/Strip.png';
// import './Assets/styles/Lineup.css';
import './PhotoBooth.css'
import frame2 from '../../Assets/frames/booth2.png';
import frame3 from '../../Assets/frames/booth3.png';
import frame4 from '../../Assets/frames/booth4.png';
import frame5 from '../../Assets/frames/booth5.png'
import frame2_h from '../../Assets/frames/booth2_h.png';
import frame3_h from '../../Assets/frames/booth3_h.png';
import frame4_h from '../../Assets/frames/booth4_h.png';
import frame5_h from '../../Assets/frames/booth5_h.png';
import frame2_1h6 from '../../Assets/frames/booth2_h1.6.png';
import frame3_1h6 from '../../Assets/frames/booth3_h1.6.png';
import frame4_1h6 from '../../Assets/frames/booth4_h1.6.png';
import frame5_1h6 from '../../Assets/frames/booth5_h1.6.png';
import frame2_1h7 from '../../Assets/frames/booth2_h1.7.png';
import frame3_1h7 from '../../Assets/frames/booth3_h1.7.png';
import frame4_1h7 from '../../Assets/frames/booth4_h1.7.png';
import frame5_1h7 from '../../Assets/frames/booth5_h1.7.png';
import CloseBtn from '../../Assets/images/modal-close.png';
// import Frame_H from './Assets/frames/computer_frame.png';
// import ClickBtn from './Assets/images/clickBtn.png';
import CameraBtn from '../../Assets/images/cameraBtn.png';
import Retakebtn from '../../Assets/images/close_Icon.png';
import Downloadbtn from '../../Assets/images/downloadBtn.png';
import Switchbtn from '../../Assets/switch.png'
import btnicon1 from '../../Assets/photoboothicon/btnicon1.png';
import btnicon2 from '../../Assets/photoboothicon/btnicon2.png';
import btnicon3 from '../../Assets/photoboothicon/btnicon3.png';
import btnicon4 from '../../Assets/photoboothicon/btnicon4.png';
import OrientationScreen from './OrientationError.js'
// import Aos from "aos";

import {
	BrowserRouter as Router,
	// Switch,
	// Route,
	Link
  } from "react-router-dom";


import {Row , Image} from 'react-bootstrap';

const turnOffCamera = () => {
    let videoEl = document.getElementById('camera-video');
    // alert(`inside turnOffCamera : ${videoEl}`);
    // now get the steam 
    if(videoEl)
    {
        // alert(`closing the video player!`)

        let stream = videoEl.srcObject;
        // now get all tracks
        if(stream)
        {
            let tracks = stream.getTracks();
            // now close each track by having forEach loop
            tracks.forEach(function(track) {
                track.stop();
            });
        }
        
    }
}

const autoRefresh = () => {
    window.location.reload();
}
// const orientationChangeHandler
export default props => {
    const [frameNumber, setFrameNumber] = useState(frame2_h);
    // const [cameraWrapper, setCameraWrapper] = useState(null);
    const [vidW, setVidW] = useState(0);
    const [cameraVideo, setCameraVideo] = useState(null);
    const [reqHeight, setReqHeight] = useState(null);
    // const [cameraCanvas, setCameraCanvas] = useState(null);
    const [imageOverlay, setImageOverlay] = useState(null);
    const [orientationErr, setOrientationErr] = useState(false);
    // const [frameLoaded, setFrameLoaded] = useState(false);
    // const []
    // const [cameraImage, setCameraImage] = useState(null);
    const [phtoClicked, setPhtoClicked] = useState(false);
    const [mobView, setMobView] = useState(false);
    // const [phtoLiked, setPhtoLiked] = useState(false);
    const [touchStart,setTouchStart] = useState(0);
    const [touchEnd,setTouchEnd]  = useState(0)
    const [touchDiff,setTouchDiff] = useState(0)
    const [frameId,setFrameId] = useState(0)
    const img = React.useRef(null);
    const [facingMode,setFacingMode] = useState("user")
    const [constraints,setConstraints] = useState({
        video: {
            facingMode: facingMode,
            get width() {
                 return 1920
            },
            get height() {
                return 1080
            }
          },
          audio: false
    })
    
    const imageProcessing = (img, cnvs, im, h, w, translateIt) => {
        let cameraCanvas = cnvs;
        let cameraImage = img;
        let ctx = cameraCanvas.getContext("2d");
    
        let adjust = window.innerWidth - w;
        // if(translateIt)
        
	if(facingMode === "user") {
       	ctx.translate(cameraCanvas.width, 0);
       	ctx.scale(-1, 1);
	}
	else
	    ctx.scale(1, 1);

        if(w>h)
        ctx.drawImage(im, adjust/2, 0, cameraCanvas.width-adjust, cameraCanvas.height);
        else
        {
            // alert(`else wala`)
        ctx.drawImage(im, 0, 0, cameraCanvas.width, cameraCanvas.height);

        }

        ctx.save();
        cameraImage.src = cameraCanvas.toDataURL("image/jpeg");

        let dnBtnDiv = document.querySelector("#download-btn");
        dnBtnDiv.style.display="inline-block";
        let dnBtn = document.querySelector("#dnldBtn");
        dnBtn.href = cameraCanvas.toDataURL("image/jpeg");
        cameraImage.style.display = "none";
    }
    const changeCameraView = () => {
        console.log("constraits",constraints)
        if(facingMode == 'user'){
            let tempArr = {...constraints}
            setFacingMode("environment")
            tempArr.video.facingMode="environment"
            setConstraints(tempArr)
        }
        if(facingMode == 'environment'){
            let tempArr = {...constraints}
            setFacingMode("user")
            tempArr.video.facingMode="user"
            setConstraints(tempArr)
        }
        viewFinder(cameraVideo)
    }
    const viewFinder = (cameraVideo) => {
    
        console.log("camera videoss",cameraVideo)
        function hasGetUserMedia() {
            return !!(navigator.mediaDevices &&
            navigator.mediaDevices.getUserMedia);
        }
        
        let isMedia = hasGetUserMedia();
        
        if (isMedia) {
            navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (stream) {
                // setTrack(stream.getTracks()[0])
                cameraVideo.srcObject = stream;
            })
            .catch(function (error) {
                alert(`No Camera Found!`);
            });
        } 
          
    }

    useEffect(()=>{
        if(phtoClicked)
        {
            let camCan = document.querySelector("#camera-canvas");
            let camImg = document.querySelector("#camera-image");
            // setCameraCanvas(camCan);
            let requiredHeight = imageOverlay.clientHeight;
            // setCameraImage(camImg);
            let requiredWidth = imageOverlay.clientWidth;
            //(`requiredWidth : ${requiredWidth}, requiredHeight : ${requiredHeight}`)
            camCan.height = requiredHeight;
            camCan.width = requiredWidth;
            // alert(`requiredWidth :${requiredWidth} cameraVideoWidth :${cameraVideo.videoWidth}`)
            camCan.style.backgroundColor="white";
            camCan.style.zIndex="-1";
            let dnBtn = document.querySelector("#download-btn");
            dnBtn.style.display="none";


            // downArrow.style.display="block";
            // let videoEl = document.getElementById('camera-video');
            // alert(`videoEl : ${videoEl}, cameraVideo : ${cameraVideo}`)
            if(window.innerWidth<window.innerHeight)
            {
                // alert(`mobile`);
                imageProcessing(camImg, camCan, cameraVideo, cameraVideo.videoHeight, cameraVideo.videoWidth, true);
            }
            else
            {
                imageProcessing(camImg, camCan, cameraVideo, cameraVideo.videoHeight, reqHeight*1.77, true);
            }
            imageProcessing(camImg, camCan, imageOverlay, window.innerHeight, window.innerWidth, false);
            let stream = cameraVideo.srcObject;
        // now get all tracks
            if(stream)
            {
                let tracks = stream.getTracks();
                // now close each track by having forEach loop
                tracks.forEach(function(track) {
                    track.stop();
                });
            }            

            // alert(`first image is drawn`)

        }
        else{
        // intializeVals();

        }
    },[phtoClicked]);
    const intializeVals = () => {
        
        let camVid = document.querySelector("#camera-video");

        let camWrap = document.querySelector("#camera-wrapper");
        let imgOver = document.querySelector("#image-overlay");
        

        setCameraVideo(camVid);
        setImageOverlay(imgOver);

        let w = window.innerWidth;
        let requiredHeight = imgOver.clientHeight;
        let requiredWidth = imgOver.clientWidth;
        camWrap.style.height = requiredHeight + 'px';
        camVid.style.height = requiredHeight + 'px';
        setReqHeight(requiredHeight);
        camVid.style.width = requiredWidth  + 'px';
        imgOver.style.opacity=1;
        camVid.style.zIndex="-1";


        viewFinder(camVid);
    }
    React.useEffect(() => {     
        
        let x = document.createElement('img');
        img.current = x;   
        document.body.style.backgroundColor = 'white';
        if (window.navigator.userAgent.match(/Android|iphone/i)&&window.navigator.userAgent.match(/Android|iphone/i).length) 
        {
            if(window.matchMedia("(orientation: landscape)").matches)
                setOrientationErr(true)
        }
        window.addEventListener('resize', autoRefresh);
        window.addEventListener('orientationchange', ()=>{
            
            if (window.matchMedia("(orientation: portrait)").matches) 
            {
                if (window.navigator.userAgent.match(/Android|iphone/i)&&window.navigator.userAgent.match(/Android|iphone/i).length) 
                    setOrientationErr(true)
            }
            else   
            {
                setOrientationErr(false);
                window.location.reload()
                // intializeVals();
            }
        });
        if(window.innerWidth<750)
        {
            setMobView(true);
            setFrameNumber(frame2);
            
        }
        else
        {
            let ratio = window.innerWidth/window.innerHeight;
            // alert(`ratio : ${ratio}`)
            if(ratio>=1.5 && ratio <= 1.66)
                setFrameNumber(frame2_1h6)
            else if(ratio>1.66 && ratio < 1.8)
                setFrameNumber(frame2_1h7)
            else
                setFrameNumber(frame2_h)
        }
        return () => {
            window.removeEventListener('resize', autoRefresh);
            turnOffCamera();
            
        }
    }, []);
    const Frames = [frame2,frame3,frame4,frame5]
    const Frames_H = [frame2_h,frame3_h,frame4_h,frame5_h];
    const Frames_1H6 = [frame2_1h6,frame3_1h6,frame4_1h6,frame5_1h6];
    const Frames_1H7 = [frame2_1h7,frame3_1h7,frame4_1h7,frame5_1h7];


    function changeFrame (id) {
        
        setFrameId(id)
        if(mobView)
         setFrameNumber(Frames[id])
        else
        {
            let ratio = window.innerWidth/window.innerHeight;
            // alert(`ratio  : ${ratio}`)
            if(ratio>=1.5 && ratio <= 1.66)
                setFrameNumber(Frames_1H6[id])
            else if(ratio>1.66 && ratio < 1.8)
            {
                setFrameNumber(Frames_1H7[id])
                // alert(`ration is between 1.6 and 1.8`)
            }
            else
                setFrameNumber(Frames_H[id])

        }
    }
    
    useEffect(()=>{
        if(!phtoClicked)
        {
            let camVid = document.querySelector("#camera-video");
            intializeVals();
        }
        else
        {
            let frme = document.getElementById("image-overlay");
            // let camVid = document.querySelector("camera-video");
            // let camVid = document.querySelector("#camera-video");
            // setVidW(camVid.clientWidth);
            frme.style.opacity="0";
        }
    },[phtoClicked]);

    const handleTouchStart = (e) => {
        console.log("handleTouchStart",e.targetTouches[0].clientX)
        setTouchStart(e.targetTouches[0].clientX)
    }
    const handleTouchMove = (e) => {
        console.log("handleTouchMove")
    }
    const handleTouchEnd =(e)=>{
        console.log("handleTouchEnd",e.changedTouches[0].clientX)
        setTouchEnd(e.changedTouches[0].clientX)
        let touchDiffTemp = e.changedTouches[0].clientX - touchStart; 
        setTouchDiff(touchDiffTemp)
        handleImageChange(touchDiffTemp)
    }
    const handleImageChange =(diff)=>{
        console.log('handlechangeImage',frameId)
        console.log('chnag in distance',diff)
        if(diff<-100) {
            let tempId = frameId;
            tempId = tempId + 1;
            if(tempId>3){
                tempId = 0
            }
            changeFrame(tempId)
        }
        if(diff>100) {
            let tempId = frameId;
            tempId = tempId - 1;
            if(tempId<0){
                tempId = 3
            }
            changeFrame(tempId)
        }
    }
    return (
        <div className="photoBoothPage" onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
        onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
        onTouchEnd={(e) => handleTouchEnd(e)} >
            {/* HELLO */}
            {orientationErr?
            <OrientationScreen />:
			    <Row className="parent-row">
                    <div id="take-pic-btn" className="btns">
                        <div style={{position:'absolute'}}>
                            <a href="https://breezervividshuffle.in/"><img id="close-btn" src={CloseBtn} height={100} width={100}  /></a>
                        </div>
                    </div>
                    <div  id="camera-wrapper" >
                        
                        {phtoClicked
                            ?
                            <>
                            <canvas style={{position:'absolute'}} id="camera-canvas"></canvas>
                            <Image src="//:0/" alt="" id="camera-image"  />
                            </>
                            :<video style={{position:'absolute'}} id="camera-video" autoPlay playsInline></video>
                        }
                        <Image onLoad={()=>{intializeVals()}}
                         id="image-overlay" src={frameNumber} width={window.innerWidth} />
                        <div  style={{position:"absolute", zIndex:11, bottom:10, left:0, right:0}}>
                            {!phtoClicked?<ul className="frames-ul">
                                <li>
                                    <img as="input" className={frameId==0?"img_shadow":""} style={{"backgroundColor":"rgba(0,0,0,0)"}} id="btnicon" onClick={() => changeFrame(0)} src={btnicon1} height={60} width={60} type="submit" value="2" />
                                </li>
                                <li>
                                    <img as="input" className={frameId==1?"img_shadow":""} style={{"backgroundColor":"rgba(0,0,0,0)"}} id="btnicon" onClick={() => changeFrame(1)} src={btnicon2} height={60} width={60} type="submit" value="2" />
                                </li>
                                <li>
                                    <img style={{"backgroundColor":"rgba(0,0,0,0)"}} id="clickPhto" onClick={()=>{setPhtoClicked(true)}}  src={CameraBtn} height={55} width={55}/>
                                </li>
                               
                                <li>
                                    <img as="input" className={frameId==2?"img_shadow":""} style={{"backgroundColor":"rgba(0,0,0,0)"}} id="btnicon" onClick={() => changeFrame(2)} src={btnicon3} height={60} width={60} type="submit" value="2" />
                                </li>
                                <li>
                                    <img as="input" className={frameId==3?"img_shadow":""} style={{"backgroundColor":"rgba(0,0,0,0)"}} id="btnicon" onClick={() => changeFrame(3)} src={btnicon3} height={60} width={60} type="submit" value="2" />
                                </li>
                                {/* {mobView? <li>
                                <img as="input" onClick={() => changeFrame(4)} src={ClickBtn} height={40} width={40} type="submit" value="2" />
                                </li> : <li></li>} */}
                            </ul>:
                                <>
                                <div id="download-btn" className="btns">
                                    <a id="dnldBtn"  type="submit" href="#" download><img  height={80} src={Downloadbtn}>
                                                                                </img></a>
                                    
                                </div>
                                <div id="like-it-btn" className="btns">
                                    <div>
                                        {/* <Button as="input" onClick={() => {window.location.reload(true)}} type="reset" value="RE-TAKE" /> */}
                                        <img height={80} onClick={() => {setPhtoClicked(false)}} type="reset" src={Retakebtn} />
                                    </div>
                                </div>
                                </>
                            }
                              <div className="switch_camera" onClick={()=>changeCameraView()}>
                                <img src={Switchbtn} style={{height:'100%',width:'100%'}} />
                            </div>
                        </div>
                        

                    </div>
                 </Row>}
             </div>
    )
}
