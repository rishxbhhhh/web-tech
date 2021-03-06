import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TimeTable from './timeTable';
import Kanban from './kanban';
import DashboardChart from './chart';

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingTop: '0',
  },
}));

const DashboardTopNavigation = ({
  userName,
  data,
  target,
  handleDataChange,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar variant="outlined" position="static" color="white">
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          style={{ outline: 'none' }}
        >
          <Tab
            label="Scheduler"
            {...a11yProps(0)}
            style={{ outline: 'none' }}
          />
          <Tab label="ToDos" {...a11yProps(1)} style={{ outline: 'none' }} />
          <Tab label="Progress" {...a11yProps(2)} style={{ outline: 'none' }} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TimeTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Kanban data={data} handleDataChange={handleDataChange} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DashboardChart />
      </TabPanel>
    </div>
  );
};

export default DashboardTopNavigation;
