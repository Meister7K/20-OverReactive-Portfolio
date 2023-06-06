import './Cursor.scss'
import {useEffect, useRef} from 'react'

function Cursor(){
    const delay = 5;

    const dot:any=useRef(null);
    const dotOutline:any=useRef(null);

    const cursorVisible=useRef(true);
    const cursorEnlarge=useRef(false);

    const endX=useRef(window.innerWidth/2);
    const endY=useRef(window.innerHeight/2);

    const _x=useRef(0);
    const _y=useRef(0);

    const reqRef:any =useRef(null);

    const toggleCursorVisibility=()=>{
        if(cursorVisible.current){
            dot.current.style.opacity = 1;
            dotOutline.current.style.opacity = 1
        } else {
            dot.current.style.opacity = 0;
            dotOutline.current.style.opacity = 0;
        }
    }

    const toggleCursorSize=()=>{
        if(cursorEnlarge.current){
            dot.current.style.transform='translate(-50%, -50%) scale(.5)';
            dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
            dotOutline.current.style.filter = 'blur(2px)';
        } else {
            dot.current.style.transform='translate(-50%, -50%) scale(1)';
            dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    }

    const mouseOver = ()=>{
        cursorEnlarge.current = true;
        toggleCursorSize();
    }

    const mouseOut = ()=>{
        cursorEnlarge.current = false;
        toggleCursorSize();
    }

    const mouseEnter = ()=>{
        cursorEnlarge.current = true;
        toggleCursorSize();
    }

    const mouseLeave = ()=>{
        cursorEnlarge.current = false;
        toggleCursorSize();
    }

    const mouseMoveEvent =(e:any)=>{
        cursorVisible.current = true;
        toggleCursorVisibility();

        endX.current = e.pageX;
        endY.current = e.pageY;

        dot.current.style.top=endY.current +'px';
        dot.current.style.left=endX.current+'px';
    }

    useEffect(()=>{
        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mousedown', mouseOver);
        document.addEventListener('mouseup', mouseOut);
        //document.addEventListener('mouseenter', mouseEnter);
        //document.addEventListener('mouseleave', mouseLeave);

        animateDotOutline();

        return()=>{
            document.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mousedown', mouseOver);
            document.removeEventListener('mouseup', mouseOut);
           // document.removeEventListener('mouseenter', mouseEnter);
           // document.removeEventListener('mouseleave', mouseLeave);

            cancelAnimationFrame(reqRef.current);
        }
    },[]);

    const animateDotOutline = ()=>{
        _x.current += (endX.current - _x.current)/delay;
        _y.current += (endY.current - _y.current)/delay;

        dotOutline.current.style.top = _y.current + 'px';
        dotOutline.current.style.left = _x.current + 'px';
        dotOutline.current.style.filter = `hue-rotate(${_x.current + _y.current}deg) blur(5px)`;
        dot.current.style.filter = `hue-rotate(${_x.current + _y.current}deg) `;

        reqRef.current = requestAnimationFrame(animateDotOutline);
    }


return(
    <>
    <div ref={dotOutline}className="cursor-outline"/>
    <div ref={dot} className="cursor-main"/>
    </>)
    }

    export default Cursor