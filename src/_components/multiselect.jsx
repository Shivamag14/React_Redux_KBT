import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
// import Chip from "@material-ui/core/Chip";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 280,
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit / 4
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const namesList = [
  { id: 1, name: "Oliver Hansen" },
  { id: 2, name: "Van Henry" },
  { id: 3, name: "April Tucker" },
  { id: 4, name: "Ralph Hubbard" },
  { id: 5, name: "Omar Alexander" },
  { id: 6, name: "Carlos Abbott" },
  { id: 7, name: "Miriam Wagner" },
  { id: 8, name: "Bradley Wilkerson" }
];

class MultipleSelect extends React.Component {
  state = {
    id: "",
    item: []
  };
  nameArray = [];

  handleChange = event => {
    console.log("event: ", event.target.value);
    // let len = event.target.value;
    this.setState({
      id: event.target.value,
      item: [...this.state.item, event.target.value]
    });
  };

  render() {
    const { classes } = this.props;
    console.log("state: ", this.state);

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-checkbox">
            Client List
          </InputLabel>
          <Select
            // multiple
            value={this.state.id}
            onChange={this.handleChange}
            input={<Input id="select-multiple-checkbox" />}
            renderValue={selected => {
              console.log("selected: ", selected);
              selected.join(", ");
            }}
            MenuProps={MenuProps}
          >
            {namesList.map(item => (
              <MenuItem key={item.id} value={item.id}>
                <Checkbox checked={this.state.item.indexOf(item) > -1} />
                <ListItemText primary={item.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MultipleSelect);
