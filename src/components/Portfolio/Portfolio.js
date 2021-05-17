import React from "react";
import { Card, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "./Portfolio.css";
import burger from "../images/burgerapp.png";
import anotherday from "../images/anotherday.png";
import dogtionary from "../images/dogtionary.png";
import budget from "../images/budgettracker.png";
import note from "../images/notetaker.png";
import emppro from "../images/reactempdir.png";

export default function Portfolio() {
  return (
    <div>
      <div>
        <div className="row">
          <div className="card-columns col-mb-2">
            <h1>Portfolio</h1>
          </div>
        </div>

        <div className="row row-cols-3 row-cols-mb-3 g-4 m-5">
          <div className="card m-3" style={{ width: "18rem" }}>
            <Card.Title>Dogtionary</Card.Title>
            <Card.Body>
              <Image
                alt="Dogtionary"
                className="img-fluid mx-auto"
                src={dogtionary}
              />

              <Card.Text>
                <p>
                  Dogtionary is an interactive site that assists in finding
                  adoptable dogs.
                </p>
              </Card.Text>
            </Card.Body>
            <Button
              href="https://kcnancy.github.io/Dogtionary/"
              target="_blank"
            >
              Demo
            </Button>
            <Button
              href="https://github.com/kcnancy/Dogtionary"
              target="_blank"
            >
              Repo
            </Button>
          </div>

          <div className="card m-3" style={{ width: "18rem" }}>
            <Card.Title>Budget Tracker</Card.Title>
            <Card.Body>
              <Image
                alt="budget tracker"
                className="img-fluid mx-auto"
                src={budget}
              />

              <Card.Text>
                <p>
                  Budget tracker that uses indexDB to capture offline
                  transactions and update when the app is back online.
                </p>
              </Card.Text>
            </Card.Body>
            <Button
              href="https://arcane-gorge-88849.herokuapp.com/"
              target="_blank"
            >
              Demo
            </Button>
            <Button
              href="https://github.com/kcnancy/Online_Offline_Budget_Trackers"
              target="_blank"
            >
              Repo
            </Button>
          </div>

          <div className="card m-3" style={{ width: "18rem" }}>
            <Card.Title>Employee Directory</Card.Title>
            <Card.Body>
              <Image
                alt="Employee Directory"
                className="img-fluid mx-auto"
                src={emppro}
                ro
              />

              <Card.Text>
                <p>
                  Employee Directory generated with Random Employee API, with
                  the ability to search for a specific name, sort by first name,
                  last name, email address or birthdate.
                </p>
              </Card.Text>
            </Card.Body>
            <Button
              href="https://kcnancy.github.io/ReactEmployeeDirectory/"
              target="_blank"
            >
              Demo
            </Button>
            <Button
              href="https://github.com/kcnancy/ReactEmployeeDirectory"
              target="_blank"
            >
              Repo
            </Button>
          </div>

          <div className="card m-3" style={{ width: "18rem" }}>
            <Card.Title>burger</Card.Title>
            <Card.Body>
              <Image alt="burger" className="img-fluid mx-auto" src={burger} />

              <Card.Text>
                <p>
                  This app allows the user to name a burger and submit it to the
                  menu, once on the menu the user can 'eat' the burger by
                  clicking the 'Eat it now' button. Once the burger is eaten it
                  moves to the You ate it box and can be deleted from the screen
                  if the delete button is clicked.
                </p>
              </Card.Text>
            </Card.Body>
            <Button
              href="https://quiet-crag-51716.herokuapp.com/"
              target="_blank"
            >
              Demo
            </Button>
            <Button href="https://github.com/kcnancy/burger" target="_blank">
              Repo
            </Button>
          </div>

          <div className="card m-3" style={{ width: "18rem" }}>
            <Card.Title>another day</Card.Title>
            <Card.Body>
              <Image
                alt="calendar"
                className="img-fluid mx-auto"
                src={anotherday}
              />

              <Card.Text>
                <p>
                  This is a day planner where the user can input tasks or
                  meetings in the description filed and when the save button is
                  clicked the entry will be saved in local storage. The time of
                  day is provided by the moment.js api. This allows the planner
                  to be updated in color blocks to quickly draw attention to the
                  current hour which displays in red. The hours that have passed
                  are grey and the upcoming hours are green.
                </p>
              </Card.Text>
            </Card.Body>
            <Button
              href="https://kcnancy.github.io/AnotherDayPlanner/"
              target="_blank"
            >
              Demo
            </Button>
            <Button
              href="https://github.com/kcnancy/AnotherDayPlanner"
              target="_blank"
            >
              Repo
            </Button>
          </div>

          <div className="card m-3" style={{ width: "18rem" }}>
            <Card.Title>Note Taker</Card.Title>
            <Card.Body>
              <Image
                alt="Note Taker Journal"
                className="img-fluid mx-auto"
                src={note}
              />

              <Card.Text>
                <p>
                  NoteTaker that can be used to write, save and delete notes.
                  User will launch application click Get started from the launch
                  page. The notes page will populate with any existing notes on
                  the left side of the page and Note Title and text area are
                  ready to be populated. Once there is information in the new
                  note area the save icon will appear in the upper left corner.
                  Clicking save moves the note to the list on the left side of
                  the page. The new text are wil revert to the "Note Title"
                  ready for another note. If the user clicks on one of the notes
                  in the left column that note will appear in the main body. It
                  can't be modified with this version of this app. The notes on
                  the left can be deleted by clicking on the red trash can icon.
                  To start a new note click on the pencil in the upper right
                  corner.
                </p>
              </Card.Text>
            </Card.Body>
            <Button
              href="https://protected-river-04272.herokuapp.com/"
              target="_blank"
            >
              Demo
            </Button>
            <Button href="https://github.com/kcnancy/NoteTaker" target="_blank">
              Repo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
