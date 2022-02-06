import React from 'react';
import classes from './NavLinks.module.css'
import TargetLink from '../../UI/TargetLink';

const NavLinks = () => {
  return <div className={classes.headtag}>
      <TargetLink toPath='/internship' name="Internship"/>
      <TargetLink toPath='/' name="Home"></TargetLink>
      <TargetLink toPath='/about' name="About"></TargetLink>
  </div>;
};

export default NavLinks;
