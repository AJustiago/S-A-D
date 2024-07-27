    export const getRecentUserData = () => {
    return {
      labels: ['User A', 'User B', 'User C', 'User D', 'User E'],
      datasets: [
        {
          label: 'Recently Visited Users',
          data: [5, 10, 7, 8, 6],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  };
  
  export const getDailyVisitData = () => {
    return {
      labels: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th'],
      datasets: [
        {
          label: 'Daily User Visits',
          data: [120, 150, 180, 200, 170, 190, 220],
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
        },
      ],
    };
  };
  
  export const getEarthquakeData = () => {
    return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Monthly Earthquake Count',
          data: [15, 10, 12, 18, 16, 14],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  };
  