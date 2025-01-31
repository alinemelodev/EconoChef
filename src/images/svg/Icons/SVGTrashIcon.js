import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";

const SVGTrashIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={30} height={30} fill="url(#pattern0_38_145)" />
    <Defs>
      <Pattern
        id="pattern0_38_145"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_38_145" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_38_145"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9klEQVR4nO3WwW2UQRBE4b44FyBKjkgGC8KBNOxEwEcjPcvS+tLi1k3V/DP9BbB6XaPVbsQYY4wxxhhjLAT4TN0X9x0nj/9uHsE4/rt5BOP4+z4Chws3DhduHC7cOFy4cbhw43DhxuHCjcPFGGOMMcYYY7ixuVgdm4vVsblYHZuL1bG5WB2bi9WxuVgdm4vVdR/Efx6s+/Ps3ANl6l677oMoUvfauQfK1L123QdRpO61cw+UqXvtug+iSN1r5x4oU/fadR9EkbrXzj1Qpu616z6IInWvnXugTN1r130QRepeO/dAmbrXrvsgitS9du6BMnWvXfdBFKl77dwDZepeu+6DKFL32rkHytS9dt0HUaTutXMPlKl77boPokjda+ceKFP32nUfRJG61849UKbutes+iCJ1r517oEzda9d9EEXqXjv3QJm61677IIrUvXbugTJ1r133QRSpe+3cA2XqXrvugyhS99q5B8rUvXbdB1Gk7rVzD5Spe+26D6JI3WvnHihT99p1H0SRutfOPVCm7rXrPogida+de6BM3WsH/GFfv2N1wBP7eozVAQ/s6z5WB3wC/rKfF+BDXAHwg/08xFUAd8Av9vHz7aa4ktsjfL99da/q5fabdq3x//Gb8O3tHwTwzPqeb61fgY/u/cYYY4wxxhixnVdEnFBD7zuCEAAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default SVGTrashIcon;
