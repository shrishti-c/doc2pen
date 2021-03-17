import React, { useEffect, useRef } from "react";
import style from "./icon-lib.module.css";

// Put you icon pack import here
const iconPack1SVGs = importAll(require.context("./icon-pack1", false, /\.svg$/));
const iconPack2SVGs = importAll(require.context("./icon-pack2", false, /\.svg$/));
const iconPack3SVGs = importAll(require.context("./icon-pack3", false, /\.svg$/));
const iconPack41SVGs = importAll(require.context("./icon-pack4.1", false, /\.svg$/));
const iconPack42SVGs = importAll(require.context("./icon-pack4.2", false, /\.svg$/));

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item).default;
  });
  return images;
}

function IconPreview(props) {
  const { iconPackSVGs, categoryTitle } = props;

  const allSVGsRef = useRef([]);

  useEffect(() => {
    allSVGsRef.current = Object.keys(iconPackSVGs).map(imgName => {
      return (
        <label htmlFor={`icon-${imgName}`} title={imgName}>
          <img id={`icon-${imgName}`} className={style.svgIcon} src={iconPackSVGs[imgName]} alt="" />
        </label>
      );
    });
  }, [iconPackSVGs]);

  return (
    <div className={style.iconCategory}>
      <h1 className={style.categoryHeading}>{categoryTitle}</h1>
      <div className={style.svgContainer}>{allSVGsRef.current}</div>
    </div>
  );
}

function IconsLibrary(props) {
  return (
    <div className={style.root}>
      <div className={style.panel}>{/* search bar */}</div>
      <div className={style.iconLib}>
        <IconPreview iconPackSVGs={iconPack1SVGs} categoryTitle="Tech Stack Icons" />
        <IconPreview iconPackSVGs={iconPack2SVGs} categoryTitle="Tech Stack Icons" />
        <IconPreview iconPackSVGs={iconPack3SVGs} categoryTitle="Tech Stack Icons" />
        <IconPreview iconPackSVGs={iconPack41SVGs} categoryTitle="Devices & Hardware Icons - Bold" />
        <IconPreview iconPackSVGs={iconPack42SVGs} categoryTitle="Devices & Hardware Icons - Light" />
        {/* https://www.svgrepo.com/vectors/device/ */}
        {/* https://www.flaticon.com/packs/smart-devices?k=1615927940770 */}
        {/* https://freeicons.io/material-icons-file-3/devices-icon-17364 */}
      </div>
    </div>
  );
}

export default IconsLibrary;
