function getColorArr(x) {
    if (x == "names") { return ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen']; }
    if (x == "hexs") { return ['f0f8ff', 'faebd7', '00ffff', '7fffd4', 'f0ffff', 'f5f5dc', 'ffe4c4', '000000', 'ffebcd', '0000ff', '8a2be2', 'a52a2a', 'deb887', '5f9ea0', '7fff00', 'd2691e', 'ff7f50', '6495ed', 'fff8dc', 'dc143c', '00ffff', '00008b', '008b8b', 'b8860b', 'a9a9a9', 'a9a9a9', '006400', 'bdb76b', '8b008b', '556b2f', 'ff8c00', '9932cc', '8b0000', 'e9967a', '8fbc8f', '483d8b', '2f4f4f', '2f4f4f', '00ced1', '9400d3', 'ff1493', '00bfff', '696969', '696969', '1e90ff', 'b22222', 'fffaf0', '228b22', 'ff00ff', 'dcdcdc', 'f8f8ff', 'ffd700', 'daa520', '808080', '808080', '008000', 'adff2f', 'f0fff0', 'ff69b4', 'cd5c5c', '4b0082', 'fffff0', 'f0e68c', 'e6e6fa', 'fff0f5', '7cfc00', 'fffacd', 'add8e6', 'f08080', 'e0ffff', 'fafad2', 'd3d3d3', 'd3d3d3', '90ee90', 'ffb6c1', 'ffa07a', '20b2aa', '87cefa', '778899', '778899', 'b0c4de', 'ffffe0', '00ff00', '32cd32', 'faf0e6', 'ff00ff', '800000', '66cdaa', '0000cd', 'ba55d3', '9370db', '3cb371', '7b68ee', '00fa9a', '48d1cc', 'c71585', '191970', 'f5fffa', 'ffe4e1', 'ffe4b5', 'ffdead', '000080', 'fdf5e6', '808000', '6b8e23', 'ffa500', 'ff4500', 'da70d6', 'eee8aa', '98fb98', 'afeeee', 'db7093', 'ffefd5', 'ffdab9', 'cd853f', 'ffc0cb', 'dda0dd', 'b0e0e6', '800080', '663399', 'ff0000', 'bc8f8f', '4169e1', '8b4513', 'fa8072', 'f4a460', '2e8b57', 'fff5ee', 'a0522d', 'c0c0c0', '87ceeb', '6a5acd', '708090', '708090', 'fffafa', '00ff7f', '4682b4', 'd2b48c', '008080', 'd8bfd8', 'ff6347', '40e0d0', 'ee82ee', 'f5deb3', 'ffffff', 'f5f5f5', 'ffff00', '9acd32']; }
}
function isValidHex(hex) {
    function isHexChar(c) {
        return /\d/.test(c) || /[a-f]/i.test(c);
    }

    // Vérifie si la chaîne commence par un #
    if (hex.charAt(0) !== '#') {
        return false;
    }

    // Vérifie si la chaîne a une longueur de 4 ou 7 (sans le #)
    if (hex.length !== 4 && hex.length !== 7) {
        return false;
    }

    // Vérifie si chaque caractère après le # est un chiffre ou une lettre comprise entre A et F (en majuscules)
    for (let i = 1; i < hex.length; i++) {
        const char = hex.charAt(i);
        if (!isHexChar(char)) {
            return false;
        }
    }

    // Si tous les tests ont été passés, la chaîne est valide
    return true;
}

function convertColor(color) {
    let hex;

    // Si la couleur est déjà au format hexadécimal
    if (color.startsWith("#")) {
        if (!isValidHex(color)) {
            hex = null;
        } else {
            hex = color;
        }
    }
    // Si la couleur est au format nommé
    else if (/^[a-z]+$/i.test(color)) {
        hex = namedToHex(color);
    }
    // Si la couleur est au format rgb
    else if (color.startsWith("rgb(")) {
        // On extrait les valeurs de rouge, vert et bleu
        const [red, green, blue] = color.replace("rgb(", "").replace(")", "").split(",").map(value => parseInt(value.trim()));
        //test si les valeurs sont bien des nombres entre 0 et 255
        if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
            hex = null;
        } else {
            // On convertit en hexadécimal
            hex = rgbToHex(red, green, blue);
        }
    }
    // Si la couleur est au format hsl
    else if (color.startsWith("hsl(")) {
        // On extrait les valeurs de teinte, saturation et luminosité
        const [hue, saturation, lightness] = color.replace("hsl(", "").replace(")", "").split(",").map(value => parseInt(value.trim()));
        //test si les valeurs sont bien des nombres entre 0 et 255
        if (hue < 0 || hue > 360 || saturation < 0 || saturation > 100 || lightness < 0 || lightness > 100) {

            hex = null;
        } else {
            hex = hslToHex(hue, saturation, lightness);
        }
    }
    else {
        hex = null;
    }

    return hex;
}
function namedToHex(color) {
    color = color.toLowerCase();
    //set first letter to uppercase
    color = color.charAt(0).toUpperCase() + color.slice(1);
    //test si la couleur est dans le tableau
    if (getColorArr("names").indexOf(color) != -1) {
        return '#' + getColorArr("hexs")[getColorArr("names").indexOf(color)];
    } else { return null; }
}
function rgbToHex(red, green, blue) {
    const toHex = (value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
}
function hslToHex(hue, saturation, lightness) {
    const { r, g, b } = hslToRgb(hue, saturation, lightness);
    return rgbToHex(r, g, b);
}
function hslToRgb(hue, saturation, lightness) {
    hue = hue / 360;
    saturation = saturation / 100;
    lightness = lightness / 100;

    const hueToRgb = (t1, t2, t3) => {
        if (t3 < 0) t3 += 1;
        if (t3 > 1) t3 -= 1;
        if (t3 < 1 / 6) return t1 + (t2 - t1) * 6 * t3;
        if (t3 < 1 / 2) return t2;
        if (t3 < 2 / 3) return t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        return t1;
    };

    const t2 = lightness <= 0.5 ? lightness * (saturation + 1) : lightness + saturation - lightness * saturation;
    const t1 = lightness * 2 - t2;
    const red = Math.round(hueToRgb(t1, t2, hue + 1 / 3) * 255);
    const green = Math.round(hueToRgb(t1, t2, hue) * 255);
    const blue = Math.round(hueToRgb(t1, t2, hue - 1 / 3) * 255);

    return { r: red, g: green, b: blue };
}
module.exports = {
    convertColor,
    isValidHex,
    namedToHex
};
