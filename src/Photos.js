import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if (props.photos) {
        return (
            <section className="Photos">
                <div className="row">
                    {props.photos.map(function (photo, index) {
                        return (
                            <div className="col-4 col-centered" key={index}>
                                <a href={photo.src.original} target="_blank" rel="noreferrer">
                                    <img src={photo.src.landscape} className="img-fluid" alt="dictionary-img" />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </section>
        );
    } else {
        return null;
    }
}