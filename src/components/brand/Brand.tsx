import React from "react"
import logoClaro from '../../assets/logo_allowme_claro.svg';
import './brand.less';

export const Brand = () => {
  return (
    <img className="brand-logo" src={logoClaro} alt="brand" />
  )
}
