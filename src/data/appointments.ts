//C:\HD\project\src\data\appointments.ts
export interface Appointment {
  id: string;
  title: string;
  doctor?: string;
  time: string;
  date: string;
  day: number;
  month: string;
  year: number;
  icon: string;
  color?: string;
  status?: 'upcoming' | 'completed' | 'canceled';
  dayOfWeek?: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
}

export interface DailyAppointment {
  day: string;
  appointments: Appointment[];
}

export const calendarAppointments = [
  {
    id: '1',
    title: 'Dentist',
    doctor: 'Dr. Cameron Williamson',
    time: '09:00-11:00',
    date: 'October 25, 2021',
    day: 25,
    month: 'October',
    year: 2021,
    icon: 'tooth',
    color: '#4361ee',
    dayOfWeek: 'Monday' as const
  },
  {
    id: '2',
    title: 'Physiotherapy Appointment',
    doctor: 'Dr. Kevin Dones',
    time: '11:00-12:00',
    date: 'October 29, 2021',
    day: 29,
    month: 'October',
    year: 2021,
    icon: 'dumbbell',
    color: '#4361ee',
    dayOfWeek: 'Friday' as const
  }
];

export const calendarTimes = [
  { day: 25, times: ['10:00', '11:00', '12:00'] },
  { day: 26, times: ['08:00', '09:00', '10:00'] },
  { day: 27, times: ['12:00', '13:00'] },
  { day: 28, times: ['10:00', '11:00'] },
  { day: 29, times: ['14:00', '16:00'] },
  { day: 30, times: ['12:00', '15:00'] },
  { day: 31, times: ['09:00', '10:00', '11:00'] }
];

export const upcomingSchedule: DailyAppointment[] = [
  {
    day: 'Thursday',
    appointments: [
      {
        id: '3',
        title: 'Health checkup complete',
        time: '11:00 AM',
        date: 'October 28, 2021',
        day: 28,
        month: 'October',
        year: 2021,
        icon: 'clipboard-check',
        status: 'completed'
      },
      {
        id: '4',
        title: 'Ophthalmologist',
        time: '14:00 PM',
        date: 'October 28, 2021',
        day: 28,
        month: 'October',
        year: 2021,
        icon: 'eye',
        status: 'upcoming'
      }
    ]
  },
  {
    day: 'Saturday',
    appointments: [
      {
        id: '5',
        title: 'Cardiologist',
        time: '12:00 AM',
        date: 'October 30, 2021',
        day: 30,
        month: 'October',
        year: 2021,
        icon: 'heart',
        status: 'upcoming'
      },
      {
        id: '6',
        title: 'Neurologist',
        time: '16:00 PM',
        date: 'October 30, 2021',
        day: 30,
        month: 'October',
        year: 2021,
        icon: 'brain',
        status: 'upcoming'
      }
    ]
  }
];

export const activityData = [
  { day: 'Mon', appointments: [8, 5, 3] },
  { day: 'Tue', appointments: [6, 4, 5] },
  { day: 'Wed', appointments: [9, 6, 4] },
  { day: 'Thu', appointments: [5, 3, 7] },
  { day: 'Fri', appointments: [7, 8, 3] },
  { day: 'Sat', appointments: [4, 6, 2] },
  { day: 'Sun', appointments: [3, 5, 4] }
];