import React from "react";
import { Debug } from "../Primitives/index";

export const BaseUnit = ({ symbol, ...rest }) => <p>here</p>;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.setState({
      loading: false
    });
  }

  render() {
    if (this.state.loading) return "loading";
    else return <h1>Welcome</h1>;
  }
}

export const Docs = props => (
  <React.Fragment>
    <BaseUnit />
    <table className="wikitable">
      <caption
        style={{
          fontSize: "larger",
          fontWeight: "bold"
        }}
      >
        SI base units
      </caption>
      <tbody>
        <tr>
          <th>Name</th>
          <th style={{ textAlign: "center" }}>Symbol</th>
          <th>Measure</th>
          <th>
            Current (2005) formal definition<sup
              id="cite_ref-sibro_1-0"
              className="reference"
            >
              <a href="#citenotesibro1" className="anch-link">
                [1]
              </a>
            </sup>
          </th>
          <th>Historical&nbsp;origin / justification</th>
          <th>
            <a
              href="/en/Dimensional_analysis"
              title="Dimensional analysis"
              className="int-link"
            >
              Dimension<br />symbol
            </a>
          </th>
        </tr>
        <tr>
          <td>
            <a href="/en/Metre" title="" className="int-link">
              metre
            </a>
          </td>
          <td style={{ textAlign: "center" }}>m</td>
          <td>
            <a href="/en/Length" title="Length" className="int-link">
              length
            </a>
          </td>
          <td>
            "The metre is the length of the path travelled by light in vacuum
            during a time interval of 1&nbsp;/&nbsp;<span className="nowrap">
              <span style={{ display: "none" }} className="sortkey">
                7008299792458000000♠
              </span>299<span style={{ marginLeft: ".25em" }}>792</span>
              <span style={{ marginLeft: ".25em" }}>458</span>
            </span>{" "}
            of a second."<br />
            <i>17th CGPM (1983, Resolution 1, CR, 97)</i>
          </td>
          <td>
            1&nbsp;/&nbsp;<span className="nowrap">
              <span style={{ display: "none" }} className="sortkey" />10<span
                style={{ marginLeft: ".25em" }}
              >
                000
              </span>
              <span style={{ marginLeft: ".25em" }}>000</span>
            </span>{" "}
            of the distance from the{" "}
            <a href="/en/Earth" title="Earth" className="int-link">
              Earth
            </a>'s equator to the North Pole measured on the circumference
            through{" "}
            <a href="/en/Paris" title="Paris" className="int-link">
              Paris
            </a>.
          </td>
          <td style={{ textAlign: "center" }}>L</td>
        </tr>
        <tr>
          <td>
            <a href="/en/Kilogram" title="Kilogram" className="int-link">
              kilogram
            </a>
          </td>
          <td style={{ textAlign: "center" }}>kg</td>
          <td>
            <a href="/en/Mass" title="Mass" className="int-link">
              mass
            </a>
          </td>
          <td>
            "The kilogram is the unit of mass; it is equal to the mass of the
            international prototype of the kilogram."<br />
            <i>3rd CGPM (1901, CR, 70)</i>
          </td>
          <td>
            The mass of one{" "}
            <a href="/en/Litre" title="Litre" className="int-link">
              litre
            </a>{" "}
            of{" "}
            <a href="/en/Water" title="Water" className="int-link">
              water
            </a>{" "}
            at the temperature of melting ice. A litre is one thousandth of a
            cubic metre.
          </td>
          <td style={{ textAlign: "center" }}>M</td>
        </tr>
        <tr>
          <td>
            <a href="/en/Second" title="Second" className="int-link">
              second
            </a>
          </td>
          <td style={{ textAlign: "center" }}>s</td>
          <td>
            <a href="/en/Time" title="Time" className="int-link">
              time
            </a>
          </td>
          <td>
            "The second is the duration of{" "}
            <span className="nowrap">
              <span style={{ display: "none" }} className="sortkey">
                7009919263177000000♠
              </span>9<span style={{ marginLeft: ".25em" }}>192</span>
              <span style={{ marginLeft: ".25em" }}>631</span>
              <span style={{ marginLeft: ".25em" }}>770</span>
            </span>{" "}
            periods of the radiation corresponding to the transition between the
            two hyperfine levels of the ground state of the caesium 133 atom."<br />
            <i>13th CGPM (1967/68, Resolution 1; CR, 103)</i>
            <br />"This definition refers to a caesium atom at rest at a
            temperature of 0&nbsp;K."<br />
            <i>(Added by CIPM in 1997)</i>
          </td>
          <td>
            The day is divided in 24 hours, each hour divided in 60 minutes,
            each minute divided in 60 seconds.<br />A second is
            1&nbsp;/&nbsp;(24&nbsp;×&nbsp;60&nbsp;×&nbsp;60) of the{" "}
            <a href="/en/Day" title="Day" className="int-link">
              day
            </a>.
          </td>
          <td style={{ textAlign: "center" }}>T</td>
        </tr>
        <tr>
          <td>
            <a href="/en/Ampere" title="Ampere" className="int-link">
              ampere
            </a>
          </td>
          <td style={{ textAlign: "center" }}>A</td>
          <td>
            <a
              href="/en/Electric_current"
              title="Electric current"
              className="int-link"
            >
              electric current
            </a>
          </td>
          <td>
            "The ampere is that constant current which, if maintained in two
            straight parallel conductors of infinite length, of negligible
            circular cross-section, and placed 1 metre apart in vacuum, would
            produce between these conductors a force equal to{" "}
            <span className="nowrap">
              <span style={{ display: "none" }} className="sortkey">
                6993200000000000000♠
              </span>2<span
                style={{ marginLeft: "0.25em", marginRight: "0.15em" }}
              >
                ×
              </span>10<sup>−7</sup>
            </span>{" "}
            <a
              href="/en/Newton_(unit)"
              title="Newton (unit)"
              className="int-link"
            >
              newton
            </a>{" "}
            per metre of length."<br />
            <i>9th CGPM (1948)</i>
          </td>
          <td>
            The original "International Ampere" was defined electrochemically as
            the current required to deposit 1.118 milligrams of silver per
            second from a solution of{" "}
            <a
              href="/en/Silver_nitrate"
              title="Silver nitrate"
              className="int-link"
            >
              silver nitrate
            </a>. Compared to the SI ampere, the difference is 0.015%.
          </td>
          <td style={{ textAlign: "center" }}>I</td>
        </tr>
        <tr>
          <td>
            <a href="/en/Kelvin" title="Kelvin" className="int-link">
              kelvin
            </a>
          </td>
          <td style={{ textAlign: "center" }}>K</td>
          <td>
            <a
              href="/en/Thermodynamic_temperature"
              title="Thermodynamic temperature"
              className="int-link"
            >
              thermodynamic temperature
            </a>
          </td>
          <td>
            "The kelvin, unit of thermodynamic temperature, is the fraction
            1&nbsp;/&nbsp;<span className="nowrap">
              <span style={{ display: "none" }} className="sortkey">
                7002273160000000000♠
              </span>273.16
            </span>{" "}
            of the thermodynamic temperature of the{" "}
            <a
              href="/en/Triple_point"
              title="Triple point"
              className="int-link"
            >
              triple point
            </a>{" "}
            of water."<br />
            <i>13th CGPM (1967/68, Resolution 4; CR, 104)</i>
            <br />"This definition refers to water having the isotopic
            composition defined exactly by the following amount of substance
            ratios: <span className="nowrap">0.000 155 76</span> mole of{" "}
            <sup>2</sup>H per mole of <sup>1</sup>H,{" "}
            <span className="nowrap">0.000 379 9</span> mole of <sup>17</sup>O
            per mole of <sup>16</sup>O, and{" "}
            <span className="nowrap">0.002 005 2</span> mole of <sup>18</sup>O
            per mole of <sup>16</sup>O."<br />
            <i>(Added by CIPM in 2005)</i>
          </td>
          <td>
            The{" "}
            <a
              href="/en/Celsius_scale"
              className="mw-redirect int-link"
              title="Celsius scale"
            >
              Celsius scale
            </a>: the Kelvin scale uses the degree Celsius for its unit
            increment, but is a thermodynamic scale (0&nbsp;K is{" "}
            <a
              href="/en/Absolute_zero"
              title="Absolute zero"
              className="int-link"
            >
              absolute zero
            </a>).
          </td>
          <td style={{ textAlign: "center" }}>Θ</td>
        </tr>
        <tr>
          <td>
            <a href="/en/Mole_(unit)" title="Mole (unit)" className="int-link">
              mole
            </a>
          </td>
          <td style={{ textAlign: "center" }}>mol</td>
          <td>
            <a
              href="/en/Amount_of_substance"
              title="Amount of substance"
              className="int-link"
            >
              amount of substance
            </a>
          </td>
          <td>
            "1. The mole is the amount of substance of a system which contains
            as many elementary entities as there are atoms in 0.012 kilogram of
            carbon 12; its symbol is 'mol'.<br />
            <p>
              2. When the mole is used, the elementary entities must be
              specified and may be atoms, molecules, ions, electrons, other
              particles, or specified groups of such particles."<br />
              <i>14th CGPM (1971, Resolution 3; CR, 78)</i>
              <br />"In this definition, it is understood that unbound atoms of
              carbon 12, at rest and in their ground state, are referred to."<br />
              <i>(Added by CIPM in 1980)</i>
            </p>
          </td>
          <td>
            <a
              href="/en/Atomic_weight"
              className="mw-redirect int-link"
              title="Atomic weight"
            >
              Atomic weight
            </a>{" "}
            or{" "}
            <a
              href="/en/Molecular_weight"
              className="mw-redirect int-link"
              title="Molecular weight"
            >
              molecular weight
            </a>{" "}
            divided by the{" "}
            <a
              href="/en/Molar_mass_constant"
              title="Molar mass constant"
              className="int-link"
            >
              molar mass constant
            </a>, 1&nbsp;g/mol.
          </td>
          <td style={{ textAlign: "center" }}>N</td>
        </tr>
        <tr>
          <td>
            <a href="/en/Candela" title="Candela" className="int-link">
              candela
            </a>
          </td>
          <td style={{ textAlign: "center" }}>cd</td>
          <td>
            <a
              href="/en/Luminous_intensity"
              title="Luminous intensity"
              className="int-link"
            >
              luminous intensity
            </a>
          </td>
          <td>
            "The candela is the luminous intensity, in a given direction, of a
            source that emits monochromatic radiation of frequency{" "}
            <span className="nowrap">
              <span style={{ display: "none" }} className="sortkey">
                7014540000000000000♠
              </span>540<span
                style={{ marginLeft: "0.25em", marginRight: "0.15em" }}
              >
                ×
              </span>10<sup>12</sup>
            </span>{" "}
            hertz and that has a radiant intensity in that direction of
            1&nbsp;/&nbsp;683 watt per{" "}
            <a href="/en/Steradian" title="Steradian" className="int-link">
              steradian
            </a>."<br />
            <i>16th CGPM (1979, Resolution 3; CR, 100)</i>
          </td>
          <td>
            The{" "}
            <a href="/en/Candlepower" title="Candlepower" className="int-link">
              candlepower
            </a>, which is based on the light emitted from a burning candle of
            standard properties.
          </td>
          <td style={{ textAlign: "center" }}>J</td>
        </tr>
        <tr>
          <th>Name</th>
          <th>Symbol</th>
          <th>Measure</th>
          <th>
            Current (2005) formal definition<sup
              id="cite_ref-sibro_1-1"
              className="reference"
            >
              <a href="#citenotesibro1" className="anch-link">
                [1]
              </a>
            </sup>
          </th>
          <th>Historical&nbsp;origin / justification</th>
          <th>
            <a
              href="/en/Dimensional_analysis"
              title="Dimensional analysis"
              className="int-link"
            >
              Dimension<br />symbol
            </a>
          </th>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
