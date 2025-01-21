import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const User = {
    phone: '01020466906',
    pw: 'choi6969!'
}

export default function Login() {
    const [phone, setPhone] = useState('');
    const [pw, setPw] = useState('');
    const [phoneValid, setPhoneValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const handlePhone = (e) => {
        setPhone(e.target.value);
        const regex = /^010\d{7}$/;
        if (regex.test(phone)) {
            setPhoneValid(true);
        } else {
            setPhoneValid(false);
        }
    }

    const handlePw = (e) => {
        setPw(e.target.value);
        // const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        // if (regex.test(pw)) {
        //     setPwValid(true);
        // } else {
        //     setPwValid(false);
        // }
        setPwValid(true);
    }

    const onClickConfirmButton = () => {
        if (phone === User.phone && pw === User.pw) {
            alert('로그인 성공');
        } else {
            alert('등록되지 않은 회원이거나 입력한 값이 일치하지 않습니다.');
        }
    }

    useEffect(() => {
        if (phoneValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [phoneValid, pwValid]);

    return (
        <div className="page">
            <div className="leftSide">
                <div className='titleWrap'>
                <img src={`${process.env.PUBLIC_URL}/dwl_logo.png`} alt="Login Icon" style={{ width: '130px', height: '130px', display: 'block', margin: '0 auto'}} />
                <br/>
                SRT 예약하기
                </div>
                <div className="contentWrap">
                    <div className="inputTitle">휴대폰번호</div>
                    <div className="inputWrap">
                        <input
                            type="text"
                            className="input"
                            placeholder="01012345678"
                            value={phone}
                            onChange={handlePhone}/>
                    </div>

                    <div className="errorMessageWrap">
                        {!phoneValid && phone.length > 0 && (
                            <div>올바른 휴대폰 번호를 입력해주세요. 예: 01012345678</div>
                        )}
                    </div>

                    <div style={{ marginTop: "27px" }} className="inputTitle">비밀번호</div>
                    <div className="inputWrap">
                        <input
                            type="password"
                            className="input"
                            placeholder='SRT홈페이지에 등록된 비밀번호'
                            value={pw}
                            onChange={handlePw}/>
                    </div>

                    <div className="errorMessageWrap">
                        {!pwValid && pw.length > 0 && (
                            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                        )}
                    </div>
                </div>

                <div className='buttonWrap'>
                    <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
                        시작하기
                    </button>
                </div>
                <hr nonshade/>
                <div className='registerWrap'>
                    <div className='registerTitle'>
                        계정이 없으신가요? <Link to="/register">가입하기</Link>
                    </div>
                </div>
            </div>
            <div className="rightSide">
            </div>
        </div>
    );
}
