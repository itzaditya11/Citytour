import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./TourList.scss";
import { tourData } from "../tourData";
class TourList extends Component {
  state = {
    tours: tourData,
  };
  removeTour = (id) => {
    console.log(id);

    const { tours } = this.state;
    const sortedTours = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: sortedTours,
    });
  };
  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} removeTour={this.removeTour} tour={tour} />
          );
        })}
      </section>
    );
  }
}

export default TourList;
