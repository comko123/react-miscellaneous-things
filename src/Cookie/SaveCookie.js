import cookies from 'react-cookies';
import {useRef} from 'react';
export default function SaveCookie(){
    const checked=useRef();
    const id_value=useRef();
    const pw_value=useRef();
    const cb_value=useRef();
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 10);
    cookies.save('userid', 'coadingHospital',   
                {
                    path: '/',        
                    expires,          // 유효 시간
                    //secure: true,   // 웹 브라우저와 웹 서버가 https로 통신하는 경우에만 쿠키 저장
                    //httpOnly: true  // document.cookie라는 자바스크립트 코드로 쿠키에 비정상적으로 접속하는 것을 막는 옵션
                }
    )
    // cookies 데이터 가져오기

    const saveCookie = () =>{
            cookies.save(id_value.current.value,pw_value.current.value,{ path: '/',expires,httpOnly:cb_value.current.checked})
            console.log("done :)")
            id_value.current.value = null
            pw_value.current.value = null
            cb_value.current.checked = false
        }
    return(<> <p>react-cookies Save</p>
                   <button onClick={()=>{console.log(cookies.load('userid'))}}>click</button>
                   <br/>
                   <button  onClick={()=>{cookies.remove('userid');return console.log("delete")}}>delete</button>
                <br/>
                 <input type = "checkbox" ref={checked} onChange={()=>console.log(checked.current.checked)}/>
                   <details>
                    <summary>add to cookie</summary>
                    <br/>
                    <input type="text" placeholder='name' ref={id_value}/>
                    <br/> <br/>
                    <input type="text" placeholder='value' ref={pw_value}/>
                    <br/> <br/>
                    HttpOnly <input type="checkbox" ref={cb_value}/>
                    <br/> <br/>
                    <input type="button" value="cookie!" onClick={saveCookie}/>
                    </details>
                    </>)
}