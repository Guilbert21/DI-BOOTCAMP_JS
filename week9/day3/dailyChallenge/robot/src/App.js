import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestRobots } from "./action";
import Card from "./card";
import { setSearchField } from "./action";

const App = ({ robots, isPending, onRequestRobots, searchField, onSearchChange }) => {
  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div>
      <h1>Robot Friends</h1>
      <input
        type="search"
        placeholder="Search robots"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <div>
          {filteredRobots.map((robot) => (
            <Card key={robot.id} {...robot} />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  robots: state.robots,
  isPending: state.isPending,
  searchField: state.searchField,
});

const mapDispatchToProps = (dispatch) => ({
  onRequestRobots: () => dispatch(requestRobots()),
  onSearchChange: (text) => dispatch(setSearchField(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
