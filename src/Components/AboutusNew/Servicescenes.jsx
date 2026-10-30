import React from "react";

/* Original glass-style illustrations, one per service.
   Colours come from CSS variables (--sl-accent, --sl-accent-2) so re-theming is a two-line change in the CSS. */

/* shared gradients: rendered once, referenced by every scene */
export function SceneDefs() {
  const v = (name, op) => ({ stopColor: `var(${name})`, stopOpacity: op });
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="svs-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" style={v("--sl-accent-2", 0.5)} />
          <stop offset="0.45" style={v("--sl-accent", 0.28)} />
          <stop offset="1" style={v("--sl-accent", 0)} />
        </radialGradient>
        <radialGradient id="svs-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#000" stopOpacity="0.75" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="svs-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.2" />
          <stop offset="0.55" stopColor="#fff" stopOpacity="0.06" />
          <stop offset="1" style={v("--sl-accent", 0.2)} />
        </linearGradient>
        <linearGradient id="svs-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.75" />
          <stop offset="0.5" style={v("--sl-accent", 0.3)} />
          <stop offset="1" stopColor="#fff" stopOpacity="0.38" />
        </linearGradient>
        <linearGradient id="svs-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={v("--sl-accent", 1)} />
          <stop offset="1" style={v("--sl-accent-2", 1)} />
        </linearGradient>
        <linearGradient id="svs-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={v("--sl-accent", 0.5)} />
          <stop offset="1" style={v("--sl-accent", 0)} />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ---------- building blocks ---------- */
const Glass = ({ w, h, r = 18, children }) => (
  <g>
    <rect width={w} height={h} rx={r} className="svs-glass" />
    <rect width={w} height={h} rx={r} className="svs-edge" />
    <path d={`M${r + 4} 1.2H${w - r - 4}`} className="svs-shine" />
    {children}
  </g>
);
const Float = ({ d = 0, children }) => (
  <g className="svs-float" style={{ animationDelay: `${d}s` }}>
    {children}
  </g>
);
const Bar = ({ x, y, w, h = 8, dim }) => <rect x={x} y={y} width={w} height={h} rx={h / 2} className={dim ? "svs-bar dim" : "svs-bar"} />;
const Backdrop = () => (
  <>
    <ellipse cx="300" cy="285" rx="255" ry="215" fill="url(#svs-glow)" />
    <ellipse cx="300" cy="452" rx="205" ry="26" fill="url(#svs-shadow)" />
    <ellipse cx="300" cy="446" rx="168" ry="17" className="svs-rim" />
  </>
);
const Chip = ({ x, y, w, label, icon, d = 0 }) => (
  <g transform={`translate(${x} ${y})`}>
    <Float d={d}>
      <Glass w={w} h={32} r={16}>
        {icon}
        <text x={icon ? w / 2 + 8 : w / 2} y="21" textAnchor="middle" className="svs-text" fontSize="13">
          {label}
        </text>
      </Glass>
    </Float>
  </g>
);
const Check = ({ x = 18, y = 16 }) => (
  <g transform={`translate(${x} ${y})`}>
    <circle r="8" className="svs-acc" />
    <path d="M-3.6 .2l2.6 2.7 4.8-5.2" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </g>
);
const Cursor = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    <Float d={-1}>
      <path d="M0 0v26l7-7 6 13 6-3-6-13h10z" fill="#fff" stroke="#0b0b13" strokeWidth="1.5" strokeLinejoin="round" />
    </Float>
  </g>
);
const Star = ({ cx, cy, r }) => {
  const pts = Array.from({ length: 10 }, (_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    const rr = i % 2 ? r * 0.45 : r;
    return `${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
  return <polygon points={pts} className="svs-star" />;
};
const Svg = ({ children }) => (
  <svg viewBox="0 0 600 520" className="svs__art" aria-hidden="true" focusable="false">
    <Backdrop />
    {children}
  </svg>
);

/* ---------- 1. Website design: browser + phone + palette ---------- */
export const WebsiteScene = () => (
  <Svg>
    <g transform="translate(396 104) rotate(5)">
      <Float d={-2}>
        <Glass w={128} h={250} r={24}>
          <rect x="44" y="11" width="40" height="6" rx="3" className="svs-bar dim" />
          <rect x="10" y="32" width="108" height="72" rx="12" className="svs-grad" />
          <circle cx="92" cy="54" r="15" className="svs-white-a" />
          <Bar x={10} y={118} w={100} />
          <Bar x={10} y={134} w={72} dim />
          <rect x="10" y="158" width="108" height="24" rx="12" className="svs-acc" />
          <rect x="10" y="196" width="50" height="42" rx="10" className="svs-tile" />
          <rect x="68" y="196" width="50" height="42" rx="10" className="svs-tile" />
        </Glass>
      </Float>
    </g>
    <g transform="translate(78 142)">
      <Float>
        <Glass w={316} h={232} r={18}>
          <circle cx="22" cy="21" r="4.5" className="svs-bar" />
          <circle cx="38" cy="21" r="4.5" className="svs-bar" />
          <circle cx="54" cy="21" r="4.5" className="svs-bar" />
          <rect x="88" y="12" width="150" height="17" rx="8.5" className="svs-bar dim" />
          <path d="M0 42H316" className="svs-line" />
          <rect x="16" y="56" width="284" height="90" rx="12" className="svs-grad" />
          <circle cx="262" cy="98" r="34" className="svs-white-a" />
          <circle cx="236" cy="118" r="22" className="svs-white-a" />
          <rect x="34" y="74" width="124" height="13" rx="6.5" fill="#fff" />
          <rect x="34" y="95" width="172" height="7" rx="3.5" className="svs-white-b" />
          <rect x="34" y="108" width="132" height="7" rx="3.5" className="svs-white-b" />
          <rect x="34" y="124" width="72" height="16" rx="8" fill="#fff" />
          {[16, 114, 212].map((x, i) => (
            <g key={x}>
              <rect x={x} y="160" width="88" height="56" rx="10" className="svs-tile" />
              <circle cx={x + 18} cy="178" r="7" className={i === 1 ? "svs-acc2" : "svs-acc"} />
              <Bar x={x + 12} y={194} w={60} h={6} dim />
              <Bar x={x + 12} y={205} w={38} h={6} dim />
            </g>
          ))}
        </Glass>
      </Float>
    </g>
    <Chip x={60} y={96} w={116} label="Responsive" d={-3} />
    <g transform="translate(70 392)">
      <Float d={-4}>
        <Glass w={150} h={46} r={23}>
          <circle cx="30" cy="23" r="11" className="svs-acc" />
          <circle cx="64" cy="23" r="11" className="svs-acc2" />
          <circle cx="98" cy="23" r="11" fill="#fff" fillOpacity=".9" />
          <circle cx="124" cy="23" r="4" className="svs-bar dim" />
        </Glass>
      </Float>
    </g>
    <Cursor x={286} y={318} />
  </Svg>
);

/* ---------- 2. Web development: code editor + build + terminal ---------- */
const codeRows = [
  [0, [[56, "c1"], [80, "c3"], [46, "c2"]]],
  [1, [[70, "c4"], [92, "c2"]]],
  [1, [[58, "c4"], [66, "c1"]]],
  [1, [[84, "c3"], [50, "c4"]]],
  [0, [[26, "c3"]]],
  [0, [[40, "c1"], [24, "c3"], [60, "c2"]]],
  [1, [[96, "c4"]]],
];
export const DevScene = () => (
  <Svg>
    <g transform="translate(78 116)">
      <Float>
        <Glass w={350} h={258} r={18}>
          <circle cx="22" cy="21" r="4.5" className="svs-bar" />
          <circle cx="38" cy="21" r="4.5" className="svs-bar" />
          <circle cx="54" cy="21" r="4.5" className="svs-bar" />
          <rect x="84" y="9" width="92" height="26" rx="9" className="svs-tile" />
          <text x="130" y="26" textAnchor="middle" className="svs-mono" fontSize="12">
            site.jsx
          </text>
          <path d="M0 42H350" className="svs-line" />
          {codeRows.map(([indent, parts], i) => {
            let x = 52 + indent * 22;
            return (
              <g key={i}>
                <rect x="20" y={62 + i * 26} width="12" height="6" rx="3" className="svs-bar dim" />
                {parts.map(([w, c], j) => {
                  const el = <rect key={j} x={x} y={61 + i * 26} width={w} height="9" rx="4.5" className={`svs-code ${c}`} />;
                  x += w + 8;
                  return el;
                })}
              </g>
            );
          })}
        </Glass>
      </Float>
    </g>
    <g transform="translate(402 76)">
      <Float d={-2}>
        <circle cx="40" cy="40" r="42" className="svs-grad" />
        <circle cx="40" cy="40" r="42" className="svs-edge" />
        <text x="40" y="49" textAnchor="middle" className="svs-mono" fontSize="26" fontWeight="700" fill="#fff">
          {"</>"}
        </text>
      </Float>
    </g>
    <g transform="translate(372 316)">
      <Float d={-1}>
        <Glass w={172} h={92} r={14}>
          <text x="14" y="28" className="svs-mono" fontSize="12" fill="#fff" fillOpacity=".85">
            $ npm run build
          </text>
          <rect x="14" y="44" width="144" height="8" rx="4" className="svs-bar dim" />
          <rect x="14" y="44" width="104" height="8" rx="4" className="svs-grad" />
          <text x="14" y="76" className="svs-mono" fontSize="11" fill="#fff" fillOpacity=".5">
            compiled successfully
          </text>
        </Glass>
      </Float>
    </g>
    <g transform="translate(110 350)">
      <Float d={-3}>
        <Glass w={196} h={44} r={22}>
          <Check x={26} y={22} />
          <text x="46" y="27" className="svs-text" fontSize="14">
            Build successful
          </text>
        </Glass>
      </Float>
    </g>
    <Chip x={58} y={94} w={70} label="API" d={-4} />
  </Svg>
);

/* ---------- 3. E-commerce: product card, cart, order placed ---------- */
export const EcomScene = () => (
  <Svg>
    <g transform="translate(70 168) rotate(-8)">
      <Float d={-3}>
        <Glass w={118} h={150} r={16}>
          <rect x="10" y="10" width="98" height="70" rx="10" className="svs-acc2" fillOpacity=".55" />
          <Bar x={10} y={94} w={78} h={7} dim />
          <rect x="10" y="110" width="44" height="14" rx="7" className="svs-white-a" />
        </Glass>
      </Float>
    </g>
    <g transform="translate(436 150) rotate(7)">
      <Float d={-1}>
        <Glass w={118} h={150} r={16}>
          <rect x="10" y="10" width="98" height="70" rx="10" className="svs-acc" fillOpacity=".55" />
          <Bar x={10} y={94} w={78} h={7} dim />
          <rect x="10" y="110" width="44" height="14" rx="7" className="svs-white-a" />
        </Glass>
      </Float>
    </g>
    <g transform="translate(190 92)">
      <Float>
        <Glass w={222} h={312} r={22}>
          <rect x="14" y="14" width="194" height="156" rx="15" className="svs-grad" />
          <circle cx="160" cy="48" r="46" className="svs-white-a" />
          <g transform="translate(111 94)">
            <path d="M-30 -14h60l-6 52h-48z" fill="#fff" fillOpacity=".92" />
            <path d="M-14 -14v-8a14 14 0 0 1 28 0v8" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
          </g>
          <rect x="26" y="26" width="54" height="25" rx="12.5" fill="#fff" />
          <text x="53" y="43" textAnchor="middle" className="svs-text" fontSize="13" style={{ fill: "var(--sl-accent)" }}>
            -30%
          </text>
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} cx={30 + i * 17} cy={196} r={7} />
          ))}
          <Bar x={14} y={216} w={150} h={9} />
          <Bar x={14} y={232} w={96} h={7} dim />
          <rect x="14" y="252" width="194" height="40" rx="20" className="svs-grad" />
          <text x="111" y="277" textAnchor="middle" className="svs-text" fontSize="15">
            Add to Cart
          </text>
        </Glass>
      </Float>
    </g>
    <g transform="translate(444 86)">
      <Float d={-2}>
        <circle cx="34" cy="34" r="34" className="svs-glass" />
        <circle cx="34" cy="34" r="34" className="svs-edge" />
        <path d="M20 22h6l5 20h20l4-14H28" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="33" cy="49" r="3.4" fill="#fff" />
        <circle cx="48" cy="49" r="3.4" fill="#fff" />
        <circle cx="54" cy="12" r="12" className="svs-acc2" />
        <text x="54" y="17" textAnchor="middle" className="svs-text" fontSize="13">
          3
        </text>
      </Float>
    </g>
    <g transform="translate(396 372)">
      <Float d={-4}>
        <Glass w={170} h={44} r={22}>
          <Check x={26} y={22} />
          <text x="46" y="27" className="svs-text" fontSize="14">
            Order placed
          </text>
        </Glass>
      </Float>
    </g>
  </Svg>
);

/* ---------- 4. Web applications: dashboard ---------- */
export const AppScene = () => (
  <Svg>
    <g transform="translate(66 112)">
      <Float>
        <Glass w={430} h={286} r={20}>
          <rect width="64" height="286" rx="20" fill="#fff" fillOpacity=".05" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x="16" y={26 + i * 40} width="32" height="24" rx="8" className={i === 0 ? "svs-grad" : "svs-tile"} />
          ))}
          <rect x="80" y="18" width="130" height="18" rx="9" className="svs-bar dim" />
          {[
            [80, "svs-acc"],
            [190, "svs-acc2"],
            [300, "svs-acc"],
          ].map(([x, c], i) => (
            <g key={x}>
              <rect x={x} y="50" width="102" height="58" rx="11" className="svs-tile" />
              <Bar x={x + 12} y={62} w={36} h={6} dim />
              <rect x={x + 12} y={78} width="54" height="14" rx="7" className={c} fillOpacity={i === 1 ? 0.9 : 1} />
            </g>
          ))}
          <rect x="80" y="122" width="236" height="148" rx="12" className="svs-tile" />
          <path d="M96 250C124 232 140 246 168 218S212 182 238 192S288 150 300 138V258H96Z" fill="url(#svs-area)" />
          <path d="M96 250C124 232 140 246 168 218S212 182 238 192S288 150 300 138" fill="none" className="svs-stroke" strokeWidth="3.4" strokeLinecap="round" />
          <circle cx="300" cy="138" r="6.5" fill="#fff" className="svs-dot" />
          <g transform="translate(366 192)">
            <circle r="46" fill="none" stroke="#fff" strokeOpacity=".1" strokeWidth="15" />
            <circle r="46" fill="none" className="svs-stroke" strokeWidth="15" strokeDasharray="160 130" transform="rotate(-90)" strokeLinecap="round" />
            <circle r="46" fill="none" className="svs-stroke2" strokeWidth="15" strokeDasharray="62 228" transform="rotate(72)" strokeLinecap="round" />
          </g>
        </Glass>
      </Float>
    </g>
    <g transform="translate(402 82)">
      <Float d={-2}>
        <Glass w={112} h={34} r={17}>
          <circle className="svs-pulse" cx="22" cy="17" r="5" fill="#4ade80" />
          <text x="40" y="22" className="svs-text" fontSize="13">
            Live data
          </text>
        </Glass>
      </Float>
    </g>
  </Svg>
);

/* ---------- 5. Design services: wireframe -> finished UI, swatches ---------- */
export const DesignScene = () => (
  <Svg>
    <g transform="translate(64 152)">
      <Float d={-3}>
        <rect width="172" height="248" rx="16" fill="none" className="svs-dash" />
        <rect x="14" y="14" width="144" height="86" rx="9" fill="none" className="svs-dash" />
        <path d="M14 14l144 86M158 14L14 100" className="svs-dash" />
        <rect x="14" y="116" width="108" height="9" rx="4.5" fill="none" className="svs-dash" />
        <rect x="14" y="134" width="144" height="9" rx="4.5" fill="none" className="svs-dash" />
        <rect x="14" y="182" width="90" height="28" rx="14" fill="none" className="svs-dash" />
      </Float>
    </g>
    <path d="M246 268h42" className="svs-stroke" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M280 256l12 12-12 12" fill="none" className="svs-stroke" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <g transform="translate(300 102)">
      <Float>
        <Glass w={190} h={298} r={22}>
          <rect x="14" y="14" width="162" height="104" rx="14" className="svs-grad" />
          <circle cx="44" cy="46" r="17" fill="#fff" fillOpacity=".92" />
          <rect x="70" y="36" width="78" height="10" rx="5" fill="#fff" />
          <rect x="70" y="53" width="52" height="7" rx="3.5" className="svs-white-b" />
          <circle cx="146" cy="108" r="40" className="svs-white-a" />
          <Bar x={14} y={138} w={124} h={10} />
          <Bar x={14} y={158} w={96} h={8} dim />
          <rect x="14" y="190" width="162" height="38" rx="19" className="svs-grad" />
          <rect x="62" y="205" width="66" height="8" rx="4" fill="#fff" />
          <rect x="14" y="246" width="38" height="28" rx="9" className="svs-acc" fillOpacity=".4" />
          <rect x="60" y="246" width="38" height="28" rx="9" className="svs-acc2" fillOpacity=".4" />
          <rect x="106" y="246" width="38" height="28" rx="9" className="svs-tile" />
        </Glass>
      </Float>
    </g>
    <g className="svs-float" style={{ animationDelay: "-2s" }}>
      {["svs-acc", "svs-acc2", "svs-white", "svs-lilac"].map((c, i) => (
        <circle key={c} cx="526" cy={140 + i * 46} r="17" className={c} stroke="#fff" strokeOpacity=".7" strokeWidth="2" />
      ))}
    </g>
    <g transform="translate(470 330)">
      <Float d={-4}>
        <Glass w={84} h={84} r={20}>
          <text x="42" y="58" textAnchor="middle" fontSize="38" fontWeight="700" fill="#fff" style={{ fontFamily: "Georgia, serif" }}>
            Aa
          </text>
        </Glass>
      </Float>
    </g>
    <g transform="translate(70 436)">
      <path d="M0 0C70 -70 150 70 230 -4" fill="none" className="svs-stroke" strokeWidth="3" strokeLinecap="round" />
      <rect x="-7" y="-7" width="14" height="14" rx="3" className="svs-handle" />
      <rect x="223" y="-11" width="14" height="14" rx="3" className="svs-handle" />
    </g>
    <Cursor x={452} y={286} />
  </Svg>
);

export const SCENES = [WebsiteScene, DevScene, EcomScene, AppScene, DesignScene];