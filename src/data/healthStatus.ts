export interface HealthIndicator {
  id: string;
  name: string;
  status: 'healthy' | 'warning' | 'critical';
  date: string;
  position: {
    top: string;
    left: string;
  };
  color: string;
}

export const healthIndicators: HealthIndicator[] = [
  {
    id: 'heart',
    name: '💓Healthy Heart',
    status: 'healthy',
    date: '25 Oct 2021',
    position: {
      top: '35%',
      left: '50%'
    },
    color: '#4cd964'
  },
  {
    id: 'lungs',
    name: 'Lungs',
    status: 'critical',
    date: '26 Oct 2021',
    position: {
      top: '82%',
      left: '48%'
    },
    color: '#ff3b30'
  },
  {
    id: 'teeth',
    name: 'Teeth',
    status: 'warning',
    date: '26 Oct 2021',
    position: {
      top: '15%',
      left: '47%'
    },
    color: '#ffcc00'
  },
  {
    id: 'leg',
    name: '🦵Healthy Leg',
    status: 'healthy',
    date: '26 Oct 2021',
    position: {
      top: '70%',
      left: '47%'
    },
    color: '#4cd964'
  },
  {
    id: 'bone',
    name: 'Bone',
    status: 'critical',
    date: '26 Oct 2021',
    position: {
      top: '40%',
      left: '47%'
    },
    color: '#ff3b30'
  }
];

export const healthDetails = [
  {
    id: 'lungs',
    name: 'Lungs',
    date: '26 Oct 2021',
    status: 'critical',
    progress: 30,
    color: '#8B0000'
  },
  {
    id: 'teeth',
    name: 'Teeth',
    date: '26 Oct 2021',
    status: 'warning',
    progress: 75,
    color: '#87CEEB'
  },
  {
    id: 'bone',
    name: 'Bone',
    date: '26 Oct 2021',
    status: 'critical',
    progress: 40,
    color: '#FFA500'
  }
];