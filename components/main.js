import React from 'react';
import emo1 from '../css/images/proemo1.jpeg'
import emo2 from '../css/images/proemo2.jpeg';
import emo3 from '../css/images/proemo3.jpeg';
import pro1 from '../css/images/pro1.jpeg';
import pro2 from '../css/images/pro2.jpeg';
import pro3 from '../css/images/pro3.jpeg';
const SiteInfo = () => {
    return(
    //     <div className="site-info">
    //          <div className="header">
    //         <nav>
    //             <ul>
    //                <li>
    //                    <a href="#">Home</a>
    //                </li>
    //                <li>
    //                    <a href="#">About</a>
    //                </li>
    //                <li>
    //                    <a href="#">Blog</a>
    //                </li>
    //                <li>
    //                    <a href="#">Contact</a>
    //                </li>
    //                <li>
    //                    <a href="/admin">Admin</a>
    //                </li>
    //             </ul>
    //         </nav>
    //     </div>
    //         <div className="title">
    //             EASY BUS BOOKING
    //         </div>
    //         <div className="sub-title">
    //            <h6> Book your ticket in single click!</h6>
    //         </div>
    //         <div className="home_buttons">
    //        <a href="/signin" ><button style={{marginLeft: "10px"}} className="btn btn-info">Sign In </button></a>
    //       <a href="/signup">  <button style={{marginLeft: "10px"}} className="btn btn-info">Sign Up </button></a>
    //       </div>
    //       <footer>
    //      <div>
    //          <div className="social">
    //          <i className="fab fa-twitter"></i>
    //          <i className="fab fa-instagram"></i>
    //          <i className="fab fa-youtube-square"></i>
    //          <i className="fab fa-facebook-f"></i>
    //          </div>
    //      </div>
    //  </footer>
    //     </div>
        <div className="bor"> 

          <section class="header">
		        <nav>
			    <a href="#"><img src="#" width="200" height="100"/></a>
			        <div class="nav-links">
			            <i class="fa fa-times"></i>
			                <ul>
				                <li><a href="/">HOME</a></li>
				                    <li><a href="/admin">ADMIN</a></li>
				                <li><a href="signin">USER</a></li>
				                <li><a href="">ABOUT US</a></li>
				                <li><a href="">CONTACT US</a></li>
		                	</ul>
		            	</div>
			        <i class="fa fa-bars"></i>
	    	</nav>
                <div class="text-box">
	<h1>Easy Bus</h1>
	<p>Miles of Smiles !!!<br/>
	Always going your way !!!
	</p>
	<a href="signup" class='hero-btn'>Sign Up</a>
    </div>
</section>

<section class="choose">
    <h1>Why Choose Easy Bus?</h1>
    <div class="row">
	<div className="eff-col">
	<img src={emo1} width="75" height="75"/></div><div>
	<div className="eff-col">
	<h4>Private Cabins</h4>
	<p>Safe & secure space for travellers</p>
	</div></div>
	<div class="eff-col">
	<img src={emo2} width="75" height="75"/></div><div>
	<div class="eff-col">
	<h4>Regular Sanitization</h4>
	<p>Mandatory cleaning & sanitization of buses</p>
	</div></div>
	<div class="eff-col">
	<img src={emo3} width="75" height="75"/></div><div>
	<div class="eff-col">
	<h4>Travel Insurance Cover</h4>
	<p>COVID health cover for travellers</p>
	</div></div>
    </div>
</section>
<section>
    <h1>Experience Safe & Comfortable Journeys With Us</h1>
    <p>We are the creators of India’s top branded buses that guarantee safe & comfortable journeys. 
    We offer you a complete end-to-end travel experience with our professional crew, round the clock command 
centre and many other features. We put all our efforts into making every trip an on-time trip!</p>
</section>
<section>
    <div class="row">
	<div class="eff-col">
	<img src={pro1} width="400" height="300"/></div>

	<div class="eff-col">
	<img src={pro2} width="400" height="300"/></div>

	<div class="eff-col">
	<img src={pro3} width="400" height="300"/>
    </div>

    </div>
	
</section>

<section>
        <div class="row">
	        <div class="eff-col">
	<h2>Our Promises</h2>
	<img src="#" width="300" height="300"/></div>
    </div>
    <div class="row">
	<div class="eff-col">
	<img src="#" width="300" height="300"/></div>
    </div>
    <div class="row">
	<div class="eff-col">
	<img src="#" width="300" height="300"/></div>

    </div>
	
</section>









        </div>
    );
}

export default SiteInfo;