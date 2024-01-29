// Import React modules
import React, { FormEvent, useMemo, useState } from "react";

// Import Next.js modules
import { NextPage } from "next";
import Head from "next/head";

// Import React-Bootstrap components
import { Button, Card, Collapse, Form } from "react-bootstrap";

// Import custom components
import ShowMessage from "components/ShowMessage";
import DisplayUserInfo from "components/DisplayUserInfo";
import FormGroup from "components/FormGroup";

// Import constants, helpers, and types
import { appTitle } from "utils/constants";
import { validateDate } from "utils/helpers";

// Define Home component
const Home: NextPage = () => {
  // Define state variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [cityName, setCityName] = useState("");
  const today = new Date().toISOString().slice(0, 10);
  const [dateArrived, setDateArrived] = useState(today);
  const [show, setShow] = useState(false);
  const [citiesTraveled, setCitiesTraveled] = useState<
    { cityName: string; dateArrived: string }[]
  >([]);

  // Define memoized values
  const isCityInList = useMemo(() => {
    const cityTrim = cityName.trim();
    if (!cityTrim) {
      return false;
    }
    const cityRegex = new RegExp(`^${cityTrim}$`, "i");
    return citiesTraveled.some((city) => cityRegex.test(city.cityName.trim()));
  }, [citiesTraveled, cityName]);

  const isInvalidDateOfBirth = useMemo(() => {
    return !validateDate(new Date(dateOfBirth), 18);
  }, [dateOfBirth]);

  const isInValidCityName = cityName.trim().length < 3;

  const isIncompleteJSONData =
    firstName.length < 3 || lastName.length < 3 || isInvalidDateOfBirth;

  const shouldShowJson = show && !isIncompleteJSONData;

  // Define event handlers
  const handleAddCity = (cityName: string, dateArrived: string) => {
    setCitiesTraveled([...citiesTraveled, { cityName, dateArrived }]);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setShow(!show);
  };

  return (
    <div className="css-page-center">
      <Head>
        <title>{`${appTitle} Dashboard`}</title>
        <meta name="viewport" content="width=device-width"></meta>
        <meta
          name="description"
          content={`${appTitle} Dashboard to manage travel information.`}
        ></meta>
      </Head>

      <Card className="shadow px-4 py-5 w-75">
        <h1 className="display-5 pb-3">Travel Information</h1>
        <Form noValidate onSubmit={handleSubmit}>
          <div className="d-flex justify-content-between">
            {/* Personal Information */}
            <div className="w-50">
              <Card.Title className="text-secondary">
                Personal Information
              </Card.Title>

              {/* First Name */}
              <FormGroup
                label="First Name"
                message="Your First Name must be at least 3 characters."
                showMessage={firstName.length < 3}
                updateValue={setFirstName}
                value={firstName}
                top={2}
              />

              {/* Last Name */}
              <FormGroup
                label="Last Name"
                message="Your Last Name must be at least 3 characters."
                showMessage={lastName.length < 3}
                updateValue={setLastName}
                value={lastName}
              />

              {/* Date of Birth */}
              <Form.Group controlId="formDateOfBirth">
                <Form.Label className="mt-4">Date of Birth</Form.Label>
                <Form.Control
                  type="text"
                  onFocus={({ target }) => {
                    if (!dateOfBirth) {
                      setDateOfBirth(today);
                    }
                    target.setAttribute("type", "date");
                  }}
                  placeholder="DD/MM/YYYY"
                  value={dateOfBirth}
                  onChange={({ target }) => setDateOfBirth(target.value)}
                />
                <ShowMessage
                  message="Should be 18 years or older"
                  show={isInvalidDateOfBirth}
                />
              </Form.Group>
            </div>

            {/* Cities traveled */}
            <div>
              <Card.Title className="text-secondary">
                {`Cities traveled${
                  citiesTraveled.length ? ` (${citiesTraveled.length})` : ""
                }`}
              </Card.Title>

              {/* City Name */}
              <FormGroup
                label="City Name"
                message="City Name must be valid."
                showMessage={isInValidCityName}
                updateValue={setCityName}
                value={cityName}
                top={2}
              />

              {/* Date Arrived */}
              <FormGroup
                label="Date Arrived"
                message=""
                showMessage={false}
                updateValue={setDateArrived}
                value={dateArrived}
                type="date"
              />

              <Button
                className="w-100 mt-2 css-btn-dark"
                disabled={isInValidCityName || isCityInList}
                onClick={() => handleAddCity(cityName, dateArrived)}
              >
                Add City
              </Button>
              <ShowMessage message="City already in list" show={isCityInList} />
            </div>
          </div>

          <Button
            disabled={isIncompleteJSONData}
            className="w-100 mt-4 mb-2 css-btn-dark"
            type="submit"
          >
            {`${shouldShowJson ? "Hide" : "Show"} JSON Result`}
          </Button>
        </Form>
        <Collapse in={shouldShowJson}>
          <div>
            <DisplayUserInfo
              userData={{
                citiesTraveled,
                personalInformation: {
                  firstName,
                  lastName,
                  dateOfBirth,
                },
              }}
            />
          </div>
        </Collapse>
      </Card>
    </div>
  );
};

export default Home;
