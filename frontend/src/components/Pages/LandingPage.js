import React, { Component } from 'react';
import Navbar from "../Utils/Navbar";
import FeatureCard from "../Utils/FeatureCard";
import SkillCard from "../Utils/SkillCard";
import MessageCard from "../Utils/MessageCard";
import ContactUs from "../Utils/ContactUs";
export class LandingPage extends Component {
    constructor(props) {
        super(props);
    }
    

    
    render() {
        const navBarLinks = {
            "Why Recruit": "#WhyRecruit",
            "Director's Message": "#DirectorsMessage",
            "Stats": "/stats",
            "Recruitment Process": "#RecruitmentProcess",
            "TPO's Message": "#TPOsMessage",
            "Contact Us": "#ContactUs",
        }
        return (
            <div className="width-matcher">
                <Navbar states={navBarLinks}/>

                {/* First Column */}
                <div id="first-column" className="column">
                    <div className="overlay"></div>
                    <span className="heading">{screen.width <= 767 ? "T&P Cell" : "Training And Placement Cell"}</span>
                    <span className="heading-support">{screen.width <= 767 ? "IIIT Ranchi" : "Indian Institute of Information Technology, Ranchi"}</span>
                </div>

                {/* IIIT Ranchi Section */}
                <div  className="containers bg-secondary">
                    <div className="headers">
                        <h2 className="title">IIIT Ranchi</h2>
                        <span className="support-text">An institute of National Importance under the act of parliament</span>
                    </div>
                    <div className="data-container">
                        <FeatureCard feature="Academic Facilities" featureDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere eu turpis at tristique fringilla. At sed turpis posuere nunc enim mattis nec amet. Risus massa blandit varius pulvinar ultrices tellus augue. Facilisi ut eleifend pretium purus. Pulvinar ligula purus sed volutpat ut congue vestibulum consectetur metus. Curabitur aliquam id sit enim. Egestas sit semper mauris est turpis eu, pretium volutpat ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere eu turpis at tristique fringilla. At sed turpis posuere nunc enim mattis nec amet. Risus massa blandit varius pulvinar ultrices tellus augue. Facilisi ut eleifend pretium purus. Pulvinar ligula purus sed volutpat ut congue vestibulum consectetur metus. Curabitur aliquam id sit enim. Egestas sit semper mauris est turpis eu, pretium volutpat ullamcorper." />
                        <FeatureCard feature="Industry Oriented Course" featureDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere eu turpis at tristique fringilla. At sed turpis posuere nunc enim mattis nec amet. Risus massa blandit varius pulvinar ultrices tellus augue. Facilisi ut eleifend pretium purus. Pulvinar ligula purus sed volutpat ut congue vestibulum consectetur metus. Curabitur aliquam id sit enim. Egestas sit semper mauris est turpis eu, pretium volutpat ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere eu turpis at tristique fringilla. At sed turpis posuere nunc enim mattis nec amet. Risus massa blandit varius pulvinar ultrices tellus augue. Facilisi ut eleifend pretium purus. Pulvinar ligula purus sed volutpat ut congue vestibulum consectetur metus. Curabitur aliquam id sit enim. Egestas sit semper mauris est turpis eu, pretium volutpat ullamcorper." />
                        <FeatureCard feature="Programs at the Institute" featureDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere eu turpis at tristique fringilla. At sed turpis posuere nunc enim mattis nec amet. Risus massa blandit varius pulvinar ultrices tellus augue. Facilisi ut eleifend pretium purus. Pulvinar ligula purus sed volutpat ut congue vestibulum consectetur metus. Curabitur aliquam id sit enim. Egestas sit semper mauris est turpis eu, pretium volutpat ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere eu turpis at tristique fringilla. At sed turpis posuere nunc enim mattis nec amet. Risus massa blandit varius pulvinar ultrices tellus augue. Facilisi ut eleifend pretium purus. Pulvinar ligula purus sed volutpat ut congue vestibulum consectetur metus. Curabitur aliquam id sit enim. Egestas sit semper mauris est turpis eu, pretium volutpat ullamcorper." />
                        <FeatureCard link={{"View Statistics...": "/stats"}} />
                    </div>
                </div>

                {/* Why Recruit Section */}
                <div id="WhyRecruit"  className="containers bg-white">
                    <div className="headers">
                        <h2 className="title">Why IIIT Ranchi</h2>
                        <span className="support-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere eu turpis at tristique fringilla. At sed turpis posuere nunc enim mattis nec amet. Risus massa blandit varius pulvinar ultrices tellus augue. Facilisi ut eleifend pretium purus. Pulvinar ligula purus sed volutpat ut congue vestibulum consectetur metus. Curabitur aliquam id sit enim. Egestas sit semper mauris est turpis eu, pretium volutpat ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere eu turpis at tristique fringilla. At sed turpis posuere nunc enim mattis nec amet. Risus massa blandit varius pulvinar ultrices tellus augue. Facilisi ut eleifend pretium purus. Pulvinar ligula purus sed volutpat ut congue vestibulum consectetur metus. Curabitur aliquam id sit enim. Egestas sit semper mauris est turpis eu, pretium volutpat ullamcorper.
                        </span>
                    </div>
                    <div className="skill-container">
                        <SkillCard icon="suitcase" title="All round development" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere eu turpis at tristique fringilla." />
                        <SkillCard icon="medal" title="Selection Process" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere eu turpis at tristique fringilla." />
                        <SkillCard icon="star" title="Alumni" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere eu turpis at tristique fringilla." />
                    </div>
                </div>

                {/* Director's Message */}
                <div id="DirectorsMessage" className="containers bg-secondary">
                    <div className="headers">
                        <h2 className="title">Director's Message</h2>
                    </div>
                    <div className="data-container">
                        <MessageCard name="Dr. Vishnu Priye" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere eu turpis at tristique fringilla. At sed turpis posuere nunc enim mattis nec amet. Risus massa blandit varius pulvinar ultrices tellus augue. Facilisi ut eleifend pretium purus. Pulvinar ligula purus sed volutpat ut congue vestibulum consectetur metus. Curabitur aliquam id sit enim. Egestas sit semper mauris est turpis eu, pretium volutpat ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere eu turpis at tristique fringilla. At sed turpis posuere nunc enim mattis nec amet. Risus massa blandit varius pulvinar ultrices tellus augue. Facilisi ut eleifend pretium purus. Pulvinar ligula purus sed volutpat ut congue vestibulum consectetur metus. Curabitur aliquam id sit enim. Egestas sit semper mauris est turpis eu, pretium volutpat ullamcorper." displayMessage="In coming years, the institute will contribute profusely in research and scientific discovery by adding various research programs." post="Director, IIIT Ranchi" imageLink="https://media-exp1.licdn.com/dms/image/C5603AQG70GBFQ32W-g/profile-displayphoto-shrink_800_800/0/1517239782244?e=1620864000&v=beta&t=0rnOodPEw-f5JwKhpHMK2kTQEenVv385vpKXrQ6l8q0" />
                    </div>

                </div>
                
                {/* Recruitment Process */}
                <div id="RecruitmentProcess" className="containers bg-white">
                    <div className="headers">
                        <h2 className="title">Recruitment Process</h2>
                        <span className="support-text">To be updated after details are given</span>
                    </div>
                </div>

                {/* TPO's Message */}
                <div id="TPOsMessage" className="containers bg-secondary">
                    <div className="headers">
                        <h2 className="title">TPO's Message</h2>
                    </div>
                    <div className="data-container">
                        <MessageCard name="Mr. Kumar Srikanta Nayak" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere eu turpis at tristique fringilla. At sed turpis posuere nunc enim mattis nec amet. Risus massa blandit varius pulvinar ultrices tellus augue. Facilisi ut eleifend pretium purus. Pulvinar ligula purus sed volutpat ut congue vestibulum consectetur metus. Curabitur aliquam id sit enim. Egestas sit semper mauris est turpis eu, pretium volutpat ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere eu turpis at tristique fringilla. At sed turpis posuere nunc enim mattis nec amet. Risus massa blandit varius pulvinar ultrices tellus augue. Facilisi ut eleifend pretium purus. Pulvinar ligula purus sed volutpat ut congue vestibulum consectetur metus. Curabitur aliquam id sit enim. Egestas sit semper mauris est turpis eu, pretium volutpat ullamcorper." displayMessage="IIIT Ranchi trains the students on value, ethics, collaboration, team spirit, and social services. These young minds are ready for productive contributions from day one." post="Placement cum Public Relation Officer, IIIT Ranchi" imageLink="http://iiitranchi.ac.in/img/person/tpo-srikant.jpg" />
                    </div>
                </div>
            
                <ContactUs />
            </div>
        );
    }
}

export default LandingPage
