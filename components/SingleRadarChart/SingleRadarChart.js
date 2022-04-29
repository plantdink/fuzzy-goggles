import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import {
  displayPercentage,
  millisecondsToSeconds,
  humanReadableNumber,
} from '../../lib/displayNumbers';
import { titleCase } from '../../lib/displayStrings';

export default function SingleRadarChart({ weapon, avgWeapon }) {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  // this sets the default size for the whole chart & tooltips, doesn't affect the individual point labels
  ChartJS.defaults.font.size = 14;

  // set empty containers so chart can be used with 1 weapon, or to compare 2 weapons
  let options = {};
  let weaponDataComputed = [];
  let chartData = [];
  let backgroundColorComputed = 'rgba(255, 109, 16, 0.6)';
  let borderColorComputed = 'rgba(255, 109, 16, 1)';

  const chartLabels = [
    'Accuracy',
    'Stability',
    'Magazine Size',
    'RPM',
    'Optimal Range',
    'Max Range',
    'Mod Slots',
    'Reload Speed',
    'Reload from empty',
    'Damage (World Tier 5)',
    'Damage (Level 40)',
  ];

  options = {
    responsive: true,
    scales: {
      r: {
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      // legend: {
      //   position: 'top',
      // },
      tooltip: {
        callbacks: {
          label(context) {
            const weaponDataSet = [
              `${displayPercentage(weapon.accuracy)}%`,
              `${displayPercentage(weapon.stability)}%`,
              weapon.magazineSize,
              weapon.rpm,
              `${weapon.optimalRange}m`,
              `${weapon.maxRange}m`,
              weapon.modSlots,
              `${millisecondsToSeconds(weapon.reloadSpeed)} sec`,
              `${millisecondsToSeconds(weapon.reloadSpeedFromEmpty)} sec`,
              `${humanReadableNumber(weapon.damageWT5) || 0}`,
              `${humanReadableNumber(weapon.damageLevel40)}`,
            ];

            let labelValues = [];

            if (context.dataset.label === weapon.class)
              labelValues = weaponDataSet;
            const label = labelValues[context.dataIndex];
            return label;
          },
          beforeTitle(context) {
            return context[0].dataset.label;
          },
        },
      },
    },
  };

  weaponDataComputed = [
    (weapon.accuracy / weapon.accuracy) * 100,
    (weapon.stability / weapon.stability) * 100,
    (weapon.magazineSize / weapon.magazineSize) * 100,
    (weapon.rpm / weapon.rpm) * 100,
    (weapon.optimalRange / weapon.optimalRange) * 100,
    (weapon.maxRange / weapon.maxRange) * 100,
    (weapon.modSlots / weapon.modSlots) * 100,
    (weapon.reloadSpeed / weapon.reloadSpeed) * 100,
    (weapon.reloadSpeedFromEmpty / weapon.reloadSpeedFromEmpty) * 100,
    (weapon.damageWT5 / weapon.damageWT5) * 100,
    (weapon.damageLevel40 / weapon.damageLevel40) * 100,
  ];

  chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: `${weapon.class}`,
        data: weaponDataComputed,
        backgroundColor: backgroundColorComputed,
        borderColor: borderColorComputed,
        borderWidth: 2,
      },
    ],
  };

  //  ------------ Dual chart options below ------------------
  if (avgWeapon !== null) {
    options = {
      responsive: true,
      scales: {
        r: {
          ticks: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label(context) {
              const weaponDataSet = [
                `${displayPercentage(weapon.accuracy)}%`,
                `${displayPercentage(weapon.stability)}%`,
                weapon.magazineSize,
                weapon.rpm,
                `${weapon.optimalRange}m`,
                `${weapon.maxRange}m`,
                weapon.modSlots,
                `${millisecondsToSeconds(weapon.reloadSpeed)} sec`,
                `${millisecondsToSeconds(weapon.reloadSpeedFromEmpty)} sec`,
                `${humanReadableNumber(weapon.damageWt5) || 0}`,
                `${humanReadableNumber(weapon.damageLevel40)}`,
              ];

              const AverageWeaponDataSet = [
                `${displayPercentage(avgWeapon.accuracy)}%`,
                `${displayPercentage(avgWeapon.stability)}%`,
                avgWeapon.magazineSize,
                avgWeapon.rpm,
                `${avgWeapon.optimalRange}m`,
                `${avgWeapon.maxRange}m`,
                avgWeapon.modSlots,
                `${millisecondsToSeconds(avgWeapon.reloadSpeed)} sec`,
                `${millisecondsToSeconds(avgWeapon.reloadSpeedFromEmpty)} sec`,
                `${humanReadableNumber(avgWeapon.damageWT5)}`,
                `${humanReadableNumber(avgWeapon.damageLevel40)}`,
              ];

              let labelValues = [];

              if (context.dataset.label === weapon.model)
                labelValues = weaponDataSet;
              if (
                context.dataset.label ===
                `Average ${titleCase(avgWeapon.class)}`
              )
                labelValues = AverageWeaponDataSet;
              const label = labelValues[context.dataIndex];
              return label;
            },
            beforeTitle(context) {
              return context[0].dataset.label;
            },
          },
        },
      },
    };

    weaponDataComputed = [
      (weapon.accuracy / avgWeapon.accuracy) * 100,
      (weapon.stability / avgWeapon.stability) * 100,
      (weapon.magazineSize / avgWeapon.magazineSize) * 100,
      (weapon.rpm / avgWeapon.rpm) * 100,
      (weapon.optimalRange / avgWeapon.optimalRange) * 100,
      (weapon.maxRange / avgWeapon.maxRange) * 100,
      (weapon.modSlots / avgWeapon.modSlots) * 100,
      (weapon.reloadSpeed / avgWeapon.reloadSpeed) * 100,
      (weapon.reloadSpeedFromEmpty / avgWeapon.reloadSpeedFromEmpty) * 100,
      (weapon.damageWt5 / avgWeapon.damageWT5) * 100,
      (weapon.damageLevel40 / avgWeapon.damageLevel40) * 100,
    ];

    const averageWeaponDataComputed = [
      (avgWeapon.accuracy / avgWeapon.accuracy) * 100,
      (avgWeapon.stability / avgWeapon.stability) * 100,
      (avgWeapon.magazineSize / avgWeapon.magazineSize) * 100,
      (avgWeapon.rpm / avgWeapon.rpm) * 100,
      (avgWeapon.optimalRange / avgWeapon.optimalRange) * 100,
      (avgWeapon.maxRange / avgWeapon.maxRange) * 100,
      (avgWeapon.modSlots / avgWeapon.modSlots) * 100,
      (avgWeapon.reloadSpeed / avgWeapon.reloadSpeed) * 100,
      (avgWeapon.reloadSpeedFromEmpty / avgWeapon.reloadSpeedFromEmpty) * 100,
      (avgWeapon.damageWT5 / avgWeapon.damageWT5) * 100,
      (avgWeapon.damageLevel40 / avgWeapon.damageLevel40) * 100,
    ];

    // change the background colour of the chart dataset fill depending on weapon type
    backgroundColorComputed = 'rgba(255, 109, 16, 0.6)';
    if (weapon.isExotic === 'YES')
      backgroundColorComputed = 'rgba(255, 111, 54, 0.6)';
    if (weapon.isNamed === 'YES')
      backgroundColorComputed = 'rgba(234, 162, 19, 0.6';

    // change the colour of the chart dataset border line depending on weapon type
    borderColorComputed = 'rgba(255, 109, 16, 1)';
    if (weapon.isExotic === 'YES')
      borderColorComputed = 'rgba(255, 111, 54, 1)';
    if (weapon.isNamed === 'YES') borderColorComputed = 'rgba(234, 162, 19, 1)';

    chartData = {
      labels: chartLabels,
      datasets: [
        {
          label: `${weapon.model}`,
          data: weaponDataComputed,
          backgroundColor: backgroundColorComputed,
          borderColor: borderColorComputed,
          borderWidth: 2,
        },
        {
          label: `Average ${titleCase(avgWeapon.class)}`,
          data: averageWeaponDataComputed,
          backgroundColor: 'rgba(58, 58, 58, 0.3)',
          borderColor: 'rgba(58, 58, 58, 0.8)',
          borderWidth: 1,
        },
      ],
    };
  }

  return (
    <>
      <div className="single-weapon__details">
        <div className="single-weapon__title-bar">
          {weapon.__typename === 'AverageWeapon' && (
            <h3 className="single-weapon__subheading">Stats Visualisation</h3>
          )}
          {weapon.__typename === 'Weapon' && (
            <h3 className="single-weapon__subheading">Stats Comparison</h3>
          )}
        </div>
        <Radar data={chartData} options={options} />
      </div>
    </>
  );
}
