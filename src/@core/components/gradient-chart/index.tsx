'use client';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
import { useTheme } from '@mui/material';
import React, { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';

type Props = {
  categories: string[];
  series: ApexAxisChartSeries;
};

const GradientChart = ({ categories, series }: Props) => {
  const theme = useTheme();
  const options: ApexCharts.ApexOptions = useMemo(
    () => ({
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'monotoneCubic',
        colors: [theme.palette.text.blue, theme.palette.primary.main],
        width: 3,
      },
      legend: {
        show: false, // Disables the legend completely
      },
      fill: {
        type: 'gradient', // Enable gradient fill
        gradient: {
          shade: 'light', // Gradient shade (can be 'dark' or 'light')
          type: 'vertical', // Gradient type ('horizontal' or 'vertical')
          colors: [theme.palette.text.blue, theme.palette.primary.main],
          gradientToColors: [
            hexToRGBA(theme.palette.text.blue, 0.1),
            hexToRGBA(theme.palette.primary.main, 0.1),
          ], // End color (e.g., Tomato Red)
          stops: [0, 100], // Gradient stops
        },
      },
      grid: {
        yaxis: {
          lines: {
            show: false, // Hides horizontal grid lines
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      xaxis: {
        type: 'datetime',
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
          datetimeUTC: false,
        },
        categories: categories,
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    }),
    [categories],
  );

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="area" height={220} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default GradientChart;
