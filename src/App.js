import TopBar from './components/TopBar';
import TopBarUnselected from './components/TopBarUnselected';
import TopEmptyBar from './components/TopEmptyBar';
import BotTab from './components/BotTab';
import BotTabShort from './components/BotTabShort';
import BotTabShortest from './components/BotTabShortest';

import EmptyTabLeft from './EmptyTabLeft.png';
import EmptyTabRight from './EmptyTabRight.png';
import EmptyTabCenter from './EmptyTabCenter.png';

import MenuIcon from './MenuIcon.png';
import { preload } from 'react-dom';


const defaultStyle = {position:"relative", height:"89px", display:"block"};
const defaultStyleNone = {position:"relative", height:"89px", display:"none"};
const bottomStyle = {position:"absolute", height:"200px", display:"block", bottom:"0px", left:"5%"};
const bottomStyleShort = {position:"absolute", height:"200px", display:"block", bottom:"0px"};
const bottomStyleShortest = {position:"absolute", height:"160px", display:"block", bottom:"0px"};


function App() {
  preload("url('backgroundPale.png')", {
    as: "image",
  });
  return (
    <div className="box">
      <div id="bg" className="bg">
        
        <div className="topnav">

          <div className="TopLogo" onClick={() => MainBackground()}>
          </div>

          
          <img className="EmptyBar" id="EmptyBarEnabled1" src={EmptyTabLeft}></img>
          <img className="EmptyBarCenter" id="EmptyBarEnabled2" src={EmptyTabCenter} style={{flex:"1", height:"89px"}}></img>
          <img className="EmptyBar" id="EmptyBarEnabled3" src={EmptyTabRight}></img>

          <div id="EmptyBarDisabled" style={{flex:"1", height:"89px", backgroundColor:"white", display:"none"}}></div>
          
          <div  id="Partners" style={defaultStyleNone}>
            <TopBar text="Partners" customClickEvent={() => Partners()}></TopBar>
          </div>
          <div  id="PartnersUnselected" style={defaultStyle}>
            <TopBarUnselected text="Partners" customClickEvent={() => Partners()}></TopBarUnselected>
          </div>

          <div  id="Corporate" style={defaultStyleNone}>
            <TopBar text="Corporate" customClickEvent={() => Corporate()}></TopBar>
          </div>
          <div  id="CorporateUnselected" style={defaultStyle}>
            <TopBarUnselected text="Corporate" customClickEvent={() => Corporate()}></TopBarUnselected>
          </div>

          <div  id="OurBrands" style={defaultStyleNone}>
            <TopBar text="Our Brands" customClickEvent={() => OurBrands()}></TopBar>
          </div>
          <div  id="OurBrandsUnselected" style={defaultStyle}>
            <TopBarUnselected text="Our Brands" customClickEvent={() => OurBrands()}></TopBarUnselected>
          </div>

          <div  id="LifeOffering" style={defaultStyleNone}>
            <TopBar text="Life Offering" customClickEvent={() => LifeOffering()} ></TopBar>
          </div>
          <div  id="LifeOfferingUnselected" style={defaultStyle}>
            <TopBarUnselected text="Life Offering" customClickEvent={() => LifeOffering()} ></TopBarUnselected>
          </div>

          <div  id="News" style={defaultStyleNone}>
          < TopBar text="News" customClickEvent={() => News()} ></TopBar>
          </div>
          <div  id="NewsUnselected" style={defaultStyle}>
            <TopBarUnselected text="News" customClickEvent={() => News()} ></TopBarUnselected>
          </div>

          <div  id="StockQuote" style={defaultStyleNone}>
            <TopBar text="Stock Quote" customClickEvent={() => StockQuote()} ></TopBar>
          </div>
          <div  id="StockQuoteUnselected" style={defaultStyle}>
            <TopBarUnselected text="Stock Quote" customClickEvent={() => StockQuote()} ></TopBarUnselected>
          </div>

          <div className="dropdown" style={{backgroundColor:"white", justifyContent:"center", alignItems:"center", display:"flex"}}>
            <button className="dropbtn MenuIcon" onClick={() => myFunction()}></button>
            <div id="myDropdown" class="dropdown-content">
              <a href="#" onClick={()=>Partners()}>Partners</a>
              <a href="#" onClick={()=>Corporate()}>Corporate</a>
              <a href="#" onClick={()=>LifeOffering()}>Life Offering</a>
              <a href="#" onClick={()=>News()}>News</a>
              <a href="#" onClick={()=>StockQuote()}>Stock Quote</a>
            </div>
          </div>
        </div>

        <div id="content">

          <div id="centerLogo" className="center">
            <img src={"logo.png"} alt="Logo" style={{width:"100%"}}/>
          </div>
          
          <div id="CorporateContent" className="CorporateContent" style={{display:"none"}}>
            <div>
              <div className="Title">Management</div>
              <br/>
              <div className="Name">Stephen Brown</div>
              <div className="Description">President/CEO</div>
              <br/>
              <div className="Name">Steven Nguyen</div>
              <div className="Description">CFO</div><br/><br/>
            </div>

            <div>
              <div className="Title">Directors</div>
              <br/>
              <div className="Name">Stephen Brown</div>
              <div className="Description">Chairman/Director</div>
              <br/>
              <div className="Name">William Hullah</div>
              <div className="Description">Director</div>
              <br/>
              <div className="Name">Brian Hoffman</div>
              <div className="Description">Director</div>
              <br/>
              <div className="Name">Arthur Brown</div>
              <div className="Description">Director</div>
              <br/>
              <div className="Name">Douglas Magallon</div>
              <div className="Description">Director</div>
            </div>

            <div class="container">
                <div class="containerBox">
                      <div class="box-row">
                          <div class="box-cell box1">
                              <div className="Title">Lawyers</div>
                              <br/>
                              <div className="Name">McMillan LLP</div>
                              <br/>
                              <div className="Description">
                                Royal Centre, 1055 W Georgia St #1500, <br/>
                                Vancouver, British Columbia, <br/>
                                V6E 4N7, Canada </div>
                            </div>

                          <div class="box-cell box2">
                              <div className="Title">Transfer Agent</div>
                              <br/>
                              <div className="Name">
                                Computershare Trust <br/>
                                Company of Canada
                              </div>
                              <br/>
                              <div className="Description">
                                100 University Ave., 8th Floor, <br/>
                                Toronto, Ontario, M5J 2N1, Canada
                                </div>
                            </div>

                          <div class="box-cell box3">
                              <div className="Title">Auditor</div>
                              <br/>
                              <div className="Name">
                                NVS Professional <br/>
                                Corporation
                              </div>
                              <br/>
                              <div className="Description">
                                100 Allstate Parkway, Suite 303, <br/>
                                Markham, Ontario, L3R 6H3, Canada
                                 </div>
                            </div>
                        </div>
                  </div>
            </div>
          </div>


          <div id="NewsContent" className="CorporateContent" style={{display:"none"}}>
            <div>
                <div className="Title">Press Releases</div>
                <br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67f9210e1fda207cf2db105a/1744380175112/THIS+NEWS+RELEASE+IS+NOT+FOR+DISTRIBUTION+TO+U.pdf" className="NewsName">
                  FTI FOODTECH ANNOUNCES NON-BROKERED PRIVATE
                    <br/>PLACEMENT OF SHARES
                  </a>
                  <br/>
                  <div className="Description">April 11th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67f06d82502ec6621858e86f/1743809922821/FTI+Foodtech+International+-+News+Release+Withdrawing+February+Placement++%28April+4+2025%29.pdf" className="NewsName">
                  FTI FOODTECH WITHDRAWS FEBRUARY PLACEMENT
                  </a>
                  <br/>
                  <div className="Description">April 4th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67f0206abd5fe61be95372b1/1743790187189/FTI_PR_Apr+4+2025.pdf" className="NewsName">
                  FTI FOODTECH ANNOUNCES NON-BROKERED PRIVATE
                  <br/>PLACEMENT OF SHARES
                  </a>
                  <br/>
                  <div className="Description">April 4th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef1f4ed0c6b6cfb15a189/1743712756580/FTI_PR_March+20+2025.pdf" className="NewsName">
                  FTI Foodtech International Acquires the Brand PURE DEFENDER
                  </a>
                  <br/>
                  <div className="Description">March 20th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef1e9b4382476022b9c7c/1743712745923/FTI_PR_March+3+2025.pdf" className="NewsName">
                  FTI Foodtech International Adds a New Chief Financial Officer
                  </a>
                  <br/>
                  <div className="Description">March 3th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef1dd7d5f600d81295448/1743712734165/FTI_PR_Feb+28+2025.pdf" className="NewsName">
                  FTI Foodtech International Acquires the Brand 
                  <br/>NAYELLE Skincare
                  </a>
                  <br/>
                  <div className="Description">Feb 28th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef1ce015456611d73f34e/1743712718709/FTI_PR_Feb+27+2025.pdf" className="NewsName">
                  FTI Foodtech International Inc. has developed a Crypto 
                  <br/>Currency called “SMASHFACE”
                  </a>
                  <br/>
                  <div className="Description">Feb 27th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef1c250f7a360a96d4e40/1743712706531/FTI_PR_Feb+26+2025.pdf" className="NewsName">
                  FTI FOODTECH ANNOUNCES SHARES FOR DEBT TRANSACTION.
                  </a>
                  <br/>
                  <div className="Description">Feb 26th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef1b21003507d1d88c92d/1743712690864/FTI_PR_Feb+11+2025.pdf" className="NewsName">
                  FTI Foodtech International Inc. has closed its previously
                  <br/>disclosed non-brokered private placement.
                  </a>
                  <br/>
                  <div className="Description">Feb 11th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef196e031bc19f4ecfeca/1743712662456/FTI_PR_Feb+5+2025.pdf" className="NewsName">
                  FTI Foodtech International Inc. has developed and is
                  <br/>scheduling the launch of its online retail-bartering platform
                  </a>
                  <br/>
                  <div className="Description">Feb 5th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef186d32be17af82cd3ee/1743712647050/FT_PR_Feb+3+2025.pdf" className="NewsName">
                  FTI HIRES VENTURE LIQUIDITY PROVIDERS AS MARKET-MAKER.
                  </a>
                  <br/>
                  <div className="Description">Feb 3th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef172635a0f73f3286d92/1743712627306/FTI_PR_Jan+29+2025.pdf" className="NewsName">
                  FTI Foodtech International Partners with Genesis
                  <br/> Cosmeceuticals to launch/market and Distribute a
                  <br/> Groundbreaking Peptide G Formula
                  </a>
                  <br/>
                  <div className="Description">Jan 29th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef16249a5d12d9ae7538b/1743712610522/FTI_PR_Jan+27+2025.pdf" className="NewsName">
                  FTI FOODTECH INTERNATIONAL TO LAUNCH FACEFACTOR.AI
                  </a>
                  <br/>
                  <div className="Description">Jan 27th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef14c635a0f73f3285e68/1743712588962/FTI_PR_Jan+15+2025.pdf" className="NewsName">
                  FTI FOODTECH INTERNATIONAL INC. INTRODUCES NEW
                  <br/>CHAIRMAN
                  </a>
                  <br/>
                  <div className="Description">Jan 15th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eeee1ff0b38f3a5c43878e/1743711775958/FTI_PR_Nov+27+2024.pdf" className="NewsName">
                    FTI Foodtech International Inc. Announces
                    <br/>Agreement with Portofino Cosmetic Inc.
                  </a>
                  <br/>
                  <div className="Description">Nov 27th, 2024</div>
                </div><br/><br/>

              </div>
          </div>

          <div id="OurBrandsContent" className="CorporateContent" style={{display:"none"}}>
            <div className="BrandName"><a className="BrandName" href="https://www.skincareinabottle.com/">Illuminate</a></div>
            <div className="BrandName"><a className="BrandName" href="https://nayelle.com/">Nayelle</a></div>
            <div className="BrandName"><a className="BrandName" href="https://www.smashfacecosmetics.com/">SmashFace</a></div>
            <div className="BrandName"><a className="BrandName" href="https://www.portofinocosmetic.com/">Portofino Cosmetic</a></div>
            <div className="BrandName"><a className="BrandName" href="https://www.facefactor.ai/">FaceFactor</a></div>
            <div className="BrandName"><a className="BrandName" href="https://www.beautafy.com/">Beautafy</a></div>
            <div className="BrandName"><a className="BrandName" href="https://www.puredefender.com/">Pure Defender</a></div>
            <div className="BrandName"><a className="BrandName" href="https://www.beblack.com/">beBlack</a></div>
          </div>

          <div id="PartnersContent" className="CorporateContent" style={{display:"none"}}>
            <div className="BrandName"><a className="BrandName" href="https://www.debutbiotech.com/">Debut Biotech</a></div>
            <div className="BrandName"><a className="BrandName" href="https://exoceuticals.com/">NayelExoceuticalsle</a></div>
          </div>

        </div>

        <div id="BotBar" style={bottomStyle}>
          <BotTab text={["Read about what we have going on."]} customClickEvent={() => BotTabFunction()}></BotTab>
        </div>
        <div id="BotBarShort" style={bottomStyleShort}>
          <BotTabShort text={["Read about what we have going on."]} customClickEvent={() => BotTabFunction()}></BotTabShort>
        </div>
        <div id="BotBarShortest" style={bottomStyleShortest}>
          <BotTabShortest text={["Read about what we have going on."]} customClickEvent={() => BotTabFunction()}></BotTabShortest>
        </div>
        
      </div>
    </div>
  );
}

//<div style={{flex:"1", height:"89px", backgroundColor:"transparent"}}></div>

export default App;

function BotTabFunction(){
  News();
  DisplayNone("BotBar");
  DisplayNone("BotBarShort");
  DisplayNone("BotBarShortest");
}

function LifeOffering(){
  window.open("https://static1.squarespace.com/static/67ed877682298565186da10f/t/67f01fdb2674ed73dbf1e076/1743790044340/FTI+Foodtech+International+-+Form+45-106F19+LIFE+Offering+Document+%28Listed+Issuer+Financing+Document%29+-+Common+Shares+%28April+4+2025%29.pdf");
}

function Partners(){
  UnselectAll();
  DisplayBlock("Partners");
  DisplayNone("PartnersUnselected");
  DisplayBlock("PartnersContent");
  DisplayNone("centerLogo");
  TabSelected();
}

function Corporate(){
  UnselectAll();
  DisplayBlock("Corporate");
  DisplayNone("CorporateUnselected");
  DisplayBlock("CorporateContent");
  DisplayNone("centerLogo");
  TabSelected();
}

function StockQuote(){
    window.open("https://money.tmx.com/en/quote/FTI");
}

function News(){
  UnselectAll();
  DisplayBlock("News");
  DisplayNone("NewsUnselected");
  DisplayBlock("NewsContent");
  DisplayNone("centerLogo");
  TabSelected();
}
function OurBrands(){
  UnselectAll();
  DisplayBlock("OurBrands");
  DisplayNone("OurBrandsUnselected");
  DisplayBlock("OurBrandsContent");
  DisplayNone("centerLogo");
  TabSelected();
}

function DisplayBlock(element){
  var T = document.getElementById(element);
  T.style.display = "block";
}
function DisplayNone(element){
  var T = document.getElementById(element);
  T.style.display = "none";
}

function TabSelected(){
  var bg = document.getElementById("bg");
  bg.style.backgroundImage = "url('backgroundPale.png')";
  
  DisplayNone("EmptyBarEnabled1");
  DisplayNone("EmptyBarEnabled2");
  DisplayNone("EmptyBarEnabled3");
  DisplayBlock("EmptyBarDisabled");
}

function MainBackground(){
  UnselectAll();
  var bg = document.getElementById("bg");
  bg.style.backgroundImage = "url('background.png')";
  DisplayBlock("centerLogo");
  DisplayBlock("BotBar");
  DisplayBlock("BotBarShort");
  DisplayBlock("BotBarShortest");
}

function UnselectAll(){
  DisplayBlock("LifeOfferingUnselected");
  DisplayBlock("CorporateUnselected");
  DisplayBlock("StockQuoteUnselected");
  DisplayBlock("NewsUnselected");
  DisplayBlock("OurBrandsUnselected");
  DisplayBlock("PartnersUnselected");

  DisplayNone("Partners");
  DisplayNone("LifeOffering");
  DisplayNone("Corporate");
  DisplayNone("StockQuote");
  DisplayNone("News");
  DisplayNone("OurBrands");

  DisplayBlock("centerLogo");
  DisplayNone("NewsContent");
  DisplayNone("CorporateContent");
  DisplayNone("OurBrandsContent");
  DisplayNone("PartnersContent");

  DisplayBlock("EmptyBarEnabled1");
  DisplayBlock("EmptyBarEnabled2");
  DisplayBlock("EmptyBarEnabled3");
  DisplayNone("EmptyBarDisabled");

  DisplayNone("BotBar");
  DisplayNone("BotBarShort");
  DisplayNone("BotBarShortest");
}

function myFunction(){
  console.log("press");
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    console.log("asd");
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}