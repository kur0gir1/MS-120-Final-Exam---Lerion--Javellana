// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

const productsData = generateRandomData(5, 0, 20);

// BAR CHART
const barChartOptions = {
  series: [
    {
      data: productsData,
      name: 'Products',
    },
  ],
  chart: {
    type: 'bar',
    background: 'transparent',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  title: {
    text: 'Column Graph',
    align: 'center',
    style: {
      color: '#f5f7ff',
    },
  },
  colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  stroke: {
    colors: ['transparent'],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  xaxis: {
    categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
    title: {
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      show: true,
      color: '#55596e',
    },
    axisTicks: {
      show: true,
      color: '#55596e',
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: {
    title: {
      text: 'Count',
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

function generateRandomData(length, min, max) {
  const data = [];
  for (let i = 0; i < length; i++) {
    data.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return data;
}

// Random data for "Purchase Orders" series
const purchaseOrdersData = generateRandomData(7, 0, 150); // Assuming 7 data points for each series

// Random data for "Sales Orders" series
const salesOrdersData = generateRandomData(7, 0, 100);

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Purchase Orders',
      data: purchaseOrdersData,
    },
    {
      name: 'Sales Orders',
      data: salesOrdersData,
    },
  ],
  title: {
    text: 'Line Chart',
    align: 'center',
    style: {
      color: '#f5f7ff',
    },
  },
  chart: {
    type: 'area',
    background: 'transparent',
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#00ab57', '#d50000'],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: 'vertical',
    },
    type: 'gradient',
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  markers: {
    size: 6,
    strokeColors: '#1b2635',
    strokeWidth: 3,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();

function generateRandomData(length, min, max) {
  const data = [];
  for (let i = 0; i < length; i++) {
    data.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return data;
}

// PIE CHART
const pieChartOptions = {
  series: generateRandomData(5, 0, 100), // Generate 5 random numbers between 0 and 100
  chart: {
    type: 'pie',
    background: 'transparent',
    height: 350,
  },
  labels: ['Rent', 'Utilities', 'Salaries', 'Marketing', 'Miscellaneous'], // Example category labels
  colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  title: {
    text: 'Pie Chart',
    align: 'center',
    style: {
      color: '#f5f7ff',
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
};

const pieChart = new ApexCharts(
  document.querySelector('#pie-chart'),
  pieChartOptions
);
pieChart.render();

function generateRandomProductivityData(length, min, max) {
  const data = [];
  for (let i = 0; i < length; i++) {
    data.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return data;
}

const productivityData = generateRandomData(6, 0, 100); // Generate random productivity data for Monday to Saturday

// Horizontal Bar Chart Options for Productivity Rate
const productivityBarChartOptions = {
  series: [{
    data: productivityData,
    name: 'Productivity Rate',
  }],
  chart: {
    type: 'bar', // Change chart type to horizontal bar
    background: 'transparent',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  colors: ['#e81416', '#ffa500', '#faeb36', '#79c314', '#487de7', '#70369d'], // Fix the typo here
  plotOptions: {
    bar: {
      horizontal: true, // Set the bars to be horizontal
      distributed: true,
      borderRadius: 4,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  title: {
    text: 'Bar Graph',
    align: 'center',
    style: {
      color: '#f5f7ff',
    },
  },
  grid: {
    borderColor: '#55596e',
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  stroke: {
    colors: ['transparent'],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  xaxis: {
    title: {
      text: 'Productivity Rate (%)',
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      show: true,
      color: '#55596e',
    },
    axisTicks: {
      show: true,
      color: '#55596e',
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: {
    categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // Update categories to Monday to Saturday
    title: {
      text: 'Days of the Week',
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
};

// Render the horizontal bar chart for productivity rate
const productivityBarChart = new ApexCharts(
  document.querySelector('#prod-chart'),
  productivityBarChartOptions
);
productivityBarChart.render();

function generateRandomStockData(numDays, startPrice) {
  const stockData = [];
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - numDays);

  for (let i = 0; i < numDays; i++) {
    const open = startPrice + Math.random() * 10 - 5;
    const close = open + Math.random() * 10 - 5;
    const high = Math.max(open, close) + Math.random() * 5;
    const low = Math.min(open, close) - Math.random() * 5;

    stockData.push({
      x: new Date(currentDate),
      y: [open.toFixed(2), high.toFixed(2), low.toFixed(2), close.toFixed(2)],
    });

    // Move to the next day
    currentDate.setDate(currentDate.getDate() + 1);
    startPrice = close; // Next day starts at today's close
  }

  return stockData;
}

const stockData = generateRandomStockData(30, 6600); // Generate data for 30 days

// Stock Chart Options
const stockChartOptions = {
  series: [{
    data: stockData,
  }],
  chart: {
    type: 'candlestick',
    height: 350,
    background: 'transparent',
    toolbar: {
      show: false, // Hide controls
    },
  },
  xaxis: {
    type: 'datetime',
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: {
    title: {
      text: 'Price',
      style: {
        color: '#f5f7ff',
      },
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  grid: {
    borderColor: '#55596e',
  },
  title: {
    text: 'Candlestick Chart',
    align: 'center',
    style: {
      color: '#f5f7ff',
    },
  },
  tooltip: {
    theme: 'dark',
  },
};

// Render the stock chart
const stockChart = new ApexCharts(
  document.querySelector('#stock-chart'),
  stockChartOptions
);
stockChart.render();