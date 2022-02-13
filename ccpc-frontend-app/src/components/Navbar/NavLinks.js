import React from 'react';
import classes from './NavLinks.module.css'
import TargetLink from '../../UI/TargetLink';

const NavLinks = (props) => {
  return <div className={classes.headtag}>
      {!props.inInternship && <TargetLink toPath='/internship' name="Internship"/>}
      {!props.inHome && <TargetLink toPath='/' name="Home"></TargetLink>}
      {!props.inAbout && <TargetLink toPath='/about' name="About"></TargetLink>}
  </div>;
};

export default NavLinks;
