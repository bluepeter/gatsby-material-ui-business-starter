import { install } from '@material-ui/styles';

install();
// These two lines are in a separate file so that 'install()' call can happen before anything is imported from material-ui libs.
// https://material-ui.com/css-in-js/basics/#migration-for-material-ui-core-users
