import React from 'react';
import { makeStyles } from '@material-ui/core';

import { GetStarted, Features, Reviews, Services, Hero,Locations,Advantages,Spaces, MapHero } from './components';
import ForumIcon from '@material-ui/icons/Forum';
import { Section, SectionAlternate, ContactForm } from 'components/organisms';
import {
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  Divider,
} from '@material-ui/core';

import {
  mapData,
  advantages,
  locations,
  properties,
  reviews,
  events,
  gallery,
  
} from './data';
const useStyles = makeStyles(theme => ({
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  appBarBottom: {
    top: 'auto',
    bottom: 0,
    background: 'transparent',
    boxShadow: 'none',
  },
  toolbarBottom: {
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  chatIconButton: {
    position: 'absolute',
    right: theme.spacing(3),
    left: 'auto',
    top: theme.spacing(-3),
    background: theme.palette.primary.main,
    width: 55,
    height: 55,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
  forumIcon: {
    color: 'white',
    width: 25,
    height: 25,
  },
  contactForm: {
    padding: theme.spacing(3, 2),
    maxWidth: 800,
    margin: '0 auto',
  },
}));

const IndexView = ({ themeMode }) => {
  const classes = useStyles();

  const [openBottombar, setOpenBottombar] = React.useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  return (
    <div>
      <Hero themeMode={themeMode} />
     
      <SectionAlternate >
      <Advantages data={advantages} />
      </SectionAlternate>
      <MapHero data={mapData} />
      <SectionAlternate>
        <Features />
      </SectionAlternate>
      <Section>
      <Locations data={locations} />
      </Section>
      <Section className={classes.dividerSection}>
        <Divider />
           <AppBar position="fixed" className={classes.appBarBottom}>
        <Toolbar disableGutters className={classes.toolbarBottom}>
          <IconButton
            className={classes.chatIconButton}
            onClick={handleBottombarOpen}
          >
            <ForumIcon className={classes.forumIcon} />
          </IconButton>
          <Drawer
            anchor="bottom"
            open={openBottombar}
            onClose={handleBottombarClose}
          >
            <div className={classes.contactForm}>
              <ContactForm />
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
      </Section>
      <Section narrow>
        <GetStarted />
     
      </Section>
     
    </div>
  );
};

export default IndexView;
