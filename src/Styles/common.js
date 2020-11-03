const size = {
  mobile: "768px",
  tabletS: "1023px",
  tabletM: "1220px",
  tabletL: "1280px",
  laptop: "1460px",
  desktop: "1700x",
};

const calcRem = (size) => `${size / 16}rem`;

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const radius = {
  small: 3,
  base: 4,
  lg: 8,
};

const colors = {
  titleBlackColor: "#1b1c1d",
  textGrayColor: "#858a8d",
  softGray: "#f8f8f9",
  deepGray: "#dddde1",
  orangeColor: "#ff922b",
  orangeHoverColor: "#f77800",
};

const theme = {
  margins,
  paddings,
  radius,
  colors,
  flexCenters: "display: flex; justify-content: center; align-items: center;",
  wideSize: "top:0; left:0; right:0; bottom:0;",
  contentWrapperWidth: "1176px",
  mobile: `(max-width: ${size.mobile})`,
  tabletS: `(max-width: ${size.tabletS})`,
  tabletM: `(max-width: ${size.tabletM})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};

export default theme;
