import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout/Layout";
import Banner from "../components/Banner";
import MeetTheTeam from "../components/MeetTheTeam";
import BannerContact from "../components/BannerContact";
import banner from "../assets/images/homeBanner.jpg";
import nadsAndPaddyTent from "../assets/images/nadsAndPaddyTent.jpg";
import grassWrapsInBox from "../assets/images/grassWrapsInBox.jpg";
import gardenBanner from "../assets/images/gardenBanner.jpg";

class AboutUs extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="WaxHiveWraps | About Us"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        ></Helmet>

        <Banner img={banner} title="About" />

        <div id="main">
          <div className="container home_about">
            <div className=" row my-5">
              <div className="col-sm-5 pt-5">
                <p>
                  We are Paddy and Nadja. After meeting in New Zealand 5 years ago we met lots of lovely people who have become like family and
                  inspired us. Our travel experience has shown us many alternative ways of making a smaller impact on the environment.
                </p>
                <br />
                <br />
                <p>
                  Traveling is not exactly a low impact lifestyle and what we are doing can come across as hypocritical. But we do love traveling and
                  the thrill of experiencing new things is what puts a smile on our faces. We do try to minimise our impact on the earth wherever we
                  may be, by buying local and plastic free for example.
                </p>
                <br />
                <br />
                <p>
                  The actual inspiration for this endeavour that is Waxhivewraps are our good friends Tim and Suz. They suggested that making bees wax
                  wraps may be right up our street and the thought brewed in our heads for months.{" "}
                </p>
              </div>
              <div className="col-sm-7">
                <img src={nadsAndPaddyTent} alt="" />
              </div>
            </div>
            <div className="row my-5">
              <div className="col-sm-7">
                <img src={grassWrapsInBox} alt="" />
              </div>
              <div className="col-sm-5">
                <p>
                  So we spent the past winter in beautiful Northern Ireland developing our recipe for producing Waxhivewraps. We are now happy to
                  bring our product to you and the world. Our passion is to run a business that can support us while making as little as possible
                  impact on the earth.
                </p>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <p>
                    We are on the road again after a year in Northern Ireland heading to France for the winter where we will work and develop
                    waxhivewraps. Thank you, thank you to Phil the main man for all the technical help and the massive moral support from everybody
                    who helped.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <MeetTheTeam />
          <img src={gardenBanner} alt="" />
          <BannerContact />
        </div>
      </Layout>
    );
  }
}

export default AboutUs;
