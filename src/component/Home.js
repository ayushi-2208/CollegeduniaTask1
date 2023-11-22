import React from "react";
import logo from "../images/logo.svg";
import "./home.css";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WhereToVoteOutlinedIcon from "@mui/icons-material/WhereToVoteOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      // more breakpoints as needed...
    ]
  };
  return (
    <div style={{width:"100%",position:"relative"}}>
      <div className="navbar-container">
        <img src={logo} className="logo" />
        <div className="vertical-line"></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <SchoolOutlinedIcon style={{ width: "20px", height: "15px",color:"#FF7900" }} />
            <span className="text">Select Goal &</span>
            <WhereToVoteOutlinedIcon
              style={{ width: "20px", height: "15px",color:"#FF7900" }}
            />
            <span className="text">City</span>
          </div>
          <span className="select-goal">Select Goal</span>
        </div>
        <div className="search-input">
          <SearchOutlinedIcon style={{marginLeft:"20px",color:"gray"}} />
          <input
            className="input"
            type="text"
            placeholder="Search for Colleges,Exams,Courses and More"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CreateOutlinedIcon style={{color:"white",marginRight:"3px"}} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              padding: "0px 5px",
            }}
          >
            <span style={{color:"white",marginBottom:"5px"}}>Write a Review</span>
            <button className="button">Get Upto 500*</button>
          </div>
        </div>

        <div className="vertical-line"></div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <AppsOutlinedIcon style={{color:"white",marginRight:"5px"}} />
          <span style={{color:"white"}}>Explore</span>
        </div>
        <div className="circle-notification">
          <NotificationsOutlinedIcon style={{color:"white"}} />
        </div>
        <div className="menu-container">
          <MenuOutlinedIcon style={{ marginRight: "8px",color:"white" }} />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="11.5"
              fill="#FFE8D2"
              stroke="#FF7900"
            ></circle>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="m12.221 4.5-.084 2.118-.084.105c-.308-.356-1.08-1.087-1.08-1.087l.328 1.067-.132-.088.036.244c-.78-.536-1.879-.296-1.879-.296-.448-.536-.851-.724-.851-.724.203.268.443.864.443.864-.82.424-1.275 1.195-1.275 1.195.116-.064 1.107-.172 1.107-.172-.14.064-.731.76-.731.76a1.81 1.81 0 0 0-.94.272l.68-.04c-.584.332-.728 1.003-.728 1.003-.156 1.056.32 1.444.32 1.444l.116-.636.144.348v1.407c.107 1.195.294 1.693.4 1.888a1.7 1.7 0 0 0-.024.278c-.352-.085-.466.116-.466.116-.212.38-.008.764-.008.764.104.18.763.727.763.727.04.812.944 1.68.944 1.68.096.08.472.355.472.355.066.092.141.178.222.26v.001h.001c.038.038.077.075.117.111h-.002l.004.002.002.001c.022.039.274.453 1.036.657.224.103.379.155.379.155h-.004c.092.028.232.004.232.004v-.009l.002.001.004.004s.851-.04 2.634-1.743c0 0 .712-.64.832-1.375 0 0 .407.052.535-.088 0 0 .508-.208.48-.827l-.1-.612s-.084-.271-.545-.32c.21-.457.36-.942.44-1.439l.002.001.067-.15.005.005.599-1.367.52-1.175-.005-.002.013-.03 2.34-1.207-7.28-4.45Z"
              fill="#FF7900"
            ></path>
          </svg>
        </div>
      </div>
      <div className="courses-container">
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"40%"}}>
        <div>All Courses</div>
        <div>B.Tech</div>
        <div>MBA</div>
        <div>M.Tech</div>
        <div>MBBS</div>
        <div>B.Com</div>
        <div>B.Sc</div>
        <div>B.Sc(Nursing)</div>
        <div>BA</div>
        <div>BBA</div>
        <div>BCA</div>
        </div>
        
      </div>
      <div className="search-input-main">
          <SearchOutlinedIcon style={{marginLeft:"10px",color:"gray"}} />
          <input
            className="input-field"
            type="text"
            placeholder="Search for Colleges, Exams, Courses and More"
          />
          <button className="search-button">Search</button>
        </div>
        <div className="main-heading">
          <span>Find Over </span> <Typewriter
      options={{
        strings: [
          "11000+ Courses ",
          "1 Lakh Reviews",
          "25000+ Colleges",
          "250+ Exams",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        cursor:""
      }}
    />
    <span> in India</span>
        </div>
        <div className="counselling-button">
          <button className="need-counselling">Need Counselling</button>
        </div>
      <Slider {...settings}>
        <div className="card">
          <img src="https://cdn.pixabay.com/photo/2018/05/04/00/10/architecture-3372897_1280.jpg" className="carousel-img"/>
        </div>
        <div className="card">
          <img src="https://cdn.pixabay.com/photo/2016/08/18/23/04/yale-university-1604158_1280.jpg" className="carousel-img"/>
        </div>
        <div className="card">
          <img src="https://cdn.pixabay.com/photo/2016/08/24/23/00/francis-quadrangle-1618326_1280.jpg" className="carousel-img" />
        </div>
      </Slider>
     
      
    </div>
  );
};

export default Home;
