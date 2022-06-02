import styled from 'styled-components';
import React, {useRef, useEffect, useCallback} from 'react';
// import {useSpring, animated} from "react-spring";   
import {MdClose} from "react-icons/md";
import {AiFillCamera} from "react-icons/ai"



const Backgound = styled.div`
width:750px;
height: 350px;
border-radius: 10px;
border: none;
background-color: white;
align-items: center;
margin-left: 380px;
margin-top: 200px;
position: fixed;
position: relative;


.col-4{
  
    border-left:none;
    height: 400px;
}

.col-8{
    height: 400px;
    border-right: none;

}
`
const CloseModalBtn = styled(MdClose)`
position: absolute;
width: 35px;
height: 35px;
top:10px;
right: 10px;
`
const Im = styled(AiFillCamera)`
width: 100px;
height: 100px;
margin-top: 22px;
`

const Input = styled.input`
width: 270px;
height: 55px;
border:none;
outline: none;
border-bottom: 1px solid black;
font-size: 20px;
margin-top: 50px;
margin-right: 220px;
`
const ChannelImg = styled.div`
width: 150px;
height: 150px;
border-radius: 50%;
border: none;
text-align: center;
background-color:#156DC5;
margin-top:65px;
margin-left: 40px;

`
const Description = styled.input`
border:none;
outline: none;
border-bottom: 1px solid black;
font-size: 20px;
margin-top: 60px;
margin-right: 220px;
width: 450px;
height: 50px;
`
const CreateChannel = styled.button`
width: 140px;
height: 40px;
border: none;
border-radius:10px;
background-color:#156DC5;
margin-top: 60px;
margin-left: 220px;

:hover{
        background-color: #50A0EF;
        transition:0.5s;
    }

.CreateChannelP{
    color:white;
    font-size: 20px;
    align-items: center;
    margin-top: 2px;
    
   
}
`

const Container = styled.div`
width: 1515px;
height: 915px;
border: 1px solid black;
background:rgba(0,0,0,0.8);
margin-top: -700px;
position: fixed;
margin-left: -215px;

`



export const Modal = ({showModal, setShowModal})=>{

    // const modalRef = useRef()

    // const animation = useSpring({
    //     config:{
    //         duration:250
    //     },
    //     opacity:showModal ? 1 : 0,
    //     transform:showModal ? `translateY(0%)` : `translateY(100%)`
    // });

    return(
        <>
        {showModal ? <Container>
{/* <animated.div style={animation}> */}
        <Backgound className='shadow'>
        
            <div className='row'>
                <div className='col-4'><ChannelImg><Im></Im></ChannelImg>
        
                </div>
                <div className='col-8'>  <Input placeholder='Channel name' />
              <Description placeholder='Description (optional)'/>
              <CreateChannel onClick={()=>setShowModal((prev=>!prev))}><p className='CreateChannelP'>Confirm</p></CreateChannel>
                </div>
                
                </div>
          <CloseModalBtn aria-label='Close-modal' onClick={()=>setShowModal((prev=>!prev))} />
       
        </Backgound>
        {/* </animated.div> */}
        </Container>  : null}
        </>
    )
}





// export  const Container = styled.div`

// height: 200px;
// margin: 0 auto;
// justify-content: center;
// align-items: center;
// width: 300px;
// display: flex;

// `
// export const Btn = styled.button`
// width: 150px;
// height: 50px;
// `