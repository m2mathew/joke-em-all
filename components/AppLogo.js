// External Dependencies
import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

// Component Definition
const AppLogo = () => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { alignItems: 'center', justifyContent: 'center' },
      ]}
    >
      <Svg height="75%" width="75%" viewBox="0 -0.5 200 51">
        <Path stroke="rgba(255,72,32,0.12549019607843137)" d="M18 0h1M13 2h1M39 4h1M34 8h1M38 8h1M14 9h1M47 13h1M41 15h1M49 17h1M7 18h1M0 32h1M10 37h1M46 39h1M39 40h1M15 41h1M30 43h1M41 44h1M17 49h1M28 50h1" />
        <Path stroke="rgba(255,72,35,0.3764705882352941)" d="M19 0h1M31 0h1M34 1h1M41 12h1M46 12h1M8 15h1M43 18h1M6 29h1M0 31h1M7 32h1M2 36h1M42 37h1M47 38h1M45 39h1M14 41h1M40 41h1M31 43h1M23 44h1M37 47h1M15 48h1M35 48h1" />
        <Path stroke="rgba(253,72,38,0.6235294117647059)" d="M20 0h1M14 2h1M23 5h1M31 6h1M35 8h1M37 8h1M6 11h1M3 12h1M1 16h1M45 25h1M0 30h1M6 30h1M28 44h1" />
        <Path stroke="rgba(254,71,37,0.7490196078431373)" d="M21 0h1M29 0h1M22 5h1M27 5h1M9 6h1M9 7h1M36 8h1M13 9h1M5 11h1M43 11h2M41 13h1M2 14h1M45 23h1M5 24h1M45 24h1M5 25h1M45 27h1M45 28h1M44 32h1M7 33h1M43 34h1M3 37h1M34 42h1M11 44h1M30 49h1" />
        <Path stroke="#fe4825" d="M22 0h7M18 1h15M15 2h20M13 3h24M12 4h27M10 5h11M29 5h10M10 6h8M32 6h7M10 7h6M35 7h3M10 8h4M12 9h1M4 12h4M42 12h4M3 13h5M42 13h4M3 14h5M42 14h5M2 15h6M42 15h6M2 16h5M43 16h5M2 17h5M44 17h5M1 18h6M44 18h5M1 19h5M45 19h4M1 20h5M45 20h5M1 21h5M45 21h5M0 22h6M45 22h5M0 23h5M46 23h4M0 24h5M46 24h4M0 25h5M46 25h4M0 26h5M46 26h4M0 27h6M46 27h4M0 28h6M46 28h4M1 29h5M45 29h5M1 30h5M45 30h5M1 31h5M45 31h5M1 32h6M45 32h4M2 33h5M44 33h5M2 34h6M44 34h5M3 35h5M43 35h5M3 36h6M43 36h5M4 37h6M43 37h4M4 38h6M44 38h3M5 39h4M7 40h1M37 41h3M13 42h3M35 42h5M12 43h5M33 43h8M12 44h8M30 44h11M12 45h28M13 46h25M15 47h21M17 48h17M21 49h9" />
        <Path stroke="rgba(253,71,37,0.5607843137254902)" d="M30 0h1M12 3h1M26 5h1M41 14h1M44 20h1M49 33h1M18 43h1M31 49h1" />
        <Path stroke="rgba(255,80,48,0.06274509803921569)" d="M32 0h1M15 1h1M37 2h1M11 3h1M29 6h1M32 7h1M39 7h1M8 16h1M50 31h1M9 35h1M48 37h1M10 39h1M11 42h1M17 42h1M41 42h1M11 46h1M12 47h1M14 48h1M33 49h1M21 50h1" />
        <Path stroke="rgba(255,73,36,0.4392156862745098)" d="M16 1h1M19 6h1M15 8h1M4 11h1M49 18h1M6 20h1M44 31h1M48 36h1M40 45h1M18 49h1" />
        <Path stroke="rgba(254,73,37,0.8117647058823529)" d="M17 1h1M28 5h1M16 7h1M0 29h1M49 32h1M43 38h1M36 41h1M12 42h1M32 43h1M29 44h1M12 46h1M16 48h1" />
        <Path stroke="rgba(254,73,36,0.6862745098039216)" d="M33 1h1M8 13h1M8 14h1M47 14h1M48 16h1M6 19h1M49 19h1M0 20h1M45 26h1M1 33h1M9 36h1M21 44h1M34 48h1M19 49h1" />
        <Path stroke="rgba(254,73,36,0.9372549019607843)" d="M35 2h1M37 3h1M11 4h1M21 5h1M34 7h1M14 8h1M11 9h1M46 13h1M7 16h1M1 17h1M5 23h1M5 26h1M6 31h1M8 35h1M47 37h1M9 39h1M6 40h1M40 42h1M17 43h1M20 44h1M14 47h1M20 49h1" />
        <Path stroke="rgba(253,72,38,0.5019607843137255)" d="M36 2h1M24 5h2M33 7h1M9 8h1M10 9h1M42 11h1M42 16h1M7 17h1M0 19h1M50 23h1M50 24h1M50 25h1M50 26h1M50 27h1M50 28h1M50 29h1M42 36h1M4 39h1M5 40h1M16 42h1M11 43h1M22 44h1M27 44h1M11 45h1M13 47h1" />
        <Path stroke="rgba(255,70,38,0.3137254901960784)" d="M38 3h1M30 6h1M45 11h1M50 22h1M1 34h1M44 39h1M32 49h1" />
        <Path stroke="rgba(255,76,36,0.25098039215686274)" d="M10 4h1M9 5h1M39 5h1M39 6h1M17 7h1M8 12h1M2 13h1M48 15h1M0 18h1M6 21h1M50 30h1M43 33h1M8 34h1M10 38h1M37 40h2M13 41h1M35 41h1M33 42h1M41 43h1M24 44h3M39 46h1M22 50h6" />
        <Path stroke="rgba(254,72,37,0.8745098039215686)" d="M18 6h1M38 7h1M43 17h1M44 19h1M0 21h1M2 35h1M48 35h1M8 40h1M38 46h1M36 47h1" />
        <Path stroke="rgba(255,74,37,0.18823529411764706)" d="M20 6h1M7 11h1M1 15h1M44 21h1M50 21h1M6 28h1M44 30h1M49 34h1M42 35h1M3 38h1M9 40h1M19 43h1" />
        <Path stroke="rgba(49,78,118,0.10196078431372549)" d="M65 11h1" />
        <Path stroke="rgba(50,73,111,0.3411764705882353)" d="M66 11h1M114 28h1" />
        <Path stroke="rgba(50,73,112,0.4627450980392157)" d="M67 11h1M96 22h1" />
        <Path stroke="rgba(52,72,112,0.34901960784313724)" d="M68 11h1" />
        <Path stroke="rgba(58,74,115,0.12156862745098039)" d="M69 11h1M96 26h1M69 33h1M65 36h1" />
        <Path stroke="rgba(191,128,64,0.03137254901960784)" d="M22 12h1" />
        <Path stroke="rgba(209,151,46,0.08627450980392157)" d="M23 12h1" />
        <Path stroke="rgba(224,155,23,0.12941176470588237)" d="M24 12h1" />
        <Path stroke="rgba(235,163,13,0.15294117647058825)" d="M25 12h1" />
        <Path stroke="rgba(242,170,13,0.15294117647058825)" d="M26 12h1" />
        <Path stroke="rgba(225,158,22,0.13333333333333333)" d="M27 12h1" />
        <Path stroke="rgba(212,149,42,0.09411764705882353)" d="M28 12h1" />
        <Path stroke="rgba(185,139,46,0.043137254901960784)" d="M29 12h1" />
        <Path stroke="rgba(128,128,128,0.00784313725490196)" d="M64 12h1M18 14h1M113 16h1M108 18h1M107 28h1M108 30h1M61 32h1" />
        <Path stroke="rgba(50,73,111,0.6549019607843137)" d="M65 12h1M75 21h1" />
        <Path stroke="rgba(48,72,111,0.8745098039215686)" d="M66 12h1M134 19h1M150 19h1M154 19h1M183 23h1M142 25h1M179 26h1M114 29h1M183 30h1M176 31h1M181 31h1" />
        <Path stroke="rgba(48,73,111,0.9098039215686274)" d="M67 12h1M116 23h1M113 29h1" />
        <Path stroke="rgba(50,72,111,0.8745098039215686)" d="M68 12h1M93 13h3M108 20h1M111 30h1" />
        <Path stroke="rgba(50,73,112,0.6980392156862745)" d="M69 12h1M119 29h1" />
        <Path stroke="rgba(128,128,128,0.01568627450980392)" d="M70 12h1M114 16h1" />
        <Path stroke="rgba(49,77,112,0.28627450980392155)" d="M92 12h1M64 32h1" />
        <Path stroke="rgba(52,72,113,0.34509803921568627)" d="M93 12h3" />
        <Path stroke="rgba(73,73,109,0.027450980392156862)" d="M96 12h1M82 21h1M115 32h1" />
        <Path stroke="rgba(196,137,59,0.050980392156862744)" d="M20 13h1" />
        <Path stroke="rgba(222,150,20,0.15294117647058825)" d="M21 13h1" />
        <Path stroke="rgba(233,170,31,0.3176470588235294)" d="M22 13h1" />
        <Path stroke="rgba(233,181,44,0.5019607843137255)" d="M23 13h1" />
        <Path stroke="rgba(240,188,51,0.611764705882353)" d="M24 13h1" />
        <Path stroke="rgba(246,194,50,0.6745098039215687)" d="M25 13h1" />
        <Path stroke="rgba(248,195,51,0.6823529411764706)" d="M26 13h1" />
        <Path stroke="rgba(242,189,53,0.6235294117647059)" d="M27 13h1" />
        <Path stroke="rgba(234,181,46,0.5254901960784314)" d="M28 13h1" />
        <Path stroke="rgba(233,168,31,0.3568627450980392)" d="M29 13h1" />
        <Path stroke="rgba(232,156,17,0.17254901960784313)" d="M30 13h1" />
        <Path stroke="rgba(195,135,45,0.06666666666666667)" d="M31 13h1" />
        <Path stroke="rgba(70,70,116,0.043137254901960784)" d="M64 13h1" />
        <Path stroke="rgba(49,74,112,0.9098039215686274)" d="M65 13h1" />
        <Path stroke="#31486f" d="M66 13h3M93 14h3M191 14h1M93 15h3M190 15h3M197 15h2M93 16h3M190 16h3M197 16h2M93 17h3M190 17h3M197 17h2M81 18h1M93 18h3M114 18h1M190 18h3M197 18h2M60 19h9M78 19h3M82 19h3M93 19h3M101 19h1M110 19h2M116 19h2M135 19h4M146 19h2M151 19h3M158 19h4M179 19h4M190 19h3M197 19h2M66 20h3M77 20h2M84 20h2M93 20h3M100 20h2M109 20h2M117 20h2M133 20h8M146 20h2M149 20h6M157 20h6M177 20h8M190 20h3M197 20h2M66 21h3M76 21h3M84 21h3M93 21h3M99 21h2M109 21h2M117 21h3M132 21h3M139 21h3M146 21h4M153 21h5M160 21h4M176 21h3M183 21h3M190 21h3M197 21h2M66 22h3M76 22h3M85 22h2M93 22h3M98 22h2M108 22h3M117 22h3M131 22h3M140 22h2M146 22h3M153 22h4M161 22h3M176 22h2M184 22h2M190 22h3M197 22h2M66 23h3M76 23h3M85 23h2M93 23h3M98 23h2M108 23h3M117 23h3M131 23h3M140 23h2M146 23h3M153 23h3M161 23h3M184 23h2M190 23h3M197 23h2M66 24h3M76 24h3M85 24h2M93 24h7M108 24h3M123 24h5M131 24h3M140 24h3M146 24h3M153 24h3M161 24h3M167 24h5M182 24h4M190 24h3M197 24h2M66 25h3M76 25h3M85 25h2M93 25h3M98 25h2M108 25h3M123 25h6M131 25h11M146 25h3M153 25h3M161 25h3M166 25h7M177 25h9M190 25h3M197 25h2M66 26h3M76 26h3M85 26h2M93 26h3M99 26h2M108 26h3M123 26h5M131 26h3M146 26h3M153 26h3M161 26h3M167 26h5M176 26h3M184 26h2M190 26h3M197 26h2M66 27h3M76 27h3M84 27h3M93 27h3M99 27h2M109 27h2M131 27h3M146 27h3M153 27h3M161 27h3M175 27h3M184 27h2M190 27h3M197 27h2M66 28h3M77 28h2M84 28h3M93 28h3M100 28h2M109 28h2M131 28h3M141 28h1M146 28h3M153 28h3M161 28h3M175 28h3M183 28h3M190 28h3M197 28h2M66 29h3M78 29h2M83 29h3M93 29h3M100 29h3M110 29h2M117 29h2M132 29h3M139 29h3M146 29h3M153 29h3M161 29h3M175 29h3M183 29h4M190 29h3M197 29h2M66 30h3M80 30h3M93 30h3M101 30h2M113 30h3M133 30h8M146 30h2M153 30h3M161 30h3M176 30h7M184 30h3M190 30h3M197 30h2M66 31h3M134 31h6M146 31h2M154 31h2M161 31h2M177 31h4M185 31h2M191 31h1M197 31h2M66 32h3M66 33h2M60 34h2M63 34h4" />
        <Path stroke="rgba(50,72,113,0.9411764705882353)" d="M69 13h1" />
        <Path stroke="rgba(57,85,113,0.07058823529411765)" d="M70 13h1" />
        <Path stroke="rgba(49,73,111,0.7294117647058823)" d="M92 13h1M82 17h1" />
        <Path stroke="rgba(54,81,121,0.07450980392156863)" d="M96 13h1M87 29h1" />
        <Path stroke="rgba(210,135,22,0.13333333333333333)" d="M19 14h1" />
        <Path stroke="rgba(231,160,24,0.3803921568627451)" d="M20 14h1" />
        <Path stroke="rgba(237,179,39,0.6745098039215687)" d="M21 14h1" />
        <Path stroke="rgba(248,200,58,0.8901960784313725)" d="M22 14h1" />
        <Path stroke="#fedc59" d="M23 14h1" />
        <Path stroke="#ffe978" d="M24 14h1" />
        <Path stroke="#ffef8d" d="M25 14h1" />
        <Path stroke="#ffef8f" d="M26 14h1" />
        <Path stroke="#ffea7f" d="M27 14h1" />
        <Path stroke="#ffdf62" d="M28 14h1" />
        <Path stroke="rgba(251,206,66,0.9215686274509803)" d="M29 14h1" />
        <Path stroke="rgba(240,183,42,0.7333333333333333)" d="M30 14h1" />
        <Path stroke="rgba(230,164,27,0.4392156862745098)" d="M31 14h1" />
        <Path stroke="rgba(223,140,19,0.1568627450980392)" d="M32 14h1" />
        <Path stroke="rgba(170,128,42,0.023529411764705882)" d="M33 14h1" />
        <Path stroke="rgba(85,85,85,0.011764705882352941)" d="M64 14h1M60 21h5M116 32h1M69 34h1" />
        <Path stroke="rgba(48,73,113,0.47843137254901963)" d="M65 14h1M120 23h1" />
        <Path stroke="rgba(50,74,112,0.8156862745098039)" d="M66 14h1M67 34h1" />
        <Path stroke="rgba(50,73,111,0.9254901960784314)" d="M67 14h1" />
        <Path stroke="rgba(49,73,112,0.8235294117647058)" d="M68 14h1M115 19h1" />
        <Path stroke="rgba(50,73,112,0.5176470588235295)" d="M69 14h1M119 19h1" />
        <Path stroke="rgba(51,102,102,0.0196078431372549)" d="M70 14h1M104 19h1M101 23h1M96 31h1M80 32h1" />
        <Path stroke="rgba(50,72,111,0.8352941176470589)" d="M92 14h1M92 15h1M92 16h1M92 17h1M92 18h1M92 19h1M92 20h1M92 21h1M92 22h1M92 23h1M112 23h4M92 24h1M92 25h1M92 26h1M92 27h1M92 28h1M92 29h1M92 30h1" />
        <Path stroke="rgba(58,81,116,0.08627450980392157)" d="M96 14h1M69 15h1M96 15h1M96 16h1M96 17h1M96 18h1M96 19h1M96 20h1M96 21h1M79 25h1M96 27h1M107 27h1M96 28h1M96 29h1M96 30h1M110 31h1M59 36h1" />
        <Path stroke="rgba(49,71,111,0.7490196078431373)" d="M190 14h1M192 14h1M199 15h1M196 16h1M199 16h1M196 17h1M199 17h1M196 18h1M199 18h1M139 19h1M196 19h1M199 19h1M145 20h1M196 20h1M199 20h1M135 21h1M145 21h1M151 21h1M196 21h1M199 21h1M145 22h1M160 22h1M196 22h1M199 22h1M145 23h1M186 23h1M196 23h1M199 23h1M139 24h1M145 24h1M156 24h1M180 24h1M186 24h1M196 24h1M199 24h1M130 25h1M145 25h1M176 25h1M186 25h1M196 25h1M199 25h1M130 26h1M145 26h1M183 26h1M186 26h1M196 26h1M199 26h1M145 27h1M186 27h1M196 27h1M199 27h1M142 28h1M145 28h1M186 28h1M196 28h1M199 28h1M131 29h1M145 29h1M196 29h1M199 29h1M145 30h1M196 30h1M199 30h1M153 31h1" />
        <Path stroke="rgba(48,74,112,0.18823529411764706)" d="M196 14h1M189 15h1M146 18h1M179 18h1M155 19h1M175 20h1M142 21h1M138 22h1M134 23h1M149 23h1M182 23h1M139 28h1M92 31h1M111 31h1M160 31h1M175 31h1M187 31h1M155 32h1M161 32h1M180 32h1" />
        <Path stroke="rgba(49,73,111,0.9372549019607843)" d="M197 14h2M178 19h1M183 19h1M148 20h1M155 20h1M176 20h1M185 20h1M138 21h1M152 21h1M139 22h1M175 22h1M183 22h1M142 23h1M176 23h1M172 24h1M181 24h1M172 26h1M175 26h1M183 27h1M140 28h1M182 29h1M141 30h1M148 30h1M175 30h1M163 31h1M190 31h1M192 31h1" />
        <Path stroke="rgba(50,72,112,0.3764705882352941)" d="M199 14h1M141 20h1M136 21h1M157 22h1M178 22h1M174 27h1M182 28h1M181 29h1M65 31h1M81 31h1M136 32h2" />
        <Path stroke="rgba(170,170,85,0.011764705882352941)" d="M17 15h1" />
        <Path stroke="rgba(220,145,20,0.2)" d="M18 15h1" />
        <Path stroke="rgba(234,164,21,0.6235294117647059)" d="M19 15h1" />
        <Path stroke="rgba(251,195,41,0.9411764705882353)" d="M20 15h1" />
        <Path stroke="#ffe465" d="M21 15h1" />
        <Path stroke="#fff8a5" d="M22 15h1" />
        <Path stroke="#ffffcc" d="M23 15h1" />
        <Path stroke="#fffedf" d="M24 15h1" />
        <Path stroke="#fffee8" d="M25 15h2" />
        <Path stroke="#ffffe2" d="M27 15h1" />
        <Path stroke="#fffed2" d="M28 15h1" />
        <Path stroke="#fcfab2" d="M29 15h1" />
        <Path stroke="#ffeb79" d="M30 15h1" />
        <Path stroke="rgba(251,201,53,0.9725490196078431)" d="M31 15h1" />
        <Path stroke="rgba(233,167,26,0.6941176470588235)" d="M32 15h1" />
        <Path stroke="rgba(222,144,15,0.27058823529411763)" d="M33 15h1" />
        <Path stroke="rgba(185,116,46,0.043137254901960784)" d="M34 15h1" />
        <Path stroke="rgba(51,77,115,0.0784313725490196)" d="M65 15h1" />
        <Path stroke="rgba(46,75,110,0.17254901960784313)" d="M66 15h1M84 31h1M67 35h1" />
        <Path stroke="rgba(49,74,113,0.20392156862745098)" d="M67 15h1M76 18h1M81 20h1" />
        <Path stroke="rgba(45,74,108,0.17647058823529413)" d="M68 15h1M115 20h1" />
        <Path stroke="rgba(48,76,112,0.25098039215686274)" d="M193 15h1M189 16h1M193 16h1M189 17h1M193 17h1M136 18h2M152 18h1M159 18h2M180 18h2M189 18h1M193 18h1M140 19h1M149 19h1M189 19h1M193 19h1M189 20h1M193 20h1M65 21h1M189 21h1M193 21h1M164 22h1M189 22h1M193 22h1M164 23h1M189 23h1M193 23h1M164 24h1M189 24h1M193 24h1M164 25h2M189 25h1M193 25h1M164 26h1M189 26h1M193 26h1M164 27h1M189 27h1M193 27h1M130 28h1M164 28h1M189 28h1M193 28h1M136 29h2M164 29h1M189 29h1M193 29h1M164 30h1M187 30h1M189 30h1M193 30h1M135 32h1M138 32h1M146 32h2M154 32h1M162 32h1M177 32h3M185 32h1M191 32h1M197 32h2" />
        <Path stroke="rgba(50,73,111,0.6862745098039216)" d="M196 15h1M175 21h1M134 22h1M142 22h1M149 22h1M186 22h1M156 28h1M135 29h1M142 29h1M156 29h1M140 31h1M148 31h1" />
        <Path stroke="rgba(170,85,85,0.011764705882352941)" d="M16 16h1" />
        <Path stroke="rgba(213,139,23,0.21568627450980393)" d="M17 16h1" />
        <Path stroke="rgba(236,164,16,0.7490196078431373)" d="M18 16h1" />
        <Path stroke="#ffcf34" d="M19 16h1" />
        <Path stroke="#fff48c" d="M20 16h1" />
        <Path stroke="#fffec1" d="M21 16h1" />
        <Path stroke="#fffecd" d="M22 16h1" />
        <Path stroke="#fffdce" d="M23 16h1" />
        <Path stroke="#fffccf" d="M24 16h1" />
        <Path stroke="#fffcd1" d="M25 16h1" />
        <Path stroke="#fffdd2" d="M26 16h1" />
        <Path stroke="#fffed3" d="M27 16h1" />
        <Path stroke="#eee4b3" d="M28 16h1" />
        <Path stroke="#eee7b6" d="M29 16h1" />
        <Path stroke="#ffffca" d="M30 16h1" />
        <Path stroke="#fff89d" d="M31 16h1" />
        <Path stroke="#ffd949" d="M32 16h1" />
        <Path stroke="rgba(243,170,18,0.8313725490196079)" d="M33 16h1" />
        <Path stroke="rgba(222,144,21,0.3333333333333333)" d="M34 16h1" />
        <Path stroke="rgba(159,128,64,0.03137254901960784)" d="M35 16h1" />
        <Path stroke="rgba(102,102,153,0.0196078431372549)" d="M81 16h1" />
        <Path stroke="rgba(200,128,33,0.1803921568627451)" d="M16 17h1" />
        <Path stroke="rgba(235,155,8,0.7568627450980392)" d="M17 17h1" />
        <Path stroke="#ffcf36" d="M18 17h1" />
        <Path stroke="#fff590" d="M19 17h1" />
        <Path stroke="#fffdae" d="M20 17h1M31 17h1" />
        <Path stroke="#fffaa9" d="M21 17h1" />
        <Path stroke="#fffaab" d="M22 17h1" />
        <Path stroke="#fffbb0" d="M23 17h1" />
        <Path stroke="#fffbb5" d="M24 17h1" />
        <Path stroke="#fffbb8" d="M25 17h1" />
        <Path stroke="#fffebe" d="M26 17h1" />
        <Path stroke="#f1e8a3" d="M27 17h1" />
        <Path stroke="#b69755" d="M28 17h1" />
        <Path stroke="#e2d58a" d="M29 17h1" />
        <Path stroke="#fffeb0" d="M30 17h1" />
        <Path stroke="#fff99d" d="M32 17h1" />
        <Path stroke="#ffda4f" d="M33 17h1" />
        <Path stroke="rgba(243,167,14,0.8627450980392157)" d="M34 17h1" />
        <Path stroke="rgba(211,137,26,0.27058823529411763)" d="M35 17h1" />
        <Path stroke="rgba(255,0,0,0.00392156862745098)" d="M36 17h1" />
        <Path stroke="rgba(56,72,112,0.12549019607843137)" d="M59 17h1M99 18h1M147 18h1M151 18h1M153 18h1M182 18h1M176 19h1M185 19h1M130 22h1M173 24h1M175 25h1M142 26h1M173 26h1M134 27h1M142 27h1M178 28h1M142 30h1M141 31h1M193 31h1M163 32h1M186 32h1M190 32h1M192 32h1" />
        <Path stroke="rgba(49,73,111,0.6470588235294118)" d="M60 17h9M101 17h3M65 35h1" />
        <Path stroke="rgba(51,74,113,0.43529411764705883)" d="M69 17h1M104 17h1M98 20h1M101 25h1" />
        <Path stroke="rgba(64,85,106,0.047058823529411764)" d="M77 17h1M112 27h1" />
        <Path stroke="rgba(50,71,111,0.396078431372549)" d="M78 17h1" />
        <Path stroke="rgba(49,74,111,0.611764705882353)" d="M79 17h1M118 18h1" />
        <Path stroke="rgba(50,72,111,0.7176470588235294)" d="M80 17h1" />
        <Path stroke="rgba(50,72,111,0.7803921568627451)" d="M81 17h1" />
        <Path stroke="rgba(49,73,112,0.6274509803921569)" d="M83 17h1" />
        <Path stroke="rgba(47,72,110,0.4470588235294118)" d="M84 17h1" />
        <Path stroke="rgba(67,81,121,0.07450980392156863)" d="M85 17h1" />
        <Path stroke="rgba(47,74,111,0.2980392156862745)" d="M100 17h1" />
        <Path stroke="rgba(49,76,114,0.1843137254901961)" d="M110 17h1M59 18h1" />
        <Path stroke="rgba(51,73,112,0.5333333333333333)" d="M111 17h1" />
        <Path stroke="rgba(50,72,112,0.6627450980392157)" d="M112 17h1M111 25h1M86 29h1" />
        <Path stroke="rgba(50,74,112,0.7568627450980392)" d="M113 17h1" />
        <Path stroke="rgba(50,74,113,0.7725490196078432)" d="M114 17h1" />
        <Path stroke="rgba(50,73,111,0.6823529411764706)" d="M115 17h1" />
        <Path stroke="rgba(49,74,111,0.5686274509803921)" d="M116 17h1M81 28h1" />
        <Path stroke="rgba(51,75,114,0.2549019607843137)" d="M117 17h1M79 26h1" />
        <Path stroke="rgba(255,255,255,0.00392156862745098)" d="M118 17h1M103 27h1M37 30h1" />
        <Path stroke="rgba(180,120,60,0.06666666666666667)" d="M15 18h1" />
        <Path stroke="rgba(226,143,12,0.6627450980392157)" d="M16 18h1" />
        <Path stroke="#ffbe19" d="M17 18h1" />
        <Path stroke="#ffec79" d="M18 18h1" />
        <Path stroke="#fff791" d="M19 18h1" />
        <Path stroke="#fff88b" d="M20 18h1" />
        <Path stroke="#fff98e" d="M21 18h1" />
        <Path stroke="#fff992" d="M22 18h1" />
        <Path stroke="#fff996" d="M23 18h1" />
        <Path stroke="#fff99a" d="M24 18h1" />
        <Path stroke="#fffca0" d="M25 18h1" />
        <Path stroke="#f9f59f" d="M26 18h1" />
        <Path stroke="#ba9848" d="M27 18h1" />
        <Path stroke="#af8d3f" d="M28 18h1" />
        <Path stroke="#f9f696" d="M29 18h1" />
        <Path stroke="#fffb91" d="M30 18h1" />
        <Path stroke="#fff88a" d="M31 18h1" />
        <Path stroke="#fff68e" d="M32 18h1" />
        <Path stroke="#fff189" d="M33 18h1" />
        <Path stroke="#ffce35" d="M34 18h1" />
        <Path stroke="rgba(237,149,4,0.7725490196078432)" d="M35 18h1" />
        <Path stroke="rgba(185,114,26,0.11372549019607843)" d="M36 18h1" />
        <Path stroke="rgba(49,73,111,0.9607843137254902)" d="M60 18h9M101 18h2" />
        <Path stroke="rgba(51,73,111,0.6470588235294118)" d="M69 18h1" />
        <Path stroke="rgba(50,74,112,0.7333333333333333)" d="M77 18h1" />
        <Path stroke="rgba(48,72,111,0.8901960784313725)" d="M78 18h1" />
        <Path stroke="rgba(49,73,111,0.9529411764705882)" d="M79 18h1M118 19h1" />
        <Path stroke="rgba(49,72,111,0.984313725490196)" d="M80 18h1M77 19h1M82 29h1M116 29h1M83 30h1M103 30h1" />
        <Path stroke="rgba(50,73,111,0.9882352941176471)" d="M82 18h1M84 26h1M62 34h1" />
        <Path stroke="rgba(49,72,111,0.9568627450980393)" d="M83 18h1M99 20h1M111 24h1M118 28h1" />
        <Path stroke="rgba(49,73,110,0.9058823529411765)" d="M84 18h1" />
        <Path stroke="rgba(48,73,111,0.7647058823529411)" d="M85 18h1" />
        <Path stroke="rgba(50,72,115,0.2784313725490196)" d="M86 18h1" />
        <Path stroke="rgba(49,73,111,0.8313725490196079)" d="M100 18h1M116 20h1" />
        <Path stroke="rgba(49,72,112,0.8862745098039215)" d="M103 18h1" />
        <Path stroke="rgba(52,78,114,0.19215686274509805)" d="M104 18h1" />
        <Path stroke="rgba(51,74,111,0.5137254901960784)" d="M109 18h1" />
        <Path stroke="rgba(48,73,111,0.8274509803921568)" d="M110 18h1" />
        <Path stroke="rgba(48,72,111,0.9294117647058824)" d="M111 18h1" />
        <Path stroke="rgba(49,72,111,0.9686274509803922)" d="M112 18h1M84 22h1" />
        <Path stroke="rgba(49,72,111,0.996078431372549)" d="M113 18h1M108 21h1M101 27h1M77 29h1M116 30h1" />
        <Path stroke="rgba(49,72,111,0.9725490196078431)" d="M115 18h1M100 25h1" />
        <Path stroke="rgba(49,72,112,0.9411764705882353)" d="M116 18h1M87 22h1M81 29h1" />
        <Path stroke="rgba(48,72,111,0.8470588235294118)" d="M117 18h1M109 29h1" />
        <Path stroke="rgba(51,77,128,0.0392156862745098)" d="M119 18h1M77 31h1" />
        <Path stroke="rgba(48,80,112,0.06274509803921569)" d="M135 18h1M138 18h1M132 19h1M156 19h1M163 19h1M131 20h1M186 20h1M164 21h1M182 22h1M152 23h1M177 24h1M174 26h1M182 26h1M140 27h1M179 29h1M131 30h1M174 30h1M132 31h1M164 31h1M183 31h1M189 31h1M134 32h1M139 32h1M148 32h1M153 32h1M184 32h1" />
        <Path stroke="rgba(202,125,30,0.3607843137254902)" d="M15 19h1" />
        <Path stroke="rgba(253,167,3,0.984313725490196)" d="M16 19h1" />
        <Path stroke="#ffd94f" d="M17 19h1" />
        <Path stroke="#ffec75" d="M18 19h1" />
        <Path stroke="#fff070" d="M19 19h1" />
        <Path stroke="#fff573" d="M20 19h1" />
        <Path stroke="#fff776" d="M21 19h1" />
        <Path stroke="#fff87b" d="M22 19h1" />
        <Path stroke="#fff87e" d="M23 19h1" />
        <Path stroke="#fff982" d="M24 19h1" />
        <Path stroke="#fffe89" d="M25 19h1" />
        <Path stroke="#dbc55d" d="M26 19h1" />
        <Path stroke="#8d580a" d="M27 19h1" />
        <Path stroke="#e2d162" d="M28 19h1" />
        <Path stroke="#ffff87" d="M29 19h1" />
        <Path stroke="#fffa77" d="M30 19h1" />
        <Path stroke="#fff574" d="M31 19h1" />
        <Path stroke="#fff170" d="M32 19h1" />
        <Path stroke="#ffec71" d="M33 19h1" />
        <Path stroke="#fbe05e" d="M34 19h1" />
        <Path stroke="#f3af18" d="M35 19h1" />
        <Path stroke="rgba(185,148,88,0.5254901960784314)" d="M36 19h1" />
        <Path stroke="rgba(78,163,216,0.15294117647058825)" d="M37 19h1" />
        <Path stroke="rgba(26,153,204,0.0392156862745098)" d="M38 19h1" />
        <Path stroke="rgba(47,78,114,0.19215686274509805)" d="M59 19h1" />
        <Path stroke="rgba(50,73,111,0.6745098039215687)" d="M69 19h1M69 20h1M69 21h1M69 22h1M69 23h1M69 24h1M69 25h1M69 26h1M69 27h1M69 28h1M69 29h1M69 30h1" />
        <Path stroke="rgba(64,77,115,0.0784313725490196)" d="M75 19h1M79 24h1" />
        <Path stroke="rgba(49,73,112,0.7686274509803922)" d="M76 19h1M111 21h1M61 33h1" />
        <Path stroke="rgba(49,73,111,0.9254901960784314)" d="M81 19h1M109 19h1M100 22h1M79 28h1" />
        <Path stroke="rgba(48,74,111,0.9921568627450981)" d="M85 19h1M100 19h1M102 19h1M86 20h1M111 28h1M80 29h1" />
        <Path stroke="rgba(50,74,112,0.8274509803921568)" d="M86 19h1" />
        <Path stroke="rgba(52,75,112,0.13333333333333333)" d="M87 19h1" />
        <Path stroke="rgba(102,102,102,0.0196078431372549)" d="M98 19h1M107 20h1M117 26h1" />
        <Path stroke="rgba(50,74,112,0.6627450980392157)" d="M99 19h1" />
        <Path stroke="rgba(50,73,114,0.396078431372549)" d="M103 19h1" />
        <Path stroke="rgba(50,72,112,0.4)" d="M108 19h1" />
        <Path stroke="rgba(49,73,112,0.8588235294117647)" d="M112 19h1" />
        <Path stroke="rgba(49,73,111,0.6313725490196078)" d="M113 19h1" />
        <Path stroke="rgba(50,73,111,0.6196078431372549)" d="M114 19h1" />
        <Path stroke="rgba(50,72,112,0.5019607843137255)" d="M133 19h1M137 21h1M160 23h1M175 23h1M134 24h5M160 24h1M179 24h1M160 25h1M135 26h7M156 26h1M160 26h1M130 27h1M156 27h1M160 27h1M160 28h1M174 28h1M138 29h1M160 29h1M156 30h1M160 30h1" />
        <Path stroke="rgba(48,73,112,0.4392156862745098)" d="M145 19h1M186 21h1M120 22h1M130 23h1M173 25h1M141 27h1M178 27h1M174 29h1M145 31h1M196 31h1" />
        <Path stroke="rgba(48,70,112,0.3137254901960784)" d="M148 19h1M180 21h2M152 22h1M178 24h1M181 26h1M156 31h1M182 31h1" />
        <Path stroke="rgba(48,71,111,0.5607843137254902)" d="M157 19h1M162 19h1M177 23h1M134 26h1M180 26h1" />
        <Path stroke="rgba(48,72,111,0.6235294117647059)" d="M177 19h1M184 19h1M163 20h1M131 21h1M179 21h1M139 23h1M130 24h1M156 25h1M134 28h1M178 29h1M133 31h1M199 31h1" />
        <Path stroke="rgba(191,128,64,0.047058823529411764)" d="M14 20h1" />
        <Path stroke="rgba(228,135,8,0.7529411764705882)" d="M15 20h1" />
        <Path stroke="#ffbb1a" d="M16 20h1M16 24h1" />
        <Path stroke="#ffdc59" d="M17 20h1" />
        <Path stroke="#ffe45a" d="M18 20h1" />
        <Path stroke="#ffec5b" d="M19 20h1" />
        <Path stroke="#fff25e" d="M20 20h1" />
        <Path stroke="#fff561" d="M21 20h1" />
        <Path stroke="#fff864" d="M22 20h1" />
        <Path stroke="#fff766" d="M23 20h1" />
        <Path stroke="#fffb6a" d="M24 20h1" />
        <Path stroke="#fbf66b" d="M25 20h1" />
        <Path stroke="#a97d1c" d="M26 20h1" />
        <Path stroke="#8c5001" d="M27 20h1" />
        <Path stroke="#e3d050" d="M28 20h1" />
        <Path stroke="#efe75f" d="M29 20h1" />
        <Path stroke="#f5ef5e" d="M30 20h1" />
        <Path stroke="#fdef5d" d="M31 20h1" />
        <Path stroke="#feeb5a" d="M32 20h1" />
        <Path stroke="#f4e463" d="M33 20h1" />
        <Path stroke="#e3dd83" d="M34 20h1" />
        <Path stroke="#c9cf97" d="M35 20h1" />
        <Path stroke="rgba(175,199,185,0.9333333333333333)" d="M36 20h1" />
        <Path stroke="rgba(96,187,231,0.6784313725490196)" d="M37 20h1" />
        <Path stroke="rgba(31,170,221,0.29411764705882354)" d="M38 20h1" />
        <Path stroke="rgba(59,78,118,0.050980392156862744)" d="M59 20h1M83 22h1" />
        <Path stroke="rgba(49,76,114,0.2627450980392157)" d="M60 20h5M116 31h1" />
        <Path stroke="rgba(50,72,113,0.44313725490196076)" d="M65 20h1" />
        <Path stroke="rgba(51,75,113,0.41568627450980394)" d="M75 20h1" />
        <Path stroke="rgba(49,72,111,0.9803921568627451)" d="M76 20h1M87 23h1M97 23h1M87 24h1M87 25h1M98 26h1M76 28h1M112 29h1M65 33h1" />
        <Path stroke="rgba(51,74,112,0.8117647058823529)" d="M79 20h1M97 25h1M84 30h1" />
        <Path stroke="rgba(50,76,112,0.3568627450980392)" d="M80 20h1" />
        <Path stroke="rgba(49,74,111,0.3254901960784314)" d="M82 20h1" />
        <Path stroke="rgba(50,73,111,0.7372549019607844)" d="M83 20h1M62 33h1M64 35h1" />
        <Path stroke="rgba(51,73,111,0.5333333333333333)" d="M87 20h1M76 29h1" />
        <Path stroke="rgba(50,73,112,0.6)" d="M102 20h1M69 31h1" />
        <Path stroke="rgba(55,73,109,0.054901960784313725)" d="M103 20h1M99 30h1" />
        <Path stroke="rgba(49,72,112,0.9725490196078431)" d="M111 20h1M79 30h1" />
        <Path stroke="rgba(47,76,113,0.21176470588235294)" d="M112 20h1" />
        <Path stroke="rgba(51,76,110,0.11764705882352941)" d="M113 20h1" />
        <Path stroke="rgba(53,79,114,0.11372549019607843)" d="M114 20h1M83 26h1" />
        <Path stroke="rgba(49,73,111,0.9215686274509803)" d="M119 20h1" />
        <Path stroke="rgba(57,85,113,0.10588235294117647)" d="M120 20h1" />
        <Path stroke="rgba(49,73,111,0.8117647058823529)" d="M132 20h1M156 20h1M150 21h1M158 21h2M182 21h1M156 23h1M128 24h1M166 24h1M128 26h1M166 26h1M132 30h1M184 31h1M60 33h1" />
        <Path stroke="rgba(190,125,49,0.24705882352941178)" d="M14 21h1" />
        <Path stroke="rgba(246,149,2,0.9803921568627451)" d="M15 21h1" />
        <Path stroke="#ffc42d" d="M16 21h1" />
        <Path stroke="#ffd647" d="M17 21h1" />
        <Path stroke="#ffdd46" d="M18 21h1" />
        <Path stroke="#fde548" d="M19 21h1" />
        <Path stroke="#fcea4a" d="M20 21h1" />
        <Path stroke="#fbee4d" d="M21 21h1" />
        <Path stroke="#fdf34f" d="M22 21h1" />
        <Path stroke="#fff451" d="M23 21h1" />
        <Path stroke="#fff954" d="M24 21h1" />
        <Path stroke="#f5ea4e" d="M25 21h1" />
        <Path stroke="#ac7f14" d="M26 21h1" />
        <Path stroke="#9a5f04" d="M27 21h1" />
        <Path stroke="#a67a16" d="M28 21h1" />
        <Path stroke="#bb9a28" d="M29 21h1" />
        <Path stroke="#d2b735" d="M30 21h1" />
        <Path stroke="#f3dc43" d="M31 21h1" />
        <Path stroke="#fce745" d="M32 21h1" />
        <Path stroke="#ced180" d="M33 21h1" />
        <Path stroke="#aad7d8" d="M34 21h1" />
        <Path stroke="#96e5ff" d="M35 21h1" />
        <Path stroke="#82e5ff" d="M36 21h1" />
        <Path stroke="#5cd2ff" d="M37 21h1" />
        <Path stroke="rgba(47,172,224,0.7019607843137254)" d="M38 21h1" />
        <Path stroke="rgba(52,72,111,0.44313725490196076)" d="M79 21h1" />
        <Path stroke="rgba(51,77,102,0.0392156862745098)" d="M80 21h1" />
        <Path stroke="rgba(50,69,110,0.3176470588235294)" d="M83 21h1" />
        <Path stroke="rgba(51,74,111,0.7843137254901961)" d="M87 21h1" />
        <Path stroke="rgba(51,74,111,0.21568627450980393)" d="M97 21h1M112 22h4" />
        <Path stroke="rgba(49,73,111,0.8980392156862745)" d="M98 21h1M112 24h8" />
        <Path stroke="rgba(49,72,111,0.792156862745098)" d="M101 21h1" />
        <Path stroke="rgba(59,76,110,0.11764705882352941)" d="M102 21h1" />
        <Path stroke="rgba(46,78,118,0.15294117647058825)" d="M107 21h1" />
        <Path stroke="rgba(0,128,128,0.00784313725490196)" d="M112 21h1M98 29h1" />
        <Path stroke="rgba(49,73,114,0.5725490196078431)" d="M116 21h1" />
        <Path stroke="rgba(50,78,113,0.2823529411764706)" d="M120 21h1" />
        <Path stroke="rgba(203,124,27,0.4823529411764706)" d="M14 22h1" />
        <Path stroke="#fb9d03" d="M15 22h1" />
        <Path stroke="#ffc42b" d="M16 22h1" />
        <Path stroke="#f6c532" d="M17 22h1" />
        <Path stroke="#e9bd2e" d="M18 22h1" />
        <Path stroke="#dfb82b" d="M19 22h1" />
        <Path stroke="#dab529" d="M20 22h1" />
        <Path stroke="#d7b428" d="M21 22h1" />
        <Path stroke="#ddbe2d" d="M22 22h1" />
        <Path stroke="#f5e13b" d="M23 22h1" />
        <Path stroke="#fff241" d="M24 22h1" />
        <Path stroke="#fced3f" d="M25 22h1" />
        <Path stroke="#e7d237" d="M26 22h1" />
        <Path stroke="#d9be2e" d="M27 22h1" />
        <Path stroke="#c8a925" d="M28 22h1" />
        <Path stroke="#c1a124" d="M29 22h1" />
        <Path stroke="#c9ab28" d="M30 22h1" />
        <Path stroke="#efd434" d="M31 22h1" />
        <Path stroke="#f7db31" d="M32 22h1" />
        <Path stroke="#ac9145" d="M33 22h1" />
        <Path stroke="#899e96" d="M34 22h1" />
        <Path stroke="#67c2d7" d="M35 22h1" />
        <Path stroke="#32bce6" d="M36 22h1" />
        <Path stroke="rgba(28,177,233,0.9803921568627451)" d="M37 22h1" />
        <Path stroke="rgba(73,159,190,0.615686274509804)" d="M38 22h1" />
        <Path stroke="rgba(49,74,111,0.24313725490196078)" d="M65 22h1M65 23h1M65 24h1M65 25h1M65 26h1M65 27h1M65 28h1M65 29h1M112 31h1" />
        <Path stroke="rgba(49,73,112,0.803921568627451)" d="M75 22h1" />
        <Path stroke="rgba(59,78,111,0.15294117647058825)" d="M79 22h1M116 27h1" />
        <Path stroke="rgba(51,73,111,0.7647058823529411)" d="M97 22h1" />
        <Path stroke="rgba(48,78,112,0.23137254901960785)" d="M101 22h1" />
        <Path stroke="rgba(50,73,113,0.30196078431372547)" d="M107 22h1" />
        <Path stroke="rgba(50,73,111,0.7019607843137254)" d="M111 22h1" />
        <Path stroke="rgba(49,75,113,0.5764705882352941)" d="M116 22h1" />
        <Path stroke="rgba(211,125,13,0.6392156862745098)" d="M14 23h1" />
        <Path stroke="#f9a003" d="M15 23h1" />
        <Path stroke="#ffc123" d="M16 23h1" />
        <Path stroke="#e3ae24" d="M17 23h1" />
        <Path stroke="#ba8917" d="M18 23h1" />
        <Path stroke="#ab7e12" d="M19 23h1" />
        <Path stroke="#a1710b" d="M20 23h1" />
        <Path stroke="#935b03" d="M21 23h1" />
        <Path stroke="#8e5402" d="M22 23h1" />
        <Path stroke="#dbba25" d="M23 23h1" />
        <Path stroke="#fff236" d="M24 23h1" />
        <Path stroke="#ffe833" d="M25 23h1" />
        <Path stroke="#fff037" d="M26 23h1" />
        <Path stroke="#fff23a" d="M27 23h1" />
        <Path stroke="#fff038" d="M28 23h1" />
        <Path stroke="#ffed37" d="M29 23h1" />
        <Path stroke="#ffe934" d="M30 23h1" />
        <Path stroke="#f4d827" d="M31 23h1" />
        <Path stroke="#d0a427" d="M32 23h1" />
        <Path stroke="#91642f" d="M33 23h1" />
        <Path stroke="#ab7518" d="M34 23h1" />
        <Path stroke="#af9c4e" d="M35 23h1" />
        <Path stroke="#7a9475" d="M36 23h1" />
        <Path stroke="rgba(114,143,126,0.9019607843137255)" d="M37 23h1" />
        <Path stroke="rgba(144,127,115,0.23529411764705882)" d="M38 23h1" />
        <Path stroke="rgba(49,74,112,0.8392156862745098)" d="M75 23h1M75 24h1M75 25h1" />
        <Path stroke="rgba(61,73,109,0.08235294117647059)" d="M79 23h1" />
        <Path stroke="rgba(49,72,111,0.9450980392156862)" d="M84 23h1" />
        <Path stroke="rgba(49,72,111,0.9019607843137255)" d="M96 23h1" />
        <Path stroke="rgba(49,72,112,0.5529411764705883)" d="M100 23h1" />
        <Path stroke="rgba(50,71,113,0.33725490196078434)" d="M107 23h1M107 24h1M107 25h1M113 31h1" />
        <Path stroke="rgba(50,73,111,0.9333333333333333)" d="M111 23h1" />
        <Path stroke="rgba(214,120,3,0.7137254901960784)" d="M14 24h1" />
        <Path stroke="#f59e02" d="M15 24h1" />
        <Path stroke="#f3bd26" d="M17 24h1" />
        <Path stroke="#e6ba25" d="M18 24h1" />
        <Path stroke="#e4be26" d="M19 24h1" />
        <Path stroke="#ddbe27" d="M20 24h1" />
        <Path stroke="#ae7809" d="M21 24h1" />
        <Path stroke="#8d4f00" d="M22 24h1" />
        <Path stroke="#e4c124" d="M23 24h1" />
        <Path stroke="#ffea30" d="M24 24h1" />
        <Path stroke="#ffe22e" d="M25 24h2" />
        <Path stroke="#ffe22d" d="M27 24h2" />
        <Path stroke="#ffe229" d="M29 24h1" />
        <Path stroke="#f1d11e" d="M30 24h1" />
        <Path stroke="#c99b18" d="M31 24h1" />
        <Path stroke="#a88e6c" d="M32 24h1" />
        <Path stroke="#a7a2ab" d="M33 24h1" />
        <Path stroke="#ba8327" d="M34 24h1" />
        <Path stroke="#fdac04" d="M35 24h1" />
        <Path stroke="#ec9100" d="M36 24h1" />
        <Path stroke="rgba(210,116,5,0.8470588235294118)" d="M37 24h1" />
        <Path stroke="rgba(162,104,70,0.08627450980392157)" d="M38 24h1" />
        <Path stroke="rgba(49,72,113,0.9411764705882353)" d="M84 24h1" />
        <Path stroke="rgba(49,74,112,0.788235294117647)" d="M100 24h1" />
        <Path stroke="rgba(57,85,142,0.03529411764705882)" d="M101 24h1" />
        <Path stroke="rgba(51,72,114,0.43137254901960786)" d="M120 24h1" />
        <Path stroke="rgba(212,119,3,0.7137254901960784)" d="M14 25h1" />
        <Path stroke="#f29a01" d="M15 25h1" />
        <Path stroke="#fdb614" d="M16 25h1" />
        <Path stroke="#ffc427" d="M17 25h1" />
        <Path stroke="#ffce2a" d="M18 25h1" />
        <Path stroke="#ffd62b" d="M19 25h1" />
        <Path stroke="#fee230" d="M20 25h1" />
        <Path stroke="#ba850f" d="M21 25h1" />
        <Path stroke="#b3800e" d="M22 25h1" />
        <Path stroke="#fde02f" d="M23 25h1" />
        <Path stroke="#ffdf2e" d="M24 25h1M26 25h1" />
        <Path stroke="#ffde2e" d="M25 25h1" />
        <Path stroke="#ffe02e" d="M27 25h1" />
        <Path stroke="#f9db27" d="M28 25h1" />
        <Path stroke="#eac21a" d="M29 25h1" />
        <Path stroke="#c19628" d="M30 25h1" />
        <Path stroke="#b29a7f" d="M31 25h1" />
        <Path stroke="#ced1dd" d="M32 25h1" />
        <Path stroke="#b7afae" d="M33 25h1" />
        <Path stroke="#a6701e" d="M34 25h1" />
        <Path stroke="#fdb50f" d="M35 25h1" />
        <Path stroke="#fda501" d="M36 25h1" />
        <Path stroke="rgba(218,125,2,0.8392156862745098)" d="M37 25h1" />
        <Path stroke="rgba(165,105,60,0.06666666666666667)" d="M38 25h1" />
        <Path stroke="rgba(50,72,111,0.9450980392156862)" d="M84 25h1" />
        <Path stroke="rgba(51,73,112,0.4117647058823529)" d="M96 25h1M119 27h1M69 32h1" />
        <Path stroke="rgba(46,76,112,0.19607843137254902)" d="M112 25h8" />
        <Path stroke="rgba(53,74,117,0.09411764705882353)" d="M120 25h1" />
        <Path stroke="rgba(202,116,15,0.6470588235294118)" d="M14 26h1" />
        <Path stroke="#ed9300" d="M15 26h1" />
        <Path stroke="#fbb10e" d="M16 26h1" />
        <Path stroke="#ffbe25" d="M17 26h1" />
        <Path stroke="#ffc52d" d="M18 26h1" />
        <Path stroke="#ffce2e" d="M19 26h1" />
        <Path stroke="#f6c529" d="M20 26h1" />
        <Path stroke="#a9740e" d="M21 26h1" />
        <Path stroke="#dcb325" d="M22 26h1" />
        <Path stroke="#ffe032" d="M23 26h1" />
        <Path stroke="#ffd930" d="M24 26h1" />
        <Path stroke="#ffdc30" d="M25 26h1" />
        <Path stroke="#fddb2d" d="M26 26h1" />
        <Path stroke="#f0cf26" d="M27 26h1" />
        <Path stroke="#d7ac1e" d="M28 26h1" />
        <Path stroke="#b48b3e" d="M29 26h1" />
        <Path stroke="#c1b1a0" d="M30 26h1" />
        <Path stroke="#e3e9f3" d="M31 26h1" />
        <Path stroke="#cac4bc" d="M32 26h1" />
        <Path stroke="#936737" d="M33 26h1" />
        <Path stroke="#a66602" d="M34 26h1" />
        <Path stroke="#fab310" d="M35 26h1" />
        <Path stroke="#f59d01" d="M36 26h1" />
        <Path stroke="rgba(210,123,9,0.7803921568627451)" d="M37 26h1" />
        <Path stroke="rgba(182,146,36,0.027450980392156862)" d="M38 26h1" />
        <Path stroke="rgba(48,75,111,0.7647058823529411)" d="M75 26h1" />
        <Path stroke="rgba(50,72,112,0.9137254901960784)" d="M87 26h1" />
        <Path stroke="rgba(51,75,112,0.29411764705882354)" d="M97 26h1" />
        <Path stroke="rgba(50,72,112,0.8862745098039215)" d="M101 26h1" />
        <Path stroke="rgba(58,80,109,0.13725490196078433)" d="M102 26h1" />
        <Path stroke="rgba(51,78,114,0.2549019607843137)" d="M107 26h1" />
        <Path stroke="rgba(51,74,112,0.6666666666666666)" d="M111 26h1" />
        <Path stroke="rgba(193,118,32,0.5019607843137255)" d="M14 27h1" />
        <Path stroke="#e58900" d="M15 27h1" />
        <Path stroke="#f6ab07" d="M16 27h1" />
        <Path stroke="#feb81c" d="M17 27h1" />
        <Path stroke="#ffc02a" d="M18 27h1" />
        <Path stroke="#ffcc30" d="M19 27h1" />
        <Path stroke="#e8b328" d="M20 27h1" />
        <Path stroke="#c6961f" d="M21 27h1" />
        <Path stroke="#fbd433" d="M22 27h1" />
        <Path stroke="#ffd731" d="M23 27h1" />
        <Path stroke="#fdd52e" d="M24 27h1" />
        <Path stroke="#f2cf29" d="M25 27h1" />
        <Path stroke="#e4b823" d="M26 27h1" />
        <Path stroke="#c1962f" d="M27 27h1" />
        <Path stroke="#b79971" d="M28 27h1" />
        <Path stroke="#d4cbca" d="M29 27h1" />
        <Path stroke="#eef1ee" d="M30 27h1" />
        <Path stroke="#cabeac" d="M31 27h1" />
        <Path stroke="#9e6c2e" d="M32 27h1" />
        <Path stroke="#914f00" d="M33 27h1" />
        <Path stroke="#ba7704" d="M34 27h1" />
        <Path stroke="#fcb10e" d="M35 27h1" />
        <Path stroke="#ed9100" d="M36 27h1" />
        <Path stroke="rgba(198,117,19,0.6470588235294118)" d="M37 27h1" />
        <Path stroke="rgba(49,73,111,0.592156862745098)" d="M75 27h1" />
        <Path stroke="rgba(49,73,112,0.5882352941176471)" d="M79 27h1" />
        <Path stroke="rgba(57,85,113,0.03529411764705882)" d="M80 27h1M97 27h1" />
        <Path stroke="rgba(85,170,170,0.011764705882352941)" d="M82 27h1" />
        <Path stroke="rgba(47,74,112,0.4470588235294118)" d="M83 27h1" />
        <Path stroke="rgba(48,72,111,0.7450980392156863)" d="M87 27h1" />
        <Path stroke="rgba(49,74,112,0.6078431372549019)" d="M98 27h1" />
        <Path stroke="rgba(49,72,112,0.6352941176470588)" d="M102 27h1" />
        <Path stroke="rgba(48,74,112,0.9921568627450981)" d="M108 27h1M112 30h1" />
        <Path stroke="rgba(49,73,111,0.9098039215686274)" d="M111 27h1" />
        <Path stroke="rgba(49,74,112,0.7333333333333333)" d="M117 27h1" />
        <Path stroke="rgba(50,72,112,0.6235294117647059)" d="M118 27h1" />
        <Path stroke="rgba(59,78,118,0.15294117647058825)" d="M120 27h1" />
        <Path stroke="rgba(185,119,45,0.28627450980392155)" d="M14 28h1" />
        <Path stroke="rgba(217,125,1,0.9725490196078431)" d="M15 28h1" />
        <Path stroke="#f19f03" d="M16 28h1" />
        <Path stroke="#fdb10a" d="M17 28h1" />
        <Path stroke="#fab921" d="M18 28h1" />
        <Path stroke="#f7c436" d="M19 28h1" />
        <Path stroke="#f3be31" d="M20 28h1" />
        <Path stroke="#f4c230" d="M21 28h1" />
        <Path stroke="#f8ce30" d="M22 28h1" />
        <Path stroke="#f2c52b" d="M23 28h1" />
        <Path stroke="#e5b526" d="M24 28h1" />
        <Path stroke="#c7992b" d="M25 28h1" />
        <Path stroke="#b7955c" d="M26 28h1" />
        <Path stroke="#c7b8ab" d="M27 28h1" />
        <Path stroke="#ebeef4" d="M28 28h1" />
        <Path stroke="#ede5dd" d="M29 28h1" />
        <Path stroke="#c2ab8e" d="M30 28h1" />
        <Path stroke="#9b6317" d="M31 28h1" />
        <Path stroke="#9f5b00" d="M32 28h1" />
        <Path stroke="#9c5c00" d="M33 28h1" />
        <Path stroke="#ce8b09" d="M34 28h1" />
        <Path stroke="#fbab08" d="M35 28h1" />
        <Path stroke="rgba(224,133,0,0.996078431372549)" d="M36 28h1" />
        <Path stroke="rgba(187,115,35,0.42745098039215684)" d="M37 28h1" />
        <Path stroke="rgba(51,76,113,0.27450980392156865)" d="M75 28h1" />
        <Path stroke="rgba(49,74,112,0.7529411764705882)" d="M80 28h1" />
        <Path stroke="rgba(50,73,112,0.7215686274509804)" d="M82 28h1" />
        <Path stroke="rgba(50,73,111,0.8941176470588236)" d="M83 28h1M119 28h1" />
        <Path stroke="rgba(48,71,112,0.4196078431372549)" d="M87 28h1" />
        <Path stroke="rgba(60,82,120,0.13333333333333333)" d="M98 28h1" />
        <Path stroke="rgba(50,73,112,0.8823529411764706)" d="M99 28h1" />
        <Path stroke="rgba(48,73,111,0.9490196078431372)" d="M102 28h1" />
        <Path stroke="rgba(50,77,111,0.2980392156862745)" d="M103 28h1" />
        <Path stroke="rgba(49,74,112,0.7294117647058823)" d="M108 28h1" />
        <Path stroke="rgba(50,74,111,0.7176470588235294)" d="M112 28h1" />
        <Path stroke="rgba(51,73,114,0.4666666666666667)" d="M113 28h1" />
        <Path stroke="rgba(51,74,112,0.4745098039215686)" d="M115 28h1" />
        <Path stroke="rgba(50,74,112,0.7607843137254902)" d="M116 28h1" />
        <Path stroke="rgba(49,73,111,0.9882352941176471)" d="M117 28h1" />
        <Path stroke="rgba(51,76,117,0.27450980392156865)" d="M120 28h1" />
        <Path stroke="rgba(166,115,64,0.0784313725490196)" d="M14 29h1" />
        <Path stroke="rgba(202,119,10,0.8)" d="M15 29h1" />
        <Path stroke="#e88d00" d="M16 29h1" />
        <Path stroke="#f2a506" d="M17 29h1" />
        <Path stroke="#e2c05b" d="M18 29h1" />
        <Path stroke="#d1be70" d="M19 29h1" />
        <Path stroke="#efb62b" d="M20 29h1" />
        <Path stroke="#ebb42f" d="M21 29h1" />
        <Path stroke="#d7a330" d="M22 29h1" />
        <Path stroke="#c69b44" d="M23 29h1" />
        <Path stroke="#bb9a69" d="M24 29h1" />
        <Path stroke="#c1b19e" d="M25 29h1" />
        <Path stroke="#dfdfe6" d="M26 29h1" />
        <Path stroke="#efe8e1" d="M27 29h1" />
        <Path stroke="#d9cbb8" d="M28 29h1" />
        <Path stroke="#b38b5b" d="M29 29h1" />
        <Path stroke="#9c5d04" d="M30 29h1" />
        <Path stroke="#a35f00" d="M31 29h1M28 31h1" />
        <Path stroke="#a26301" d="M32 29h1" />
        <Path stroke="#a76803" d="M33 29h1M30 32h1" />
        <Path stroke="#e9a00c" d="M34 29h1" />
        <Path stroke="#f09b03" d="M35 29h1" />
        <Path stroke="rgba(208,120,4,0.8980392156862745)" d="M36 29h1" />
        <Path stroke="rgba(174,118,62,0.1607843137254902)" d="M37 29h1" />
        <Path stroke="rgba(46,70,116,0.043137254901960784)" d="M75 29h1M81 32h1" />
        <Path stroke="rgba(49,73,112,0.3843137254901961)" d="M99 29h1" />
        <Path stroke="rgba(49,73,111,0.803921568627451)" d="M103 29h1M65 32h1" />
        <Path stroke="rgba(51,85,119,0.058823529411764705)" d="M104 29h1M85 31h1" />
        <Path stroke="rgba(50,72,111,0.1803921568627451)" d="M108 29h1M117 31h1" />
        <Path stroke="rgba(48,72,111,0.9137254901960784)" d="M115 29h1" />
        <Path stroke="rgba(60,75,120,0.06666666666666667)" d="M120 29h1" />
        <Path stroke="rgba(185,115,34,0.41568627450980394)" d="M15 30h1" />
        <Path stroke="rgba(212,123,6,0.9568627450980393)" d="M16 30h1" />
        <Path stroke="#ccb15f" d="M17 30h1" />
        <Path stroke="#b4e4dc" d="M18 30h1" />
        <Path stroke="#9db8a8" d="M19 30h1" />
        <Path stroke="#ba750c" d="M20 30h1" />
        <Path stroke="#ac8856" d="M21 30h1" />
        <Path stroke="#b4a38f" d="M22 30h1" />
        <Path stroke="#c4bebd" d="M23 30h1" />
        <Path stroke="#d8d9e1" d="M24 30h1" />
        <Path stroke="#e6e6de" d="M25 30h1" />
        <Path stroke="#d9cdbe" d="M26 30h1" />
        <Path stroke="#b89367" d="M27 30h1" />
        <Path stroke="#a16717" d="M28 30h1" />
        <Path stroke="#9f5a00" d="M29 30h1" />
        <Path stroke="#a66300" d="M30 30h1" />
        <Path stroke="#a56501" d="M31 30h1" />
        <Path stroke="#9f5f01" d="M32 30h1" />
        <Path stroke="#cc890b" d="M33 30h1" />
        <Path stroke="#f3a50b" d="M34 30h1" />
        <Path stroke="rgba(222,131,1,0.9882352941176471)" d="M35 30h1" />
        <Path stroke="rgba(194,116,25,0.5529411764705883)" d="M36 30h1" />
        <Path stroke="rgba(52,76,116,0.25098039215686274)" d="M65 30h1" />
        <Path stroke="rgba(55,78,111,0.09019607843137255)" d="M76 30h1" />
        <Path stroke="rgba(52,77,112,0.36470588235294116)" d="M77 30h1" />
        <Path stroke="rgba(50,73,112,0.7568627450980392)" d="M78 30h1" />
        <Path stroke="rgba(51,72,111,0.43137254901960786)" d="M85 30h1" />
        <Path stroke="rgba(54,77,108,0.12941176470588237)" d="M86 30h1" />
        <Path stroke="rgba(50,73,113,0.7019607843137254)" d="M100 30h1" />
        <Path stroke="rgba(49,73,112,0.49019607843137253)" d="M104 30h1M59 35h1" />
        <Path stroke="rgba(51,76,112,0.19607843137254902)" d="M109 30h1" />
        <Path stroke="rgba(48,72,110,0.5254901960784314)" d="M110 30h1" />
        <Path stroke="rgba(49,73,111,0.8392156862745098)" d="M117 30h1" />
        <Path stroke="rgba(52,74,113,0.5411764705882353)" d="M118 30h1" />
        <Path stroke="rgba(51,73,109,0.13725490196078433)" d="M119 30h1M104 31h1M60 36h1" />
        <Path stroke="rgba(217,140,0,0.0784313725490196)" d="M15 31h1" />
        <Path stroke="rgba(180,151,93,0.8274509803921568)" d="M16 31h1" />
        <Path stroke="#b1e1e7" d="M17 31h1" />
        <Path stroke="#7be9ff" d="M18 31h1" />
        <Path stroke="#7ca79d" d="M19 31h1" />
        <Path stroke="#b56c01" d="M20 31h1" />
        <Path stroke="#a79073" d="M21 31h1" />
        <Path stroke="#c2c5cb" d="M22 31h1" />
        <Path stroke="#ccc8c4" d="M23 31h1" />
        <Path stroke="#c4b39a" d="M24 31h1" />
        <Path stroke="#b28e5f" d="M25 31h1" />
        <Path stroke="#a26b1e" d="M26 31h1" />
        <Path stroke="#9d5a00" d="M27 31h1" />
        <Path stroke="#a76601" d="M29 31h1" />
        <Path stroke="#a46401" d="M30 31h1" />
        <Path stroke="#a16301" d="M31 31h1" />
        <Path stroke="#be7d09" d="M32 31h1" />
        <Path stroke="#eea20f" d="M33 31h1" />
        <Path stroke="#e18e04" d="M34 31h1" />
        <Path stroke="rgba(211,118,1,0.8274509803921568)" d="M35 31h1" />
        <Path stroke="rgba(216,137,20,0.15294117647058825)" d="M36 31h1" />
        <Path stroke="rgba(45,77,108,0.1568627450980392)" d="M78 31h1" />
        <Path stroke="rgba(50,73,109,0.2196078431372549)" d="M79 31h1" />
        <Path stroke="rgba(50,74,114,0.2980392156862745)" d="M80 31h1" />
        <Path stroke="rgba(48,74,113,0.30980392156862746)" d="M82 31h1" />
        <Path stroke="rgba(48,75,110,0.22745098039215686)" d="M83 31h1M93 31h3M101 31h3" />
        <Path stroke="rgba(50,71,113,0.1411764705882353)" d="M100 31h1" />
        <Path stroke="rgba(0,0,255,0.00392156862745098)" d="M109 31h1M112 32h1" />
        <Path stroke="rgba(50,74,113,0.3803921568627451)" d="M114 31h1" />
        <Path stroke="rgba(49,74,114,0.3254901960784314)" d="M115 31h1" />
        <Path stroke="rgba(53,74,106,0.09411764705882353)" d="M118 31h1" />
        <Path stroke="rgba(191,159,64,0.03137254901960784)" d="M15 32h1" />
        <Path stroke="rgba(149,200,209,0.796078431372549)" d="M16 32h1" />
        <Path stroke="#7fe8ff" d="M17 32h1" />
        <Path stroke="#2bc7fe" d="M18 32h1" />
        <Path stroke="#6c968b" d="M19 32h1" />
        <Path stroke="#ed9501" d="M20 32h1" />
        <Path stroke="#d29520" d="M21 32h1" />
        <Path stroke="#ab8347" d="M22 32h1" />
        <Path stroke="#9e7030" d="M23 32h1" />
        <Path stroke="#9c6106" d="M24 32h1" />
        <Path stroke="#9c5900" d="M25 32h1" />
        <Path stroke="#a15d00" d="M26 32h1" />
        <Path stroke="#a66601" d="M27 32h1" />
        <Path stroke="#a56601" d="M28 32h1" />
        <Path stroke="#a36501" d="M29 32h1" />
        <Path stroke="#c2820a" d="M31 32h1" />
        <Path stroke="#e99e0f" d="M32 32h1" />
        <Path stroke="#e59106" d="M33 32h1" />
        <Path stroke="rgba(210,121,1,0.9019607843137255)" d="M34 32h1" />
        <Path stroke="rgba(223,133,0,0.34509803921568627)" d="M35 32h1" />
        <Path stroke="rgba(57,78,113,0.1411764705882353)" d="M59 32h1" />
        <Path stroke="rgba(56,80,120,0.12549019607843137)" d="M60 32h1" />
        <Path stroke="rgba(51,82,112,0.09803921568627451)" d="M63 32h1" />
        <Path stroke="rgba(42,85,128,0.023529411764705882)" d="M82 32h1" />
        <Path stroke="rgba(64,64,128,0.03137254901960784)" d="M113 32h1" />
        <Path stroke="rgba(42,64,106,0.047058823529411764)" d="M114 32h1" />
        <Path stroke="rgba(149,149,106,0.047058823529411764)" d="M15 33h1" />
        <Path stroke="rgba(90,192,231,0.7137254901960784)" d="M16 33h1" />
        <Path stroke="rgba(53,195,240,0.9333333333333333)" d="M17 33h1" />
        <Path stroke="rgba(49,168,221,0.996078431372549)" d="M18 33h1" />
        <Path stroke="#8a7c4f" d="M19 33h1" />
        <Path stroke="#eb8b00" d="M20 33h1" />
        <Path stroke="#f5a608" d="M21 33h1" />
        <Path stroke="#d88f03" d="M22 33h1" />
        <Path stroke="#bc7701" d="M23 33h1" />
        <Path stroke="#b36f01" d="M24 33h1" />
        <Path stroke="#af7003" d="M25 33h1" />
        <Path stroke="#ae6d03" d="M26 33h1" />
        <Path stroke="#af6e03" d="M27 33h1" />
        <Path stroke="#b27105" d="M28 33h1" />
        <Path stroke="#bb7907" d="M29 33h1" />
        <Path stroke="#d38e0c" d="M30 33h1" />
        <Path stroke="#ea9c0c" d="M31 33h1" />
        <Path stroke="#e38e05" d="M32 33h1" />
        <Path stroke="rgba(213,121,1,0.9019607843137255)" d="M33 33h1" />
        <Path stroke="rgba(221,125,0,0.47058823529411764)" d="M34 33h1" />
        <Path stroke="rgba(255,85,0,0.011764705882352941)" d="M35 33h1" />
        <Path stroke="rgba(48,73,112,0.5607843137254902)" d="M59 33h1" />
        <Path stroke="rgba(50,72,111,0.8)" d="M63 33h1" />
        <Path stroke="rgba(49,73,111,0.8588235294117647)" d="M64 33h1" />
        <Path stroke="rgba(50,74,112,0.8549019607843137)" d="M68 33h1" />
        <Path stroke="rgba(104,169,156,0.23137254901960785)" d="M16 34h1" />
        <Path stroke="rgba(72,171,190,0.5254901960784314)" d="M17 34h1" />
        <Path stroke="rgba(118,141,150,0.6078431372549019)" d="M18 34h1" />
        <Path stroke="rgba(196,103,22,0.8666666666666667)" d="M19 34h1" />
        <Path stroke="rgba(219,122,0,0.9529411764705882)" d="M20 34h1" />
        <Path stroke="rgba(227,142,3,0.996078431372549)" d="M21 34h1" />
        <Path stroke="#ef9c09" d="M22 34h1" />
        <Path stroke="#ec9e0c" d="M23 34h1" />
        <Path stroke="#e3990e" d="M24 34h1" />
        <Path stroke="#dc950f" d="M25 34h1" />
        <Path stroke="#d8910e" d="M26 34h1" />
        <Path stroke="#da920e" d="M27 34h1" />
        <Path stroke="#de940c" d="M28 34h1" />
        <Path stroke="#e5960b" d="M29 34h1" />
        <Path stroke="#e89408" d="M30 34h1" />
        <Path stroke="rgba(222,130,3,0.984313725490196)" d="M31 34h1" />
        <Path stroke="rgba(214,115,2,0.8588235294117647)" d="M32 34h1" />
        <Path stroke="rgba(223,129,0,0.3803921568627451)" d="M33 34h1" />
        <Path stroke="rgba(255,146,0,0.027450980392156862)" d="M34 34h1M31 36h1" />
        <Path stroke="rgba(50,74,114,0.8)" d="M59 34h1" />
        <Path stroke="rgba(50,77,112,0.25882352941176473)" d="M68 34h1" />
        <Path stroke="rgba(231,136,6,0.16862745098039217)" d="M19 35h1" />
        <Path stroke="rgba(219,124,0,0.4980392156862745)" d="M20 35h1" />
        <Path stroke="rgba(211,119,1,0.788235294117647)" d="M21 35h1" />
        <Path stroke="rgba(218,126,1,0.8862745098039215)" d="M22 35h1" />
        <Path stroke="rgba(224,135,3,0.9450980392156862)" d="M23 35h1" />
        <Path stroke="rgba(228,144,4,0.9803921568627451)" d="M24 35h1" />
        <Path stroke="rgba(233,147,6,0.9921568627450981)" d="M25 35h2" />
        <Path stroke="rgba(232,146,5,0.9803921568627451)" d="M27 35h1" />
        <Path stroke="rgba(229,141,4,0.9529411764705882)" d="M28 35h1" />
        <Path stroke="rgba(222,132,2,0.9019607843137255)" d="M29 35h1" />
        <Path stroke="rgba(212,122,1,0.8196078431372549)" d="M30 35h1" />
        <Path stroke="rgba(214,119,2,0.5607843137254902)" d="M31 35h1" />
        <Path stroke="rgba(232,141,0,0.2196078431372549)" d="M32 35h1" />
        <Path stroke="rgba(50,73,112,0.6941176470588235)" d="M60 35h1" />
        <Path stroke="rgba(50,73,112,0.796078431372549)" d="M61 35h1" />
        <Path stroke="rgba(48,72,111,0.8352941176470589)" d="M62 35h1" />
        <Path stroke="rgba(48,74,111,0.8274509803921568)" d="M63 35h1" />
        <Path stroke="rgba(49,75,113,0.38823529411764707)" d="M66 35h1" />
        <Path stroke="rgba(42,85,85,0.023529411764705882)" d="M68 35h1" />
        <Path stroke="rgba(255,255,0,0.00392156862745098)" d="M20 36h1" />
        <Path stroke="rgba(234,146,0,0.19215686274509805)" d="M21 36h1" />
        <Path stroke="rgba(217,125,0,0.4235294117647059)" d="M22 36h1" />
        <Path stroke="rgba(213,120,2,0.6)" d="M23 36h1" />
        <Path stroke="rgba(212,119,1,0.7137254901960784)" d="M24 36h1" />
        <Path stroke="rgba(213,123,1,0.7647058823529411)" d="M25 36h1" />
        <Path stroke="rgba(213,121,1,0.7686274509803922)" d="M26 36h1" />
        <Path stroke="rgba(212,120,1,0.7254901960784313)" d="M27 36h1" />
        <Path stroke="rgba(212,120,2,0.6235294117647059)" d="M28 36h1" />
        <Path stroke="rgba(218,123,0,0.4627450980392157)" d="M29 36h1" />
        <Path stroke="rgba(231,138,0,0.24705882352941178)" d="M30 36h1" />
        <Path stroke="rgba(47,71,113,0.16862745098039217)" d="M61 36h1" />
        <Path stroke="rgba(44,72,111,0.1803921568627451)" d="M62 36h1" />
        <Path stroke="rgba(45,74,113,0.17647058823529413)" d="M63 36h1" />
        <Path stroke="rgba(54,74,114,0.14901960784313725)" d="M64 36h1" />
        <Path stroke="rgba(42,85,106,0.047058823529411764)" d="M66 36h1" />
        <Path stroke="rgba(255,153,0,0.0392156862745098)" d="M23 37h1" />
        <Path stroke="rgba(246,149,0,0.11372549019607843)" d="M24 37h1" />
        <Path stroke="rgba(237,146,0,0.16470588235294117)" d="M25 37h1" />
        <Path stroke="rgba(237,142,0,0.16862745098039217)" d="M26 37h1" />
        <Path stroke="rgba(239,148,0,0.12156862745098039)" d="M27 37h1" />
        <Path stroke="rgba(235,157,0,0.050980392156862744)" d="M28 37h1" />
      </Svg>
    </View>
  );
};

export default AppLogo;
