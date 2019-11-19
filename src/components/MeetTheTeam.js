import React, { Fragment } from "react";
import beesWax from "../assets/images/beesWax.jpg";
import wrapBuild from "../assets/images/wrapBuild.jpg";

const MeetTheTeam = () => {
  return (
    <Fragment>
      <div id="team" className="mb-5">
        <h2 className="my-5">Meet The Team</h2>

        <div className="row">
          <div className="container d-flex flex-wrap justify-content-between">
            <div className="col-sm-6 about">
              <div className="row">
                <div className="col-sm-6">
                  <img src={beesWax} alt="Nadja Pearson" className="member_image mb-3" style={{ maxWidth: "223px", maxHeight: "434px" }} />
                </div>
                <div className="col-sm-6">
                  <h3>Nadja</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident quos voluptatum perspiciatis! Aliquam error mollitia
                    dolor, quos corporis culpa eos hic, esse sed laboriosam, adipisci incidunt? Voluptate, assumenda dignissimos.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 about">
              <div className="row">
                <div className="col-sm-6">
                  <img src={wrapBuild} alt="Patrick Woods" className="member_image mb-3" />
                </div>
                <div className="col-sm-6">
                  <h3>Paddy</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, vero assumenda est corporis aliquam tempora? Nisi, nulla
                    officiis perferendis eaque, voluptate tempora aperiam, aliquam doloremque nihil at maxime esse praesentium!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 about">
              <div className="row">
                <div className="col-sm-6">
                  <img src={wrapBuild} alt="Bjern" className="member_image mb-3" />
                </div>
                <div className="col-sm-6">
                  <h3>Bjern</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, vero assumenda est corporis aliquam tempora? Nisi, nulla
                    officiis perferendis eaque, voluptate tempora aperiam, aliquam doloremque nihil at maxime esse praesentium!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MeetTheTeam;
