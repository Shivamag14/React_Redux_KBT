import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import { Bar, Line } from "react-chartjs-2";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { userActions } from "../../_actions/index";

const gridStyle = {
  position: "relative",
  width: "100%",
  height: `100%`,
  marginLeft: "0px"
};

const rowPad = {
  margin: "0px",
  padding: "2% 0% 1% 0%"
};

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 280,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  chart_container: {
    backgroundColor: "#fff",
    boxShadow: "6px 9px 1px 1px lightgrey",
    transition: "all .3s cubic-bezier(.25, .8, .25, 1)",
    borderRadius: "3px",
    border: "1px solid lightgrey"
  }
});

class Reports extends Component {
  constructor(props) {
    super(props);

    this.roleId = localStorage.getItem("role");

    this.state = {
      clientId: "",
      locationId: "",
      deviceId: "",
      wastageTonerOptions: {
        maintainAspectRatio: true,
        title: {
          display: true,
          text: "Toner Wastage",
          fontFamily: "cursive",
          fontSize: 25,
          position: "top"
        },
        legend: {
          display: true,
          position: "bottom",
          labels: {
            // fontColor: "#ff0000"
          }
        },
        tooltips: { enabled: true },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                fontSize: 12,
                labelString: "average toner levels",
                fontFamily: "cursive"
              },
              ticks: {
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                fontSize: 12,
                labelString: "months",
                fontFamily: "cursive"
              },
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      },
      impressionOptions: {
        maintainAspectRatio: true,
        title: {
          display: true,
          text: "Impressions",
          fontFamily: "cursive",
          fontSize: 25,
          position: "top"
        },
        legend: {
          display: true,
          position: "bottom",
          labels: {
            // fontColor: "#ff0000"
          }
        },
        tooltips: { enabled: true },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                fontSize: 12,
                labelString: "# of impressions",
                fontFamily: "cursive"
              },
              ticks: {
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                fontSize: 12,
                labelString: "months",
                fontFamily: "cursive"
              },
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    }; // layout: { padding: { left: 50, right: 0, bottom: 0, top: 0 } },
  }

  // To get client list and average data for all the client location and deviceList
  // at page load.
  componentDidMount() {
    console.log("roleId: ", this.roleId);
    if (this.roleId === "1") {
      this.getClientList();
      this.getTonerWastageData();
    } else if (this.roleId === "2") {
      let clientId = "6";
      this.handleOnChange("clientId", clientId);
    }
  }

  // define default properties
  static defaultProps = {
    displayTitle: true,
    defaultFontFamily: "cursive"
  };

  // handle change in the select option value
  handleChange = event => {
    // console.log("event: ", event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
    this.handleOnChange(event.target.name, event.target.value);
  };

  handleOnChange = (name, value) => {
    let { clientId, locationId } = this.state;
    switch (name) {
      case "clientId":
        this.getLocationList(value);
        this.getTonerFilteredData(name, value, null, null);
        break;
      case "locationId":
        this.getDeviceList(value);
        this.getTonerFilteredData(name, clientId, value, null);
        break;
      case "deviceId":
        this.getTonerFilteredData(name, clientId, locationId, value);
        break;
      default:
        break;
    }
  };

  // To dispatch action to fetch initial toner wastage data
  getTonerWastageData = () => {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch(userActions.getTonerWastageData());
    }
  };

  // To dispatch action to fetch Client list on page load
  getClientList = () => {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch(userActions.getClientList());
    }
  };

  // To dispatch action to fetch location list once user select any particular
  // client
  getLocationList = cId => {
    const { dispatch } = this.props;
    let data = {
      clientId: cId
    };
    if (dispatch && cId && cId !== "") {
      dispatch(userActions.getLocationList(data));
    }
  };

  // To dispatch action to fetch devices list once user select any particular
  // client & location
  getDeviceList = lId => {
    const { dispatch } = this.props;
    let data = {
      locationId: lId
    };
    if (dispatch && lId && lId !== "") {
      dispatch(userActions.getDeviceList(data));
    }
  };

  // To dispatch action to fetch filtered data for a toner wastage and Impressions
  //  as user select a client, location and device.
  getTonerFilteredData = (name, cId, lId, dId) => {
    let req;
    const { dispatch } = this.props;
    switch (name) {
      case "clientId":
        req = {
          clientId: cId
        };
        break;
      case "locationId":
        req = {
          clientId: cId,
          locationId: lId
        };
        break;
      case "deviceId":
        req = {
          clientId: cId,
          locationId: lId,
          serial: dId
        };
        break;
      default:
        break;
    }

    dispatch(userActions.getTonerWastageFilteredData(req));
  };

  // To render view
  render() {
    const {
      classes,
      clientList,
      locationList,
      deviceList,
      tonerWastageData,
      impressionData
    } = this.props;

    return (
      <div>
        <Grid style={gridStyle}>
          <Grid.Row style={rowPad}>
            <h3>Filters: </h3>
            {this.roleId === "1" && (
              <Grid.Column width={5}>
                {clientList &&
                  clientList.length > 0 && (
                    <form className={classes.root} autoComplete="off">
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="client">Select Client</InputLabel>
                        <Select
                          value={this.state.clientId}
                          onChange={this.handleChange}
                          inputProps={{
                            name: "clientId",
                            id: "client"
                          }}
                        >
                          {clientList.map(data => (
                            <MenuItem key={data.clientId} value={data.clientId}>
                              {data.clientName}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </form>
                  )}
              </Grid.Column>
            )}
            <Grid.Column width={5}>
              {locationList &&
                locationList.length > 0 && (
                  <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="location">
                        Select Location
                      </InputLabel>
                      <Select
                        value={this.state.locationId}
                        onChange={this.handleChange}
                        inputProps={{
                          name: "locationId",
                          id: "location"
                        }}
                      >
                        {locationList.map(data => (
                          <MenuItem
                            key={data.locationId}
                            value={data.locationId}
                          >
                            {data.address1 +
                              data.address2 +
                              data.city +
                              "," +
                              data.state +
                              "," +
                              data.zip}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </form>
                )}
            </Grid.Column>
            <Grid.Column width={5}>
              {deviceList &&
                deviceList.length > 0 && (
                  <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="device">Select Device</InputLabel>
                      <Select
                        value={this.state.deviceId}
                        onChange={this.handleChange}
                        inputProps={{
                          name: "deviceId",
                          id: "device"
                        }}
                      >
                        {deviceList.map(data => (
                          <MenuItem key={data.serial} value={data.serial}>
                            {data.serial}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </form>
                )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid style={gridStyle}>
          <Grid.Row style={rowPad}>
            <Grid.Column width={8} className={classes.chart_container}>
              <Bar
                ref="report_bar_chart"
                id="report_bar_chart1"
                data={tonerWastageData}
                height={470}
                width={600}
                options={this.state.wastageTonerOptions}
              />
            </Grid.Column>
            <Grid.Column width={8} className={classes.chart_container}>
              <Line
                ref="report_line_chart"
                data={impressionData}
                height={470}
                width={600}
                options={this.state.impressionOptions}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  let {
    clientList,
    locationList,
    deviceList,
    tonerWastageData,
    impressionData
  } = user;

  return {
    clientList,
    locationList,
    deviceList,
    tonerWastageData,
    impressionData
  };
};

Reports.propTypes = {
  classes: PropTypes.object.isRequired
};

const connectApp = withStyles(styles)(connect(mapStateToProps)(Reports));
export { connectApp as Reports };
