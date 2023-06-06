import './Cursor.scss'
import {useEffect, useRef} from 'react'

function Cursor(){
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

        animateDotOutline();
    })

    const animateDotOutline = ()=>{
        _x.current += (endX.current - _x.current);
        _y.current += (endY.current - _y.current);

        dotOutline.current.style.top = _y.current + 'px';
        dotOutline.current.style.left = _x.current + 'px';
        dotOutline.current.style.filter = `hue-rotate(${_x.current}deg) blur(5px)`;
        dot.current.style.filter = `hue-rotate(${_x.current}deg) `;

        reqRef.current = requestAnimationFrame(animateDotOutline);
    }


return(
    <>
    <div ref={dotOutline}className="cursor-outline"/>
    <div ref={dot} className="cursor-main"/>
    </>)
    }

    export default Cursor