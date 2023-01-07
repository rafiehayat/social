import React from "react";
import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/birthday.png" alt="" />
          <span className="birthdayText">
            <b>Khurshid Khan </b> and <b>3other friends </b> have a birthday
            today
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/5.jpg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Asif Khan</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/5.jpg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Khurshid Khan</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/5.jpg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Shaharyar Hussain</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/5.jpg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Daniyal</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/5.jpg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Rosy</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/5.jpg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Sarmad</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/5.jpg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Balawal</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/5.jpg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Monis</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/5.jpg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Dilshad</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
