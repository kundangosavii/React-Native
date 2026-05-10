export type TaskStatus = 'Done' | 'In Progress' | "Pending"

export type TaskIcon = {
    name : string,
    backgroundColor : string
}

export type Task = {
    id : number,
    category : string,
    title : string,
    time : string,
    status : TaskStatus,
    icon : TaskIcon
}

export const Tasks : Task[] = [
     {
    id: 1,
    category: 'Personal',
    title: 'Grocery shopping',
    time: '09:00 AM',
    status: 'Pending',
    icon: { name: 'cart', backgroundColor: '#FF6B84' },
  },
  {
    id: 2,
    category: 'Health',
    title: 'Morning run',
    time: '07:00 AM',
    status: 'Done',
    icon: { name: 'walk', backgroundColor: '#7BD389' },
  },
  {
    id: 3,
    category: 'Work',
    title: 'Team standup meeting',
    time: '11:30 AM',
    status: 'In Progress',
    icon: { name: 'people', backgroundColor: '#FFD166' },
  },
  {
    id: 4,
    category: 'Work',
    title: 'Fix login bug #42',
    time: '02:15 PM',
    status: 'Pending',
    icon: { name: 'hammer', backgroundColor: '#FF9F1C' },
  },
  {
    id: 5,
    category: 'Personal',
    title: 'Read 30 pages',
    time: '08:00 PM',
    status: 'Pending',
    icon: { name: 'book', backgroundColor: '#8EA6FF' },
  },
  {
    id: 6,
    category: 'Home',
    title: 'Call plumber',
    time: '04:00 PM',
    status: 'Done',
    icon: { name: 'call', backgroundColor: '#B28DFF' },
  },
]

export const FILTER_OPTIONS = [
  "All",
  "Pending",
  "Done",
  "In Progress"
] as const

export type FilterOptions = (typeof FILTER_OPTIONS)[number]
