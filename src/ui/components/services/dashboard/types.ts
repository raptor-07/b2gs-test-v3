export interface DashboardFragment {
  image: string;
  gridPosition: {
    rowStart: number;
    rowEnd: number;
    colStart: number;
    colSpan: number;
  };
}

export interface DashboardConfig {
  fragments: DashboardFragment[];
}

export const dashboardConfig: DashboardConfig = {
  fragments: [
    {
      image: "/assets/dashboard/vendor.png",
      gridPosition: {
        rowStart: 1,
        rowEnd: 2,
        colStart: 1,
        colSpan: 7,
      },
    },
    {
      image: "/assets/dashboard/pickup-delivery.png",
      gridPosition: {
        rowStart: 1,
        rowEnd: 2,
        colStart: 8,
        colSpan: 5,
      },
    },
    {
      image: "/assets/dashboard/material-breakdown.png",
      gridPosition: {
        rowStart: 2,
        rowEnd: 3,
        colStart: 1,
        colSpan: 12,
      },
    },
    {
      image: "/assets/dashboard/emissions-analysis.png",
      gridPosition: {
        rowStart: 3,
        rowEnd: 4,
        colStart: 1,
        colSpan: 12,
      },
    },
  ],
};
