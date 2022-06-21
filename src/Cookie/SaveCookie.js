import cookies from 'react-cookies';
export default function SaveCookie(){
   
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
    console.log(cookies.load('userid')); // coadingHospital
    return(<> <p>react-cookies Save</p>
                   <button onClick={()=>{console.log(cookies.load('userid'))}}>click</button>
                   <br/>
                   <button  onClick={()=>{cookies.remove('userid');return console.log("delete")}}>delete</button>
                    </>)
}