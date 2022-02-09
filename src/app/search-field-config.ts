export interface SearchField {
  id: string;
  label: string;
  symbol: string;
  value: string;
}

export const searchFieldConfig = [
  {
    id: 'fName',
    label: 'First name',
    symbol: '\\',
    value: '',
  },
  {
    id: 'lName',
    label: 'Last name',
    symbol: '@',
    value: '',
  },
  {
    id: 'chartNo',
    label: 'Chart no',
    symbol: '#',
    value: '',
  },
  {
    id: 'address',
    label: 'Address 1',
    symbol: '$',
    value: '',
  },
];
