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
    const [depStation, setDepStation] = useState(' ');
    const [arrStation, setArrStation] = useState(' ');
    const [departureDate, setDepartureDate] = useState('');
    const [departureTime, setDepartureTime] = useState('');

    const hours = ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'];

    // 날짜 생성 로직
    const generateDates = () => {
        const dates = [];
        const today = new Date();
        for (let i = 0; i < 32; i++) {
            const futureDate = new Date(today);
            futureDate.setDate(futureDate.getDate() + i);
            dates.push(futureDate.toISOString().split('T')[0]); // YYYY-MM-DD 포맷
        }
        return dates;
    };

    const dates = generateDates();

    const stations = [
        '수서', '동탄', '평택지제', '천안아산', '오송', '대전', '김천구미', '서대구', '동대구', '경주', 
        '울산(통도사)', '부산', '공주', '익산', '정읍', '광주송정', '나주', '목포', '전주', '남원', '곡성', 
        '구례구', '순천', '여천', '여수EXPO', '밀양', '진영', '창원중앙', '창원', '마산', '진주', '포항'
    ];

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
                <img src={`${process.env.PUBLIC_URL}/dwl_logo.png`} alt="Login Icon" style={{ width: '80%', height: '45%', display: 'block', margin: '0 auto'}} />
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

                    <div style={{ marginTop: "30px" }} className="inputTitle">비밀번호</div>
                    <div className="inputWrap">
                        <input
                            type="password"
                            className="input"
                            placeholder='SRT홈페이지에 등록된 비밀번호'
                            value={pw}
                            onChange={handlePw}/>
                    </div>
                    <div className="station">
                        <div style={{ marginTop: "30px" }} className="startstation">출발역
                            <div className="inputWrap">
                                <select
                                    className="input"
                                    value={depStation}
                                    onChange={(e) => setDepStation(e.target.value)}
                                >
                                    <option value="">출발역 선택</option>
                                    {stations.map((station, index) => (
                                        <option key={index} value={station}>{station}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div style={{ marginTop: "30px" }} className="arrivestation">도착역
                            <div className="inputWrap">
                                <select
                                    className="input"
                                    value={arrStation}
                                    onChange={(e) => setArrStation(e.target.value)}
                                >
                                    <option value="">도착역 선택</option>
                                    {stations.map((station, index) => (
                                        <option key = {index} value={station}>{station}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="station">
                        <div style={{ marginTop: "30px" }} className="startstation">출발날짜
                            <div className="inputWrap">
                                <select
                                    className="input"
                                    value={departureDate}
                                    onChange={(e) => setDepartureDate(e.target.value)}
                                >
                                    <option value="">날짜 선택</option>
                                    {dates.map((date, index) => (
                                        <option key={index} value={date}>{date}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div style={{ marginTop: "30px" }} className="arrivestation">출발시간
                            <div className="inputWrap">
                                <select
                                    className="input"
                                    value={departureTime}
                                    onChange={(e) => setDepartureTime(e.target.value)}
                                >
                                    <option value="">시간 선택</option>
                                    {hours.map((hour, index) => (
                                        <option key={index} value={hour}>{hour}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
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
            </div>
            <div className="rightSide">
            </div>
        </div>
    );
}
